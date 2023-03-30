import Message from "./Message.jsx";
import TextLoader from "./TextLoader";
const Messages=(props)=>{
    return <div className={"messages"}>
        {props.listOfMessages.map((item,index)=><Message key={index} content={item.content} role={item.role}/>)}
        {props.isLoading&&<TextLoader />}
    </div>
}
export default Messages;