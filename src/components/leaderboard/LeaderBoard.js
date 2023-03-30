import "./leaderboard.css";
import { useEffect, useState } from "react";
import LeaderBoardProfile from "./LeaderBoardProfile";
import Navbar from "../elements/Navbar";
import Verify from "../../config/Verify";
function LeaderBoard () {
  Verify();
  const [users,setUser]=useState([]); 
  useEffect(()=>{
    fetch("https://mensford-nofap-backend.onrender.com/leaderboard",{method: "GET", headers: { Authorization: `${window.localStorage.getItem("nofaptoken")}` }}).then(results => results.json())
    .then(data => {setUser(data);})}, []); // eslint-disable-line react-hooks/exhaustive-deps
    console.log(users);
  return users.length===0?<></>:(
    <>    
    <Navbar act={"3"}/>
    <div className="leaderboard-container">
      <div className="board">
        <h1 className="leaderboard" style={{color:"white",paddingTop:"10px"}}>Leaderboard</h1>
      {users.map((item,index)=><LeaderBoardProfile key={index} ind={index} id={item.id} picPath={item.picPath} name={item.name} location={item.location} score={item.streak} />)}
      </div>
    </div>
    </>
  );
}

export default LeaderBoard;
