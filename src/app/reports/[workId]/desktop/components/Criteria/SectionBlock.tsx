"use client";
import React from "react";
import { useIsMobile } from "@/hooks/useIsMobile";

type Item = {
  id: number;
  title: string;
  desc: string;
};

type SectionProps = {
  heading: string;
  description: string;
  items: Item[];
};

const SectionBlock = ({ heading, description, items }: SectionProps) => {
  const isMobile = useIsMobile();

  return (
    <div className={isMobile ? "mt-6" : "mt-[52px]"}>
      <div
        className={
          isMobile ? "text-blue-main font-B02-SB" : "text-blue-main font-T04-SB"
        }
      >
        {heading}
      </div>

      <div
        className={`text-gray-700  mt-[14px] ${
          isMobile
            ? "font-B03-M mt-[14px]"
            : "font-B01-M whitespace-pre-line mt-[18px]"
        }`}
      >
        {description}
      </div>

      <div
        className={`w-full flex flex-row items-stretch ${
          isMobile ? "mt-6" : "mt-9"
        }`}
      >
        <div className="self-stretch py-[7.5px]">
          <div
            className={`h-full ${
              isMobile ? "border-l-[1.6px]" : "border-l-3"
            } border-gray-700`}
          />
        </div>

        <div
          className={`flex flex-col items-start ${
            isMobile ? "gap-[18px] ml-[14px]" : "gap-6 ml-[29px]"
          }`}
        >
          {items.map((item) => (
            <section
              key={item.id}
              className={isMobile ? "mt-[11px]" : "mt-[7.5px]"}
            >
              <div
                className={`flex items-start  ${isMobile ? "gap-1" : "gap-3"}`}
              >
                <span
                  className={
                    isMobile
                      ? "text-gray-800 font-B03-SB"
                      : "text-gray-800 font-B01-SB"
                  }
                >
                  {item.id}.
                </span>

                <div className="flex flex-col">
                  <span
                    className={
                      isMobile
                        ? "font-B03-SB text-gray-800"
                        : "font-B01-SB text-gray-800"
                    }
                  >
                    {item.title}
                  </span>
                  <p
                    className={
                      isMobile
                        ? "font-B03-M text-gray-500 mt-1"
                        : "font-B02-M text-gray-500 mt-1 whitespace-pre-line"
                    }
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionBlock;
