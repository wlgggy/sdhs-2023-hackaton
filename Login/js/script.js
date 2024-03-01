// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSPRl5KCFbjKnPSV2Txmod5PD4iI8nZjQ",
  authDomain: "login-cfb2a.firebaseapp.com",
  projectId: "login-cfb2a",
  storageBucket: "login-cfb2a.appspot.com",
  messagingSenderId: "448182228538",
  appId: "1:448182228538:web:eab7fb16afb17133878703",
  measurementId: "G-SYG83SFM66",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

document.getElementById("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const email = document.getElementById("signUpEmail").value;
  const password = document.getElementById("signUpPassword").value;
  const auth = getAuth();

  const emailAddress = email.split("@")[1];

  if (emailAddress !== "sdh.hs.kr") {
    return;
  }
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(userCredential);
      // Signed in
      const user = userCredential.user;
      console.log(user);
      window.location = "./Login.html";
      // ...
    })
    .catch((error) => {
      console.log("error");
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorMessage);
    });

  console.log(email, password);
});
