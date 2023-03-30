import "./signinm.css";
import axios from "axios";
import DropzoneComponent from "./DropzoneComponent";
import Social from "./Social";
import {useState} from "react";
import AuthContext from "../../config/auth-context";
import { useRef,useContext } from "react";
import {useDispatch} from "react-redux";
import {setLogin} from "../../state";
import LoadingModal from "./LoadingModal";
import AlertModal from "./AlertModal";
function Signinm(){
    const [m,setM]=useState(true);
    const [file,setFile]=useState();
    const[alert,setAlert]=useState(false);
    const[upload,setUpload]=useState(false);
    const [isLoading,setLoading]=useState(false);
    const dispatch=useDispatch();
    const authCtx=useContext(AuthContext);
    const emailRefL=useRef();
    const passRefL=useRef();
    const emailRef=useRef();
    const passRef=useRef();
    const nameRef=useRef();
    const countryRef=useRef();
    let formData=new FormData();
    function handleClick(e){
        e.preventDefault();
        setM(!m);
    }
    function handleLogin(e){
        e.preventDefault();
        const exist={
            'email':emailRefL.current.value,
            "pass":passRefL.current.value};
            axios.post("https://mensford-nofap-backend.onrender.com/login",exist).then((response)=>{
            if(response.status===200){
                window.localStorage.setItem("nofaptoken",response.data.idToken);
                authCtx.login(response.data.idToken);
                dispatch(setLogin({
                    user:response.data.user,
                    token:response.data.id
                }))
                window.location.replace("/");
            }       
    })}
    const handleSignup=(e)=>{
        e.preventDefault();
        if(upload){
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
                }));
                setLoading(false);
                window.location.replace("/");
            }       
        });}
        else{
            <AlertModal message={"Upload An image Please"}/>
        }
    }
return m?(
<div class="form-container sign-in-container">
<form className="mform" action="/">
    <h1>Sign in</h1>
    <span>or use your account</span>
    <input type="email" placeholder="Email" ref={emailRefL} />
    <input type="password" placeholder="Password" ref={passRefL} />
    <Social />
    <a href="/">Forgot your password?</a>
    <button className="btnlogin" type ="submit" style={{marginTop:"5px"}} onClick={handleLogin}>Sign In</button>
    <p>if you are a new user</p>
    <button className="mbtn btnlogin" onClick={handleClick} style={{marginTop:"0px"}}>Sign Up</button>
</form>
</div>):(<div class="form-container sign-in-container">
    {alert&&<AlertModal message={"Upload An Image Please!"} setAlert={setAlert}/>}
    {isLoading?<LoadingModal />:<></>}
    <form  className="mform" action="/">
        <h1>Create Account</h1>
        <Social />
        <span>or use your email for registration</span>
        <input type="text" placeholder="Name" ref={nameRef}/>
        <input type="email" placeholder="Email" ref={emailRef}/>
        <input type="password" placeholder="Password" ref={passRef}/>
        <input type="text" placeholder="Country" ref={countryRef}/>
        < DropzoneComponent formData={formData} setUpload={setUpload} setFile={setFile} />
        <button className="btnlogin" type ="submit" style={{marginTop:"5px"}} onClick={handleSignup}>Sign Up</button>
        <p>Existing User??</p>
        <button className="btnlogin mbtn" style={{marginTop:"0px"}} onClick={handleClick}>Sign In!</button>
    </form>
</div>);
}
export default Signinm;