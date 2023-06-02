import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import themeOptions from "./style/theme";
import Page1 from "./pages/Page1";
import SidebarLayout from "./layout/sidebarLayout";
import FinancePage from "./pages/Finance";
import {BrowserRouter, Route,Routes} from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={
      <>
      <ThemeProvider theme={themeOptions}>
      <SidebarLayout>
        <FinancePage />
      </SidebarLayout>
    </ThemeProvider>
    </>
  } />
    <Route path='/finance' element={
    <>
    <ThemeProvider theme={themeOptions}>
      <SidebarLayout>
        <FinancePage />
      </SidebarLayout>
    </ThemeProvider>
    </>} />
    </Routes>
    
    </BrowserRouter>
  );
};

export default App;
