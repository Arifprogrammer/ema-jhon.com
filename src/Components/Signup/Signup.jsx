import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { sendEmailVerification } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const { createUser, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const googleLogIn = () => {
    googleSignIn()
      .then((result) => {
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    setError("");
    if (!/(?=.*\d)/.test(password)) {
      setError("Please type atleast one number.");
      return;
    } else if (!/(?=.*[A-Z])/.test(password)) {
      setError("Please type atleast one uppercase letter.");
      return;
    } else if (!/(?=.*[@$!%*#?&])/.test(password)) {
      setError("Please type atleast one special character.");
      return;
    } else if (password < 6) {
      setError("Password should be atleast six charatcer.");
      return;
    }
    createUser(email, password)
      .then((result) => {
        e.target.reset();
        sendEmailVerification(result.user).then(() => {
          toast.success("Email verification mail sent", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="min-h-[calc(100vh-80px)] flex justify-center items-center">
      <div className="card w-full max-w-md shadow-2xl shadow-gray-400 bg-slate-300">
        <form className="card-body" onSubmit={handleSignup}>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-gray-800">Name</span>
            </label>
            <input
              type="text"
              placeholder="name"
              className="input input-bordered"
              name="name"
              required
            />
          </div>
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
              <p className="mt-2 text-red-700">{error}</p>
            </label>
          </div>
          <div className="form-control mt-3">
            <button
              type="submit"
              className="btn btn-primary text-gray-300 hover:text-white font-semibold border-0"
            >
              Signup
            </button>
            <p className="text-gray-800 text-center mt-2">
              Already have an account?{" "}
              <span className="text-yellow-700 cursor-pointer">
                <Link to="/login">login</Link>
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
              Signup with Google
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Signup;
