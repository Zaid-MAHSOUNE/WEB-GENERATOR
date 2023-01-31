import "../../assets/css/Navbar.css";
import  home from '../../assets/img/home-icon-silhouette.png';
import  project from '../../assets/img/complete.png';
import  contact from '../../assets/img/communicate.png';
function Navbar(){
    return (
        <>
           <nav>
                <div className="logo"> 
                    <h1>WEB GENERATOR</h1>
                </div>
                <div  className="pages">
                    <ul  >
                        <li><a href="#"> <img src={home} ></img>Home</a></li>
                        <li><a href="#"><img src={project} ></img>My Projects</a></li>
                        <li><a href="#"><img src={contact} ></img>Contact Us</a></li>
                    </ul>
                    <button className="snp"  ><a href="#" >Sign Up</a></button>
                </div>
           </nav>
        </>
    )
}

export default Navbar