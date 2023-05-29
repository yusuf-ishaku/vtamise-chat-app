import { data } from "autoprefixer";
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {getDatabase, set, ref, get, child } from 'firebase/database';
import {getFirestore } from "firebase/firestore";

// import { useNavigate } from "react-router-dom";
import { FcSignature } from "react-icons/fc";
import { login } from "../appstore/store";

const firebaseConfig = {
    apiKey: "AIzaSyBV9mQryKNrEMkObOxf-70pOMcV7j7tYkM",
    authDomain: "vchat-c5b3b.firebaseapp.com",
    databaseURL: "https://vchat-c5b3b-default-rtdb.firebaseio.com",
    projectId: "vchat-c5b3b",
    storageBucket: "vchat-c5b3b.appspot.com",
    messagingSenderId: "28715899102",
    appId: "1:28715899102:web:f4d2f0e403e581bc9e0a4f",
    measurementId: "G-GQJTY19DKC"
  };


  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);
  const fdb = getFirestore(app);
export const auth = getAuth(app);
export const Model = {
    smile: (anal) =>{
        // console.log(anal)
    },
    signinWithGoogle(auth, provider, navigate, dispatch){
        // console.log(auth)
    signInWithPopup(auth, provider)
    .then((result) => {
     
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      
      const user = result.user;
      // console.log(user);
      Model.setNewUser(user.displayName, user.email, "", user.photoURL, user.uid, token);
      Model.setUserPage(user.uid, dispatch);
      return navigate('/chat');
      
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
  
    },
  createAccountNormally(data, navigate, dispatch){
    let auth = getAuth(app);
    // console.log(data)
    createUserWithEmailAndPassword(auth, data.email, data.password, data.userName)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // console.log(user);
      Model.setNewUser(data.userName, data.email, data.password,"", user.uid, user.accessToken);
      Model.setUserPage(user.uid, dispatch);
      return navigate('/chat')
      // ...
     
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    })
    },
  setNewUser(username, uemail,password, imgurl, uid, act){
    set(ref(db, 'users/' + uid),{
      username: username,
      useremail: uemail,
      photoimage: imgurl,
      accessToken: act ? act: "",
      password: password ? password : ""
    })
  },
  setUserPage(id, dispatch){
    let dbref = ref(db);
    get(child(dbref,`users/${id}`)).then((snapshot) =>{
      if(snapshot.exists()){
        // console.log(snapshot.val());
        dispatch(login(snapshot.val()))
        return snapshot.val();
      }else{
        return
      }
    }).catch((error) =>{
      console.error(error);
    })
  },
  signInUserNormally(auth, email, password, dispatch, navigate){
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) =>{
      const user = userCredential.user;
      // console.log(user);
      Model.setUserPage(user.uid, dispatch);
      return navigate('/chat');
    }).catch((error) =>{
      const errorCode = error.code;
      const errorMessage = error.message;
    })
  }
}

let View = {
  
}