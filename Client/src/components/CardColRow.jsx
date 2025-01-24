import { useEffect, useState } from "react";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import { API_URL } from "../../ProtectedRoute";

const CardColRow = ({ property }) => {
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
    navigate(`/propdet?id=${property._id}`);
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
    <div className="rounded-lg  border-[#fe598d] relative md:h-[300] overflow-hidden">
      <div className="price-fav-cont absolute top-3 flex justify-between w-full p-2">
        <div className="price-tag bg-[#fe598d] text-[#fff] rounded px-2">
          {property.currency}
          {property.price_per_night}
        </div>
      </div>
      <div className="md:flex gap-4">
        <div>
          <img
            className="rounded-lg"
            src={property.cover_image}
            alt=""
            onClick={gotoProp}
          />
        </div>
        <div className="">
          <Link
            to={`/propdet?id=${property._id}`}
            onClick={() => window.scrollTo(0, 0)}
          >
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-700 ">
              {property.title}
            </h5>
          </Link>
          <div>
            <div className="flex flex-col lg:flex-row lg:gap-4 font-normal text-gray-400">
              <div className="flex items-center gap-1">
                <IoLocation />
                <span> {property.country}</span>
              </div>

              <div className="flex items-center gap-1 ">
                <IoLocation />
                <span>
                  {property.category} / {property.room_type}
                </span>
              </div>
            </div>
            <div className="hidden md:block">
              <p className="text-sm text-gray-400 mt-4 mb-2">
                This space includes
              </p>
              <ul className="grid lg:grid-cols-2 gap-x-4 gap-y-2 list-disc text-xs lg:text-sm">
                <li className="c list-disc ml-4">Queen bed</li>
                <li className="c list-disc ml-4">Dishwasher</li>
                <li className="c list-disc ml-4">
                  Wheelchair access available
                </li>
                <li className="c list-disc ml-4">Microwave</li>
                <li className="c list-disc ml-4">Air conditioning</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default CardColRow;
