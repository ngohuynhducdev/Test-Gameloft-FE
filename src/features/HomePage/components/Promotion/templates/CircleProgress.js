import React from "react";
import { Box, CircularProgress, Typography } from "@mui/material";

// interface IProps {
//   imageNumber: number
//   value: number
// }

export default function CircleProgress() {
  return (
    <Box position="relative" display="inline-flex">
      <CircularProgress variant="determinate" />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography
          variant="h4"
          component="div"
          className="typography"
          style={{ color: "#fff" }}
        >
          {/* {props.imageNumber + 1} */}
        </Typography>
      </Box>
    </Box>
  );
}