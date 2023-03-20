
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getStorage, uploadBytes,ref} from  'firebase/storage'
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
export const  storage = getStorage(app)
export  const auth = getAuth(app); 
export const upload = (data,Pname,User)=>{
  // hna khassna nssiftu l file l api on rej3u l zip file 3ad ndekhluh l fire base 7it firebase imkn lik tmanuipuler l files ama les repo non
    if(data){
    const folder = ref(storage,User+'/'+Pname+'.rar/'+data)    
    uploadBytes(folder,data,'base64').then((rslt)=>{
      console.log(rslt)  
      
    })
    return true
}}


