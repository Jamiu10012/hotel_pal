import { Fragment } from "react";
import "./style.css";
import Sidebar from "../../components/dashboardSidebar";
import BookedList from "../../components/BookedList";

function BookListed() {
  return (
    <Fragment>
      <div className="edit-container">
        <Sidebar />
        <BookedList />
      </div>
    </Fragment>
  );
}

export default BookListed;
