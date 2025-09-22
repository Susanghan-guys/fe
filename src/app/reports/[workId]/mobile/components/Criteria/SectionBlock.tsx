import React from "react";

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
  return (
    <div className="mt-[52px]">
      <div className="text-blue-main font-T04-SB">{heading}</div>
      <div className="text-gray-700 font-B01-M mt-[18px] whitespace-pre-line">
        {description}
      </div>

      <div className="w-full flex flex-row mt-9 items-stretch">
        <div className="self-stretch py-[7.5px]">
          <div className="h-full border-l-3 border-gray-700" />
        </div>

        <div className="flex flex-col items-start ml-[29px] gap-6">
          {items.map((item) => (
            <section key={item.id} className="mt-[7.5px]">
              <div className="flex items-start gap-3">
                <span className="text-gray-800 font-B01-SB">{item.id}.</span>

                <div className="flex flex-col">
                  <span className="font-B01-SB text-gray-800">
                    {item.title}
                  </span>
                  <p className="font-B02-M text-gray-500 mt-1 whitespace-pre-line">
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
