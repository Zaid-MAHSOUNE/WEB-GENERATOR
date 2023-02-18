import "../../assets/css/Navbar.css";
import  home from '../../assets/img/home-icon-silhouette.png';
import  project from '../../assets/img/complete.png';
import  contact from '../../assets/img/communicate.png';
import { NavLink } from "react-router-dom";
function Navbar(){
    return (
        <>
           <nav>
                <div className="logo"> 
                    <h1>WEB GENERATOR</h1>
                </div>
                <div  className="pages">
                    <ul  >
                        <li><NavLink to='/' ><a> <img src={home} ></img>Home</a></NavLink></li>
                        <li><NavLink to='/Projects' ><a><img src={project} ></img> My Projects</a></NavLink></li>
                        <li><NavLink to='/Contact' ><a><img src={contact} ></img> Contact Us</a></NavLink></li>
                    </ul>
                    <button className="snp"  ><NavLink to='/Login' ><a>Sign Up / Register</a></NavLink></button>
                </div>
           </nav>
        </>
    )
}

export default Navbar