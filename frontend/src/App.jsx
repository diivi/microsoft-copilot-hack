import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import themeOptions from "./style/theme";
import Page1 from "./pages/Page1";
import FinancePage from "./pages/Finance";
import TasksPage from "./pages/TasksPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ResponsiveDrawer from "./layout/sidebarLayout";

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={themeOptions}>
        <ResponsiveDrawer>
          <Routes>
            <Route path="/" element={<Page1 />} />
            <Route path="/finance" element={<FinancePage />} />
            <Route path="/tasks" element={<TasksPage />} />
          </Routes>
        </ResponsiveDrawer>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
