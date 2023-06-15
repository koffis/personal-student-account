import { FC } from "react";
import { Box, LinearProgress } from "@mui/material";

const Loader: FC = () => (
  <Box sx={{ width: "100%", position: "absolute" }}>
    <LinearProgress color="warning" />
  </Box>
);

export default Loader;
