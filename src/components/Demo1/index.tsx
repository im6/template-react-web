import { Button, Typography } from "@mui/material";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
interface IProps {
  name?: string;
}
const Demo1: React.FC<IProps> = ({ name }) => {
  const value = useSelector((state: any) => state.demo1.value);
  const dispatch = useDispatch();
  return (
    <div>
      <Typography sx={{ mb: 3 }}>Hello, {name}. Welcome to Demo 1</Typography>
      <Button
        variant="contained"
        onClick={() => dispatch({ type: "demo1/add" })}
      >
        state value: {value}
      </Button>
    </div>
  );
};

export default Demo1;
