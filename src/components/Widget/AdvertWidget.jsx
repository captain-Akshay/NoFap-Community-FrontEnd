import { Typography, useTheme } from "@mui/material";
import Button from '@mui/material/Button';
import { useSelector } from "react-redux";
import {useState,useEffect } from "react";
import FlexBetween from "../utils/FlexBetween";
import WidgetWrapper from "../utils/WidgetWrapper";
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {useDispatch} from "react-redux";
import {setLogin} from "../../state";
const AdvertWidget = () => {
  const [user, setLocalUser] = useState(useSelector((state)=>state.user));
  const [streak,setSt]= useState(user.streak);
  const userId=user.id;
  const getUser = async () => {
    const response = await fetch(`https://mensford-nofap-backend.onrender.com/user/${userId}`, {
      method: "GET",
      headers: { Authorization: `${window.localStorage.getItem("nofaptoken")}` },
    });
    const data = await response.json();
    setLocalUser(data[0]);
    dispatch(setLogin({user:data[0],token:userId}));
  };

  useEffect(() => {
    getUser();
  }, [streak]); // eslint-disable-line react-hooks/exhaustive-deps

  const dispatch=useDispatch();

  const { palette } = useTheme();
  const token =window.localStorage.getItem("nofaptoken")
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;
  let userTime=new Date(streak);
  let currTime=new Date();
  var day_diff = currTime.getDate()-userTime.getDate();
  var diff = currTime.getTime() - userTime.getTime();
  var msec = diff;
  var hh =  (msec/ 1000 / 60 / (60));
  var percentage=(hh/24)*100;
  const handleQuit= async ()=>{
    setSt(new Date());
    const response = await fetch(`https://mensford-nofap-backend.onrender.com/streak/${userId}`, {
        method: "PATCH",
        headers: {
          Authorization: `${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: userId }),
      });
      if(response.status===200){
        
      }
  }
  return (
    <WidgetWrapper>
      <FlexBetween>
      <FlexBetween>
      <div style={{ width: 100, height: 100 }}>
      <CircularProgressbar
        value={percentage===100?0:percentage}
        strokeWidth={5}
        text={`${day_diff} days`}
        styles={buildStyles({
          textColor: "white",
          pathColor: "rgba(253, 128, 1, 0.9)",
          trailColor: "rgba(128,128,128,0.2)"
        })}
      />
      </div>
      </FlexBetween>
      <FlexBetween>
        <Button variant="outlined" onClick={handleQuit}>
          Gonna Quit
          </Button>
        </FlexBetween>
      </FlexBetween>
      <FlexBetween>
        <Typography color={main}>We Gonna Do It</Typography>
        <Typography color={medium}>NoFap MothaFukka</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
      Remember your dreams and fight for them. You must know what you want from life.
       There is just one thing that makes your dream become impossible: the fear of failure
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;