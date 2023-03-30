import axios from "axios";
import react,{ useState} from "react";

const AuthContext=react.createContext();
export const AuthContextProvider=(props)=>{
    const[token,setToken]=useState(window.localStorage.getItem("nofaptoken"));
    const isLoggedIn=!!token;
    const logoutHandler=()=>{
        setToken((prevToken)=>{
            axios.get("https://mensford-nofap-backend.onrender.com/logout/"+prevToken);
            window.localStorage.removeItem("nofaptoken");
            setToken(null);
        })
    }
    const loginHandler=(token)=>{
        setToken(token);
    }
    const contextValue={
        token:token,
        isLoggedIn:isLoggedIn,
        login:loginHandler,
        logout:logoutHandler
    }    
    return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>
}

export default AuthContext;