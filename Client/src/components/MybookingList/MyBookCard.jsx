import axios from "axios";
import bbb from "../../assets/images/ero1.jpg";
const MyBookCard = ({ data }) => {
  const checkInDate = data?.checkInDate;
  const formattedCheckInDate = new Date(checkInDate).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }
  );
  const checkOutDate = data?.checkOutDate;
  const formattedcheckOutDate = new Date(checkOutDate).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }
  );

  const userId = localStorage.getItem("userId");
  const bookingId = data?._id;

  // console.log(data?.property?.cover_image);

  //   const handleDelete = async () => {
  //     try {
  //       await axios.delete(`/api/bookings/${userId}/${bookingId}`);
  //       // Optionally, you can navigate the user or update state to reflect the deletion
  //     } catch (error) {
  //       setError("Error deleting booking");
  //     }
  //   };
  return (
    <div className="booked-card-box">
      <div className="cont-booked">
        <img src={data?.property?.cover_image} alt="" />
        <div className="details-box">
          <div className="booked-title">{data?.property?.title}</div>
          <div className="booked-price">
            Period:
            <p>
              {formattedCheckInDate} to {formattedcheckOutDate}
            </p>
          </div>
          <div className="booked-price">
            Price
            <p>
              {data?.property?.currency} {data?.totalPrice}
            </p>
          </div>
          <div className="booked-price">
            Guest
            <p>{data?.numberOfGuests}</p>
          </div>
        </div>
      </div>
      <button className="can-btn">Cancel</button>
    </div>
  );
};

export default MyBookCard;
