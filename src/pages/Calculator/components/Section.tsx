import React, { useEffect, useState } from "react";
import ArrowDown from "../../../assets/icons/ArrowDown";

interface ISectionProps {
  title: string;
  content: React.ReactElement;
  isClickble?: boolean;
}

function Section({ title, content, isClickble = true }: ISectionProps) {
  const [clicked, setClicked] = useState<boolean>(false);
  let className = "bg-[#ececec] transition-all ".concat(
    clicked ? "max-h-[500px] h-max p-4" : "max-h-0 overflow-hidden"
  );

  if (!isClickble) {
    className = "";
  }

  return (
    <section className="w-full">
      <div
        className={`flex flex-row gap-2.5 w-full items-center bg-[#d9d9d9] rounded p-4 ${
          isClickble && "hover:cursor-pointer"
        }`}
        onClick={() => isClickble && setClicked(!clicked)}
      >
        {isClickble && (
          <ArrowDown
            width={20}
            height={20}
            className={"transition-transform ".concat(
              clicked ? "rotate-180" : ""
            )}
          />
        )}
        <h3 className="text-xl">{title}</h3>
      </div>
      <div className={className}>{content}</div>
    </section>
  );
}

export default Section;
