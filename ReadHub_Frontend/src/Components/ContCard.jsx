import React from "react";

const ContCard = ({
  fileName,
  page,
  totalPage,
  progress,
  onOpen,
  progPercent,
  continueRead,
}) => {
  const validProgress = Math.min(100, Math.max(0, progress));
  return (
    <div className="bg-white px-[16px] py-2 rounded-[10px] mb-8">
      <div className="flex justify-between mb-2">
        <div className="h-[136px] flex w-[110px] rounded-[10px] bg-primary justify-center xsm:w-[100px] xsm:h-[120px]">
          <img src="/note_stack.svg" alt="books" className="w-10" />
        </div>
        <div className="w-[210px] xsm:w-[185px] flex flex-col justify-evenly">
          <div>
            <p className="text-tittle_Medium text-black w- font-semibold">
              {fileName}
            </p>
          </div>
          <div>
            <span className="flex text-tittle_Small text-[#5f5f61] justify-between mb-3 font-medium">
              <p>Progress</p>
              <p>{progPercent}</p>
            </span>
            <span className="flex h-[7px] bg-[#e6e6e6] rounded-[12px] relative">
              <span
                className="h-[7px] bg-primary rounded-full transition-all duration-300 ease-out"
                style={{ width: `${validProgress}%` }}
              ></span>
            </span>
          </div>
          <div>
            <p className="text-[#5f5f61] xsm:text-[15px]">
              {"page " + page + " of " + totalPage}
            </p>
          </div>
        </div>
      </div>
      <div>
        <button
          onClick={onOpen}
          className="h-[46px] w-full rounded-[11px] bg-primary/56 text-primary font-semibold flex justify-center items-center"
        >
          <img src="/play_arrow.svg" alt="playicon" className="w-[24px]" />
          {continueRead}
        </button>
      </div>
    </div>
  );
};

export default ContCard;
