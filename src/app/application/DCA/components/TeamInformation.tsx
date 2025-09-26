"use client";
import TextInput from "@/components/common/TextInput";
import { useSubmitStore } from "@/store/useSubmitStore";
import React, { useEffect, useState, useRef } from "react";
import { DeleteIcon, HoverDelete, PlusIcon } from "../../../../../public";
import { useUserMe } from "@/hooks/queries/useUser";
import { useIsMobile } from "@/hooks/useIsMobile";
import { trackGAEvent, GA_EVENT } from "@/libs/ga";

interface TeamMember {
  name: string;
  email: string;
}

interface TeamInformationProps {
  mode: "dca" | "ycc";
}

const isValidEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const TeamInformation = ({ mode }: TeamInformationProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const isMobile = useIsMobile();

  const { data: userData } = useUserMe();

  const setTeamInfoFilled = useSubmitStore((s) => s.setTeamInfoFilled);
  const setYccTeamInfoFilled = useSubmitStore((s) => s.setYccTeamInfoFilled);
  const setField = useSubmitStore((s) => s.setField);
  const setIsWriting = useSubmitStore((s) => s.setIsWriting);

  const [applicantName, setApplicantName] = useState("");
  const [applicantEmail, setApplicantEmail] = useState("");
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [emailErrors, setEmailErrors] = useState<{ [key: string]: boolean }>(
    {}
  );

  // GA 이벤트 중복 방지를 위한 ref들
  const applicantNameEventSent = useRef(false);
  const applicantEmailEventSent = useRef(false);
  const addTeammateClickCount = useRef(0);
  const teammateNameEventsSent = useRef<{ [key: string]: boolean }>({});
  const teammateEmailEventsSent = useRef<{ [key: string]: boolean }>({});

  useEffect(() => {
    if (userData?.result) {
      if (!applicantName) setApplicantName(userData.result.name || "");
      if (!applicantEmail) setApplicantEmail(userData.result.email || "");
    }
  }, [userData, applicantName, applicantEmail]);

  useEffect(() => {
    const allMembers: TeamMember[] = [
      { name: applicantName, email: applicantEmail },
      ...teamMembers,
    ];
    if (mode === "dca") {
      setField("teamMembers", allMembers);
    } else {
      setField("members", allMembers);
    }
  }, [applicantName, applicantEmail, teamMembers, mode, setField]);

  useEffect(() => {
    const isApplicantValid =
      applicantName.trim() && isValidEmail(applicantEmail.trim());
    const areMembersValid = teamMembers.every(
      (m) => m.name.trim() && isValidEmail(m.email.trim())
    );
    const isValid = !!isApplicantValid && !!areMembersValid;

    if (mode === "dca") {
      setTeamInfoFilled(isValid);
    } else {
      setYccTeamInfoFilled(isValid);
    }
  }, [
    applicantName,
    applicantEmail,
    teamMembers,
    mode,
    setTeamInfoFilled,
    setYccTeamInfoFilled,
  ]);

  const handleAddMember = () => {
    if (teamMembers.length < 3) {
      setTeamMembers((prev) => [...prev, { name: "", email: "" }]);
      setIsWriting(true);

      // GA 이벤트: 팀원 추가 버튼 클릭
      addTeammateClickCount.current += 1;
      if (mode === "dca") {
        trackGAEvent(GA_EVENT.AddTeammateDca, {
          click_count: addTeammateClickCount.current,
          screen: "AP",
        });
      } else {
        trackGAEvent(GA_EVENT.AddTeammateYcc, {
          click_count: addTeammateClickCount.current,
          screen: "AP",
        });
      }
    }
  };

  const handleMemberChange = (
    index: number,
    field: keyof TeamMember,
    value: string
  ) => {
    const updated = [...teamMembers];
    updated[index][field] = value;
    setTeamMembers(updated);
    setIsWriting(true);

    if (field === "email") {
      setEmailErrors((prev) => ({
        ...prev,
        [`member-${index}`]: value ? !isValidEmail(value) : false,
      }));
    }
  };

  const handleRemoveMember = (index: number) => {
    setTeamMembers((prev) => prev.filter((_, i) => i !== index));
    setIsWriting(true);
  };

  const handleApplicantEmailChange = (value: string) => {
    setApplicantEmail(value);
    setIsWriting(true);
    setEmailErrors((prev) => ({
      ...prev,
      applicant: value ? !isValidEmail(value) : false,
    }));
  };

  return (
    <div
      className={`w-full ${isMobile ? "px-5 mt-16" : "px-[325px] mt-[134px]"}`}
    >
      <div
        className={`text-gray-900 ${isMobile ? "font-T04-SB" : "font-T02-B"}`}
      >
        팀원 정보<span className="text-blue-main">*</span>
      </div>
      <div className="mt-[14px] text-gray-300 font-B02-M">
        수상 리포트 제작이 완료되면 팀원들에게도 이메일로 리포트 코드를
        전달합니다.
      </div>

      <div className="mt-[50px] flex flex-col gap-5 sm:flex-row sm:gap-6">
        <div className="flex flex-col gap-[10px] w-full">
          <div className="text-gray-800 font-B01-M">신청자 이름</div>
          <TextInput
            placeholder="이름을 입력하세요."
            value={applicantName}
            onChange={(e) => {
              setApplicantName(e.target.value);
              setIsWriting(true);
            }}
            onFocus={() => {
              applicantNameEventSent.current = false;
            }}
            onBlur={() => {
              if (applicantName.trim() && !applicantNameEventSent.current) {
                if (mode === "dca") {
                  trackGAEvent(GA_EVENT.EditApplicantnameDca, {
                    screen: "AP",
                  });
                } else {
                  trackGAEvent(GA_EVENT.EditApplicantnameYcc, {
                    screen: "AP",
                  });
                }
                applicantNameEventSent.current = true;
              }
            }}
            className="w-full"
          />
        </div>

        <div className="flex flex-col gap-[10px] w-full">
          <div className="text-gray-800 font-B01-M">신청자 이메일</div>
          <TextInput
            placeholder="이메일을 입력하세요"
            value={applicantEmail}
            onChange={(e) => handleApplicantEmailChange(e.target.value)}
            onFocus={() => {
              applicantEmailEventSent.current = false;
            }}
            onBlur={() => {
              if (applicantEmail.trim() && !applicantEmailEventSent.current) {
                if (mode === "dca") {
                  trackGAEvent(GA_EVENT.EditApplicantemailDca, {
                    screen: "AP",
                  });
                } else {
                  trackGAEvent(GA_EVENT.EditApplicantemailYcc, {
                    screen: "AP",
                  });
                }
                applicantEmailEventSent.current = true;
              }
            }}
            className="w-full"
            error={emailErrors.applicant}
          />
          <div className="h-[20px]">
            {emailErrors.applicant && (
              <div className="text-orange-point font-C01-R">
                올바른 이메일 주소를 입력해주세요.
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="mt-[14px] space-y-6">
        {teamMembers.map((member, index) => (
          <div key={index}>
            {isMobile && (
              <div className="flex justify-between items-center mb-4">
                <div className="text-gray-900 font-B02-M">
                  팀원 {index + 1} 정보
                </div>

                <button
                  type="button"
                  onClick={() => handleRemoveMember(index)}
                  className="cursor-pointer"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  {isHovered ? <HoverDelete /> : <DeleteIcon />}
                </button>
              </div>
            )}

            <div className="mb-4">
              <div
                className={`text-gray-800 mb-2 ${
                  isMobile ? "font-B03-M" : "font-B01-M"
                }`}
              >
                이름
              </div>
              <TextInput
                placeholder="이름을 입력하세요."
                value={member.name}
                onChange={(e) =>
                  handleMemberChange(index, "name", e.target.value)
                }
                onFocus={() => {
                  teammateNameEventsSent.current[`member-${index}`] = false;
                }}
                onBlur={() => {
                  if (
                    member.name.trim() &&
                    !teammateNameEventsSent.current[`member-${index}`]
                  ) {
                    if (mode === "dca") {
                      trackGAEvent(GA_EVENT.InputTeammatenameDca, {
                        screen: "AP",
                      });
                    } else {
                      trackGAEvent(GA_EVENT.InputTeammatenameYcc, {
                        screen: "AP",
                      });
                    }
                    teammateNameEventsSent.current[`member-${index}`] = true;
                  }
                }}
                className="w-full"
              />
            </div>

            <div>
              <div
                className={`text-gray-800 mb-2 ${
                  isMobile ? "font-B03-M" : "font-B01-M"
                }`}
              >
                이메일
              </div>
              <div
                className={`flex items-center ${
                  isMobile ? "flex-col gap-2" : "flex-row gap-[19px]"
                }`}
              >
                <TextInput
                  placeholder="이메일을 입력하세요."
                  value={member.email}
                  onChange={(e) =>
                    handleMemberChange(index, "email", e.target.value)
                  }
                  onFocus={() => {
                    teammateEmailEventsSent.current[`member-${index}`] = false;
                  }}
                  onBlur={() => {
                    if (
                      member.email.trim() &&
                      !teammateEmailEventsSent.current[`member-${index}`]
                    ) {
                      if (mode === "dca") {
                        trackGAEvent(GA_EVENT.InputTeammateemailDca, {
                          screen: "AP",
                        });
                      } else {
                        trackGAEvent(GA_EVENT.InputTeammateemailYcc, {
                          screen: "AP",
                        });
                      }
                      teammateEmailEventsSent.current[`member-${index}`] = true;
                    }
                  }}
                  className="w-full"
                  error={emailErrors[`member-${index}`]}
                />
                {!isMobile && (
                  <button
                    type="button"
                    onClick={() => handleRemoveMember(index)}
                    className="cursor-pointer"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    {isHovered ? <HoverDelete /> : <DeleteIcon />}
                  </button>
                )}
              </div>

              {emailErrors[`member-${index}`] && (
                <div className="mt-2 text-orange-point font-C01-R">
                  올바른 이메일 주소를 입력해주세요.
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {teamMembers.length < 3 && (
        <div
          className={`${isMobile ? "mt-[30px] flex justify-end" : "mt-[56px]"}`}
        >
          <button
            onClick={handleAddMember}
            className="flex px-[22px] py-3 items-center gap-[10px] rounded-[10px] bg-gray-100 cursor-pointer hover:bg-gray-200"
          >
            <PlusIcon />
            <span className="text-gray-700 font-B02-SB"> 팀원 추가 </span>
          </button>
        </div>
      )}
    </div>
  );
};

export default TeamInformation;
