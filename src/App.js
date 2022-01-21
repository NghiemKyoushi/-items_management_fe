import "./App.css";
import React, {useState} from 'react';
import HomePage from "./pages/HomePage";
import SignUp from "./pages/SignUp";
import axios from "axios";
import Home from './components/Home';
import FriendHome from "./components/FriendHome";
import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Login from "./pages/Login";
function App() {
  const [open, setOpen] = useState(false);
  const [checkUser, setCheckUser] = useState(false);
  const [nameUser, setNameUser] = useState("");
  const [visitHome, setVisitHome] = useState(false);
  const [allUser, setAllUser] = useState([]);
  //visit friend
  const [item, setItem] = React.useState([]);

  React.useEffect(() => {

    if (localStorage.getItem("username") !== null) {
      setCheckUser(true);
      setNameUser(localStorage.getItem("username"));
      getAllItem(localStorage.getItem("uid"));
      getAllUser();
    }
  }, [checkUser]);

  const setUser=() => {
    setCheckUser(true);
  }
  
  const getAllUser = async () => {
    const result = await axios.get(`http://localhost:3030/users/getAllUser/${localStorage.getItem("uid")}`);
    setAllUser(result.data.user);
    console.log("alluser",result.data.user);
  };

  const getAllItem = async (uid) => {
    const result = await axios.get(
      `http://localhost:3030/item/getAllItem/${uid}`
    );
    const data = result.data.cart;
    const formatDate = data.map((item) => {
      var startTime = new Date(item.expired_date);
      // console.log(startTime.toISOString().substring(0, 10));
      item.expired_date = startTime.toISOString().substring(0, 10);
      return item;
    });
    setItem(formatDate);
  };
  const getItemByKey = async (key)=> {
    if( key.trim() === ""){
      getAllItem(localStorage.getItem("uid"));

    }else{
      const body ={
        userID: localStorage.getItem("uid"),
        keyWord: key
      }
      const result = await axios.post("http://localhost:3030/item/searchItem", body);
      console.log(result.data.result);
      setItem(result.data.result);
    }

    
  }
 
  const logOut = () => {
    console.log("logout");
    localStorage.removeItem("username");
    localStorage.removeItem("uid");
    setCheckUser(false);
  };
  const clickHome = () => {
    setVisitHome(true)
  };
  const leaveHome =() => {
    setVisitHome(false);
    getAllItem(localStorage.getItem("uid"));
  }
  return (
    // <Routes>
    <Switch>
      <Route path="/" exact>
        <HomePage getItemByKey={getItemByKey} clickHome={clickHome} leaveHome={leaveHome} logOut={logOut} checkUser={checkUser} nameUser= {nameUser}>
        <Home visitHome ={visitHome} item={item} getAllItem={getAllItem} allUser={allUser} checkUser={checkUser}/>
        </HomePage>
      </Route>
      <Route path="/signUp" exact>
        <SignUp />
      </Route>
      <Route path="/login"  exact>
        <Login setUser={setUser} />
      </Route>
      <Route path="/visitHome/:id">
      <HomePage clickHome={clickHome} leaveHome={leaveHome} logOut={logOut} checkUser={checkUser} nameUser= {nameUser}>
        <FriendHome />
      </HomePage>
      </Route>
    </Switch>

    // </Routes>
  );
}

export default App;
