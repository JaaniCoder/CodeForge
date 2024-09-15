import { getApps, getApp, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCW4xknJBd0rrkci007oyVD_RMRaWEylvg",
    authDomain: "code-editor-13791.firebaseapp.com",
    projectId: "code-editor-13791",
    storageBucket: "code-editor-13791.appspot.com",
    messagingSenderId: process.env.MESSAGESENDERID,                  
    appId: "1:543112819336:web:d612d875a2c84e8dfca53d",
  };

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };