// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { RecaptchaVerifier } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// const firebaseConfig = {
//       apiKey: "AIzaSyC0UJmhb5lcuzPn06fGxqzU-cXRaf9LsXo",
//       authDomain: "ceazur-49d54.firebaseapp.com",
//       projectId: "ceazur-49d54",
//       storageBucket: "ceazur-49d54.appspot.com",
//       messagingSenderId: "40739578123",
//       appId: "1:40739578123:web:965a390f9c71a85ee2820e",

// };

const firebaseConfig = {
      apiKey: "AIzaSyCeaGEVeUvZ-3ssdqjDDl7ffm6P8k-iZfo",
      authDomain: "myproject-71d3f.firebaseapp.com",
      projectId: "myproject-71d3f",
      storageBucket: "myproject-71d3f.appspot.com",
      messagingSenderId: "668212809957",
      appId: "1:668212809957:web:8722501f2510ca250f440c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)


// // Initialize the reCAPTCHA verifier
// let recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
//       'size': 'invisible', // Invisible reCAPTCHA
//       'callback': (response) => {
//             // reCAPTCHA solved, handle callback if needed
//             console.log("reCAPTCHA solved with response: ", response);
//       },
//       'expired-callback': () => {
//             // Handle expired reCAPTCHA if needed
//             console.log("reCAPTCHA expired");
//       }
// }, auth);

// // Export the recaptchaVerifier if needed
// export { recaptchaVerifier };