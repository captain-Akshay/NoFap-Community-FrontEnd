import { Outlet,Navigate } from "react-router";
import AuthContext from "../../config/auth-context";
import { useContext } from "react";
const PrivateRoute=()=>{
    const authCtx=useContext(AuthContext);
    return(
        authCtx.isLoggedIn?<Outlet />:<Navigate to="/join"/>
    )
}
export default PrivateRoute;
