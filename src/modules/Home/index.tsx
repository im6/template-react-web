import { FC } from "react";
import { Box, Button, Typography, CircularProgress } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
interface IProps {
  name?: string;
}
const Home: FC<IProps> = ({ name }) => {
  const demo1State = useSelector((state: any) => state.demo1);
  const dispatch = useDispatch();
  return (
    <Box>
      <Typography>Hello, {name}. Welcome to Home!</Typography>
      <Typography>Current Value: {demo1State.value}</Typography>
      <Button
        variant="contained"
        disabled={demo1State.loading}
        sx={{ my: 3 }}
        onClick={() => dispatch({ type: "demo1/sync-add" })}
      >
        {demo1State.loading ? <CircularProgress size={24} /> : "Add async 10"}
      </Button>
    </Box>
  );
};

export default Home;
