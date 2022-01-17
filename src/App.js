import "./App.css";
import HomePage from "./components/HomePage";
import SignUp from "./components/SignUp";
import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Login from "./components/Login";
function App() {
  return (
    // <Routes>
    <Switch>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/signUp" exact>
        <SignUp />
      </Route>
      <Route path="/login" exact>
        <Login />
      </Route>
    </Switch>

    // </Routes>
  );
}

export default App;
