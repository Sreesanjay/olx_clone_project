import { useNavigate, Link } from "react-router-dom";
import { useContext,useState } from "react";
import {signInWithEmailAndPassword} from "firebase/auth"
import { FirebaseContext } from "../../store/Context";

import OlxLogo from "/olx-logo-color.png";

export default function Login() {

const [email, setEmail] = useState('');
const [password, setPassword] = useState('') 

const navigate = useNavigate()
const {auth} = useContext(FirebaseContext)

const handleSubmit = (e) =>{
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password).then((userCredentials) =>{
        console.log(userCredentials)
        navigate('/')
    }).catch((error) =>{
        console.log(error.code)
        alert(error.message)
    })
}
  return (
    <div>
       <div className="signupParentDiv">
               <img width="200px" height="200px" src={OlxLogo}></img>
               <form onSubmit={handleSubmit}>
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
                    <button>Login</button>
               </form>
               <Link to = '/signup'>Signup</Link>
          </div>
    </div>
  )
}
