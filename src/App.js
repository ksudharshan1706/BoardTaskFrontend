import logo from "./logo.svg";
import "./App.css";
import Signin from "./componants/Login/Signin";
import Dashboard from "./componants/dashboard/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import BargraphHor from "./componants/dashboard/BargraphHor";

function App() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <BrowserRouter>
      <div className="App">
        {/* <BargraphHor /> */}
        <Routes>
          <Route path="/">
            <Route index element={currentUser ? <Dashboard /> : <Signin />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
