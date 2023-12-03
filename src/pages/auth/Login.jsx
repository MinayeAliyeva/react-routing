import React from "react";
import { useAuth } from "../../context/authcontext";
import { useNavigate,useLocation } from "react-router";
const Login = () => {
  const { setUser } = useAuth();
  const navigate=useNavigate()
  const location=useLocation();
  console.log(location);
  const loginHandle = () => {
    setUser({
      id: 1,
      username: "minayaaliyeva",
    });
    navigate(location?.state?.return_url || "/",{
      replace :true,
      state:{
        name:'emin'
      }
    })
  };
  return (
    <>
      <div>Login</div>
      <button onClick={loginHandle}>Giris Yap</button>
    </>
  );
};

export default Login;
