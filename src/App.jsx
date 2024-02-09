import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div>
   
        <div className=" min-h-[calc(100vh-225px)] max-w-7xl mx-auto">
          <Outlet></Outlet>
        </div>
  
      </div>
    </>
  );
}

export default App;
