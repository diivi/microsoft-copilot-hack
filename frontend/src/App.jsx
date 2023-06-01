import "./App.css";
import SidebarLayout from "./layout/sidebarLayout";
import FinancePage from "./pages/finance";
// import FinancePage from "./pages/finance";

const App = () => {
  return (
    <>
      <SidebarLayout>
        <FinancePage />
      </SidebarLayout>
    </>
  );
};

export default App;
