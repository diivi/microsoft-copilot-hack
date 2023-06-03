import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import themeOptions from "./style/theme";
import Page1 from "./pages/Page1";
import FinancePage from "./pages/finance";
import SidebarLayout from "./layout/sidebarLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={themeOptions}>
        <SidebarLayout>
          <Routes>
            <Route path="/" element={<Page1 />} />
            <Route path="/finance" element={<FinancePage />} />
          </Routes>
        </SidebarLayout>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
