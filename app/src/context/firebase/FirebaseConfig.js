
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getStorage, uploadBytes,ref } from  'firebase/storage'
import { getFirestore } from "firebase/firestore";
import {collection , addDoc }  from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyAWdVqqODPKfN9fWEDWpdZ79nifOx-68WU",
  authDomain: "webgenerator-bdc94.firebaseapp.com",
  projectId: "webgenerator-bdc94",
  storageBucket: "webgenerator-bdc94.appspot.com",
  messagingSenderId: "108898027301",
  appId: "1:108898027301:web:5fe4c6b795575094753ccc",
  measurementId: "G-7H01G5V4T9",
};
const app = initializeApp(firebaseConfig);
export  const auth = getAuth(app); 


export  const database = getFirestore(app)
export const coll = collection(database ,"User")

export const upload = async(data,Pname,user)=>{
  try {
      await addDoc(coll, {
      id: user,
      name: Pname,
      HTML: JSON.stringify(data),
    });
    return true;
  } catch (error) {
    console.log(error);
  }

}


/*
export const  storage = getStorage(app)
export const upload = (data,Pname,User)=>{
    if(data){
    const folder = ref(storage,User+'/'+data)    
    uploadBytes(folder,data,'base64').then((rslt)=>{
      console.log(rslt)  
      
    })
    return true
}}
*/
