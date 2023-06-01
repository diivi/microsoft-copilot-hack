import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import themeOptions from "./style/theme";
import Page1 from "./Components/Page1";
import SidebarLayout from "./layout/sidebarLayout";
import FinancePage from "./pages/finance";

const App = () => {
  return (
    <ThemeProvider theme={themeOptions}>
      <SidebarLayout>
        {/* <Page1 /> */}
        <FinancePage />
      </SidebarLayout>
    </ThemeProvider>
  );
};

export default App;
