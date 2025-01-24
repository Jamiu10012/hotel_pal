import { useEffect, useState } from "react";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { MdHome } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";

import { API_URL } from "../../ProtectedRoute";

const CardCol = ({ property }) => {
  const [savedData, setSavedData] = useState(null);
  const token = localStorage.getItem("authToken");
  const userId = localStorage.getItem("userId");
  const [isAct, setIsAct] = useState(false);
  const navigate = useNavigate();

  const formData = {
    user: userId,
    propertyListing: property._id,
  };

  const gotoProp = () => {
    navigate(`/propdet?id=${property._id}`, { state: property });
  };

  const handleDelete = async () => {
    const savedId = savedData?._id; // Replace with your user ID

    const token = token; // Replace with your access token

    try {
      const response = await fetch(
        `${API_URL}/api/savedProperty/delete/${savedId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: token,
          },
        }
      );

      if (response.ok) {
        console.log("Property Unsaved successfully");
        // Perform any additional actions after deletion
        toast.success("Property Unsaved Successfully!!!");
      } else {
        console.error("Failed to unsave property");
      }
    } catch (error) {
      console.error("Error deleting property", error);
    }
  };

  return (
    <div className="rounded-md relative max-w-sm mx-auto shadow bg-white">
      <div className="h-56 overflow-hidden">
        <img
          className="rounded-lg"
          src={property.cover_image}
          alt=""
          onClick={gotoProp}
        />
      </div>
      <div className="price-fav-cont absolute top-3 flex justify-between w-full p-2">
        <div className="price-tag bg-[#fe598d] text-[#fff] rounded px-2">
          {property.currency}
          {property.price_per_night}
        </div>
      </div>
      <div className="p-2 mt-4">
        <div className="flex gap-1 text-yellow-400 text-sm">
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
        </div>
        <div
          onClick={() => {
            window.scrollTo(0, 0);
            gotoProp();
          }}
          className="cursor-pointer"
        >
          <h5 className="mb-2 text-2xl font-medium tracking-tight text-gray-700 ">
            {property.title}
          </h5>
        </div>
        <div className="text-xl mb-3 font-normal text-[#79745C]">
          <div className="flex items-center gap-1 mb-2">
            <span className="text-[#79745C]">
              <IoLocation />
            </span>
            <span> {property.country}</span>
          </div>

          <div className="flex items-center gap-1 ">
            <MdHome />
            <span>
              {property.category} / {property.room_type}
            </span>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default CardCol;
