import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { FaBed } from "react-icons/fa";
import { FaMoneyBill1 } from "react-icons/fa6";
import { GiVacuumCleaner } from "react-icons/gi";

const DetailCard = ({ getData }) => {
  const data = [
    {
      title: "Price Details",
      nit: "$500",
      mot: "#250",
      tax: "$100",
      week: "$300",
      cln: "$150",
    },
    {
      title: "Address",
      add: "Ridge Street",
      cty: "New York",
      County: "New York County",
      State: "NY",
      Postcode: "10007",
      Country: "United States",
    },
    {
      title: "Features",
      id: "137",
      rooms: "5",
      bathrooms: "2",
      extra: "1 extra bed for $40/night.",
      optional: "kitchen fully equipped.",
      size: "2,500 ft2",
      late: "3",
      outdoor: "restaurants and bars.",
      cancellation: "free of charge.",
    },
    {
      title: "More Features",
      nit: "Kitchen",
      mot: "Heating",
      tax: "$100",
      week: "$300",
      cln: "$150",
    },
  ];
  const [isclick, setIsclick] = useState(false);

  const handleClick = () => {
    setIsclick(true);
  };
  const handleClickClose = () => {
    setIsclick(false);
  };
  return (
    <div className="mw-bx mb-2 p-6 border-gray-200 rounded-lg">
      <div className="w-full">
        <h5 className="mb-2 text-gray-600 text-sm tracking-tight">
          Price Details
        </h5>
        {/* {isclick ? (
          <FaChevronUp
            className="text-white cursor-pointer"
            onClick={handleClickClose}
          />
        ) : (
          <FaChevronDown
            className="text-white cursor-pointer"
            onClick={handleClick}
          />
        )} */}
      </div>

      {/* {isclick && ( */}
      <table className=" border-black max-w-xs text-xs w-full">
        <tr className="bo border-black">
          <td className="bo border-black py-2">
            <div className="flex gap-2">
              <span>
                <FaBed />
              </span>
              Price per night
            </div>
          </td>
          <td className="pr-4">
            {getData?.currency} {getData?.price_per_night}
          </td>
        </tr>
        <tr className="bo border-black">
          <td className="bo border-black py-2">
            <div className="flex gap-2">
              <span>
                <FaBed />
              </span>
              Price per night (30d+)
            </div>
          </td>
          <td className="pr-4">
            {getData?.currency} {getData?.price_per_night_month}
          </td>
        </tr>
        <tr className="bo border-black">
          <td className="bo border-black py-2">
            <div className="flex gap-2">
              <span>
                <FaBed />
              </span>
              Price per night
            </div>
          </td>
          <td className="pr-4">
            {getData?.currency} {getData?.price_per_night}
          </td>
        </tr>
        <tr className="bo border-black">
          <td className="bo border-black py-2">
            <div className="flex gap-2">
              <span>
                <FaMoneyBill1 />
              </span>
              City Tax Fee
            </div>
          </td>
          <td className="pr-4">
            {getData?.currency} {getData?.tax_fee} Single Fee
          </td>
        </tr>
        <tr className="bo border-black">
          <td className="bo border-black py-2">
            <div className="flex gap-2">
              <span>
                <GiVacuumCleaner />
              </span>
              Cleaning Fee
            </div>
          </td>
          <td className="pr-4">
            {getData?.currency} {getData?.cleaning_fee} Single Fee
          </td>
        </tr>
        {/* <p className="mb-3 font-normal text-black">
           = 
        </p> */}
        {/* <p className="mb-3 font-normal text-black">=</p> */}
      </table>
      {/* )} */}
    </div>
  );
};

export default DetailCard;
