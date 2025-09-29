"use client";
import TextInput from "@/components/common/TextInput";
import { useIsMobile } from "@/hooks/useIsMobile";
import { useSubmitStore } from "@/store/useSubmitStore";
import React, { useEffect, useState, useRef } from "react";
import { trackGAEvent, GA_EVENT } from "@/libs/ga";

const YCCWorkInfo = () => {
  const [title, setTitle] = useState("");
  const isMobile = useIsMobile();
  const titleEventSent = useRef(false);

  const setYccWorkInfoFilled = useSubmitStore(
    (state) => state.setYccWorkInfoFilled
  );
  const setField = useSubmitStore((state) => state.setField);

  useEffect(() => {
    setYccWorkInfoFilled(title.length > 0);
    setField("title", title);
  }, [title, setField, setYccWorkInfoFilled]);

  return (
    <div
      className={`w-full ${
        isMobile ? "px-4 mt-[80px]" : "px-[325px] mt-[134px]"
      }`}
    >
      <div className="text-gray-900 font-T02-B">
        작품 정보 <span className="text-blue-main">*</span>
      </div>

      <div
        className={`${
          isMobile ? "mt-[30px]" : "mt-[50px]"
        } flex flex-col gap-[10px]`}
      >
        <div className="text-gray-800 font-B01-M">작품 제목</div>
        <TextInput
          placeholder="작품의 제목을 입력하세요."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onFocus={() => {
            titleEventSent.current = false;
          }}
          onBlur={() => {
            if (title.trim() && !titleEventSent.current) {
              trackGAEvent(GA_EVENT.InputTitleYcc, {
                screen: "AP"
              });
              titleEventSent.current = true;
            }
          }}
          className="w-full"
        />
      </div>
    </div>
  );
};

export default YCCWorkInfo;
