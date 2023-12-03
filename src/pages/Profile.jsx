import React from "react";
import { useAuth } from "../context/authcontext";
const Profile = () => {
  const { setUser } = useAuth();
  const logOutHandle = () => {
    setUser(false);
  };
  return (
    <div>
      Profile
      <button onClick={logOutHandle}>Log Out</button>
    </div>
  );
};

export default Profile;
