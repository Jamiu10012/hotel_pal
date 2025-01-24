import { FaSearch } from "react-icons/fa";
import BlogCard from "../components/BlogCard";
import LatestPost from "../components/latestPost";

const BlogDetail = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 bg-[#F6F7EB]">
      <div className="grid md:grid-cols-3 gap-4 lg:gap-8">
        <div className="md:col-span-2">
          <div className="border rounded bg-white">
            <div className="w-full overflow-hidden h-[350px]">
              <img
                className="h-full w-auto object-cover object-center"
                src="/images/hero-slide-01.webp"
                alt=""
              />
            </div>
            <article className="p-8">
              <h1 className="text-xl md:text-2xl font-semibold">
                Different between Dorm and Cabin
              </h1>
              <div className="space-y-8 mt-4">
                <p className="text-sm font-light">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                  accusamus nostrum, maxime, aliquam labore ad nihil,
                  perspiciatis asperiores facilis animi rerum consequuntur
                  fugiat voluptatem obcaecati!
                </p>
                <p className="text-sm font-light">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                  accusamus nostrum, maxime, aliquam labore ad nihil,
                  perspiciatis asperiores facilis animi rerum consequuntur
                  fugiat voluptatem obcaecati!
                </p>
                <p className="text-sm font-light">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                  accusamus nostrum, maxime, aliquam labore ad nihil,
                  perspiciatis asperiores facilis animi rerum consequuntur
                  fugiat voluptatem obcaecati!
                </p>
              </div>
            </article>
            <div className="p-8">
              <div className="flex">
                <p className="text-[#79745C]">
                  <span className="font-bold">Category: </span>
                  <span className="hover:text-[#3F88C5] cursor-pointer hover:underline">
                    Holiday Ideas,{" "}
                  </span>
                  <span className="hover:text-[#3F88C5] cursor-pointer hover:underline">
                    Hospitality
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="py-20">
            <div className="text-2xl font-medium text-[#000] mb-6">
              Related Posts
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <BlogCard />
            </div>{" "}
          </div>
          <div className="pb-20">
            <div>
              <h1 className="text-xl font-medium">Leave a Reply</h1>
              <p className="text-sm mb-6">Your email address will not be published.</p>
            </div>
            <form className="space-y-4">
              <div className="flex flex-col">
                <textarea
                  className="w-full bg-transparent border bg-white rounded-md p-4"
                  id=""
                  rows="6"
                  placeholder="Comment"
                ></textarea>
              </div>
              <div className="flex flex-wrap lg:flex-nowrap gap-4">
                <div className="flex flex-col">
                  <input
                    type="text"
                    className="w-full bg-transparent border bg-white rounded-md px-4 h-10 m-0 placeholder:text-sm"
                    id=""
                    placeholder="Name"
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    type="email"
                    className="w-full bg-transparent border bg-white rounded-md px-4 h-10 m-0 placeholder:text-sm"
                    id=""
                    placeholder="Enter your email address"
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    type="email"
                    className="w-full bg-transparent border bg-white rounded-md px-4 h-10 m-0 placeholder:text-sm"
                    id=""
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              <button
                type="button"
                className="inline-flex justify-center items-center cursor-pointer px-3 py-2 text-sm font-medium text-center text-white bg-[#fe598d] rounded-lg hover:bg-[#fff] hover:border hover:border-[#fe598d] hover:text-[#fe598d]  w-[150px] "
              >
                Send
              </button>
            </form>
          </div>
        </div>
        <div>
          <div className="space-y-4 py-4">
            {/* <div className="flex items-center h-12 border rounded pl-5 justify-between  border-[#fe598d] mb-10">
                <input
                  type="text"
                  placeholder="Seearch here"
                  className="outline-none bg-transparent w-full"
                />
                <FaSearch className=" text-[#fff] bg-[#fe598d] w-[80px] h-full p-1 cursor-pointer" />
              </div> */}
            <div className="bg-white p-8 rounded-md border border-[#7c79664b]">
              <div className="flex items-center gap-3">
                <p className="text-lg">Categories</p>
              </div>
              <div className="mt-6 flex items-center gap-2">
                <p>Travel</p>
                <span className="font-medium">(0) </span>
              </div>
            </div>
            <div className="bg-white p-8 rounded-md border border-[#7c79664b]">
              <div className="flex items-center gap-3">
                <p className="text-lg">Latest Post</p>
              </div>
              <LatestPost />
              <LatestPost />
              <LatestPost />
              <LatestPost />
              <LatestPost />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
