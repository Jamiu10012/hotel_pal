import { IoLocation } from "react-icons/io5";
import {
  FaRegUser,
  FaChevronDown,
  FaDoorOpen,
  FaListUl,
  FaHome,
  FaBed,
  FaBath,
  FaChevronUp,
} from "react-icons/fa";
import FilterModal from "../modal/FilterModal";
import { useState } from "react";
const gdata = ["1", "2", "3", "5", "7", "12"];
const rdata = ["1 room", "2 rooms", "4 rooms", "5 rooms", "7 rooms"];
const bdata = ["1", "2", "4", "5", "7"];
const bedata = ["1", "2", "4", "5", "7"];
const tdata = ["Apartment", "Dorm"];
const sdata = ["Entire Room", "Private Room", "Shared Room"];

const PropertyFilter = ({
  locationText,
  setLocationText,
  priceFrom,
  setpriceFrom,
  priceTo,
  setpriceTo,
  checkInText,
  setCheckInText,
  checkOutText,
  setCheckOutText,
  guestText,
  setGuestText,
  selectedBath,
  setSelectedBath,
  selectedBed,
  setSelectedBed,
  selectedType,
  setSelectedType,
  selectedSize,
  setSelectedSize,
}) => {
  const [isGuest, setIsGuest] = useState(false);
  const [isType, setIsType] = useState(false);
  const [isSize, setIsSize] = useState(false);
  const [isBed, setIsBed] = useState(false);
  const [isRoom, setIsRoom] = useState(false);
  const [isBath, setIsBath] = useState(false);
  const [selectedGuests, setSelectedGuests] = useState(null);
  const [selectedRooms, setSelectedRooms] = useState(null);

  const handleIsBath = () => {
    setIsBath(!isBath);
  };
  const handleIsBathClose = (bath) => {
    setSelectedBath(bath);
    setIsBath(false);
  };

  const handleIsBed = () => {
    setIsBed(!isBed);
  };
  const handleIsBedClose = (bed) => {
    setSelectedBed(bed);
    setIsBed(false);
  };

  const handleIsSize = () => {
    setIsSize(!isSize);
  };
  const handleIsSizeClose = (size) => {
    setSelectedSize(size);
    setIsSize(false);
  };

  const handleIsType = () => {
    setIsType(!isType);
  };
  const handleIsTypeClose = (type) => {
    setSelectedType(type);
    setIsType(false);
  };

  const handleIsRoom = () => {
    setIsRoom(!isRoom);
  };
  const handleIsRoomClose = (rooms) => {
    setSelectedRooms(rooms);
    setIsRoom(false);
  };

  const handleIsGuest = () => {
    setIsGuest(!isGuest);
  };
  const handleIsGuestClose = (guests) => {
    setSelectedGuests(guests);
    setGuestText(guests);
    setIsGuest(false);
  };
  return (
    <div className="filter-sort px-20 flex flex-wrap gap-3 justify-between">
      <div className="inpu-icon-box wid-fl">
        <IoLocation className="icon-prop" />
        <input
          type="text"
          className="loc-inp outline-none w-[90%]"
          placeholder="Where are you going"
          value={locationText}
          onChange={(e) => setLocationText(e.target.value)}
        />
      </div>
      <div
        className="select-container wid-fl flex items-center justify-between relative cursor-pointer"
        onClick={handleIsGuest}
      >
        <FaRegUser className="main-icon" />
        <div className="txt-slt">
          {guestText || selectedGuests
            ? `${guestText || selectedGuests} guests`
            : "Guests"}
        </div>
        {isGuest ? (
          <FaChevronUp className="clt-icon" />
        ) : (
          <FaChevronDown className="clt-icon" />
        )}
        {isGuest && (
          <FilterModal data={gdata} handleIsGuestClose={handleIsGuestClose} />
        )}
      </div>
      <div
        className="select-container wid-fl flex items-center justify-between relative cursor-pointer"
        onClick={handleIsRoom}
      >
        <FaDoorOpen className="main-icon" />
        <div className="txt-slt">{selectedRooms || "Rooms"}</div>
        {isRoom ? (
          <FaChevronUp className="clt-icon" />
        ) : (
          <FaChevronDown className="clt-icon" />
        )}
        {isRoom && (
          <FilterModal data={rdata} handleIsGuestClose={handleIsRoomClose} />
        )}
      </div>
      <div
        className="select-container wid-fl flex items-center justify-between relative cursor-pointer"
        onClick={handleIsType}
      >
        <FaListUl className="main-icon" />
        <div className="txt-slt">{selectedType || "All Types"}</div>
        {isType ? (
          <FaChevronUp className="clt-icon" />
        ) : (
          <FaChevronDown className="clt-icon" />
        )}
        {isType && (
          <FilterModal data={tdata} handleIsGuestClose={handleIsTypeClose} />
        )}
      </div>
      <div
        className="select-container wid-fl flex items-center justify-between relative cursor-pointer"
        onClick={handleIsSize}
      >
        <FaHome className="main-icon" />
        <div className="txt-slt">{selectedSize || "All Sizes"}</div>
        {isSize ? (
          <FaChevronUp className="clt-icon" />
        ) : (
          <FaChevronDown className="clt-icon" />
        )}
        {isSize && (
          <FilterModal data={sdata} handleIsGuestClose={handleIsSizeClose} />
        )}
      </div>
      <div
        className="select-container wid-fl flex items-center justify-between relative cursor-pointer"
        onClick={handleIsBed}
      >
        <FaBed className="main-icon" />
        <div className="txt-slt">
          {selectedBed ? `${selectedBed} bedrooms` : "Bedrooms"}
        </div>
        {isBed ? (
          <FaChevronUp className="clt-icon" />
        ) : (
          <FaChevronDown className="clt-icon" />
        )}
        {isBed && (
          <FilterModal data={bdata} handleIsGuestClose={handleIsBedClose} />
        )}
      </div>
      <div
        className="select-container wid-fl flex items-center justify-between relative cursor-pointer"
        onClick={handleIsBath}
      >
        <FaBath className="main-icon" />
        <div className="txt-slt">
          {selectedBath ? `${selectedBath} bathrooms` : "Bathrooms"}
        </div>
        {isBath ? (
          <FaChevronUp className="clt-icon" />
        ) : (
          <FaChevronDown className="clt-icon" />
        )}
        {isBath && (
          <FilterModal data={bedata} handleIsGuestClose={handleIsBathClose} />
        )}
      </div>
      <div className="price-range-box flex wid-fl">
        <input
          type="text"
          className="prc-ran-inp outline-none px-2"
          placeholder="From: $0"
          value={priceFrom}
          onChange={(e) => setpriceFrom(e.target.value)}
        />
        <div className="icon-prop">-</div>
        <input
          type="text"
          className="prc-ran-inp outline-none px-2"
          placeholder="To: $600"
          value={priceTo}
          onChange={(e) => setpriceTo(e.target.value)}
        />
      </div>
    </div>
  );
};

export default PropertyFilter;
