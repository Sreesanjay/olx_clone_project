
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC-pDcnoTGAxcTp3eVx0nW5Jez4R1E3OfY",
  authDomain: "olx-clone-483d3.firebaseapp.com",
  projectId: "olx-clone-483d3",
  storageBucket: "olx-clone-483d3.appspot.com",
  messagingSenderId: "418818558048",
  appId: "1:418818558048:web:448126bacd80549d72db05",
  measurementId: "G-DDVSMJK5KT"
};

export const firebase =  initializeApp(firebaseConfig)
export const auth = getAuth(firebase)
export const firestore = getFirestore(firebase)