import React from "react";
import instaLogo from "../../../assets/images/instagramHomepage.jpg";
import Login from "../../Login";

function Main(props) {
  return (
    <div>
      <div className="container Main border bg-white rounded">
        <div className="row">
          <div className="col-md-6">
            <img className="img-fluid p-2 h-100" src={instaLogo} alt="logo" />
          </div>
          <div className="col-md-6">
            <Login />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
