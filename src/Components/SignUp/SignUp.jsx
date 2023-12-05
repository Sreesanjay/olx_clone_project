import { useState, useContext } from "react";
import { FirebaseContext } from "../../store/Context";
import { createUserWithEmailAndPassword ,updateProfile} from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate ,Link} from 'react-router-dom';

import OlxLogo from "/olx-logo-color.png";
import "./SignupPage.css";
export default function SignUp() {
  const navigate = useNavigate();
  const [username, setusername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const { auth, firestore } = useContext(FirebaseContext);

  function handleSubmit(e) {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password).then(async (result) => {
      await updateProfile(auth.currentUser, { displayName: username })
      addDoc(collection(firestore, "users"), {
        id: result.user.uid,
        username,
        phone,
      }).then(() => {
        navigate('/login')
      });
    }
    );
  }
  return (
    <div className="signupParentDiv">
      <img width="200px" height="200px" src={OlxLogo}></img>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fname">username</label>
        <br />
        <input
          className="input"
          type="text"
          id="name"
          value={username}
          name="name"
          onChange={(e) => setusername(e.target.value)}
        />
        <br />
        <label htmlFor="fname">Email</label>
        <br />
        <input
          className="input"
          type="email"
          value={email}
          id="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label htmlFor="lname">Phone</label>
        <br />
        <input
          className="input"
          type="number"
          value={phone}
          id="phone"
          name="phone"
          onChange={(e) => setPhone(e.target.value)}
        />
        <br />
        <label htmlFor="lname">Password</label>
        <br />
        <input
          className="input"
          type="password"
          value={password}
          id="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <button>Signup</button>
      </form>
      <Link to = '/login'>Login</Link>
    </div>
  );
}
