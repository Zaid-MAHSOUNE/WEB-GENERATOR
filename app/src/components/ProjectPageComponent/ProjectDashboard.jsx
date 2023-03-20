import '../../assets/css/ProjectPage.css'
import ProjectElement from '../ProjectPageComponent/ProjectElement'
import { ref, listAll } from 'firebase/storage'
import { storage } from '../../context/firebase/FirebaseConfig'
import { useEffect, useState } from 'react'
import { TbDatabaseOff} from "react-icons/tb";

export default function ProjetDashboard() {
  const [ALL, setALL] = useState([])
  const  [Show,setShow] = useState(false);
  useEffect(() => {
    const GetData = (User) => {
      const dt = ref(storage, User + '/')
      listAll(dt).then((res) => {
        const items = res.items.map((item) => item.name.slice(0,item.name.length-4))
        console.log(res.items.map((ite)=>ite.fullPath))
        setALL(items)
      })
    }
    
    GetData(localStorage.getItem('email'))
  }, [])


  return (
    <div className="containerr">
      <div className="m1">
        {ALL.length > 0  ? (
          ALL.map((title) => (
          <div onClick={(e)=>{setShow(!Show)}} ><ProjectElement key={title}  title={title}   /> </div>
            
          ))
        ) : (
          <div className='Alert' >
                <TbDatabaseOff size='100px' ></TbDatabaseOff>
                <h1>No project found</h1>
          </div>
        )}
      </div>
      {Show &&(
            <div className="m2">
            <iframe></iframe>
          </div>
      )}
      
    </div>
  )
        }