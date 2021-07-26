import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "../../images/certi-serv-logo.png";
import reload from "../../images/Reload_icon.png";
import Email from "../../images/Email_icon.png";
import key from "../../images/Key_icon.png";
import text from "../../images/Text_icon.png";
import "./login.css";

const Login = () => {
  const [gencaptcha, setGencaptcha] = useState("");
  const [data, setData] = useState({
    email: "",
    password: "",
    captcha: "",
  });


  const generatecaptcha = () => {
    const c = Math.random().toString(36).substring(7);
    setGencaptcha(c);
  };

  useEffect(() => {
    generatecaptcha();
  }, []);

  const { email, password, captcha } = data;

  const HandleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
      if (email && password && captcha === gencaptcha) {
        console.log(data);
        toast.success("Form submitted");
        setData({ email: "", password: "", captcha: "" });
      } else{

      if(!email || !password || !captcha){
        toast.error("Fill all fields");
        console.log("form not submitted");
      }else{

      if(captcha !== gencaptcha){
        toast.error("Captcha doesn't match");
        console.log("form not submitted");
        setData({ email:email, password:password, captcha:""});
  
      }

    }}    
    {/*setData({ email: "", password: "", captcha: "" });*/}
    generatecaptcha();
  }
  
  return (

   <>
    <ToastContainer
      className="myToast"
      position="top-center"
      autoClose={1000}
      transition={Flip}
    />

     <div className="container-login">
        <div className="left-box">
          <img className="mainlogo" src={logo} alt="Logo" />
          <form className="form" onSubmit={HandleSubmit}>

            <div className="form-input">
              <span className="icon"><img className="image-icons" src={Email} alt="email" /> | </span>
                  <input type="email"
                  name="email"   
                  className="input"
                  value={email}
                  onChange={HandleChange}
                  autoComplete="off" 
                  placeholder="Enter Email-id" />
               
              </div>
              
              <div className="form-input">
              <span className="icon"><img className="image-icons" src={key} alt="email" />|</span>
                  <input type="password"
                  name="password"   
                  className="input"
                  value={password}
                  onChange={HandleChange}
                  autoComplete="off" 
                  placeholder="Enter Password" />
              </div>

              <div className="form-input">
              <span className="icon"><img className="image-icons" src={text} alt="email" />|</span>
                  <input type="text"
                  name="captcha"   
                  className="input"
                  value={captcha}
                  onChange={HandleChange}
                  autoComplete="off" 
                  placeholder="Enter Captcha" />
              </div>

             <div className="captcha">
               <p className="left-p">{gencaptcha}</p>
               <img src={reload} className="reload" onClick={e=>generatecaptcha()} alt="img-reload" />
             </div>{/*captcha*/}
      

              <div className="login-btn">
                <button className="btn-submit" type="submit">
                LOG IN  
                </button>
                <a href="#" className="forgot-pass">Forgot Password?</a>
              </div>{/*login-btn*/}
            </form>
          </div>  {/*leftbox*/}
      
            <div className="rightbox">
              <h2 className="right-h2">WELCOME!</h2>
              <p className="right-p">Enter your details and start journey with us.</p>
              <Link to='/signup'>
              <button className="right-btn">SIGN UP</button>
              </Link>
            </div>  {/*rightbox*/}
        
          </div>  {/*container*/}
          </>        
);
};

export default Login;
