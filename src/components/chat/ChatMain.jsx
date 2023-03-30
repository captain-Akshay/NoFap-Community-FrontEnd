import "./styles.scss";
import Messages from "./Messages.jsx";
import Input from "./Input.jsx";
import Verify from "../../config/Verify";
import exit from "../assets/exit.png";
import { useState } from "react";
import { useNavigate } from "react-router";
const ChatMain=()=>{
    const navigate=useNavigate();
    Verify();
    const [isLoading,setLoading]=useState(false);
    const[listOfMessages,setMessages]=useState([{role:"assistant",content:"Hello I'm Siddhartha descendant to help you with anything just ask!"}]);
    return<>
    <button className="exitbtn" onClick={()=>navigate("/")}>
    <img src={exit} alt="" /><p>Exit</p></button>
    <div className="home">
        <div className="container">
            <Messages listOfMessages={listOfMessages} setMessages={setMessages} isLoading={isLoading} setLoading={setLoading}/>
            <Input listOfMessages={listOfMessages} setMessages={setMessages} isLoading={isLoading} setLoading={setLoading} />
        </div>
    </div></>;
}
export default ChatMain;