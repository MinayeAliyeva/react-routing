import { useAuth } from "../context/authcontext";
import { Navigate } from "react-router";
const PrivateRoute = ({ children }) => {
    const {user}=useAuth();
    if(!user){
return <Navigate to="/auth/login"/>
    }
  return (
    //kullanici oturum acmismi?
    //eger oturum acmissa ,yonlendirme islemi yap
    //eger oturum acmissa childreni render et
    // <div>PrivateRoute</div >


    children
  );
};

export default PrivateRoute;
