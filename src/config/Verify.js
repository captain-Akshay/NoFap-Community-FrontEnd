import axios from "axios";
import { useContext } from "react";
import AuthContext from "./auth-context";
async function Verify(){
    const AuthCtx=useContext(AuthContext);
    const currToken=window.localStorage.getItem("nofaptoken");
    axios.get("https://mensford-nofap-backend.onrender.com/verify/"+currToken).then((response)=>{
        if(response.status===205){
            window.localStorage.removeItem("nofaptoken");
            AuthCtx.isLoggedIn=false;
            window.location.replace("/join");
        }});
}
export default Verify;