import "../App.css";
// import HeroImage from "../components/HeroImage";
import BookingForm from "../components/BookingForm";
import HomeCard from "../components/HomeCard";
import AboutUs from "../components/AboutUs";
import DecoSection from "../components/DecoSection";
// import Cities from "../components/Cities";
import Testimonies from "../components/Testimonies";
import HeroVideo from "../components/HeroVideo";
// import VideoHome from "../components/VideoHome";
function HomePage() {
  return (
    <div className="bg-[#F6F7EB]">
      {/* <div className="relative  "> */}
      <HeroVideo />
      {/* <HeroImage /> */}
      <BookingForm />
      {/* </div> */}
      {/* <Cities /> */}
      <HomeCard />
      {/* <VideoHome /> */}
      <AboutUs />
      <DecoSection />
      <Testimonies />
      {/* <div className="p-20 add-pad">
        <div className="text-[25px] font-[700] text-[#000] mb-6 text-center border-y-2 border-y-[#fe598d]">
          Latest Blog
        </div>
        <div className="py-10 w-full flex justify-between flex-wrap gap-5 ">
          <BlogCard />
        </div>
      </div> */}
    </div>
  );
}

export default HomePage;
