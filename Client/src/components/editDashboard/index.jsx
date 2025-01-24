import { useEffect, useState } from "react";
import profile from "../../img/profile.jpg";
import axios from "axios";
import { API_URL } from "../../../ProtectedRoute";
import { getUserById } from "../../../Apis/getUser";
import { ToastContainer, toast } from "react-toastify";

function EditDashboard() {
  const [getData, setGetData] = useState(null);
  const token = localStorage.getItem("authToken");
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await getUserById(userId, token);
        setGetData(data);
      } catch (error) {
        console.error(error);
      }
    };

    if (userId) {
      fetchUserData();
    }
  }, [userId]);

  const [full_name, setFullName] = useState(getData?.user?.full_name);
  const [contact_phone, setPhone] = useState(getData?.user?.contact_phone);
  const [gender, setGender] = useState(getData?.user?.gender);
  const [date_of_birth, setDob] = useState(getData?.user?.date_of_birth);
  const [state, setState] = useState(getData?.user?.state);
  const [city, setCity] = useState(getData?.user?.city);
  const [username, setUsername] = useState(getData?.user?.username);
  const [twitter, setTwitter] = useState(getData?.user?.twitter);
  const [instagram, setInstagram] = useState(getData?.user?.instagram);
  const [linkedin, setLinkedin] = useState(getData?.user?.linkedin);
  const [facebook, setFacebook] = useState(getData?.user?.facebook);
  const [isLoading, setIsLoading] = useState(false);
  const [nationality, setNationality] = useState(getData?.user?.nationality);

  const [file, setFile] = useState("");
  const [previewUrl, setPreviewUrl] = useState(profile);

  const onFileUploadChange = (e) => {
    const fileInput = e.target;

    if (!fileInput.files) {
      alert("No file was chosen");
      return;
    }

    if (!fileInput.files || fileInput.files.length === 0) {
      alert("Files list is empty");
      return;
    }

    const file = fileInput.files[0];

    /** File validation */
    if (!file.type.startsWith("image")) {
      alert("Please select a valide image");
      return;
    }

    /** Setting file state */
    setFile(file); // we will use the file state, to send it later to the server
    setPreviewUrl(URL.createObjectURL(file)); // we will use this to show the preview of the image

    /** Reset file input */
    e.currentTarget.type = "text";
    e.currentTarget.type = "file";
  };

  // const handleCancel = (event) => {
  //   event.target.reset();
  //   setPreviewUrl("");
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();

    let formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "rgfgxgi0");

    // Upload image only if a file is provided
    let imageUrl;
    if (file) {
      await axios({
        method: "POST",
        url: "https://api.cloudinary.com/v1_1/dyojshtoe/image/upload",
        data: formData,
      }).then((response) => {
        imageUrl = response.data.secure_url;
      });
    }

    setIsLoading(true);

    const userData = {
      full_name,
      username,
      contact_phone,
      city,
      state,
      nationality,
      gender,
      date_of_birth,
      linkedin,
      instagram,
      facebook,
      twitter,
    };

    // Include profile_picture in the data object only if imageUrl is defined
    if (imageUrl) {
      userData.profile_picture = imageUrl;
    }

    axios(`${API_URL}/user/update/${userId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      data: userData,
    })
      .then((response) => {
        setIsLoading(false);
        // console.log("User updated successfully:", response.data);
        toast.success("User updated successfully!!!");
      })
      .catch((error) => {
        setIsLoading(false);
        // console.error("Error updating user:", error);
        toast.error(error);
      });
  };

  return (
    <div className="profile-main-container bord-pro ">
      <form action="" className="dashboard-form" onSubmit={handleSubmit}>
        <div className="dashboard-img">
          <img
            src={getData?.user?.profile_picture || previewUrl}
            alt="profile"
          />
          <div>
            Upload Image
            <p className="text-[14px]">* recommended size: minimum 550px</p>
            <label htmlFor="profile-img">Upload</label>
            <input
              id="profile-img"
              type="file"
              name="image"
              onChange={onFileUploadChange}
            />
          </div>
        </div>

        <fieldset>
          <input
            type="text"
            placeholder={getData?.user?.full_name || "Full Name"}
            name="full_name"
            onChange={(e) => setFullName(e.target.value)}
            className="edit-input"
          />

          <input
            type="text"
            placeholder={getData?.user?.username || "Username"}
            name="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="tel"
            placeholder={getData?.user?.contact_phone || "Phone No"}
            name="contact_phone"
            onChange={(e) => setPhone(e.target.value)}
          />

          <input
            type="text"
            placeholder={getData?.user?.gender || "Gender"}
            name="gender"
            onChange={(e) => setGender(e.target.value)}
          />
          <input
            type="text"
            placeholder={getData?.user?.date_of_birth || "DOB: dd/mm/yyyy"}
            pattern="\d{1,2}/\d{1,2}/\d{4}"
            name="dob"
            onChange={(e) => setDob(e.target.value)}
          />
          <input
            type="text"
            placeholder={getData?.user?.nationality || "Nationality"}
            name="nationality"
            onChange={(e) => setNationality(e.target.value)}
          />

          <input
            type="text"
            placeholder={getData?.user?.state || "State"}
            name="state"
            onChange={(e) => setState(e.target.value)}
          />
          <input
            type="text"
            placeholder={getData?.user?.city || "City"}
            name="city"
            onChange={(e) => setCity(e.target.value)}
          />
        </fieldset>
        <div className="profile-social">Social Networks</div>
        <fieldset>
          <input
            type="url"
            placeholder={getData?.user?.facebook || "Facebook URL"}
            name="social_media.facebook"
            onChange={(e) => setFacebook(e.target.value)}
          />
          <input
            type="url"
            placeholder={getData?.user?.linkedin || "LinkedIn URL"}
            name="social_media.linkedin"
            onChange={(e) => setLinkedin(e.target.value)}
          />
          <input
            type="url"
            placeholder={getData?.user?.instagram || "Instagram URL"}
            name="social_media.instagram"
            onChange={(e) => setInstagram(e.target.value)}
          />
          <input
            type="url"
            placeholder={getData?.user?.twitter || "Twitter URL"}
            name="social_media.twitter"
            onChange={(e) => setTwitter(e.target.value)}
          />
        </fieldset>

        <div className="update-btn">
          {/* Conditionally render based on isLoading */}
          {isLoading ? (
            <button type="submit" disabled>
              Loading...
            </button> // Show loading indicator and disable button
          ) : (
            <button type="submit">Update</button> // Show "Update" button
          )}
        </div>
        <ToastContainer />
      </form>
    </div>
  );
}

export default EditDashboard;
