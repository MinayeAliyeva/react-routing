import React from "react";
import { useAuth } from "../../context/authcontext";
import { useNavigate } from "react-router";
const Login = () => {
  const { setUser } = useAuth();
  const navigate=useNavigate()
  const loginHandle = () => {
    setUser({
      id: 1,
      username: "minayaaliyeva",
    });
    navigate('/')
  };
  return (
    <>
      <div>Login</div>
      <button onClick={loginHandle}>Giris Yap</button>
    </>
  );
};

export default Login;
