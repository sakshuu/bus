import React, { useState, useRef } from "react";
import "../../assets/css/signin.css";
import { msrtc_icon } from "../../assets/img";
import { useDispatch, useSelector } from "react-redux";
import { OtpUsers, resetPasswordUser } from "../../redux/auth/authActions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const VerifyOtp = (userData) => {
  console.log("first" + userData);
  const [userDatas, setUserDatas] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showOtpComponent, setShowOtpComponent] = useState(false);
  const userHistory = useSelector((state) => state.auth.userHistory);
  const [otpVerified, setOtpVerified] = useState(false);
  const dispatch = useDispatch();
  const [otpValues, setOtpValues] = useState(["", "", "", "", "", ""]);
  const inputRefs = [
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
  ];

  const handleInputChange = (index, value) => {
    const newOtpValues = [...otpValues];
    newOtpValues[index] = value;

    setOtpValues(newOtpValues);
    if (index < inputRefs.length - 1 && value !== "") {
      inputRefs[index + 1].current.focus();
    }
    if (index === inputRefs.length - 1) {
      const isAllDigitsEntered = newOtpValues.every((digit) => digit !== "");

      if (isAllDigitsEntered) {
        const combinedOtp = newOtpValues.join("");

        if (userData.userData.otp === combinedOtp) {
          toast.success("OTP verified successfully.", {
            position: "top-right",
          });
          setOtpVerified(true);

          console.log("User reset with OTP successful");
        } else {
          toast.error(`OTP verification failed.`, {
            position: "top-right",
            style: {
              backgroundColor: "white",
              color: "red",
            },
          });
          setOtpVerified(false);
        }
      } else {
        setOtpVerified(false);
      }
    }
  };

  function isMobileNumber(value) {
    return /^[0-9+]+$/.test(value);
  }
  const handlesubmit = (e) => {
    e.preventDefault();
    console.log("userData:", userData);
  };

  const onSubmits = () => {
    debugger;
    console.log("userHistory" + userData);
    const modifiedData = {
      mobileNumber: userData.userData.mobileNumber,
      emailId: userData.userData.mobileNumber,
      type: "reset",
    };

    setUserDatas(modifiedData);
    setLoading(true);
    dispatch(OtpUsers(modifiedData))
      .then((action) => {
        setShowOtpComponent(true);
        const data = action.payload;
        debugger;
        if (data && data.returnCode == "200") {
          toast.success("OTP resent successfully.", { position: "top-center" });
          console.log("OTP resent successfully.");
        } else {
          toast.error(` ${data.message}`, {
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
      <form onSubmit={(e) => handlesubmit(e)}>
        <div className="d-flex justify-content-between p-1">
          <img src={msrtc_icon} className="mb-2" alt="MSRTC" width={60} />
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <h6 className="maharashtra-state">
          Maharashtra State Road Transport Corporation
          <br />
          Public Online Reservation System
        </h6>
        <h5 className="r-text mt-4">Verify one-time password</h5>
        <span>
          {userData && userData.userData && (
            <p>
              Please enter the OTP to verify your account. a OTP has been sent
              to
              {isMobileNumber(userData.userData.mobileNumber) ? (
                <b>+91 {userData.userData.mobileNumber}</b>
              ) : (
                <b>{userData.userData.mobileNumber}</b>
              )}
            </p>
          )}
        </span>

        <div className="d-flex justify-content-between">
          {otpValues.map((value, index) => (
            <input
              key={index}
              type="text"
              className="form-control inp-otp"
              value={value}
              onChange={(e) => handleInputChange(index, e.target.value)}
              maxLength="1"
              ref={inputRefs[index]}
            />
          ))}
        </div>

        <div className="d-flex gap-4 mt-4 main">
          <button
            type="button"
            class="btn btn-outline-danger btn-sm w-25"
            onClick={onSubmits}
          >
            Re-send
          </button>
          <button
            type="submit"
            data-bs-toggle="modal"
            data-bs-target="#passwordModal"
            class="btn btn-danger  w-25 btn-sm"
            disabled={!otpVerified}
          >
            Verify
          </button>
        </div>

        <p className="text-center mt-4">
          By creating an account you agree to our
          <br />
          <span className="r-text">Terms of use</span> and
          <span className="r-text">Privacy Policy</span>
        </p>
        <ToastContainer />
      </form>
    </>
  );
};

export default VerifyOtp;
