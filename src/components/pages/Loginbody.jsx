import {useState} from "react";
import Signup from "../elements/Signup";
import Signin from "../elements/Signin";
import Signinm from "../elements/Signinm";
const Loginbody=()=>{
  const [login, setLogin] = useState(true);
    return    <div className="loginbody">
    <div class="card">
      <div class="login__form">
          <div class={login ? "container" : "container right-panel-active"} id="container">
              <Signup />
              <Signin />
              <div className="overlay-container">
                  <div className="overlay">
                      <div className="overlay-panel overlay-left">
                      <h1>Join The King's League!!</h1>
                          <p>Join and start journey with Lions!</p>
                          <button className="ghost btnlogin" id="signIn" onClick={() => setLogin(true)}>Sign In</button>
                      </div>
                      <div className="overlay-panel overlay-right">
                          <h1>Welcome Back King!</h1>
                          <p>King Nice To See You Here Again! Lets Get Back To Hustel!</p>
                          <button className="ghost btnlogin" id="signUp" onClick={() => setLogin(false)}>Sign Up</button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div></div>
    </div>
    <div className="mobile">
    <Signinm />
    </div>
    </div>;
}
export default Loginbody;