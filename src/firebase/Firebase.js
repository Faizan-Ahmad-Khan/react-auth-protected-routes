import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCmpXe42Wt4ENRW3sBHIpQxYTa5SyLlpNg",
  authDomain: "fir-auth-d2ac6.firebaseapp.com",
  projectId: "fir-auth-d2ac6",
  storageBucket: "fir-auth-d2ac6.appspot.com",
  messagingSenderId: "127365784839",
  appId: "1:127365784839:web:b4de2751dfdee0364d51a2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
