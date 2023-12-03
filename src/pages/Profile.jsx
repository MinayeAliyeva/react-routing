import React from "react";
import { useAuth } from "../context/authcontext";
import { Link } from "react-router-dom";
const Profile = () => {
  const { setUser, user } = useAuth();
  const logOutHandle = () => {
    setUser(false);
  };
  return (
    <div>
      Profile sayfasi <br />
      {!user && <Link to="/auth/login">Giris yap</Link>}
      {user && <button onClick={logOutHandle}>Log Out</button>}
    </div>
  );
};

export default Profile;
