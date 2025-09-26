"use client";
import React, { useRef } from "react";
import TextInput from "@/components/common/TextInput";
import { useSubmitStore } from "@/store/useSubmitStore";
import { useIsMobile } from "@/hooks/useIsMobile";
import { trackGAEvent, GA_EVENT } from "@/libs/ga";

const VideoLink = () => {
  const youtubeUrl = useSubmitStore((s) => s.youtubeUrl);
  const setField = useSubmitStore((s) => s.setField);
  const category = useSubmitStore((s) => s.category);
  const isMobile = useIsMobile();
  const videoLinkEventSent = useRef(false);

  return (
    <div
      className={`w-full ${isMobile ? "px-4 mt-12" : "px-[325px] mt-[130px]"}`}
    >
      <div className="text-gray-900 font-T02-B mb-6 ">
        영상 링크 제출{" "}
        {category === "Film" ? (
          <span className="text-blue-main">*</span>
        ) : (
          <span className="text-gray-500 font-T02-SB">(선택)</span>
        )}
      </div>

      <TextInput
        placeholder="URL을 입력하세요."
        value={youtubeUrl}
        onChange={(e) => setField("youtubeUrl", e.target.value)}
        onFocus={() => {
          videoLinkEventSent.current = false;
        }}
        onBlur={() => {
          if (youtubeUrl.trim() && !videoLinkEventSent.current) {
            trackGAEvent(GA_EVENT.InputVideolinkDca, {
              screen: "AP"
            });
            videoLinkEventSent.current = true;
          }
        }}
        className="w-full h-[48px]"
      />
    </div>
  );
};

export default VideoLink;
