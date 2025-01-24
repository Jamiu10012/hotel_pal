// import profile from "../../img/profile.jpg";
import { NavLink, useNavigate } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import { AiFillDashboard } from "react-icons/ai";
import { AiOutlineFileText } from "react-icons/ai";
import { AiOutlineFileDone } from "react-icons/ai";
// import { AiFillMessage } from "react-icons/ai";
import { HiOutlineLogout } from "react-icons/hi";
import { useEffect, useState } from "react";
import { getUserById } from "../../../Apis/getUser";
import { RiReservedFill } from "react-icons/ri";
import SideSkeleton from "./SideSkeleton";

const dataItem = [
  {
    label: "Dashboard",
    to: "/dash",
    icon: <AiFillDashboard />,
  },
  {
    label: "Edit Profile",
    to: "/edit-das",
    icon: <FiEdit />,
  },
  {
    label: "My Reservation",
    to: "/booked-list",
    icon: <RiReservedFill />,
  },
  {
    label: "My Properties",
    to: "/myprop",
    icon: <AiOutlineFileText />,
  },
  {
    label: "My Booking",
    to: "/mybooking",
    icon: <RiReservedFill />,
  },
];

const logout = () => {
  localStorage.removeItem("authToken");
  localStorage.removeItem("userId");
  window.location.reload();
};

const Sidebar = () => {
  const navigate = useNavigate();
  const [getData, setGetData] = useState(null);
  const token = localStorage.getItem("authToken");
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await getUserById(userId, token);
        setGetData(data);
      } catch (error) {
        console.error(error);
      }
    };

    if (userId) {
      fetchUserData();
    }
  }, [userId]);
  const avatar = "/images/hero-slide-01.webp";
  return (
    <>
      {getData ? (
        <div className="profile-sidebar mb-4">
          <div className="profile-img-container">
            <img src={getData?.user?.profile_picture || avatar} alt="profile" />
            <div className="profile-name">
              <h5>{getData?.user?.username}</h5>
            </div>
          </div>

          {dataItem.map((item, key) => {
            return (
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "Link dash-list active-side-nav"
                    : "Link dash-list not-active"
                }
                key={key}
                to={item.to}
              >
                <div className="icon">{item.icon}</div>

                {item.label}
              </NavLink>
            );
          })}

          <div className="Link dash-list not-active" onClick={logout}>
            <div className="icon">
              <HiOutlineLogout />
            </div>
            Logout
          </div>
        </div>
      ) : (
        <SideSkeleton />
      )}
    </>
  );
};

export default Sidebar;
