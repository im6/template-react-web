import { Button } from "@mui/material";
import React, { useState } from "react";
interface LayoutProps {
  name?: string;
}
const Hello: React.FC<LayoutProps> = ({ name }) => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h3>Hello, {name}</h3>
      <Button variant="contained" onClick={() => setCount(count + 1)}>
        You clicked me {count} times
      </Button>
    </div>
  );
};

export default Hello;
