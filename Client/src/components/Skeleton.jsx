const Skeleton = () => {
  return (
    <div className="skeleton bg-white border border-gray-200 rounded-lg shadow dark:bg-[#fff] dark:border-[#fe598d] relative">
      <div className="card-immg loading"></div>

      <div className="p-2">
        <h5 className="txt-cd mb-2 text-[16px] font-bold tracking-tight text-gray-200 loading">
          a
        </h5>
        <div className="body-box mb-3 font-normal text-gray-300 ">
          <div className="flex items-center gap-1 mb-2">
            <span className="loading">a</span>
          </div>

          <div className="flex items-center gap-1 ">
            <span className="loading">a</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
