import {
    ManageAccountsOutlined,
    EditOutlined,
    LocationOnOutlined,
    WorkOutlineOutlined,
  } from "@mui/icons-material";
  import { Box, Typography, Divider, useTheme } from "@mui/material";
  import UserImage from "../utils/UserImage"
  import FlexBetween from "../utils/FlexBetween";
  import WidgetWrapper from "../utils/WidgetWrapper";
  import { useEffect, useState } from "react";
  import { useNavigate } from "react-router-dom";
  import twitter from "../assets/twitter.png";
  import linkedin from "../assets/linkedin.png";
  const UserWidget = ({ userId, picturePath }) => {
    const [user, setUser] = useState(null);
    const { palette } = useTheme();
    const navigate = useNavigate();
    const dark = palette.neutral.dark;
    const medium = palette.neutral.medium;
    const main = palette.neutral.main;
  
    const getUser = async () => {
      const response = await fetch(`https://mensford-nofap-backend.onrender.com/user/${userId}`, {
        method: "GET",
        headers: { Authorization: `${window.localStorage.getItem("nofaptoken")}` },
      });
      const data = await response.json();
      console.log(data[0]);
      setUser(data[0]);
    };
  
    useEffect(() => {
      getUser();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
  
    if (!user) {
      return null;
    }
    const name=user.name;
    const viewedProfile=user.viewedProfile;
    const location=user.location;
    const mail=user.email;
    return (
        <WidgetWrapper>
          {/* FIRST ROW */}
          <FlexBetween
            gap="0.5rem"
            pb="1.1rem"
            onClick={() => navigate(`/profile/${userId}`)}
          >
            <FlexBetween gap="1rem">
              <UserImage image={picturePath} />
              <Box>
                <Typography
                  variant="h4"
                  color={dark}
                  fontWeight="500"
                  sx={{
                    "&:hover": {
                      color: palette.primary.light,
                      cursor: "pointer",
                    },
                  }}
                >
                  {name}
                </Typography>
                <Typography color={medium}>Soldier</Typography>
              </Box>
            </FlexBetween>
            <ManageAccountsOutlined />
          </FlexBetween>
          <Divider />
          {/* SECOND ROW */}
          <Box p="1rem 0">
            <Box display="flex" alignItems="center" gap="1rem" mb="0.5rem">
              <LocationOnOutlined fontSize="large" sx={{ color: main }} />
              <Typography color={medium}>{location}</Typography>
            </Box>
            <Box display="flex" alignItems="center" gap="1rem">
              <WorkOutlineOutlined fontSize="large" sx={{ color: main }} />
              <Typography color={medium}>{"Working"}</Typography>
            </Box>
          </Box>
          <Divider />

          {/* THIRD ROW */}
          <Box p="1rem 0">
            <FlexBetween mb="0.5rem">
              <Typography color={medium}>Who's viewed your profile</Typography>
              <Typography color={main} fontWeight="500">
                {Math.ceil(viewedProfile)}
              </Typography>
            </FlexBetween>
            <FlexBetween>
              <Typography color={medium}>Mail</Typography>
              <Typography color={main} fontWeight="500">
                {mail}
              </Typography>
            </FlexBetween>
          </Box>
    
          <Divider />
    
          {/* FOURTH ROW */}
          <Box p="1rem 0">
            <Typography fontSize="1rem" color={main} fontWeight="500" mb="1rem">
              Social Profiles
            </Typography>
    
            <FlexBetween gap="1rem" mb="0.5rem">
              <FlexBetween gap="1rem">
                <img src={twitter} alt="twitter" />
                <Box>
                  <Typography color={main} fontWeight="500">
                    Twitter
                  </Typography>
                  <Typography color={medium}>Social Network</Typography>
                </Box>
              </FlexBetween>
              <EditOutlined sx={{ color: main }} />
            </FlexBetween>
    
            <FlexBetween gap="1rem">
              <FlexBetween gap="1rem">
                <img src={linkedin} alt="linkedin" />
                <Box>
                  <Typography color={main} fontWeight="500">
                    Linkedin
                  </Typography>
                  <Typography color={medium}>Network Platform</Typography>
                </Box>
              </FlexBetween>
              <EditOutlined sx={{ color: main }} />
            </FlexBetween>
          </Box>
        </WidgetWrapper>
      );
    };
    
    export default UserWidget;
    