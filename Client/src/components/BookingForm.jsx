import { useState } from "react";
import { LiaCitySolid } from "react-icons/lia";
import { PiUsersLight } from "react-icons/pi";
import { BsDashCircle } from "react-icons/bs";
import { BsPlusCircle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { TypeAnimation } from "react-type-animation";

function BookingForm() {
  const [guest, setGuest] = useState(1);
  const navigate = useNavigate();
  const [location, setLocation] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };
  const handleCheckInChange = (event) => {
    setCheckIn(event.target.value);
  };
  const handleCheckOutChange = (event) => {
    setCheckOut(event.target.value);
  };
  // console.log(guest);

  const gotoProp = () => {
    navigate(`/properties?l=${location}&n=${checkIn}&o=${checkOut}&g=${guest}`);
  };

  return (
    <div className="relative -mt-6 md:max-w-6xl mx-auto rounded-t-3xl lg:rounded-full bg-[#F6F7EB] p-8 lg:p-6 z-50">
      <div className="relative z-10 lg:hidden ">
        <div className="relative">
          <h1 className="text-4xl md:text-6xl lg:text-5xl font-medium lg:font-bold leading-[120%] md:leading-[100%] lg:leading-40 mb-4">
            A{" "}
            <span className="">
              better Vacation <br /> Experience
            </span>
          </h1>
          <p className="text-md max-w-sm">
            Inspiring, award-winning design meets modern, mobile-first service.
            Welcome to the future of hospitality.
          </p>
        </div>
      </div>
      <form className="lg:rounded-full lg:flex space-y-4 lg:space-y-0 justify-between w-full items-center lg:gap-4 p-3 lg:border border-[#272932] lg:px-8">
        <div className="gap-2 flex lg:flex-nowrap items-center lg:pr-3 px-4 lg:px-0 border lg:border-none border-[#272932] py-2 rounded-full">
          <span className="text-sm lg:text-xs">Location</span>
          <input
            type="text"
            name="location"
            placeholder="location"
            className="h-10 w-full outline-none px-2 text-sm bg-transparent"
            value={location}
            onChange={handleLocationChange}
          />
        </div>
        <div className="checkin flex gap-2 lg:flex-nowrap px-4 lg:px-0 items-center lg:pr-3 border lg:border-none border-[#272932] py-2 rounded-full bg-transparent">
          <span className="text-sm whitespace-nowrap lg:text-xs">Check In</span>
          <input
            type="date"
            placeholder="YYYY-MM-DD"
            className="h-10 w-full px-2 text-[12px] outline-none bg-inherit"
            value={checkIn}
            onChange={handleCheckInChange}
          />
        </div>
        <div className="checkin flex gap-2 lg:flex-nowrap px-4 lg:px-0 items-center lg:pr-3 border lg:border-none border-[#272932] py-2 rounded-full bg-transparent">
          <span className="text-sm whitespace-nowrap lg:text-xs">
            Check Out
          </span>
          <input
            type="date"
            placeholder="YYYY-MM-DD"
            className="h-10 w-full px-2 text-[12px] outline-none bg-inherit"
            value={checkIn}
            onChange={handleCheckInChange}
          />
        </div>

        <div className="flex gap-2 items-center">
          <span className="flex gap-2">
            {/* <PiUsersLight size={25} color="#fe598d" /> */}
            <span className="text-[20] lg:text-xs">Guest</span>
          </span>
          <div className="flex gap-3 justify-center items-center">
            <span
              className="text-xl cursor-pointer"
              onClick={() => {
                if (guest <= 1) {
                  setGuest(1);
                } else {
                  setGuest(guest - 1);
                }
              }}
            >
              <BsDashCircle size={20} color="#272932" />
            </span>
            <span className="text-[20]">{parseInt(guest)}</span>
            <span
              className="text-xl cursor-pointer"
              onClick={() => {
                if (guest >= 10) {
                  setGuest(10);
                } else {
                  setGuest(guest + 1);
                }
              }}
            >
              <BsPlusCircle size={20} color="#272932" />
            </span>
          </div>
        </div>
        <div className="">
          <button
            className="flex justify-center w-full h-12 items-center bg-primary_pink rounded-full py-2 px-6 text-[16px] text-white"
            type="button"
            onClick={gotoProp}
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

export default BookingForm;
