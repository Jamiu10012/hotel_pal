import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { resetPass } from "../../Apis/Auth";
import { getUserByEmail } from "../../Apis/getUser";

function ResetPassword() {
  const { email } = useParams(); // Extract the email parameter from the URL
  // console.log(email);

  const [getData, setGetData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await getUserByEmail(email);
        setGetData(data);
      } catch (error) {
        console.error(error);
      }
    };

    if (email) {
      fetchUserData();
    }
  }, [email]);
  const resetToken = getData?.user?.resetPasswordToken;
  // console.log(resetToken);

  const [formData, setFormData] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const isPasswordValid = (password) => {
    // Password must be at least 8 characters long
    if (password.length < 8) {
      return false;
    }

    const letterRegex = /[a-zA-Z]/;
    const numberRegex = /[0-9]/;
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;

    return (
      letterRegex.test(password) &&
      numberRegex.test(password) &&
      specialCharRegex.test(password)
    );
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    // console.log(resetToken);
    if (!isPasswordValid(formData.newPassword)) {
      toast.error(
        "Password must be at least 8 characters and contain at least one letter, one number, and one special character"
      );
      return;
    }

    if (formData.newPassword !== formData.confirmPassword) {
      toast.error("Password does not match");

      return;
    }
    try {
      const result = await resetPass(formData, resetToken);
      toast.success(result.message);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="log-box w-[450px] border border-gray-500 relative mx-auto my-[5rem] p-6 grow flex flex-col items-center">
      <h2 className="text-4xl text-center">Reset Password</h2>
      <form className="flex flex-col w-full" onSubmit={handleFormSubmit}>
        <label htmlFor="newPassword" className="flex flex-col border p-2">
          <input
            type="password"
            name="newPassword"
            placeholder="New password"
            className=" outline-none"
            value={formData.newPassword}
            onChange={handleInputChange}
            required
          />
          <span className="text-[10px] mt-[10px] text-red-400 mb-3">
            * Password must be at least 8 characters and contain at least one
            letter, one number, and one special character
          </span>
        </label>

        <label
          htmlFor="confirmPassword"
          className="flex flex-col mb-2 border p-2"
        >
          <input
            type="password"
            name="confirmPassword" // Corrected the name here
            placeholder="Confirm password"
            className="outline-none"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            required
          />
        </label>

        <button
          type="submit"
          className="w-full mt-4 bg-primary_pink text-white py-2 px-3 border rounded-md mb-5"
        >
          Reset
        </button>
        <ToastContainer />
      </form>
    </div>
  );
}

export default ResetPassword;
