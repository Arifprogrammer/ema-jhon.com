import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../Components/Provider/AuthProvider";

const Login = () => {
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const { loggedUser, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const googleLogIn = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };
  const handleSignin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    setError("");

    loggedUser(email, password)
      .then((result) => {
        e.target.reset();
        toast.success("You've signed in successfully", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="min-h-[calc(100vh-80px)] flex justify-center items-center">
      <div className="card w-full max-w-md shadow-2xl shadow-gray-400 bg-slate-300">
        <form className="card-body" onSubmit={handleSignin}>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-gray-800">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              name="email"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-gray-800">Password</span>
            </label>
            <input
              type={showPassword ? "password" : "text"}
              placeholder="password"
              className="input input-bordered"
              name="password"
              required
            />
            <p className="mr-6 text-white -mt-9 ml-auto cursor-pointer">
              <FontAwesomeIcon
                icon={faEye}
                onClick={() => setShowPassword(!showPassword)}
              />
            </p>
            <label className="text-sm mt-4">
              <a href="#" className="text-gray-800 hover:text-blue-800">
                Forgot password?
              </a>
              <p className="mt-2 text-red-700">{error}</p>
            </label>
          </div>
          <div className="form-control mt-3">
            <button
              type="submit"
              className="btn btn-primary text-gray-300 hover:text-white font-semibold border-0"
            >
              Login
            </button>
            <p className="text-gray-800 text-center mt-2">
              Do you have an account?{" "}
              <span className="text-yellow-700 cursor-pointer">
                <Link to="/signup">Signup</Link>
              </span>
            </p>
            <div className="flex items-center justify-center my-3">
              <div className="bg-gray-700 h-[1px] w-full"></div>
              <span className="text-center text-black px-5">Or</span>
              <div className="bg-gray-700 h-[1px] w-full"></div>
            </div>
            <button
              className="btn bg-sky-900 text-white hover:text-white font-semibold border-0"
              onClick={googleLogIn}
            >
              Login with Google
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
