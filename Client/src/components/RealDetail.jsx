import { IoCloseSharp } from "react-icons/io5";
import DetailCard from "./DetailCard";
import "../assets/css/detail.css";
import DetailCardTree from "./DetailCardTree";
import DetailCardTwo from "./DetailCardTwo";
import DetailCardFour from "./DetailCardFour";
import BookFormMain from "./BookFormMain";
import { useState } from "react";
import { useSelector } from "react-redux";
import { IoPersonSharp } from "react-icons/io5";
import { RiHotelBedFill } from "react-icons/ri";
import { FaBath, FaHotel } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const RealDetail = ({ getData }) => {
  const [isBookOpen, SetisBookOpen] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const { token: newtoken } = useSelector((state) => state.user);
  const [showPricing, setShowPricing] = useState(false);
  const [showFeatures, setShowFeatures] = useState(false);
  const [showAddress, setShowAddress] = useState(false);
  const myToken = useSelector((state) => state.token);
  const token = localStorage.getItem("authToken");
  console.log("myt", myToken);
  console.log("new", getData);
  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const handleIsBookOpen = () => {
    SetisBookOpen(true);
    if (token === null) {
      window.location.href = "/login";
    }
  };
  const handleIsBookClose = () => {
    SetisBookOpen(false);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 my-2 relative">
      <div className="grid md:grid-cols-3 gap-8">
        <div className="col-span-2">
          <div className="li-txt font-[18px] text-[#4a4949]">
            <span className="text-[#fe598d]">{getData?.country}</span> {" / "}
            {getData?.city} / {getData?.country}
          </div>
          {/* )} */}
          {/* <div className="btn-book fixed right-10 z-20 bottom-[32px]">
            <button
              className="bokbtn bg-[#fe598d] border border-[#fe598d] hover:bg-[#fff] px-5 py-2 rounded-[6px] text-white hover:text-[#fe598d]"
              onClick={handleIsBookOpen}
            >
              Book Now
            </button>
          </div> */}
          <div className="grid gap-8">
            <div className="dec-container">
              <div className="des-ad font-bold text-[#3b3a3a] text-4xl">
                {getData.title}
              </div>
              <div className="desc-box text-[#595758] text-justify">
                {showFullDescription
                  ? getData?.description?.en || getData?.description
                  : `${
                      getData?.description?.en?.slice(0, 350) ||
                      getData?.description?.slice(0, 350)
                    }...`}
                <div
                  className=""
                  onClick={toggleDescription}
                  style={{ cursor: "pointer", color: "#fe598d" }}
                >
                  {showFullDescription ? "Show Less" : "Show More"}
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex gap-2 text-xl items-center font-medium">
                <span>
                  <FaHotel />
                </span>
                <p className="m text-primary_pink">{getData?.room_type}</p>
              </div>
              <div className="flex gap-2 text-xl items-center font-medium">
                <span>
                  <IoPersonSharp />
                </span>
                <p>{getData?.guest_no} Guests</p>
              </div>
              <div className="flex gap-2 text-xl items-center font-medium">
                <span>
                  <IoPersonSharp />
                </span>
                {getData?.amenties.map((item, idx) => (
                  <p key={idx} className="text-[#3F88C5]">
                    {item}
                    {idx + 1 === getData?.amenties.length ? "." : ","}
                  </p>
                ))}
              </div>
              <div className="flex gap-2 text-xl items-center font-medium">
                <span>
                  <RiHotelBedFill />
                </span>
                <p>{getData?.bedrooms} Bedrooms</p>
              </div>
              <div className="flex gap-2 text-xl items-center font-medium">
                <span>
                  <FaBath />
                </span>
                <p>{getData?.bathrooms} Bathrooms</p>
              </div>
              {/* <DetailCard getData={getData} /> */}
              {/* <DetailCardTree getData={getData} />
          <DetailCardTwo getData={getData} />
          <DetailCardFour getData={getData} /> */}
            </div>

            <div className="bg-white p-8 rounded-md">
              <div className="flex items-center gap-3">
                <div
                  className="h-5 w-5 rounded flex items-center justify-center bg-primary_pink text-white"
                  onClick={() => setShowPricing(!showPricing)}
                >
                  {showPricing ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </div>
                <p className="text-lg">Price Details</p>
              </div>
              {showPricing && (
                <div className="mt-6 space-y-3">
                  <p>
                    <span className="font-medium">Price per night: </span>
                    {getData?.price_per_night}
                  </p>
                  <p>
                    <span className="font-medium">Price per week: </span>
                    {getData?.price_per_night_week}
                  </p>
                  <p>
                    <span className="font-medium">Price per month: </span>
                    {getData?.price_per_night_month}
                  </p>
                  <p>
                    <span className="font-medium">Tax fee: </span>
                    {getData?.currency} {getData?.tax_fee}
                  </p>
                  <p>
                    <span className="font-medium">Cleaning fee: </span>
                    {getData?.currency} {getData?.cleaning_fee}
                  </p>
                </div>
              )}
            </div>
            <div className="bg-white p-8 rounded-md">
              <div className="flex items-center gap-3">
                <div
                  className="h-5 w-5 rounded flex items-center justify-center bg-primary_pink text-white"
                  onClick={() => setShowAddress(!showAddress)}
                >
                  {showAddress ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </div>
                <p className="text-lg">Address</p>
              </div>
              {showAddress && (
                <div className="mt-6 grid grid-cols-2">
                  <p>
                    <span className="font-medium">Address: </span>
                    {getData?.county}
                  </p>
                  <p>
                    <span className="font-medium">City: </span>
                    {getData?.city}
                  </p>
                  <p>
                    <span className="font-medium">Area: </span>
                    {getData?.area}
                  </p>
                  <p>
                    <span className="font-medium">Zip: </span>
                    {getData?.postal_code}
                  </p>
                  <p>
                    <span className="font-medium">State: </span>
                    {getData?.state}
                  </p>
                </div>
              )}
            </div>
            {/* <div className="bg-white p-8 rounded-md">
              <div className="flex items-center gap-3">
                <div className="h-5 w-5 rounded flex items-center justify-center bg-primary_pink text-white">
                  <IoIosArrowUp />
                  <IoIosArrowDown />
                </div>
                <p className="text-lg">Features</p>
              </div>
            </div> */}
          </div>
        </div>
        <div>
          {/* {isBookOpen && ( */}
          <div className="">
            <h3 className="text-2xl font-semibold mt-4">Check Availability</h3>
            <BookFormMain getData={getData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealDetail;
