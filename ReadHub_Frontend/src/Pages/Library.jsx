import React from "react";
import ContCard from "../Components/ContCard";

const Library = () => {
  return (
    <div className="px-[16px] pt-[40px] overflow-hidden pb-15">
      <div className="flex justify-between mb-8 items-center">
        <p className="text-black text-tittle_Large">Library</p>
        <span className="flex w-[40px] h-[40px] rounded-[8.04] bg-white"></span>
      </div>

      <div className="bg-white h-[46px] w-full flex rounded-[11px] mb-4">
        <img src="/Variant3.svg" alt="search" className="w-[24px] mx-4" />
        <input
          type="text"
          placeholder="Search books..."
          className="outline-0 w-full"
        />
      </div>

      <div className="flex justify-between text-body_Small font-medium mb-4">
        <div className="h-[38px] w-[171px] border-1 rounded-[33px] border-[#4b6481] flex justify-center items-center">
          <img src="/Variant3c.svg" alt="icon" className="w-[24px]" />
          <p>Upload file</p>
        </div>
        <div className="h-[38px] w-[171px] border-1 rounded-[33px] border-[#4b6481] flex justify-center items-center">
          <img src="/Variant3b.svg" alt="icon" className="w-[24px]" />
          <p>Scan Cover</p>
        </div>
      </div>

      <div className="text-body_Small flex gap-4 w-full mb-8 overflow-scroll">
        <div className="flex justify-between w-200 gap-4">
          <div className="bg-white w-[91px] h-[38px] rounded-[33px] flex justify-center items-center">
            All books
          </div>

          <div className="bg-white text-tertiary w-[91px] h-[38px] rounded-[33px] flex justify-center items-center">
            Reading(2)
          </div>
          <div className="bg-white text-tertiary w-[91px] h-[38px] rounded-[33px] flex justify-center items-center">
            Completed(0)
          </div>

          <div className="bg-white w-[91px] h-[38px] rounded-[33px] flex justify-center items-center">
            All books
          </div>
        </div>
      </div>

      <div>
        <ContCard />
        <ContCard />
        <ContCard />
      </div>
    </div>
  );
};

export default Library;
