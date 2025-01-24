import { IoMdTime } from "react-icons/io";
import { Link } from "react-router-dom";
const BlogCard = () => {
  const data = [
    {
      title: " What is happening today",
      bdy: "  Here are the biggest enterprise technology acquisitions of 2025 sofar, in reverse chronological order.",
      time: "20 minutes ago",
    },
    {
      title: "How to get good apartment",
      bdy: "  Here are the biggest enterprise technology acquisitions of 2025 sofar, in reverse chronological order.",

      time: "7 hours ago",
    },
    {
      title: "About EzclickStay ",
      bdy: "  Here are the biggest enterprise technology acquisitions of 2025 sofar, in reverse chronological order.",

      time: "1 days ago",
    },
    {
      title: "Different between Dorm and Cabin",
      bdy: "  Here are the biggest enterprise technology acquisitions of 2025 sofar, in reverse chronological order.",

      time: "2 weeks ago",
    },
  ];
  return (
    <>
      {data.map((item, index) => (
        <div
          key={index}
          className="items-center rounded-lg shadow-md max-w-md mx-auto bg-white"
        >
          <div className="h-52 overflow-hidden">
            <img
              className="object-cover rounded-t-lg h-full object-center"
              src="/images/hero-slide-01.webp"
              alt=""
            />
          </div>
          <div className="flex flex-col justify-between p-4 leading-normal">
            <Link to={"/blog-det"}>
              <h5 className="mb-2 text-xl font-medium tracking-tight hover:text-[#3F88C5] txt-head">
                {item.title}
              </h5>
            </Link>
            <p className="mb-3 font-light text-sm">{item.bdy}</p>
            <div className="flex items-center gap-1 text-xs text-[#79745C]">
              April 21, 2015 ,{" "}
              <span>
                <IoMdTime className="text-[20px]" />
              </span>{" "}
              0
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default BlogCard;
