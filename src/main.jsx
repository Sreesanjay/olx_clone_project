import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { FirebaseContext } from './store/Context.js'
import {auth,firestore,storage} from './firebase/config.js'
import AuthCtxt from './store/AuthCtxt.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirebaseContext.Provider value= {{auth,firestore,storage}} >
      <AuthCtxt>
        <App/>
      </AuthCtxt>
    </FirebaseContext.Provider>
  </React.StrictMode>
)
