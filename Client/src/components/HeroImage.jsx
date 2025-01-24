import { IoLocation } from "react-icons/io5";
import "../assets/css/homePage.css";
import { useEffect, useState } from "react";
import ero1 from "../assets/images/ero2.jpg";
import ero2 from "../assets/images/ero1.jpg";
import ero3 from "../assets/images/ero3.jpg";

function HeroImage() {
  const data = [
    {
      img: `${ero3}`,
      loc: "Bangkok",
      num: 3,
    },
    {
      img: `${ero2}`,
      loc: "New York",
      num: 4,
    },
    {
      img: `${ero1}`,
      loc: "GeoGia",
      num: 2,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, data.length]);

  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + data.length) % data.length
      );
    } else if (e.key === "ArrowRight") {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  const currentItem = data[currentIndex];

  return (
    <div className='hero-section smal-dero relative h-[80vh] after:content-[" "] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-gradient-to-r after:from-[rgba(32,31,31,0.8)] after:to-transparent flex w-full overflow-x-hidden '>
      <div className="h-full w-full relativeimage-container">
        <div className="absolute bg-[#70636729] top-0 h-full w-full"></div>
        {/* #59323f64 */}
        <img
          src={currentItem.img}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-full object-fill "
        />
      </div>
      <div className="hero-text absolute top-0 left-4 md:left-12 w-full md:w-[100%] lg:w-[100%] flex justify-center items-start flex-col h-full z-10 text-container">
        <div className="text-box relative w-full md:w-[45%] lg:w-[40%] p-4 md:p-8 ">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-7 md:leading-9 lg:leading-40 mb-4 md:mb-8 lihe text-white ">
            A better Vacation <br /> Experience
          </h1>
          <p className=" rd-wdt-cont text-white ">
            Inspiring, award-winning design meets modern, mobile-first service.
            Welcome to the future of hospitality.
          </p>
        </div>

        <div className="location-ero text-[#fe598d] gap-2 flex p-4 items-center">
          <div className="frst-loc flex items-center ">
            <IoLocation />
            <span>{currentItem.loc}</span>
          </div>
          {"|"}
          <div className="frst-loc">
            <span>{currentItem.num} bedroom stay</span>
          </div>
        </div>
      </div>
      <div className="indicator flex gap-1 absolute bottom-20 left-[50%]  ">
        {data.map((_, i) => (
          <div
            key={i}
            className={`eac-ind  ${currentIndex === i ? "act-ind" : ""}`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default HeroImage;
