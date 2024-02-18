import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "../../assets/css/signin.css";
import { msrtc_icon } from "../../assets/img";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/auth/authActions";
import { ToastContainer, toast } from "react-toastify";
import BusSchedule from "../../components/BusSchedule";
import MainImg from "../../components/MainImg";

const SignIn = ({setShowbusComponent}) => {
  const [loginError, setLoginError] = useState("");
 
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    setShowbusComponent(true)
    // const payload = {
    //   emailId: data.mobileNumber,
    //   mobileNumber: data.mobileNumber,
    //   password: data.password,
    // };
    // console.log(data);

    // dispatch(loginUser(payload))
      .then((action) => {
        debugger;
        const data = action.payload;
        if (data && data.returnCode === 200) {
          // setShowbusComponent(true);
          toast.success("User login successful", {
            position: "top-right",
            autoClose: 1000,
          });
        } else if (
          data &&
          data.message === `Entered Mobile Number / Email is not registered.`
        ) {
          setLoginError("Entered Mobile Number / Email is not registered.");
          toast.error(`${data.message}`, {
            position: "top-right",
            style: {
              backgroundColor: "white",
              color: "red",
            },
          });

          setShowbusComponent(false);
        } else if (data && data.message === `Invalid Credentials, Try again!`) {
          setLoginError(`Invalid Credentials, Try again!`);
          toast.error(`${data.message}`, {
            position: "top-right",
            style: {
              backgroundColor: "white",
              color: "red",
            },
          });
        } else {
          setLoginError(data.message || "Login failed.");
        }
      })
      .catch((error) => {
        console.error(error.message);
        setLoginError(` ${error.message}`);
      });

    // });
  };

  return (
    <>
     
        <form onSubmit={handleSubmit(onSubmit)}>
          <div class="mt-1">
            <div className="d-flex justify-content-between p-2">
              <img src={msrtc_icon} className="mb-2" alt="MSRTC" width={50} />
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
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
                  placeholder="Enter Mobile Number/Gmail."
                />
                {errors.mobileNumber && (
                  <div className="text-danger">
                    {errors.mobileNumber.message}
                  </div>
                )}
                {loginError &&
                  loginError ===
                    "Entered Mobile Number / Email is not registered." && (
                    <div className="text-danger">{loginError}</div>
                  )}
              </div>
              <div class="mt-3 mb-3">
                <input
                  {...register("password", {
                    required: "Password is required.*",
                    pattern: {
                      value: /^[A-Za-z0-9@#$%^&+=]{6,12}$/,
                      message: "Password must be 12 characters or less.",
                    },
                  })}
                  type="password"
                  class="form-control"
                  id="password"
                  placeholder="Enter Password"
                />
                {errors.password && (
                  <div className="text-danger">{errors.password.message}</div>
                )}
                {loginError &&
                  loginError === "Invalid Credentials, Try again!" && (
                    <div className="text-danger">{loginError}</div>
                  )}
              </div>

              <div className="d-flex gap-4 justify-content-center">
                <button type="submit" class="btn btn-danger w-50 btn-sm" data-bs-dismiss="modal">
                  Log In
                </button>
                <button
                  type="button"
                  class="btn btn-danger w-50 btn-sm"
                  data-bs-toggle="modal"
                  data-bs-target="#resetPasswordModal"
                >
                  Reset Password
                </button>
              </div>
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
          <ToastContainer />
        </form>
     
    </>
  );
};

export default SignIn;
