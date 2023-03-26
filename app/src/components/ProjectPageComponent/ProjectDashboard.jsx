import '../../assets/css/ProjectPage.css'

import { useEffect, useRef, useState } from 'react'
import { TbDatabaseOff} from "react-icons/tb";
import { database,coll } from '../../context/firebase/FirebaseConfig';
import {doc,deleteDoc,getDocs}  from 'firebase/firestore'
import bg from '../../assets/svg/bg.svg'
import {IoMdDownload } from "react-icons/io";
import { GoCloudDownload } from "react-icons/go";
import {RiDeleteBin5Line} from "react-icons/ri";
import RiseLoader from 'react-spinners/RiseLoader';
import axios from 'axios';



export default function ProjetDashboard() {
  const [pop, setpop] = useState(false)
  const [pop2, setpop2] = useState(false)
  const [Downld, setDownld] = useState(false)
  const  [ALL,setALL] = useState([]);

  //katjib smiyat dyal all projects mn firebase  
  useEffect(()=>{
      const GetData = async (Cid) => {
        const data = await getDocs(coll).then((elm)=>{
          let AL = elm.docs.map((doc) => {if(doc.data().id==Cid){ return doc.data().name}  } );
          AL = AL.filter(function( element ) {
            return element !== undefined;
         });
         setALL(AL)
        })
        
    }
   GetData(localStorage.getItem('email'))
  },[pop2])
  //katjib l code html mn fire base
const getCode = async(Pid) =>{
  setpop(true)
  const Cid = localStorage.getItem('email')
  const data = await getDocs(coll).then((elm)=>{
    let AL = elm.docs.map((doc) => {if(doc.data().id== Cid && doc.data().name == Pid  ){ return doc.data().HTML}  } );
    AL = AL.filter(function( element ) {
      return element !== undefined;
   });
   const {data} = axios.post('http://localhost/doc/WEB-GEN-API/api/v1/compiler/', {
    body: JSON.stringify(JSON.parse(AL))
  }, {
    headers: {
      'Content-Type': 'application/json'
    }
}).then((res)=>{
  console.log(res.data)
  setpop(false)
  setDownld(true)
})  
  })
}
//kat delete l code mn firebase
const deleteCode = async (id)=>{
  setpop2(true)
  const Cid = localStorage.getItem('email')
  const data = await getDocs(coll).then((elm)=>{
    let AL = elm.docs.map((docu) => {if(docu.data().id== Cid && docu.data().name == id  ){   deleteDoc(doc(database,"User",docu.id))   }  } );
  }).then((res)=>{
      setpop2(false)
  })
}


  return (
    <div className="containerr"  >
      <div className="m1">
      {ALL.length > 0  ? (
          ALL.map((title) => (      
            <div className="main"  key={title}  >
            <img src={bg} ></img>
            <div className="down">
                <div className="title">
                        <h3> {title}</h3>
                </div>  
                <div className="tools">
                    <IoMdDownload size="22px" title='download'  values={title} onClick={()=>getCode(title)}  ></IoMdDownload>
                    <RiDeleteBin5Line size="22px" title='Delete'  values={title} onClick={()=>deleteCode(title)}  >  </RiDeleteBin5Line>
                </div>
            </div>
        </div>
          ))
        ) : (
          <div className='Alert' >
                <TbDatabaseOff size='100px' ></TbDatabaseOff>
                <h1>No project found</h1>
          </div>
        )}
      </div>
      {pop &&(
             <section  className='pop' >
             <div>
                  <RiseLoader
                    color="#1CB0F6"
                    speedMultiplier={0.9}
                  />
                  <label htmlFor="alert">  Generating the project </label>
             </div>
         </section>  
      )}
      {Downld && (
            <section  className='pop' >
            <div>
                  <label> <GoCloudDownload  size="70px" />  </label><br/>
                 <label htmlFor="alert"> - Download Your Project - </label>
                 <div className='choose' >
                     <button  onClick={()=>{setDownld(false)}}  >  To Projects </button>
                    <button > <a  href="http://localhost/doc/WEB-GEN-API/api/v1/download"> <IoMdDownload size="18px" /> Download </a></button>
                 </div>
                 
            </div>
           </section>  
        
      )}
      {pop2 &&(
             <section  className='pop' >
             <div>
                  <RiseLoader
                    color="#1CB0F6"
                    speedMultiplier={0.9}
                  />
                  <label htmlFor="alert">  Deleting Project </label>
             </div>
         </section>  
      )}
      
    </div>
  )
        }