import "../../assets/css/Navbar.css";
import  home from '../../assets/img/home-icon-silhouette.png';
import  project from '../../assets/img/complete.png';
import  contact from '../../assets/img/communicate.png';
import  userid from '../../assets/img/userid.png';
import  logout from '../../assets/img/logout.png';
import { NavLink ,useNavigate } from "react-router-dom";
import { signOut } from 'firebase/auth';
import { auth } from './../../context/firebase/FirebaseConfig'
function Navbar(){
    const nav = useNavigate();
    const signout = async ()=>{
        await signOut(auth)
        console.log(localStorage.length)
        localStorage.clear();
        nav('/');
    }
    return (
        <>
           <nav>
                <div className="logo"> 
                    <h1>WEB GENERATOR</h1>
                    {localStorage.getItem("pic") ? <img src={localStorage.getItem("pic")} ></img> : <img src={userid} ></img> }   {localStorage.getItem("username") ? <p>welcome :  {localStorage.getItem("username")}</p> : <p>Guest</p> }
                </div>
                <div  className="pages">
                    <ul  >
                        <li><NavLink to='/' > <img src={home} ></img>Home</NavLink></li>
                        <li><NavLink to='/Projects' ><img src={project} ></img> My Projects</NavLink></li>
                        <li><NavLink to='/Contact' ><img src={contact} ></img> Contact Us</NavLink></li>
                    </ul>
                    {localStorage.length > 1 ? (<button className='account' ><NavLink onClick={signout} ><img src={logout} ></img> Logout</NavLink></button>): ( <button className="snp"  ><NavLink to='/Login' >Sign Up / Register</NavLink></button>)}
                   
                </div>
           </nav>
        </>
    )
}

export default Navbar