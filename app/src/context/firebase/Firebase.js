
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyAWdVqqODPKfN9fWEDWpdZ79nifOx-68WU",
  authDomain: "webgenerator-bdc94.firebaseapp.com",
  projectId: "webgenerator-bdc94",
  storageBucket: "webgenerator-bdc94.appspot.com",
  messagingSenderId: "108898027301",
  appId: "1:108898027301:web:5fe4c6b795575094753ccc",
  measurementId: "G-7H01G5V4T9"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export  const Auth = getAuth(app); 
export default app;