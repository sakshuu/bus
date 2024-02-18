import React, { useState } from "react";
import { msrtc_icon } from "../../assets/img";
import { useForm } from "react-hook-form";
import { OtpUsers } from "../../redux/auth/authActions";
import { setUserHistory, setOTP } from "../../redux/auth/authSlice";
import { useDispatch } from "react-redux";
import VerifyOtp from "./VerifyOtp";
import Loader from "../../assets/gif/Spinner-3.gif";

const ResetPassword = () => {
  const [showOtpComponent, setShowOtpComponent] = useState(false);
  const [userData, setUserData] = useState(null);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const modifiedData = {
      ...data,
      emailId: data.mobileNumber,
      type: "reset",
      mobileNumber: data.mobileNumber,
    };
    debugger;
    setUserData(modifiedData);
    setLoading(true);
    dispatch(OtpUsers(modifiedData))
      .then((action) => {
        const data = action.payload;
        setUserData({ ...modifiedData, otp: data.result });
        dispatch(setUserHistory({ ...modifiedData, otp: data.result }));
        if (data && data.returnCode == "200") {
          setShowOtpComponent(true);
          toast.success("OTP gnerated successfully.", {
            position: "top-right",
          });
          console.log("OTP gnerated successfully.");
        } else {
          toast.error(`OTP generation failed: ${data.message}`, {
            position: "top-right",
            style: {
              backgroundColor: "white",
              color: "red",
            },
          });
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
        <VerifyOtp userData={userData} />
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
                  {...register("mobileNumber", {
                    required: "Mobile Number / Email is required.*",
                    pattern: {
                      value: /^[A-Za-z0-9@._-]{10,100}$/,
                      message: "Invalid format.",
                    },
                  })}
                  type="text"
                  class="form-control"
                  id="mobileNumber"
                  placeholder="Enter Mobile Number/Email"
                />
                {errors.mobileNumber && (
                  <div className="text-danger">
                    {errors.mobileNumber.message}
                  </div>
                )}
              </div>

              <button
                type="submit"
                class="btn btn-danger w-100 "
                data-bs-target="#verifyOtpModal"
              >
                Reset Password
              </button>
              <div class="or-container">
                <h6 class="or-text m-0">OR</h6>
              </div>

              <h6 class="text-center mt-3">Don't have an account?</h6>
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
        </form>
      )}
    </>
  );
};

export default ResetPassword;
