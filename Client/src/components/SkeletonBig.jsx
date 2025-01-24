const SkeletonBig = () => {
  return (
    <div className="card-prop bigskl skeleton w-[400px] bg-white border border-gray-200 rounded-lg shadow relative">
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

export default SkeletonBig;
