import { Fragment } from "react";
import Sidebar from "../../components/dashboardSidebar";
import MyBookedList from "../../components/MybookingList";

function MyBooking() {
  return (
    <Fragment>
      <div className="edit-container">
        <Sidebar />
        <MyBookedList />
      </div>
    </Fragment>
  );
}

export default MyBooking;
