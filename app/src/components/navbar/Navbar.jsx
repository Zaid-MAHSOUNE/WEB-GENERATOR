import "../../assets/css/Navbar.css";
import  userid from '../../assets/img/userid.png';

import { NavLink ,useNavigate } from "react-router-dom";
import { signOut } from 'firebase/auth';
import { auth } from './../../context/firebase/FirebaseConfig'
import { BiLibrary,BiHome ,BiLogOut,BiMessageRounded ,BiCaretDown,BiUserCircle,BiX,BiTrash} from "react-icons/bi";
import { useState } from "react";
function Navbar(){
    const [opt,setopt]=useState(false);
    const [Dtl,setDtl]=useState(false);
    const nav = useNavigate();
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
              {Dtl &&(
                   <div className="Accountpop"  >
                        <section>
                            <BiX onClick={(e)=>{setDtl(!Dtl)}} size='35px' />
                            <div>
                                <img src={localStorage.getItem('pic') ? localStorage.getItem('pic') : userid} />
                            </div>
                            <div>
                                <p>Username</p>
                                <input value={localStorage.getItem('username')} disabled  ></input>
                            </div>
                            <div>
                                <p>Email</p>
                                <input value={localStorage.getItem('email')} disabled  ></input>
                            </div>
                            <div>
                                <button><BiTrash size='20px' /> Delete Account </button>
                            </div>
                        </section>
                   </div>
              )}
                      

           
                
           </nav>
        </>
    )
}

export default Navbar