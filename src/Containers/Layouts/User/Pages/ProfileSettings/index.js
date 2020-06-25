import React from "react";
import { Link } from "react-router-dom";

function ProfileSettings() {
  return (
    <div>
      <Link to="/" className="btn btn-primary">
        Logout
      </Link>
    </div>
  );
}

export default ProfileSettings;
