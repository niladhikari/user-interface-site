import { Outlet } from "react-router-dom";
import Navbar from "./Pages/Navbar/Navbar";
import Footer from "./Pages/Footer/Footer";

function App() {
  return (
    <>
      <div>
        <Navbar></Navbar>
        <div className=" min-h-[calc(100vh-225px)] ">
          <Outlet></Outlet>
        </div>
        <div className="mt-10">
          <Footer></Footer>
        </div>
      </div>
    </>
  );
}

export default App;
