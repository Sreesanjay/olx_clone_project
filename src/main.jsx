import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthContext, FirebaseContext } from './store/Context.js'
import {auth,firestore} from './firebase/config.js'
import AuthCtxt from './store/AuthCtxt.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirebaseContext.Provider value= {{auth,firestore}} >
      <AuthCtxt>
        <App/>
      </AuthCtxt>
    </FirebaseContext.Provider>
  </React.StrictMode>
)
