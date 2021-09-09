import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import logo from '../../images/certi-serv-logo.png';
import reload from '../../images/Reload_icon.png';
import user from '../../images/User_icon.png';
import key from '../../images/Key_icon.png';
import text from '../../images/Text_icon.png';
import './login.css';
import { useHistory } from 'react-router';

const Login = () => {
  const [gencaptcha, setGencaptcha] = useState('');
  const [data, setData] = useState({
    username: '',
    password: '',
    captcha: '',
  });
  let history = useHistory();

  const generatecaptcha = () => {
    const c = Math.random().toString(36).substring(7);
    setGencaptcha(c);
  };

  useEffect(() => {
    generatecaptcha();
  }, []);

  const { username, password, captcha } = data;

  const HandleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !password || !captcha) {
      toast.error('Fill all fields');
      console.log('form not submitted');
    } else if (captcha !== gencaptcha) {
      toast.error("Captcha doesn't match");
      console.log('form not submitted');
      setData({ ...data, captcha: '' });
    } else {
      const existingUser = { username, password };
      // toast.success('form submitted');

      try {
        const config = {
          headers: { 'Content-Type': 'application/json' },
        };
        const body = JSON.stringify(existingUser);

        const res = await axios.get('/api/usersdisplay', config, body)
        .then(res=>{
          console.log('form submitted');
          history.push('/')
        })
      } catch (error) {
        alert(error);
      }
    }

    {
      /*setData({ email: "", password: "", captcha: "" });*/
    }
    generatecaptcha();
  };

  return (
    <>
      <ToastContainer
        className="myToast"
        position="top-center"
        autoClose={1000}
        transition={Flip}
      />
      <div className="Logincontainer">
        <div className="Loginleftbox">
          <img className="Loginmainlogo" src={logo} alt="Logo" />
          <form className="Loginform" onSubmit={HandleSubmit}>
            <div className="Loginforminput">
              <span className="Loginicon">
                <img className="Loginimageicons" src={user} alt="email" /> |{' '}
              </span>
              <input
                type="text"
                name="username"
                className="Logininput"
                value={username}
                onChange={HandleChange}
                autoComplete="off"
                placeholder="Enter Usename"
              />
            </div>

            <div className="Loginforminput">
              <span className="Loginicon">
                <img className="Loginimageicons" src={key} alt="email" />|
              </span>
              <input
                type="password"
                name="password"
                className="Logininput"
                value={password}
                onChange={HandleChange}
                autoComplete="off"
                placeholder="Enter Password"
              />
            </div>

            <div className="Loginforminput">
              <span className="Loginicon">
                <img className="Loginimageicons" src={text} alt="email" />|
              </span>
              <input
                type="text"
                name="captcha"
                className="Logininput"
                value={captcha}
                onChange={HandleChange}
                autoComplete="off"
                placeholder="Enter Captcha"
              />
            </div>

            <div className="Logincaptcha">
              <p className="LoginleftP">{gencaptcha}</p>
              <img
                src={reload}
                className="Loginreloads"
                onClick={(e) => generatecaptcha()}
                alt="img-reload"
              />
            </div>
            {/*captcha*/}

            <div className="Loginbtn">
              <button className="Loginbtnsubmit" type="submit">
                LOG IN
              </button>
              <a href="#" className="Loginforgotpass">
                Forgot Password?
              </a>
            </div>
            {/*login-btn*/}
          </form>
        </div>{' '}
        {/*leftbox*/}
        <div className="Loginrightbox">
          <h2 className="LoginrightH2">WELCOME!</h2>
          <p className="LoginrightP">
            Enter your details and start journey with us.
          </p>
          <Link to="/signup">
            <button className="Loginrightbtn">SIGN UP</button>
          </Link>
        </div>{' '}
        {/*rightbox*/}
      </div>{' '}
      {/*container*/}
    </>
  );
};

export default Login;
