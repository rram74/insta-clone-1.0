import React from "react";
import Header from "../../../Components/Header";
import {
  AiOutlineHome,
  AiOutlineHeart,
  AiOutlineMessage,
  AiOutlineCompass,
  AiOutlineUser,
} from "react-icons/ai";

import { Link } from "react-router-dom";

// import {Home,Likes,Massages,Navigation,ProfileSettings} from './Pages'

function User(props) {
  const user = (
    <ul className="navbar-nav text-center ml-auto">
      <li className="nav-item ">
        <input
          className="form-control"
          size={20}
          maxLength={20}
          placeholder="Search"
          // value=''
        />
      </li>

      <li className="nav-item ">
        <Link to="/user/:username" className="nav-link">
          <AiOutlineHome size="40" />
        </Link>
      </li>

      <li className="nav-item ">
        <Link to="/navigation" className="nav-link">
          {" "}
          <AiOutlineCompass size="40" />
        </Link>
      </li>

      <li className="nav-item ">
        <Link to="/likes" className="nav-link">
          <AiOutlineHeart size="40" />
        </Link>
      </li>

      <li className="nav-item ">
        <Link to="/massages" className="nav-link">
          <AiOutlineMessage size="40" />
        </Link>
      </li>

      <li className="nav-item ">
        <Link to="/profile-settings" className="nav-link">
          <AiOutlineUser size="40" />
        </Link>
      </li>
    </ul>
  );

  return (
    <div>
      <Header user={user} />
      <div className="container content">{props.children}</div>
    </div>
  );
}

export default User;
