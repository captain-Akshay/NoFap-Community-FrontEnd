import React from 'react'
import WidgetWrapper from '../utils/WidgetWrapper';
import FlexBetween from '../utils/FlexBetween';
import UserImage from '../utils/UserImage';
import { useNavigate } from 'react-router';
import { Box, Typography, useTheme } from "@mui/material";
function LeaderBoardProfile(props) {
    const { palette } = useTheme();
    const navigate = useNavigate();
    const dark = palette.neutral.dark;
    const medium = palette.neutral.medium;
    let userTime=new Date(props.score);
    let currTime=new Date();
    var diff = currTime.getDate()-userTime.getDate();
    var rank={}
    if(props.ind===0)rank={backgroundColor: 'gold'};
    if(props.ind===1)rank={backgroundColor: '#C0C0C0'};
    if(props.ind===2)rank={backgroundColor: '#CD7F32'};
  return (
    <Box
    width="100%"
    padding="0.5rem 6%"
    display={"flex"}
    gap="0.5rem"
    justifyContent="center"
  >
    <Box flexBasis={"46%"} sx={rank}>
    <WidgetWrapper>
      <FlexBetween
        gap="0.5rem"
        pb="1.1rem"
        onClick={() => navigate(`/profile/${props.id}`)}
      >
        <FlexBetween gap="1rem">
          <UserImage image={props.picPath} />
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
              {props.name}
            </Typography>
            <Typography color={medium}>{props.location}</Typography>
          </Box>
        </FlexBetween>
        <Typography color={dark}>{diff} days</Typography>
      </FlexBetween>
    </WidgetWrapper>
    </Box>
  </Box>
  )
}
export default LeaderBoardProfile;