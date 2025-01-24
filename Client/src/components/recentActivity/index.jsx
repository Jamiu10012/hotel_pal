import { useEffect, useState } from "react";
import "./style.css";

const appliedJobs = [{ _id: 1, title: "apartment" }];
const RecentActivity = () => {
  return (
    <>
      {appliedJobs.map((appliedjob) => (
        <div className="dashboard-recent" key={appliedjob?._id}>
          <div className="dash-activity-one">
            <div className="dash-activity-circle"></div>
            <div className="dash-recent-time-text">
              <p className="dash-activity-text">
                {`You listed  ${appliedjob?.title} as company owner`}
              </p>
              <div className="dash-recent-time">2:30</div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default RecentActivity;
