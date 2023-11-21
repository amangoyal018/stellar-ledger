import "./App.css";
import Dashboard from "./Components/Dashboard/Dashboard";
import { LoginSignup } from "./Components/Login-signup/LoginSignup";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<LoginSignup />} />
          <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
