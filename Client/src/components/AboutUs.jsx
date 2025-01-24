import { useNavigate } from "react-router-dom";
import ab from "../assets/images/ab.jpg";

const AboutUs = () => {
  const navigate = useNavigate();

  const gotoSign = () => {
    navigate("register");
  };
  const gotoblog = () => {
    navigate("/all-blog");
  };
  return (
    <div className="container mx-auto px-4 mt-20 grid md:grid-cols-2 gap-4">
      <div className="max-h-[400px] rounded-lg overflow-hidden">
        <img src={ab} alt="" className="rounded-lg" />
      </div>
      <div className="self-center">
        <div className="text-4xl font-bold text-gray-700">ABOUT HotelPal</div>
        <div className="about-body mt-7 text-gray-700">
          HotelPal is committed to delivering a high level of expertise,
          customer service, and attention to detail to the market of
          accommodation booking .
        </div>
        <div className="about-btn-box flex gap-5 my-8">
          <button
            className="about-btn w-[110px] hover:bg-[#fff] hover:text-[#fe598d] bg-[#fe598d] rounded text-[#fff] h-[35px]"
            onClick={gotoSign}
          >
            Join Us
          </button>
          <button
            className="about-btn w-[110px] rounded bg-[#fff] text-[#fe598d] h-[35px] hover:bg-[#fe598d] hover:text-[#fff]"
            onClick={gotoblog}
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
