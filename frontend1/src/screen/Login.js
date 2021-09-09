import React, { useEffect, useSelect, useState } from "react";
import { useDispatch} from "react-redux";
import {Link} from 'react-router-dom'
import { login } from "../actions/userActions";
import Logo from "../image/arnowa-logo-1-768x217.png";
const Login = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
//console.log(email);
  // useEffect(() => {
  //   dispatch(getUsers());

  // },[dispatch])

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };
  return (
    <div>
      <div
        className="col-12"
        style={{ backgroundColor: "#EBF4FF", height: "138px" }}
      >
        <img src={Logo} className="imageStyle" />
      </div>
      <div className="container-fluid" style={{marginTop: "-55px"}}>
        <div className="row wrapper">
          <div className="col-10 col-lg-10 col-xs-12">
            <form onSubmit={submitHandler}>
              <h1 className="mb-3" style={{ textAlign: "center" }}>
                Login
              </h1>
              <div className="form-group">
                <label htmlFor="email_field">Email</label>
                <input
                  type="email"
                  id="email_field"
                  className="form-control"
                  placeholder="mije@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="password_field">Password</label>
                <input
                  type="password"
                  id="password_field"
                  className="form-control"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <a href="#" className="float-right mb-4">
                Forgot Password?
              </a>

              <button
                id="login_button"
                type="submit"
                className="btn btn-block py-3"
              >
                LOGIN
              </button>

              <Link to="/" className="mb-3" >
                Don't jave an account? <span style={{color: '#667EEA',textAlign: "center"}}>Sign Up</span>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
