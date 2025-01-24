import { useNavigate } from "react-router-dom";
import CardCol from "./CardCol";
import { useEffect, useState } from "react";
import { getPropertiesSix } from "../../Apis/ListProp";
import Skeleton from "./Skeleton";

const HomeCard = () => {
  const navigate = useNavigate();
  const [propertyData, setPropertyData] = useState(null);

  const gotoProp = () => {
    navigate("properties");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPropertiesSix();
        setPropertyData(data);
      } catch (error) {
        console.error("Error fetching property data:", error);
      }
    };

    fetchData();
    console.log({propertyData});
  }, []);
  // console.log(propertyData);
  return (
    <div className="mt-10 max-w-7xl mx-auto px-4">
      <h1 className="text-3xl md:text-4xl text-left font-medium text-[#272932] md:text-center lg:text-left">
        Book Unforgettable Spaces
      </h1>
      <p className="text-[#79745C] font-light mt-2 mb-8 md:text-center lg:text-left">
        From a room for a night to a loft for as long as you like,<br className="hidden md:block" />create an
        unforgetable memory in our one of a kind spaces
      </p>
      <div className="grid md:grid-cols-2 gap-8 md:gap-4 lg:grid-cols-3">
        {propertyData !== null
          ? propertyData?.map((property) => (
              <CardCol key={property._id} property={property} />
            ))
          : [1, 2, 3, 4, 5, 6].map((_, id) => <Skeleton key={id} />)}
      </div>

      <div className="btn-cont flex justify-center my-5">
        <div
          className="inline-flex justify-center items-center cursor-pointer px-3 py-2 text-sm font-medium text-center text-white bg-[#fe598d] rounded-lg hover:bg-[#fff] hover:border hover:border-[#fe598d] hover:text-[#fe598d]  w-[150px] "
          onClick={gotoProp}
        >
          View more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
