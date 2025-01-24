import { Link } from "react-router-dom";
import GoogleLogo from "../assets/images/GoogleLogo";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import { loginUser } from "../../Apis/Auth";
import { API_URL } from "../../ProtectedRoute";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { storeUser } from "../Store/userReducer";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await loginUser(formData);
      // console.log(result.token);
      localStorage.setItem("authToken", result.token);
      localStorage.setItem("userId", result?.user?._id);
      dispatch(storeUser({ token: result.token }));
      toast.success("Login Successfully!!!");
      const timeoutId = setTimeout(() => {
        window.location.href = "/";
      }, 3500);
      navigate;
      return () => clearTimeout(timeoutId);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const signInWithGoogle = async (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then((result) => {
        axios
          .post(`${API_URL}/auth/google`, {
            full_name: result.user.displayName,
            email: result.user.email,
            profile_picture: result.user.photoURL,
          })
          .then((res) => {
            // console.log(res);
            if (
              res &&
              res.data &&
              res.data.token &&
              res.data.user &&
              res.data.user._id
            ) {
              localStorage.setItem("authToken", res.data.token);
              localStorage.setItem("userId", res.data.user._id);
              toast.success("Login Successfully!!!");

              setTimeout(() => {
                window.location.href = "/";
              }, 3000);
            } else {
              console.error("Invalid response format:", res);
              toast.error("Something went wrong");
            }
          });
      })
      .catch((error) => {
        console.error(error);
        toast.error("Something went wrong");
      });
  };

  return (
    <div className="log-box w-[450px] border h-[100%] border-gray-500 relative mx-auto my-[6rem] p-6 grow flex flex-col items-center">
      <h2 className="text-4xl text-center">Login</h2>
      <form className="flex flex-col w-full" onSubmit={handleFormSubmit}>
        <label htmlFor="email" className="flex flex-col mb-2 border p-2">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className=" outline-none"
            value={formData.email}
            onChange={handleInputChange}
          />
        </label>
        <label htmlFor="password" className="flex flex-col mb-2 border p-2">
          <input
            type="password"
            name="password"
            placeholder="password"
            className=" outline-none"
            value={formData.password}
            onChange={handleInputChange}
          />
        </label>

        <button
          type="submit"
          className="w-full mt-4 bg-primary_pink text-white py-2 px-3 border rounded-md"
        >
          Log in
        </button>
        <ToastContainer />

        <div className="flex justify-between items-center mt-6">
          <Link to={"/forgot-passwrd"} className="text-sm text-gray-500">
            Forgot password?
          </Link>
          <span className="text-sm text-gray-500">
            Don&#39;t have an account?{" "}
            <Link
              to={"/register"}
              className="font-bold underline underline-offset-1"
            >
              Sign up
            </Link>
          </span>
        </div>

        <div className="mt-6">
          <button
            className="w-full flex justify-center items-center gap-3 mt-4 border-slate-600 text-slate-600 py-2 px-3 border rounded-md"
            onClick={signInWithGoogle}
          >
            <GoogleLogo />
            <span>Log in with Google</span>
          </button>

          {/* <button
            type="submit"
            className="w-full  flex justify-center items-center gap-3 mt-4 border-slate-600 text-slate-600 py-2 px-3 border rounded-md"
          >
            <FacebookLogo />
            <span>Log in with Facebook</span>
          </button> */}
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
