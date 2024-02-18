import React, { useState } from "react";
import { msrtc_icon } from "../../assets/img";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  changePasswordUser,
  resetPasswordUser,
} from "../../redux/auth/authActions";
import ResetPassword from "./ResetPassword";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignIn from "./SignIn";

const ChangePassword = () => {
  const [showloginComponent, setShowloginComponent] = useState(false);
  const dispatch = useDispatch();
  const userHistory = useSelector((state) => state.auth.userHistory);
  console.log(userHistory);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const payload = {
      emailId: userHistory.mobileNumber,
      mobileNumber: userHistory.mobileNumber,
      otp: userHistory.otp,
      newPassword: data.password,
      confirmPassword: data.confirmPassword,
    };
    debugger;
    dispatch(resetPasswordUser(payload))
      .then((action) => {
        const data = action.payload;
        toast.dismiss();
        if (data && data.returnCode == "201") {
          // setShowloginComponent(true);
          toast.success("Password has been updated Successfully!", {
            position: "top-right",
          });
          setShowloginComponent(true);
          console.log("Password has been updated Successfully!");
        } else {
          toast.error(` ${data.message}`, {
            position: "top-right",
            style: {
              backgroundColor: "white",
              color: "red",
            },
          });
          setShowloginComponent(false);
        }
      })
      .catch((error) => {
        console.error(error.message);
        toast.error(` ${error.message}`, {
          position: "top-right",
          style: {
            backgroundColor: "white",
            color: "red",
          },
        });
      });
  };

  return (
    <>
      {showloginComponent ? (
        <SignIn userHistory={userHistory} />
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div class="mt-1">
            <div className="d-flex justify-content-between p-2">
              <img src={msrtc_icon} className="mb-2" alt="MSRTC" width={50} />
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <h6 className="maharashtra-state p-1">
              Maharashtra State Road Transport Corporation
              <br />
              Public Online Reservation System
            </h6>

            <div className="mb-4 p-2">
              <div class="mt-4 mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="name"
                  placeholder="Enter New password"
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
              <div class="mt-4 mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  placeholder="Re-Enter your password"
                  {...register("confirmPassword", {
                    required: "Confirmation password is required.*",
                    validate: (value) =>
                      value === watch("password") ||
                      "Password and Re-Entered Password are not match",
                  })}
                />
                {errors.confirmPassword && (
                  <p className="text-danger">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                class="btn btn-danger w-100 "
                data-bs-target="#exampleModal"
              >
                Set New Password
              </button>
              <div class="or-container">
                <h6 class="or-text m-0">OR</h6>
              </div>

              <h6 class="text-center mt-3">Don't Have Account?</h6>
              <div className="center-item">
                <div
                  data-bs-toggle="modal"
                  data-bs-target="#ModelSignUp"
                  className="link-accound"
                  to="/"
                >
                  Create Account
                </div>
              </div>
            </div>
          </div>
          <ToastContainer />
        </form>
      )}
    </>
  );
};

export default ChangePassword;
