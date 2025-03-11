import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBWry0OpCY8zpLO9cSPKzr8MWP7As3ZafM",
  authDomain: "jarvis-database-6e8cf.firebaseapp.com",
  projectId: "jarvis-database-6e8cf",
  storageBucket: "jarvis-database-6e8cf.firebasestorage.app",
  messagingSenderId: "804736642332",
  appId: "1:804736642332:web:23abea54929b6287c0ded9",
  measurementId: "G-FGH2STYCGC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBWry0OpCY8zpLO9cSPKzr8MWP7As3ZafM",
//   authDomain: "jarvis-database-6e8cf.firebaseapp.com",
//   projectId: "jarvis-database-6e8cf",
//   storageBucket: "jarvis-database-6e8cf.firebasestorage.app",
//   messagingSenderId: "804736642332",
//   appId: "1:804736642332:web:23abea54929b6287c0ded9",
//   measurementId: "G-FGH2STYCGC"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);