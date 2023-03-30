import guru from "../assets/guru.png";
import profile from "../assets/profile.jpeg";
const Message=(props)=>{
    return <>
    <div className={props.role==="assistant"?"message":"message owner"}>
        <div className="messageInfo">
            <img src={props.role==="assistant"?guru:profile} alt="" />
        </div>
        <div className="messageContent">
            <p>{props.content}</p>
        </div>
    </div>
    </>
}
export default Message;