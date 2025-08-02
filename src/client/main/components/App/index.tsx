import { useDispatch, useSelector } from "react-redux";

import Routes from "../Routes/index";
import AppShell from "../../../../components/AppShell";

const App = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state: any) => state.ui.isDark);
  const handleToggleDarkMode = () => {
    dispatch({ type: "ui/toggle" });
  };

  return (
    <AppShell isDark={darkMode} onToggleDarkMode={handleToggleDarkMode}>
      <Routes />
    </AppShell>
  );
};

export default App;
