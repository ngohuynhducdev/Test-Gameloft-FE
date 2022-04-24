import React from "react";
import { Box, CircularProgress, Typography } from "@material-ui/core";
export default function CircleProgress() {
  return (
    <Box position="relative" display="inline-flex">
      <CircularProgress variant="determinate" {...props} />
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
          style={{ color: `${Colors.PRIMARY_COLOR}` }}
        >
          {props.imageNumber + 1}
        </Typography>
      </Box>
    </Box>
  );
}
