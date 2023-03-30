import Loginbody from "./components/pages/Loginbody";
import Home from "./components/pages/Home";
import ChatMain from "./components/chat/ChatMain";
import {Routes,Route,BrowserRouter as Router} from "react-router-dom";
import Profilepage from "./components/pages/Profilepage";
import './index.css';
import PrivateRoute from "./components/utils/PrivateRoute";
import Posts from "./components/pages/Posts";
import LeaderBoard from "./components/leaderboard/LeaderBoard";
import { useMemo } from "react";
import {useSelector} from "react-redux";
import {CssBaseline,ThemeProvider} from "@mui/material";
import {createTheme} from "@mui/material/styles";
import themeSetting from "./theme.js";


function App() {
  const mode=useSelector((state)=>state.mode);
  const theme =useMemo(()=>createTheme(themeSetting(mode)),[mode]);

  return (
    <>
    <Router>
      <ThemeProvider theme ={theme}>
        <CssBaseline />
        <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home />} exact />
          <Route path="/chat" element={<ChatMain />} exact />
          <Route path="/profile/:uid" element={<Profilepage />} exact />
          <Route path="/facts" element={<Posts />} exact/>
          <Route path="/leaderboard" element={<LeaderBoard />} exact />
        </Route>
        <Route element={<Loginbody />} path="/join" />
        </Routes>
      </ThemeProvider>
    </Router>
    </>
  );
}

export default App;
