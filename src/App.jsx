// import NavBar from "./Components/NavBar/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { onAuthStateChanged } from "firebase/auth";

import { AuthContext } from './store/Context'
import { FirebaseContext } from "./store/Context";
import  Post  from "./store/PostContext";

import "./App.css";
import SignupPage from "./Pages/SignupPage";
import LoginPage from "./Pages/LoginPage";
import HomePage from "./Pages/HomePage";
import { useEffect } from "react";
import Header from "./Components/Header/Header";
import CreatePage from "./Pages/CreatePage";
import ViewPostPage from "./Pages/ViewPostPage";

export default function App() {
     const { setUser } = useContext(AuthContext);
     const { auth } = useContext(FirebaseContext);
     useEffect(() => {
          onAuthStateChanged(auth, (user) => {
               if (user) {
                    // console.log(user)
                    setUser(user)
               } else {
                    console.log("no user")
               }
          });
     });
     return (
          <div>
               <Post>
                    <Router>
                         <Routes>
                              <Route exact path="/" element={<HomePage />}></Route>
                              <Route path="/signup" element={<SignupPage />}></Route>
                              <Route path="/login" element={<LoginPage />}></Route>
                              <Route path="/create" element={<CreatePage />}></Route>
                              <Route path="/view" element={<ViewPostPage />}></Route>
                         </Routes>
                    </Router>
               </Post>
          </div>
     );
}
