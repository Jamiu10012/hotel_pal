import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
const DetailCardTree = ({ getData }) => {
  const [isclick, setIsclick] = useState(false);

  const handleClick = () => {
    setIsclick(true);
  };
  const handleClickClose = () => {
    setIsclick(false);
  };
  return (
    <div className="mw-bx max-w-sm mb-2 p-6 bg-[#f2afc5] border border-gray-200 rounded-lg shadow ">
      <div className="sel-top-cont flex items-center justify-between w-full">
        <h5 className="mb-2 text-xl font-medium tracking-tight text-white">
          Address
        </h5>
        {isclick ? (
          <FaChevronUp
            className="text-white cursor-pointer"
            onClick={handleClickClose}
          />
        ) : (
          <FaChevronDown
            className="text-white cursor-pointer"
            onClick={handleClick}
          />
        )}
      </div>

      {isclick && (
        <>
          <p className="mb-3 font-normal text-black">
            Address: {getData?.area} Street
          </p>
          <p className="mb-3 font-normal text-black">
            County:{getData?.county} County
          </p>
          <p className="mb-3 font-normal text-black">City: {getData?.city}</p>
          <p className="mb-3 font-normal text-black">State: {getData?.state}</p>
          <p className="mb-3 font-normal text-black">
            Postcode: {getData?.postal_code}
          </p>
          <p className="mb-3 font-normal text-black">
            Country: {getData?.country}
          </p>
        </>
      )}
    </div>
  );
};

export default DetailCardTree;
