import "./App.css";
import Page1 from "./Components/Page1";
import SidebarLayout from "./layout/sidebarLayout";
import FinancePage from "./pages/finance";

const App = () => {
  return (
    <>
      {/* <div className="flex">
        <Side/>
        
      </div> */}
      <SidebarLayout>
        {/* <Page1 /> */}
        <FinancePage />
      </SidebarLayout>
    </>
  );
};

export default App;
