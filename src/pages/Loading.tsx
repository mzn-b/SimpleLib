import { CircularProgress } from "@mui/material";
import React from "react";

const Loading: React.VFC<{}> = () => {
  return (
    <div>
      <CircularProgress />
    </div>
  );
};

export default Loading;
