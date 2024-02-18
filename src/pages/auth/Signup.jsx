import React, { useState } from "react";
import { msrtc_icon } from "../../assets/img";
import "../../assets/css/signin.css";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { userRegister, OtpUsers } from "../../redux/auth/authActions";
import GenerateOtp from "./GenerateOtp";
import Loader from "../../assets/gif/Spinner-3.gif";

const Signup = () => {
  const [showOtpComponent, setShowOtpComponent] = useState(false);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    const modifiedData = { ...data, userName: data.emailId, type: "create" };

    setUserData(modifiedData);
    setLoading(true);
    dispatch(OtpUsers(modifiedData))
      .then((action) => {
        const data = action.payload;
        if (data && data.returnCode == "200") {
          setShowOtpComponent(true);
          toast.success("OTP gnerated successfully.", {
            position: "top-right",
          });
          console.log("OTP gnerated successfully.");
        } else {
          toast.error(` ${data.message}`, {
            position: "top-right",
            style: {
              backgroundColor: "white",
              color: "red",
            },
          });
          setShowOtpComponent(false);
        }
      })
      .catch((error) => {
        console.error("OTP generation failed:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      {loading && (
        <div className="loader-overlay">
          <div className="loader-container">
            <img src={Loader} alt="Loader" />
          </div>
        </div>
      )}
      {!loading && showOtpComponent ? (
        <GenerateOtp userData={userData} />
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="d-flex justify-content-between">
            <img src={msrtc_icon} className="mb-1" alt="MSRTC" width={50} />
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <h6 className="maharashtra-state p-1">
            Maharashtra State Road Transport Corporation
            <br />
            Public Online Reservation System
          </h6>

          <div className="card-body p-2">
            <div className="mt-2">
              <div className="input-group">
                <span className="input-group-text" id="basic-addon1">
                  +91
                </span>
                <input
                  {...register("mobileNumber", {
                    required: "Mobile Number is required.*",
                    pattern: {
                      value: /^[A-Za-z0-9@._-]{10,10}$/,
                      message: "Invalid Mobile Number.",
                    },
                  })}
                  type="tel"
                  className="form-control"
                  id="mobileNumber"
                  placeholder="Enter your mobile number."
                  aria-label="Phone number"
                  aria-describedby="basic-addon1"
                />
              </div>
              {errors.mobileNumber && (
                <div className="text-danger">{errors.mobileNumber.message}</div>
              )}
            </div>
            <div className="mt-3">
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your name"
                {...register("name", {
                  required: "Name is required.*",
                })}
              />
              {errors.name && (
                <p className="text-danger">{errors.name.message}</p>
              )}
            </div>
            <div className="mt-3">
              <input
                type="email"
                className="form-control"
                id="emailId"
                placeholder="Enter your email"
                {...register("emailId", {
                  required: "Email Id is required.*",
                  pattern: {
                    value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/, // Basic email validation
                    message: "Invalid email.",
                  },
                })}
              />
              {errors.emailId && (
                <p className="text-danger">{errors.emailId.message}</p>
              )}
            </div>
            <div className="mt-3">
              <input
                type="password"
                className="form-control"
                id="name"
                placeholder="Enter your password"
                {...register("password", {
                  required: "Password is required.*",
                  pattern: {
                    value: /^[A-Za-z0-9@#$%^&+=]{6,12}$/,
                    message:
                      "Password must be minimum 6 characters and maximum 12 characters.",
                  },
                })}
              />
              {errors.password && (
                <p className="text-danger">{errors.password.message}</p>
              )}
            </div>

            <div className="mt-3">
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                placeholder="Re-Enter your password"
                {...register("confirmPassword", {
                  required: "Confirmation password is required.*",
                  validate: (value) =>
                    value === watch("password") ||
                    "Password and Re-Entered Password are not match.",
                })}
              />
              {errors.confirmPassword && (
                <p className="text-danger">{errors.confirmPassword.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="btn btn-danger w-100 mt-2"
              data-bs-target="#generateOtpModal"
            >
              Sign Up
            </button>
          </div>

          <h6 className="text-center mt-2">Already have an account?</h6>
          <div className="center-item">
            <div
              className="link-accound mb-4"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Sign in
            </div>
          </div>
          <ToastContainer />
        </form>
      )}
    </>
  );
};

export default Signup;
