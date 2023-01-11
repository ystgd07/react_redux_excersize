import { useState } from "react";
import {
  GoChevronRight,
  GoChevronDown,
  GoArrowSmallLeft,
} from "react-icons/go";

function ExpandablePanel({ header, children }) {
  const [expanded, setExpended] = useState(false);
  const handleClick = () => {
    setExpended((e) => !e);
  };
  return (
    <div className="mb-2 border rounded">
      <div className="flex items-center justify-between p-2 ">
        <div className="flex flex-row items-center justify-between">
          {header}
        </div>
        <div onClick={handleClick} className="cursor-pointer">
          {expanded ? <GoChevronDown /> : <GoArrowSmallLeft />}
        </div>
        {expanded && <div className="p-2 border-t">{children}</div>}
      </div>
      <div className="p-2 border-t">{children}</div>
    </div>
  );
}

export default ExpandablePanel;
