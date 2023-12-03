import { createContext, useContext, useEffect } from "react";
import { useState } from "react";
const Context = createContext();

export  const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user'))||false);
  useEffect(()=>{
    localStorage.setItem('user',JSON.stringify(user))
  },[user])
  const data = {
    user,
    setUser,
  };
  return <Context.Provider value={data}>
    {children}
  </Context.Provider>;
};

export  const useAuth =()=>useContext(Context);