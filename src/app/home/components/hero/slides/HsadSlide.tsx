"use client";
import RoundButton from "@/components/common/RoundButton";
import { useRouter } from "next/navigation";
import { trackGAEvent, GA_EVENT } from "@/libs/ga";

function HsadSlide() {
  const router = useRouter();

  const handleapplicationClick = () => {
    trackGAEvent(GA_EVENT.ClickApply, {
      competition: "YCC",
      cta: "신청하러가기",
      screen: "HM",
    });
    router.push("/application");
  };
  return (
    <div
      className="w-full min-h-[400px] h-screen flex flex-col items-center justify-center bg-no-repeat bg-cover bg-center relative"
      style={{ backgroundImage: "url(/image/background/hsad-bg.png)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(0, 0, 0, 0.40) -11.42%, #000 104.99%)",
        }}
      />
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
        <img
          src="/image/logo/hsad.png"
          alt="hsad이미지"
          className="max-w-[180px] sm:max-w-none"
        />
        <h1 className="text-white text-center font-default text-[32px] sm:text-[50px] font-bold mt-8 sm:mt-[45.8px] mb-5 sm:mb-[30px] leading-[1.3]">
          제38회 HSAD
          <br />
          Young Creator&apos;s Competition
        </h1>
        <div className="text-center font-T04-SB text-gray-500 mb-10 sm:mb-[74px] text-base sm:text-lg">
          2025년 HSAD 영 크리에이터스 컴퍼티션
        </div>
        <RoundButton onClick={handleapplicationClick}>
          리포트 신청하기
        </RoundButton>
      </div>
    </div>
  );
}

export default HsadSlide;
