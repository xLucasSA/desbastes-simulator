import React, { useState } from "react";
import ArrowDown from "../../../assets/icons/ArrowDown";

interface ISectionProps {
  title: string;
  content: React.ReactElement;
}

function Section({ title, content }: ISectionProps) {
  const [clicked, setClicked] = useState<boolean>(false);

  return (
    <section className="w-full min-h-[calc((100vh_-_60px)_/_2)]">
      <div
        className="flex flex-row gap-2.5 w-full items-center bg-[#d9d9d9] rounded p-4 hover:cursor-pointer"
        onClick={() => setClicked(!clicked)}
      >
        <ArrowDown
          width={20}
          height={20}
          className={"transition-transform ".concat(
            clicked ? "rotate-180" : ""
          )}
        />
        <h3 className="text-xl">{title}</h3>
      </div>
      <div
        className={"bg-[#ececec] transition ".concat(
          clicked ? "max-h-[500px] h-max block" : "hidden max-h-0"
        )}
      >
        {content}
      </div>
    </section>
  );
}

export default Section;
