import React, { useState, useRef } from "react";
import "../../assets/css/signin.css";
import { msrtc_icon } from "../../assets/img";
import { useDispatch } from "react-redux";
import { OtpUsers, userRegister } from "../../redux/auth/authActions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const GenerateOtp = (userData) => {
  const [userDatas, setUserDatas] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showOtpComponent, setShowOtpComponent] = useState(false);
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
  };

  const combinedOtp = otpValues.join("");

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log("userData:", userData);
    const payload = {
      emailId: userData.userData.emailId,
      name: userData.userData.name,
      userName: userData.userData.userName,
      countryCode: "+91",
      mobileNumber: userData.userData.mobileNumber,
      password: userData.userData.password,
      confirmPassword: userData.userData.confirmPassword,
      otp: combinedOtp,
    };
    dispatch(userRegister(payload))
      .then((action) => {
        debugger;
        const data = action.payload;
        if (data && data.returnCode == "201") {
          toast.success("Thank you for Signing Up with us.", {
            position: "top-right",
          });
          console.log("Thank you for Signing Up with us.");
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

  const onSubmits = () => {
    const modifiedData = {
      ...userData.userData,
      userName: userData.userData.emailId,
      type: "create",
    };

    setUserDatas(modifiedData);
    setLoading(true);
    dispatch(OtpUsers(modifiedData))
      .then((action) => {
        setShowOtpComponent(true);
        const data = action.payload;
        if (data && data.returnCode == "200") {
          toast.success("OTP resent successfully.", { position: "top-right" });
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
        <h5 className="r-text mt-4">Verify One-Time Password</h5>
        <span>
          {userData && userData.userData && (
            <p>
              Please enter the OTP to verify your account. a OTP has been sent
              to <b>+91 {userData.userData.mobileNumber}</b>
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
          <button type="submit" class="btn btn-danger  w-25 btn-sm">
            Verify
          </button>
        </div>

        <p className="text-center mt-4">
          By creating an account you agree to our
          <br />
          <span className="r-text">Terms of use</span> and
          <span className="r-text">Privacy Policy</span>
        </p>
      </form>
      <ToastContainer />
    </>
  );
};

export default GenerateOtp;
