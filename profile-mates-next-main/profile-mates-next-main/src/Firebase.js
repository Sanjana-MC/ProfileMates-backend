// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDdrdwGEWk_Kt9DxPHGC7AvfJiC2lpmHG4",

  authDomain: "profile-mates.firebaseapp.com",

  projectId: "profile-mates",

  storageBucket: "profile-mates.appspot.com",

  messagingSenderId: "687564374469",

  appId: "1:687564374469:web:40d70ae3fa2b8d1da84bac",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
const provider = new GoogleAuthProvider();
export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;
      localStorage.setItem("name", name);
      localStorage.setItem("name", email);
      localStorage.setItem("name", profilePic);
      console.log(result.user.uid);   })
    .catch((error) => {
      console.log(error);
    });
};
