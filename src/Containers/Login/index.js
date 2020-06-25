import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/instagramLogo.png";
import { connect } from "react-redux";

function Login(props) {
  console.log(props);
  return (
    <div className="row">
      <img
        className="img-fluid col-md-8 offset-md-2 p-2"
        src={logo}
        alt="logo"
      />
      <form className="col-md-8 offset-md-2 mb-3">
        <div className="form-group">
          <label>Email or Phone</label>
          <input
            className="form-control"
            type="email"
            name="email"
            placeholder="Enter username or mobile"
            id="Email"
            //value={email}
            // onChange={(e) => { setEmail(e.target.value) }}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            className="form-control"
            type="password"
            name="password"
            placeholder="Enter password"
            id="Password"
            //value={password}
            // onChange={(e) => { setPassword(e.target.value) }}
          />
        </div>
        <Link
          to="/user/:username"
          className="btn btn-dark form-control"
          // onClick={loginHandler}
        >
          Login
        </Link>
        <div className="m-2 text-center">
          <Link to="/forget">Forget Password</Link>
        </div>
        <Link to="/signup" className="btn btn-success form-control">
          Signup
        </Link>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    Login: state.Login,
  };
};

export default connect(mapStateToProps, null)(Login);
