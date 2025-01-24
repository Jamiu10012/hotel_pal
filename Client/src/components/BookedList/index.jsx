import { useEffect, useState } from "react";
import BookedCard from "./BookedCard";
import { getBookingByUserId } from "../../../Apis/Booking";

function BookedList() {
  const [getData, setGetData] = useState(null);
  const token = localStorage.getItem("authToken");
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const fetchBookingData = async () => {
      try {
        const data = await getBookingByUserId(userId, token);
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
  // console.log(getData);
  return (
    <div className="profile-main-container bord-pro p-4 ">
      {getData ? (
        getData?.map((item, index) => <BookedCard key={index} data={item} />)
      ) : (
        <div className="load-txt">Loading...</div>
      )}
    </div>
  );
}

export default BookedList;
