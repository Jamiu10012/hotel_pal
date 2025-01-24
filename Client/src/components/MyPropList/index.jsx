import { useEffect, useState } from "react";
import PropCard from "../../pages/MyProperties/PropCard";
import { getPropByUserId } from "../../../Apis/ListProp";
import Skeleton from "../Skeleton";

function MyPropList() {
  const token = localStorage.getItem("authToken");
  const userId = localStorage.getItem("userId");
  const [propertyData, setPropertyData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPropByUserId(userId, token);
        setPropertyData(data);
      } catch (error) {
        console.error("Error fetching property data:", error);
      }
    };

    fetchData();
  }, [userId, token]);
  console.log(propertyData);
  return (
    <div className="profile-main-container bord-pro p-4 my-prop-row">
      {propertyData.length !== 0
        ? propertyData?.map((property) => (
            <PropCard key={property._id} property={property} />
          ))
        : [1, 2].map((_, id) => <Skeleton key={id} />)}
    </div>
  );
}

export default MyPropList;
