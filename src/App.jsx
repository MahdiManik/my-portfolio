import { Outlet } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import AOS from "aos";

function App() {
  AOS.init();
  return (
    <>
      <div className="font-poppins">
        <MainLayout>
          <Outlet />
        </MainLayout>
      </div>
    </>
  );
}

export default App;
