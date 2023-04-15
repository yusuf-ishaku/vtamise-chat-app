
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
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
export const Octopus = {
    smile: (anal) =>{
        console.log(anal)
    },
    signinWithGoogle: (auth, provider, navigate) =>{
        // console.log(auth)
    signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log(user);
      
    //   console.log("fran");
      return navigate('/chat');
      // IdP data available using getAdditionalUserInfo(result)
      // ...
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
  
    }
    
}