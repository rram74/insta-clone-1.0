import React from "react";

function Header(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <a href="www.google.com" className="navbar-brand">
          Verma Tech
        </a>
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navid"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navid">
          {props.user}
        </div>
      </div>
    </nav>
  );
}

export default Header;
