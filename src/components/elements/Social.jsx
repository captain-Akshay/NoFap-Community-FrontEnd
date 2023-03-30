// import {useEffect, useState} from "react";
import { auth,provider } from "../../config/firebase.js";
import {signInWithPopup} from "firebase/auth";
const Social=()=>{
    // const [authState,setAuth]=useState(false);
    const loginWithGoogle=(e)=>{
        e.preventDefault();
        signInWithPopup(auth,provider).then((data)=>{
        //   const userName=data._tokenResponse.displayName;
        //   const photoURL=data._tokenResponse.photoURL;
        //   const userMail=data._tokenResponse.email;
        //   const uid=data._tokenResponse.uid;
        //   const token=data._tokenResponse.idToken;
        })
    }
    return (
    <div className="social-container">
        <a href="/" className="social"><i className="fab fa-facebook-f"></i></a>
        <a onClick={loginWithGoogle} href="/" className="social"><i class="fab fa-google-plus-g"></i></a>
        <a href="/" className="social"><i class="fab fa-linkedin-in"></i></a>
    </div>
);
}
export default Social;