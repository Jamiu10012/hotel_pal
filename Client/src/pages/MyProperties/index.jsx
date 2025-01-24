import { Fragment } from "react";
import "./style.css";
import Sidebar from "../../components/dashboardSidebar";
import MyPropList from "../../components/MyPropList";

function MyProperties() {
  return (
    <Fragment>
      <div className="edit-container">
        <Sidebar />
        <MyPropList />
      </div>
    </Fragment>
  );
}

export default MyProperties;
