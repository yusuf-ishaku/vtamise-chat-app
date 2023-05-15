
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";
import {getDatabase, set,ref, } from 'firebase/database';
// import { useNavigate } from "react-router-dom";
import { FcSignature } from "react-icons/fc";

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
export const auth = getAuth(app);
export const Octopus = {
    smile: (anal) =>{
        // console.log(anal)
    },
    signinWithGoogle: (auth, provider, navigate) =>{
        // console.log(auth)
    signInWithPopup(auth, provider)
    .then((result) => {
     
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      
      const user = result.user;
      console.log(user);
      Octopus.setNewUser(user.displayName, user.email, user.photoURL, user.uid)
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
  createAccountNormally: (data) =>{
    
    console.log(data)
        Octopus.createFirebase(auth, data.email, data.password)
    },
  createFirebase:  (auth, email, password) =>{
    createUserWithEmailAndPassword(auth, email, password)
    .then( async (userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);
      // ...
     
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    })
  },
  setNewUser: function(username, uemail, imgurl, uid){
    set(ref(db, 'users/' + uid),{
      username: username,
      useremail: uemail,
      photoimage: imgurl
    })
  },
}