import { useState } from "react";
import Send from "../assets/send.svg";
const Input=(props)=>{
    const [inputText,setInputText]=useState("");
    async function handleChat(e){
        props.setLoading(true);
        e.preventDefault();
        let newChatLog=[...props.listOfMessages,{"content":`${inputText}`,"role":"user"}];
        props.setMessages(newChatLog);
        setInputText("");
        console.log(props.listOfMessages);
         const response=  await fetch("https://mensford-nofap-backend.onrender.com/message",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                message:newChatLog
            })
        });
        const reply=await response.json();
        props.setLoading(false);
        props.setMessages([...newChatLog,{"role":"assistant","content":reply.message.content}]);
        
    };
    return <>
    <div className="input">
        <input type="text" placeholder="Type Something..." value={inputText} onChange={(e)=>setInputText(e.target.value)}/>
        <div className="send">
            <button style={{display:"none"}} id="btn" onClick={handleChat}>send</button>
            <label htmlFor="btn">
                <img src={Send} alt="" />
            </label>
        </div>
    </div></>
}
export default Input;