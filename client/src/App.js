import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import {
  BrowserRouter ,
  Routes,
  Route,
} from "react-router-dom"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import NotFound from "./components/NotFound";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/dashboard" element={<Dashboard />}></Route>
      {/* error route */}
      {/* <Route path="*" element={<NotFound />}></Route> */}
    </Routes>
    </BrowserRouter>
  );
}

export default App;
