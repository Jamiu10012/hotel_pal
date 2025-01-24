import React from "react";
import { IoMdTime } from "react-icons/io";

const LatestPost = () => {
  return (
    <div className="mt-6 flex items-center gap-2 h-20">
      <div className="w-16 overflow-hidden rounded">
        <img
          className="object-cover rounded h-12 object-center"
          src="/images/hero-slide-01.webp"
          alt=""
        />
      </div>
      <div>
        <p className="font-semibold text-xs">
          Different between Dorm and Cabin
        </p>
        <div className="flex items-center gap-1 text-xs text-[#79745C]">
          April 21, 2015 ,{" "}
          <span>
            <IoMdTime className="text-[20px]" />
          </span>{" "}
          0
        </div>
      </div>
    </div>
  );
};

export default LatestPost;
