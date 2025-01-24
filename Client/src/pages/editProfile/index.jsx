import { Fragment } from "react";
import "./style.css";
import EditDashboard from "../../components/editDashboard";
import Sidebar from "../../components/dashboardSidebar";

function EditProfile() {
  return (
    <Fragment>
      <div className="edit-container">
        <Sidebar />
        <EditDashboard />
      </div>
    </Fragment>
  );
}

export default EditProfile;
