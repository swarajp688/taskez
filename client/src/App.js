import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import {
  BrowserRouter ,
  Routes,
  Route,
} from "react-router-dom"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import NotFound from "./components/NotFound";
function App() {
  const [remember,setRemember] = useState(false)
  useEffect(() => {
    const handleTabClose = event => {
      event.preventDefault();

      console.log('beforeunload event triggered');
      localStorage.removeItem("token");
      
    };

    window.addEventListener('beforeunload', handleTabClose);
  }, []);
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home setRemember={setRemember} remember={remember}/>}></Route>
      <Route path="/dashboard" element={<Dashboard />}></Route>
      {/* error route */}
      {/* <Route path="*" element={<NotFound />}></Route> */}
    </Routes>
    </BrowserRouter>
  );
}

export default App;
