import { Button, Typography } from "@mui/material";
import React, { useState } from "react";
interface IProps {
  name?: string;
}
const Demo2: React.FC<IProps> = ({ name }) => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Typography>Hello, {name}. Welcome to Demo2</Typography>
      <Button variant="contained" onClick={() => setCount(count + 1)}>
        You clicked me {count} times
      </Button>
    </div>
  );
};

export default Demo2;
