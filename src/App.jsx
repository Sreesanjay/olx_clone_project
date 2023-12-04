// import NavBar from "./Components/NavBar/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { onAuthStateChanged } from "firebase/auth";

import {AuthContext} from './store/Context'
import { FirebaseContext } from "./store/Context";

import "./App.css";
import SignupPage from "./Pages/SignupPage";
import LoginPage from "./Pages/LoginPage";
import HomePage from "./Pages/HomePage";
import { useEffect } from "react";
import Header from "./Components/Header/Header";

export default function App() {
     const { setUser } = useContext(AuthContext);
     const { auth } = useContext(FirebaseContext);
     useEffect(() => {
          onAuthStateChanged(auth, (user) => { 
               if (user) {
                    setUser(user)
               } else {
                  console.log("no user")
               }
          });
     });
     return (
       <div>
            <Header/>
               <Router>
                    <Routes>
                         <Route path="/" element={<HomePage />}></Route>
                         <Route path="/signup" element={<SignupPage />}></Route>
                         <Route path="/login" element={<LoginPage />}></Route>
                    </Routes>
               </Router>
          </div>
     );
}
