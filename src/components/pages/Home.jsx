import { Box, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import Navbar from "../elements/Navbar";
import Verify from "../../config/Verify";
import UserWidget from "../Widget/UserWidget";
import PostsWidget from "../Widget/PostsWidget";
import MyPostWidget from "../Widget/MyPostWidget";
import AdvertWidget from "../Widget/AdvertWidget";
import CornerBtn from "../cornerbtn/CornerBtn";
const Home=()=>{
    Verify();
    const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
    const picturePath = useSelector((state) => state.user.picPath);
    const _id= useSelector((state)=>state.user.id);
    return (<>
    <Box>
    <Navbar act={"0"} />
      <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="0.5rem"
        justifyContent="space-between"
      >
        <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
          <UserWidget userId={_id} picturePath={picturePath} />
        </Box>
        <Box
          flexBasis={isNonMobileScreens ? "42%" : undefined}
          mt={isNonMobileScreens ? undefined : "2rem"}
        >
           <MyPostWidget picturePath={picturePath} />
          <PostsWidget userId={_id} />
        </Box>
        {isNonMobileScreens && (
          <Box flexBasis="26%">
            <AdvertWidget />
          </Box>
        )}
      </Box>
    </Box>
    <CornerBtn />
  </>
  );
};
export default Home;