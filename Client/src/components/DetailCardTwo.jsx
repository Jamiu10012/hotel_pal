import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
const DetailCardTwo = ({ getData }) => {
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
          Features
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
          <p className="mb-3 font-normal text-black">Listing ID: 137</p>
          <p className="mb-3 font-normal text-black">
            Listing Size: 2,500 ft<sup>2</sup>
          </p>
          {/* <p className="mb-3 font-normal text-black">Rooms: {getData?.description</p> */}
          <p className="mb-3 font-normal text-black">
            Bedrooms: {getData?.bedrooms}
          </p>
          <p className="mb-3 font-normal text-black">
            Bathrooms: {getData?.bathrooms}
          </p>
          <p className="mb-3 font-normal text-black">
            Late Check-in: Before 11 PM
          </p>
          <p className="mb-3 font-normal text-black">
            Optional Services: {getData?.optional_service}
          </p>
          <p className="mb-3 font-normal text-black">
            Extra People: 1 extra bed for {getData?.currency}
            {getData?.extra_people}/night.
          </p>
          <p className="mb-3 font-normal text-black">
            Outdoor Facilities: {getData?.outdor_facilities}
          </p>
          <p className="mb-3 font-normal text-black">
            Cancellation: free of charge.
          </p>
        </>
      )}
    </div>
  );
};

export default DetailCardTwo;
