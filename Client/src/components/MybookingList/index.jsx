import { useEffect, useState } from "react";
import { getBookingByPropertyOwnerId } from "../../../Apis/Booking";
import MyBookCard from "./MyBookCard";

function MyBookedList() {
  const [getData, setGetData] = useState(null);
  const token = localStorage.getItem("authToken");
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const fetchBookingData = async () => {
      try {
        const data = await getBookingByPropertyOwnerId(userId, token);
        setGetData(data);
      } catch (error) {
        console.error(error);
      }
    };

    if (userId) {
      fetchBookingData();
    }
  }, [userId]);
  if (getData?.length === 0) {
    return <div className="load-txt">You don't have anything yet...</div>;
  }
  return (
    <div className="profile-main-container bord-pro p-4 ">
      {getData ? (
        getData?.map((item, index) => <MyBookCard key={index} data={item} />)
      ) : (
        <div className="load-txt">Loading...</div>
      )}
    </div>
  );
}

export default MyBookedList;
