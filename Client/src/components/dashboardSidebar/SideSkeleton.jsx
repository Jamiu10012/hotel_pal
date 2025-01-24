const SideSkeleton = () => {
  return (
    <div className="profile-sidebar mb-4 skeleton">
      <div className="profile-img-container side-ske loading">
        <div className="side-mas"></div>
      </div>

      <div className={"Link dash-list not-active small-ls-ls loading"}>a</div>
      <div className={"Link dash-list not-active small-ls-ls loading"}>a</div>
      <div className={"Link dash-list not-active small-ls-ls loading"}>a</div>
      <div className={"Link dash-list not-active small-ls-ls loading"}>a</div>
    </div>
  );
};

export default SideSkeleton;
