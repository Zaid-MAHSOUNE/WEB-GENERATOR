import "../../assets/css/Navbar.css";
import  userid from '../../assets/img/userid.png';

import { NavLink ,useNavigate } from "react-router-dom";
import { getAuth, signOut , updateProfile } from 'firebase/auth';
import {ref,listAll, getDownloadURL } from  'firebase/storage'
import { auth , uploadPic , storage, update ,database,coll} from './../../context/firebase/FirebaseConfig'
import {doc,deleteDoc,getDocs}  from 'firebase/firestore'
import { BiLibrary,BiHome ,BiLogOut,BiMessageRounded ,BiCaretDown,BiUserCircle,BiX,BiTrash} from "react-icons/bi";
import { HiOutlineEmojiSad} from 'react-icons/hi'
import {MdOutlineModeEdit} from 'react-icons/md'
import {RxUpdate} from 'react-icons/rx'
import MoonLoader from 'react-spinners/MoonLoader';
import { useEffect, useState } from "react";
function Navbar(){
    const [currentName,setCurrentName]=useState('')
    const [currentPic,setCurrentPic]=useState('')
    const [opt,setopt]=useState(false);
    const [picloading,setpicLoading]=useState(false);
    const [Dtl,setDtl]=useState(false);
    const [Conf,setConf]=useState(false);
    const [Alert,setAlert]=useState(false);
    const nav = useNavigate();
    useEffect(()=>{
            UpdtUserPic();
    },[currentPic])


    const signout = async ()=>{
        try{
        await signOut(auth)
        nav('/');
        localStorage.clear();
        window.location.reload();
        setopt(false) 
        }
        catch(error){
            console.log(error)
        }
    }
    const DltUser = async ()=>{
            await auth.currentUser.delete().then((res)=>{
                setConf(false)
                setAlert(true)
                setDtl(false)
                console.log('user deleted');
                setTimeout(()=>{
                    signout()    
                },1000)
            })
            const Cid = localStorage.getItem('email')
            const data = await getDocs(coll).then((elm)=>{
              let AL = elm.docs.map((docu) => {if(docu.data().id== Cid ){   deleteDoc(doc(database,"User",docu.id))   }  } );
            })
    }
    const UpdtUserPic = async()=>{
        setpicLoading(true)
       
     await uploadPic(currentPic, localStorage.getItem('email')).then((res)=>{
        
            const ListRef = ref(storage , localStorage.getItem('email')+'/')
             listAll(ListRef).then((res)=>{
                setpicLoading(false)
              res.items.forEach((itm)=>{
                    if(itm.name===currentPic.name){
                          getDownloadURL(itm).then((url)=>{
                                localStorage.setItem('pic',url)
                                updateProfile(auth.currentUser , {
                                photoURL : url
                                
                            }).then(()=>{
                                console.log('updated')
                                setCurrentPic(url)
                              
                                
                            })

                         })
                    }
                      
              })
            })     
        }) 
    }
    const UpdtUser = async ()=>{
                                updateProfile(auth.currentUser , {
                                displayName : currentName,    
                            }).then(()=>{
                                localStorage.setItem('username',auth.currentUser.displayName)
                                setDtl(false)
                                console.log('updated')
                            })
    }
    return (
        <>
           <nav>
                <div className="logo"> 
                    <h1>WEB GENERATOR</h1>
                  
                </div>
                <div  className="pages">
                    <ul  >
                        <li><NavLink to='/' > <BiHome size='25px' />   Home</NavLink></li>
                        <li><NavLink to='/Projects' ><BiLibrary size='25px' /> My Projects</NavLink></li>
                        <li><NavLink to='/Contact' ><BiMessageRounded size='25px' /> Contact Us</NavLink></li>
                    </ul>
                    {localStorage.length < 1 ?
                         ( <button className="button-log" role="button"> <NavLink to='/Login' > Login</NavLink></button> )
                    : 
                    localStorage.getItem("pic") ? <img src={localStorage.getItem("pic")} ></img> : <img src={userid} ></img> }   {localStorage.getItem("username") != null  ? <><p>{localStorage.getItem("username")}  </p><BiCaretDown size='24'   onClick={(e)=>setopt(!opt)} /></> : null    
                   }
                   
                </div>
                
                {opt ? (
                        <div className="opt">
                        <ul>
                            <li onClick={(e)=>{setDtl(!Dtl); console.log(Dtl) }} > <BiUserCircle size='20px'/> Account </li>
                            <li onClick={signout}  > <BiLogOut  size='20px' ></BiLogOut> Logout</li>
                        </ul>
                    </div>
                ):null}
              {Dtl && Conf==false ?(
                   <div className="Accountpop"  >
                        <section>
                            <BiX onClick={(e)=>{setDtl(!Dtl)}} size='35px' />
                            <div >
                            {picloading  ? ( <MoonLoader></MoonLoader>  ): (  <img   src={localStorage.getItem('pic') ? localStorage.getItem('pic') : userid} />)}
                               
                            </div>
                            <div className="enter"  >
                                        
                                        <MdOutlineModeEdit size='26px'  color="white"  > <input type="file" /> </MdOutlineModeEdit>
                                        <input type='file'  onChange={(e)=>{setCurrentPic(e.target.files[0])}}  />
                            </div>
                            <div>
                                <p>Username</p>
                                <input defaultValue={localStorage.getItem('username')}   onChange={(e)=>{setCurrentName(e.target.value)}} ></input>
                            </div>
                            <div>
                                <p>Email</p>
                                <input placeholder={localStorage.getItem('email')}  disabled ></input>
                            </div>
                            <div >
                                <button  className="butt1" onClick={(e)=>{UpdtUser()}}  > <RxUpdate size="20px" />  Update Account </button>
                                <button className="butt2" onClick={(e)=>{setConf(true)}}  ><BiTrash size='20px'  /> Delete Account </button>
                            </div>
                        </section>
                   </div>
              ): Dtl && Conf == true ? (
                <div className="Accountpop"  >
                    <section>
                        <BiX onClick={(e)=>{setDtl(!Dtl)}} size='35px' />
                        <div>
                          <img src={localStorage.getItem('pic') ? localStorage.getItem('pic') : userid} /> 
                            <label>You really want to detate Your Account?<br/> You will loose all your projects </label>
                        </div>
                        <div className="supp" >
                            <button onClick={(e)=>{DltUser()}} > <BiTrash size='20px'  /> Yes </button> 
                        </div>
                    </section>
           </div>
              ):null}   
              {Alert && (

                <div className="Accountpop" >
                    <section>
                        <div >
                            <HiOutlineEmojiSad  color="lightcoral" size='150px' ></HiOutlineEmojiSad>
                        </div>
                        <div className="ALRT" >
                            <h1>Account Deleted <br/>we hope you will come back</h1 >
                        </div>  
                    </section>
                </div>
              )}
           </nav>
        </>
    )
}

export default Navbar