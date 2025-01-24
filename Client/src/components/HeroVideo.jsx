import er from "../assets/video/er2.mp4";
import "../assets/css/homePage.css";
import { TypeAnimation } from "react-type-animation";

const HeroVideo = () => {
  const CURSOR_CLASS_NAME = "custom-type-animation-cursor";
  return (
    <div className="w-full relative py-40 px-4">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 z-10 top-0 h-full bg-[#48454593]"></div>
        <video autoPlay loop muted playsInline className="vids w-full h-full">
          <source src={er} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="relative z-10 hidden lg:block">
        <div className="relative text-center p-4 md:p-8 ">
          <h1 className="text-4xl lg:text-5xl font-bold leading-[120%] md:leading-9 lg:leading-40 mb-4 lihe text-white ">
            A{" "}
            <span className="text-primary_pink">
              <TypeAnimation
                // preRenderFirstString={false}
                sequence={[
                  500,
                  "better Vacation Experience",
                  (el) => el.classList.remove(CURSOR_CLASS_NAME),
                  1000,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </span>
          </h1>
          <p className="text-white text-xs font-thin">
            Inspiring, award-winning design meets modern, mobile-first service.
            Welcome to the future of hospitality.
          </p>
        </div>
      </div>

      <style global jsx>{`
        .custom-type-animation-cursor::after {
          content: "|";
          animation: cursor 1.1s infinite step-start;
        }
        @keyframes cursor {
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default HeroVideo;
