
import { initializeApp } from "firebase/app";
import { getFirestore} from "@firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyDsu_q1mgPeGAJ2kwlmxhlDWTlVWwUM4Jw",
    authDomain: "whatsapp-c7e76.firebaseapp.com",
    projectId: "whatsapp-c7e76",
    storageBucket: "whatsapp-c7e76.appspot.com",
    messagingSenderId: "684700327689",
    appId: "1:684700327689:web:74b2db2daef2c3ee00bdd8",
    measurementId: "G-B0SFTM177Z"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);
  
  export const db = getFirestore(app);