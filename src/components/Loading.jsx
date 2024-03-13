import * as React from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

export default function Loading() {
  return (
    <Box className="my-2" sx={{ width: "100%" }}>
      <LinearProgress
        sx={{
          backgroundColor: "#711010",
          "& .MuiLinearProgress-bar": {
            backgroundColor: "#FF0000",
          },
        }}
      />
    </Box>
  );
}
