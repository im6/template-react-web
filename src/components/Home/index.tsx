import React, { useState } from "react";
import { Button, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
interface IProps {
  name?: string;
}
const Home: React.FC<IProps> = ({ name }) => {
  const homeValue = useSelector((state: any) => state.home.value);
  const dispatch = useDispatch();
  return (
    <div>
      <Typography>Hello, {name}. Welcome to Home!</Typography>
      <Typography>Current Value: {homeValue}</Typography>
      <Button
        variant="contained"
        onClick={() => dispatch({ type: "home/sync-add" })}
      >
        Add async 10
      </Button>
    </div>
  );
};

export default Home;
