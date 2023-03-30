import AuthContext from "../../config/auth-context";
import Social from "./Social";
import { useRef,useContext, useState } from "react";
import axios from "axios"
import DropzoneComponent from './DropzoneComponent';
import LoadingModal from "./LoadingModal";
import { useDispatch } from "react-redux";
import {setLogin} from "../../state";
import AlertModal from "./AlertModal";
const Signup= ()=>{
    const [isLoading,setLoading]=useState(false);
    const [file,setFile]=useState();
    const [upload,setUpload]=useState(false);
    const[alert,setAlert]=useState(false);
    const dispatch=useDispatch();
    const authCtx=useContext(AuthContext);
    const nameRef=useRef();
    const emailRef=useRef();
    const passRef=useRef();
    const countryRef=useRef();
    let formData=new FormData();
    const handleSignup=(e)=>{
        e.preventDefault();
        if(upload){
            console.log(formData.get("picture"));
        setLoading(true);
        formData.append('name',nameRef.current.value);
        formData.append('email',emailRef.current.value);
        formData.append("pass",passRef.current.value);
        formData.append("location",countryRef.current.value);
        formData.append("picture",file,"user.png");
        axios.post("https://mensford-nofap-backend.onrender.com/signup",formData).then((response)=>{
            if(response.status===200){
                window.localStorage.setItem("nofaptoken",response.data.idToken);
                authCtx.login(response.data.idToken);
                dispatch(setLogin({
                    user:response.data.user,
                    token:response.data.id
                }))
                setLoading(false);
                window.location.replace("/");
            }
        });
    }else{
        setAlert(true);
    }
    }

    return (
        <>
        {alert&&<AlertModal message={"Upload An Image Please!"} setAlert={setAlert}/>}
        <div class="form-container sign-up-container">
        {isLoading?<LoadingModal />:<></>}
        <form>
            <h1>Create Account</h1>
            <Social />
            <span>or use your email for registration</span>
            <input type="text" placeholder="Name" ref={nameRef} />
            <input type="email" placeholder="Email" ref={emailRef} />
            <input type="password" placeholder="Password" ref={passRef} />
    
            <input type="text" placeholder="Country" ref={countryRef} />
            < DropzoneComponent formData={formData} setUpload={setUpload} setFile={setFile}/>
            <button className="btnlogin" onClick={handleSignup} style={{marginTop:"0px"}}>Sign Up</button>
        </form>
    </div></>);
}
export default Signup;