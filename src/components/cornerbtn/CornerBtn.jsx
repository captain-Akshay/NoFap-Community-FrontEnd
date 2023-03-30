import "./toggle.scss";
import {useState,useContext} from "react";
import AuthContext from "../../config/auth-context";
import { useNavigate } from "react-router";
import Backdrop from '@mui/material/Backdrop';
function CornerBtn() {
  const navigate=useNavigate();
  const [click,setClick]=useState(false);
  const authCtx=useContext(AuthContext);
  function handleClick(){
    setClick((prev)=>!prev);
  }
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleMusic = () => {
    setOpen(!open);
  };

  return (<>
    <div className="cornerbtn">
      <div className="cornerbtn-body">
        <div className={click?"cornerbtn-menu cornerbtn-open":"cornerbtn-menu"} onClick={handleClick}>
          <div className="cornerbtn-item" onClick={()=>navigate("/chat")}></div>
          <div className="cornerbtn-item" onClick={authCtx.logout} ></div>
          <div className="cornerbtn-item" onClick={handleMusic}></div>
        </div>
      </div>
    </div>
                <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
                onClick={handleClose}
                >
                  <iframe title="spotify" style={{borderRadius:"12px"}} src={"https://open.spotify.com/embed/playlist/2KrMf1aSQCPdG038JAR9MP?utm_source=generator&theme=0"} width={"37%"} height={"352"} frameBorder={"0"} allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                </Backdrop>
    </>
  );
}

export default CornerBtn;
