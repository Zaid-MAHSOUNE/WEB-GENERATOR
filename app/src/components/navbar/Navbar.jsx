import "../../assets/css/Navbar.css";
import  home from '../../assets/img/home-icon-silhouette.png';
import  project from '../../assets/img/complete.png';
import  contact from '../../assets/img/communicate.png';
import  user from '../../assets/img/user.png';
import { NavLink } from "react-router-dom";
import { useState } from "react";
function Navbar(){
    const [Connect,setConnect] = useState(false);
    return (
        <>
           <nav>
                <div className="logo"> 
                    <h1>WEB GENERATOR</h1>
                </div>
                <div  className="pages">
                    <ul  >
                        <li><NavLink to='/' > <img src={home} ></img>Home</NavLink></li>
                        <li><NavLink to='/Projects' ><img src={project} ></img> My Projects</NavLink></li>
                        <li><NavLink to='/Contact' ><img src={contact} ></img> Contact Us</NavLink></li>
                    </ul>
                    {Connect ? (<button className='account' ><NavLink to='/Account' ><img src={user} ></img> Account</NavLink></button>): ( <button className="snp"  ><NavLink to='/Login' >Sign Up / Register</NavLink></button>)}
                   
                </div>
           </nav>
        </>
    )
}

export default Navbar