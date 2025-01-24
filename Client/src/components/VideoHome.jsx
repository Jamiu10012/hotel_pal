import videoBg from "https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4";
const VideoHome = () => {
  return (
    <div className="relative h-[50vh]">
      {/* This div creates a red background overlay */}
      <div className="absolute top-0 bg-[#ad5656] h-[50vh] w-[100px] opacity-50"></div>

      {/* This is the video background element */}
      <video src={videoBg} autoPlay loop muted className="h-[100%] z-0 " />

      {/* This div contains the text content */}
      <div className="absolute top-5 z-10 last:30%">
        <h1>Welcome</h1>
        <p>To my site.</p>
      </div>
    </div>
  );
};

export default VideoHome;
