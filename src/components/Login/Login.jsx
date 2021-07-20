import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./login.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "../../images/certi-serv-logo.png";
import Reload from "../../images/Reload_icon.png";
import Email from "../../images/Email_icon.png";
import Key from "../../images/Key_icon.png";
import Text from "../../images/Text_icon.png";

import "./login.css";

const Login = () => {
  const [data, setdata] = useState({
    name: "",
    password: "",
    captcha: "",
  });
  const [gcaptcha, setgcaptcha] = useState("");
  const genCaptcha = () => {
    let r = Math.random().toString(36).substring(8);
    setgcaptcha(r);
  };
  useEffect(() => {
    genCaptcha();
  }, []);

  const inputEvent = (e) => {
    const { name, value } = e.target;

    setdata({ ...data, [name]: value });
  };

  const submitData = () => {
    const { name, password, captcha } = data;
    if (!name || !password || !captcha) {
      toast.danger("Fill all the fields");
    } else if (captcha !== gcaptcha) {
      toast.success("Wrong Captcha");
    } else {
      toast.success("Form submitted");
    }
  };
  return (
    <>
      <div className="pageContainer">
        <ToastContainer
          className="myToast"
          position="top-center"
          autoClose={2500}
        />
        <div className="loginBox">
          <div className="leftBox">
            <img src={logo} alt="Logo" className="mainLogo" />
            <div className="inputFields">
              <ul className="inputs">
                <li className="input">
                  <span>
                    <img src={Email} alt="user" />
                  </span>{" "}
                  |
                  <input
                    onChange={inputEvent}
                    name="name"
                    value={data.name}
                    type="text"
                    placeholder="Enter Email id(optional) "
                  />
                </li>

                <li className="input">
                  <span>
                    <img src={Key} alt="key" />
                  </span>{" "}
                  |
                  <input
                    onChange={inputEvent}
                    name="password"
                    value={data.password}
                    type="password"
                    placeholder="Enter Password"
                  />
                </li>

                <li className="input">
                  <span>
                    <img src={Text} alt="text" />
                  </span>{" "}
                  |
                  <input
                    onChange={inputEvent}
                    name="captcha"
                    value={data.captcha}
                    type="text"
                    placeholder="Captcha"
                  />
                </li>
              </ul>
            </div>
            <div className="captchaField">
              <div className="captchaDiv">
                <p className="getCaptcha">{gcaptcha}</p>
              </div>
              <span>
                <img src={Reload} onClick={genCaptcha} alt="reload" />
              </span>
            </div>
            <div className="btnDiv">
              <button onClick={submitData}>LOG IN</button>
              <a href="#">Forgot Password?</a>
            </div>
          </div>
          <div className="rightBox">
            <h1>WELCOME ! </h1>
            <p>Enter your details and start journey with us</p>
            <Link to="/signup">
              <button className="loginBtn">SIGN UP</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
