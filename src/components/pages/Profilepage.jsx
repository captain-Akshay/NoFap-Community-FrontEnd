import { Box, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Navbar from "../elements/Navbar";
import MyPostWidget from "../Widget/MyPostWidget";
import PostsWidget from "../Widget/PostsWidget";
import UserWidget from "../Widget/UserWidget";

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const userId  = useParams().uid;
  const token = window.localStorage.getItem("nofaptoken");
  const localUser = useSelector((state) => state.user.id);
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const isUser=Boolean(userId===localUser);
  const getUser = async () => {
    const response = await fetch(`https://mensford-nofap-backend.onrender.com/user/${userId}`, {
      method: "GET",
      headers: { Authorization: `${token}` ,User:`${isUser}`},
    });
    const data = await response.json();
    setUser(data[0]);
  };

  useEffect(() => {
    getUser();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (!user) return null;

  return (
    <Box>
      <Navbar act={isUser?"4":"none"}/>
      <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="2rem"
        justifyContent="center"
      >
        <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
          <UserWidget userId={userId} picturePath={user.picPath} />
          <Box m="2rem 0" />
        </Box>
        <Box
          flexBasis={isNonMobileScreens ? "42%" : undefined}
          mt={isNonMobileScreens ? undefined : "2rem"}
        >
          {isUser&&<MyPostWidget picturePath={user.picPath} />}
          <Box m="2rem 0" />
          <PostsWidget userId={userId} isProfile />
        </Box>
      </Box>
    </Box>
  );
};

export default ProfilePage;