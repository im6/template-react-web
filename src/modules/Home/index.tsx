import React, { useState } from "react";
import { Box, Button, Typography, CircularProgress } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
interface IProps {
  name?: string;
}
const Home: React.FC<IProps> = ({ name }) => {
  const demo1State = useSelector((state: any) => state.demo1);
  const dispatch = useDispatch();
  return (
    <Box>
      <Typography>Hello, {name}. Welcome to Home!</Typography>
      <Typography>Current Value: {demo1State.value}</Typography>
      <Button
        variant="contained"
        sx={{ my: 3 }}
        onClick={() => dispatch({ type: "demo1/sync-add" })}
      >
        Add async 10
      </Button>
      {demo1State.loading && (
        <Box>
          <CircularProgress />
        </Box>
      )}
    </Box>
  );
};

export default Home;
