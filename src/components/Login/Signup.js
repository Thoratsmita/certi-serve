import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import logo from '../../images/certi-serv-logo.png';
import mobile from '../../images/Phone_icon.png';
import user from '../../images/User_icon.png';
import reload from '../../images/Reload_icon.png';
import Email from '../../images/Email_icon.png';
import key from '../../images/Key_icon.png';
import text from '../../images/Text_icon.png';
import './signup.css';
import { useHistory } from 'react-router';


const Signup = (props) => {
  const user_type =props.location.state
  const [gencaptcha, setGencaptcha] = useState('');
  const [data, setData] = useState({
    username: '',
    email: '',
    password: '',
    repeatpassword: '',
    phone_number: '',
    captcha: '',
    checkbox: false,
  });

  // const [checkbox, setCheckbox] = useState(false);
 let history = useHistory()
  const generatecaptcha = () => {
    const c = Math.random().toString(36).substring(7);
    setGencaptcha(c);
  };

  useEffect(() => {
    generatecaptcha();
  }, []);

  const {
    username,
    email,
    password,
    repeatpassword,
    phone_number,
    captcha,
    checkbox,
  } = data;

  const HandleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
      checkbox: e.target.checked,
    });
  };

  // const HandleCheckbox=(e)=>{
  //   setCheckbox({  [e.target.name]:e.target.checked});
  // }

  const HandleSubmit = async (e) => {
    e.preventDefault();
    if (
      !password ||
      !captcha ||
      !repeatpassword ||
      !username ||
      !phone_number ||
      !checkbox
    ) {
      toast.error('Fill all fields');
      console.log('form not submitted');
    } else if (password !== repeatpassword) {
      toast.error("password doesn't match");
      console.log('password doesnt match');
      // setData({ username:username, email:email, password:password, repeatpassword:"", phone_number:phone_number, captcha:captcha, checkbox })
      setData({ ...data, repeatpassword: '' });
    } else if (phone_number.length > 11) {
      toast.error('Invalid Contact Number');
    } else if (captcha !== gencaptcha) {
      toast.error("Captcha doesn't match");
      console.log('captcha doesnt match');
      setData({ ...data, captcha: '' });
    } else {
      // console.log(data);
      console.log('form submitted');
      toast.success('Form submitted');

      const newUser = { username, email, password, phone_number,user_type};

      try {
        const config = {
          headers: {
            'Content-Type': 'application/json',
          },
        };

        const sendUser = JSON.stringify(newUser);

        const res = await axios.post('/api/userscreate', sendUser, config).then(res=>{
          history.push('/')
        })
        // alert(res.data.message);
      } catch (err) {
        alert('invalid input');
      }
    }
    generatecaptcha();
  };

  return (
    <>
      <ToastContainer
        className="myToast"
        position="top-center"
        autoClose={1500}
        transition={Flip}
      />
      <div className="regcontainer">
        <div className="regleftbox">
          <img className="regmainlogo" src={logo} alt="Logo" />
          <form className="regform" onSubmit={HandleSubmit}>
            <div className="regforminput">
              <span className="regicon">
                <img className="regimageicons" src={user} alt="username" /> |{' '}
              </span>
              <input
                type="text"
                name="username"
                className="reginput"
                value={username}
                onChange={HandleChange}
                autoComplete="off"
                placeholder="Enter User Name"
              />
            </div>

            <div className="regforminput">
              <span className="regicon">
                <img className="regimageicons" src={key} alt="password" />|
              </span>
              <input
                type="password"
                name="password"
                className="reginput"
                value={password}
                onChange={HandleChange}
                autoComplete="off"
                placeholder="Enter Password"
              />
            </div>

            <div className="regforminput">
              <span className="regicon">
                <img
                  className="regimageicons"
                  src={key}
                  alt="repeat-password"
                />
                |
              </span>
              <input
                type="password"
                name="repeatpassword"
                className="reginput"
                value={repeatpassword}
                onChange={HandleChange}
                autoComplete="off"
                placeholder="Re-enter Password"
              />
            </div>

            <div className="regforminput">
              <span className="regicon">
                <img
                  className="regimageicons"
                  src={mobile}
                  alt="mobile-number "
                />{' '}
                |{' '}
              </span>
              <input
                type="text"
                name="phone_number"
                pattern="[0-9]{10}"
                className="reginput"
                value={phone_number}
                onChange={HandleChange}
                autoComplete="off"
                placeholder="Enter Mobile no."
              />
            </div>

            <div className="regforminput">
              <span className="regicon">
                <img className="regimageicons" src={Email} alt="email" /> |{' '}
              </span>
              <input
                type="email"
                name="email"
                className="reginput"
                value={email}
                onChange={HandleChange}
                autoComplete="off"
                placeholder="Enter Email-id(optional)"
              />
            </div>

            <div className="regforminput">
              <span className="regicon">
                <img className="regimageicons" src={text} alt="email" />|
              </span>
              <input
                type="text"
                name="captcha"
                className="reginput"
                value={captcha}
                onChange={HandleChange}
                autoComplete="off"
                placeholder="Enter Captcha"
              />
            </div>

            <div className="regcaptcha">
              <p className="regleftP">{gencaptcha}</p>
              <img
                src={reload}
                className="regreloads"
                onClick={(e) => generatecaptcha()}
                alt="img-reload"
              />
            </div>
            {/*captcha*/}

            <div className="regcheckboxinput">
              <div className="regcheckbox">
                <span className="regcheckboxspan">
                  <input
                    name="checkbox"
                    className="reginputcheckbox"
                    checked={checkbox}
                    onChange={HandleChange}
                    type="checkbox"
                  />
                  i accept the{' '}
                  <span className="terms-color">Terms & Conditons</span>
                </span>
              </div>
              <button className="regbtn" type="submit">
                REGISTER
              </button>
            </div>
            {/*register-btn*/}
          </form>
        </div>{' '}
        {/*leftbox*/}
        <div className="regrightbox">
          <h2 className="regrightH2">WELCOME!</h2>
          <p className="regrightP">
            Enter your details and start journey with us.
          </p>
          <Link to="/login">
            <button className="regrightbtn">LOG IN </button>
          </Link>
        </div>{' '}
        {/*rightbox*/}
      </div>{' '}
      {/*container*/}
    </>
  );
};

export default Signup;
