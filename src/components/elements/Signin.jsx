import AuthContext from "../../config/auth-context";
import Social from "./Social";
import { useRef,useContext,useState } from "react";
import {useDispatch} from "react-redux";
import {setLogin} from "../../state";
import AlertModal from "./AlertModal";
import LoadingModal from "./LoadingModal";
import axios from "axios";
const Signin= ()=>{
    const [isLoading,setLoading]=useState(false);
    const[message,setMessage]=useState("");
    const dispatch=useDispatch();
    const authCtx=useContext(AuthContext);
    const emailRef=useRef();
    const passRef=useRef();
    const handleSignin=(e)=>{
        e.preventDefault();
        setLoading(true);
        const exist={
            'email':emailRef.current.value,
            "pass":passRef.current.value};
            axios.post("https://mensford-nofap-backend.onrender.com/login",exist).then((response)=>{
            if(response.status===200){
                window.localStorage.setItem("nofaptoken",response.data.idToken);
                authCtx.login(response.data.idToken);
                dispatch(setLogin({
                    user:response.data.user,
                    token:response.data.id
                }))

                setLoading(false);
                window.location.replace("/");
            }else{
                setMessage(response.response.data);
            }       
        }).catch((e)=>setMessage(e.response.data));
        }
    return (
        <>{message.length===0?<></>:<AlertModal message={message} setMessage={setMessage}/>}
        {isLoading?<LoadingModal />:<></>}
        <div class="form-container sign-in-container">
                    <form action="#">
                        <h1>Sign in</h1>
                        <Social />
                        <span>or use your account</span>
                        <input type="email" placeholder="Email" ref={emailRef} />
                        <input type="password" placeholder="Password" ref={passRef} />
                        <a href="/">Forgot your password?</a>
                        <button className="btnlogin"  onClick={handleSignin}>Sign In</button>
                    </form>
                </div>
        </>
    )
}
export default Signin;