import "./App.css";
import HomePage from "./components/HomePage";
import SignUp from "./components/SignUp";
import { BrowserRouter as Router,Routes, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/signUp" element={<SignUp/>}/>
      
    </Routes>
  );
}

export default App;
