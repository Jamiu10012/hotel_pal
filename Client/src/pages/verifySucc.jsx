import { useEffect } from "react";
import very from "../assets/images/very.png";
const VerifySucc = () => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      window.location.href = "/login";
    }, 3500);
    return () => clearTimeout(timeoutId);
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div className="verify-container my-36">
      <img src={very} alt="" />
      <span>
        Verified successfull!!! You will be redirect in less than 4 seconds
      </span>
    </div>
  );
};

export default VerifySucc;
