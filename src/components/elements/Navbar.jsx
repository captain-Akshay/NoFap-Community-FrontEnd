import "./navbar.scss";
import {useState} from "react";
import { useSelector } from "react-redux";
import {Link,useNavigate} from "react-router-dom";
const Navbar= (props)=>{
    const navigate=useNavigate();
    const userId=useSelector((state)=>state.user.id);
    console.log(userId);
    const [act,setAct]=useState(props.act);
    function handleClick(e) {
      let temp=e.currentTarget.name;
      switch (temp) {
        case "home":
          setAct("0");
          break;
        case "like":
          setAct("1");
          break;
        case "search":
          setAct("2");
          break;
        case "profile":
          setAct("3");
          break;
        default:
          break;
      }
    };
    return (
      <div className="navbar-containier">
  <nav>
    <Link className={act==="0"?"active":""} name="home" to={"/"} onClick={handleClick}>
      <svg viewBox="0 0 100 100">
        <g transform="translate(10 5) scale(0.8 0.9)">
          <path d="M 0 30 v 70 h 100 v -70 l -50 -30 z" stroke="currentColor" stroke-width="10" fill="none"
            stroke-linejoin="round" stroke-linecap="round" />
        </g>
      </svg>
      <span>
        Home
      </span>
    </Link>
    <Link to={"/facts" }className={act==="2"?"active":""} name="like" onClick={handleClick}>
      <svg viewBox="0 0 100 100">
        <g transform="translate(5 5) scale(0.9 0.9)">
          <path d="M 50 35 a 20 20 0 0 1 50 0 q 0 25 -50 60 q -50 -35 -50 -60 a 25 25 0 0 1 50 0" stroke="currentColor"
            stroke-width="10" fill="none" stroke-linejoin="round" stroke-linecap="round" />
        </g>
      </svg>
      <span>
        Facts
      </span>
    </Link>
  
    <Link to={"/leaderboard"} className={act==="3"?"active":""} name="search" onClick={handleClick}>
      <svg viewBox="0 0 100 100">
        <g transform="translate(5 5) scale(0.9 0.9)">
          <circle cx="45" cy="38" r="38" stroke="currentColor" stroke-width="10" fill="none" />
          <line x1="66" y1="65" x2="100" y2="100" stroke="currentColor" stroke-width="10" />
        </g>
      </svg>
      <span>
        Board
      </span>
    </Link>
  
    <Link to={`/profile/${userId}`} className={act==="4"?"active":""} name="profile" onClick={() => navigate(`/profile/${userId}`)}>
      <svg viewBox="0 0 100 100">
        <g transform="translate(5 5) scale(0.9 0.9)">
          <circle cx="50" cy="35" r="18" stroke="currentColor" stroke-width="10" fill="none" />
          <rect x="15" y="75" width="70" height="50" rx="25" stroke="currentColor" stroke-width="10" fill="none" />
        </g>
      </svg>
      <span>
        Profile
      </span>
    </Link>
  </nav>
  </div>
    );
  }
export default Navbar;
