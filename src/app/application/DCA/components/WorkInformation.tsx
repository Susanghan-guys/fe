"use client";
import TextInput from "@/components/common/TextInput";
import { useSubmitStore } from "@/store/useSubmitStore";
import React, { useEffect, useState, useRef } from "react";
import DropDownInput from "@/components/common/DropDownInput";
import { useIsMobile } from "@/hooks/useIsMobile";
import { trackGAEvent, GA_EVENT } from "@/libs/ga";

const CATEGORY_OPTIONS = [
  "Visual",
  "Film",
  "Digital Contents",
  "Experience",
  "Outdoor Activation",
];

const BRAND_OPTIONS = [
  "빼빼로",
  "탐스",
  "크러시",
  "에어리즘",
  "롯데월드",
  "롯데자이언츠",
  "롯데리아",
  "넥센타이어",
  "SBI 저축은행 사이다뱅크",
];

const WorkInformation = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [number, setNumber] = useState("");

  const titleEventSent = useRef(false);
  const numberEventSent = useRef(false);

  const setWorkInfoFilled = useSubmitStore((s) => s.setWorkInfoFilled);
  const setField = useSubmitStore((s) => s.setField);
  const setIsWriting = useSubmitStore((s) => s.setIsWriting);
  const isMobile = useIsMobile();

  useEffect(() => {
    const isAllFilled =
      title.trim() && category.trim() && brand.trim() && number.trim();
    setWorkInfoFilled(!!isAllFilled);
  }, [title, category, brand, number, setWorkInfoFilled]);

  useEffect(() => {
    setField("title", title);
  }, [title, setField]);

  useEffect(() => {
    setField("category", category);
  }, [category, setField]);

  useEffect(() => {
    setField("brand", brand);
  }, [brand, setField]);

  useEffect(() => {
    setField("number", `P-${number}`);
  }, [number, setField]);

  return (
    <div
      className={`${isMobile ? "px-5 mt-16" : "px-[325px] mt-[134px]"} w-full`}
    >
      <div
        className={`text-gray-900 ${isMobile ? "font-T04-SB" : "font-T02-B"}`}
      >
        작품 정보 <span className="text-blue-main">*</span>
      </div>

      <div className="mt-[50px] flex flex-col gap-[10px]">
        <div className="text-gray-800 font-B01-M"> 작품 제목 </div>
        <TextInput
          placeholder="작품의 제목을 입력하세요."
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            setIsWriting(true);
          }}
          onFocus={() => {
            titleEventSent.current = false; // 다시 수정할 수 있도록 플래그 리셋
          }}
          onBlur={() => {
            if (title.trim() && !titleEventSent.current) {
              trackGAEvent(GA_EVENT.InputTitleDca, {
                screen: "AP"
              });
              titleEventSent.current = true;
            }
          }}
          className="w-full"
        />
      </div>

      <div
        className={`${
          isMobile ? "flex-col" : "flex-row"
        } flex gap-[30px] mt-11 w-full`}
      >
        <div className="flex flex-col gap-[10px] w-full">
          <div className="text-gray-800 font-B01-M"> 카테고리 </div>
          <DropDownInput
            value={category}
            onChange={(val) => {
              setCategory(val);
              setIsWriting(true);
              trackGAEvent(GA_EVENT.SelectCategoryDca, {
                screen: "AP"
              });
            }}
            placeholder="출품 카테고리를 선택하세요."
            options={CATEGORY_OPTIONS}
          />
        </div>

        <div className="flex flex-col gap-[10px] w-full">
          <div className="text-gray-800 font-B01-M"> 브랜드 </div>
          <DropDownInput
            value={brand}
            onChange={(val) => {
              setBrand(val);
              setIsWriting(true);
              trackGAEvent(GA_EVENT.SelectBrandDca, {
                screen: "AP"
              });
            }}
            placeholder="출품 브랜드를 선택하세요."
            options={BRAND_OPTIONS}
          />
        </div>
      </div>

      <div className="mt-11 flex flex-col gap-[10px] w-full">
        <div className="text-gray-800 font-B01-M"> 작품 접수번호 </div>
        <div className="relative w-full">
          <span className="absolute left-[18px] top-1/2 -translate-y-1/2 text-gray-900">
            P-
          </span>
          <TextInput
            placeholder="작품의 접수번호를 입력하세요."
            value={number}
            onChange={(e) => {
              setNumber(e.target.value);
              setIsWriting(true);
            }}
            onFocus={() => {
              numberEventSent.current = false; // 다시 수정할 수 있도록 플래그 리셋
            }}
            onBlur={() => {
              if (number.trim() && !numberEventSent.current) {
                trackGAEvent(GA_EVENT.InputApplycodeDca, {
                  screen: "AP"
                });
                numberEventSent.current = true;
              }
            }}
            className="pl-[40px] w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default WorkInformation;
