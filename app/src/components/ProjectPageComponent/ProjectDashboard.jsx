import '../../assets/css/ProjectPage.css'

import { useEffect, useRef, useState } from 'react'
import { TbDatabaseOff} from "react-icons/tb";
import { database,coll } from '../../context/firebase/FirebaseConfig';
import {collection  ,getDocs}  from 'firebase/firestore'
import bg from '../../assets/svg/bg.svg'
import {IoMdDownload } from "react-icons/io";
import { FaCode } from "react-icons/fa";
import {BiX} from "react-icons/bi";
import RiseLoader from 'react-spinners/RiseLoader';
import axios from 'axios';



export default function ProjetDashboard() {
  const  [Show,setShow] = useState(false);
  const [pop, setpop] = useState(false)
  const [Downld, setDownld] = useState(false)
  const  [ALL,setALL] = useState([]);
  const  [Code,setCode] = useState([]);
  //katjib data mn firebase  ( smiyat dyal ga3 les projet ) 
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
  },[])
  //katjib l code html mn fire base
const getCode = async(Pid) =>{
  const Cid = localStorage.getItem('email')
  const data = await getDocs(coll).then((elm)=>{
    let AL = elm.docs.map((doc) => {if(doc.data().id== Cid && doc.data().name == Pid  ){ return doc.data().HTML}  } );
    AL = AL.filter(function( element ) {
      return element !== undefined;
   });
   const {data} = axios.post('http://localhost/WEB-GEN-API/api/v1/compiler/', {
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
                    <FaCode size="22px" title='view project' values={title}  onClick={(e)=>{setShow(true); getCode(title);   }   }  ></FaCode>
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
      {Show &&(
            <div className="m2" >
                <iframe  srcDoc={Code} >

                </iframe>
          </div>
      )}
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
                 <label htmlFor="alert"> - Download Your Project - </label>
                 <div className='choose' >
                     <button  onClick={()=>{setDownld(false)}}  >  To Projects </button>
                    <button > <a href="http://localhost/WEB-GEN-API/api/v1/download"> <IoMdDownload size="18px" /> Download </a></button>
                 </div>
                 
            </div>
           </section>  
        
      )}
      
    </div>
  )
        }