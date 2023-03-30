import React from 'react'
import Navbar from '../elements/Navbar'
import FlexBetween from '../utils/FlexBetween';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router';
import { useTheme } from '@emotion/react';
function Posts() {
  const theme = useTheme();
  const primaryLight = theme.palette.primary.light;
  const navigate=useNavigate();
  return (
    <>
    <Navbar act={"2"}/>
    <FlexBetween gap="1.75rem">
        <Typography
          fontWeight="bold"
          fontSize="clamp(1rem, 2rem, 2.25rem)"
          color="primary"
          onClick={() => navigate("/")}
          sx={{
            "&:hover": {
              color: primaryLight,
              cursor: "pointer",
            },
          }}
        >
          Coming Soon!
        </Typography>
    </FlexBetween>
    </>
  )
}

export default Posts;