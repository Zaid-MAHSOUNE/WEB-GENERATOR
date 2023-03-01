import '../../src/assets/css/login.css';
import DragAndDrop from '../../src/assets/img/dad.jpeg';
import facebook from '../../src/assets/img/facebook.png';
import google from '../../src/assets/img/google.png';
import code from '../../src/assets/img/code.png';
import { NavLink } from "react-router-dom";

export const Register = () => {

return(
        <div className='mainn'>
                <img className='code' src={code} ></img>

            <div className='part1'>
                   
                    <h2>Register</h2>
                    <div className="username">
                        <p>Username</p>
                         <input ></input>
                    </div>
                    <div className="email">
                        <p>Email</p>
                         <input ></input>
                    </div>
                    <div className="password">
                        <p>Password</p>
                         <input ></input>
                    </div>
                    <div className="password2">
                        <p>Confim password</p>
                         <input ></input>
                    </div>
                    <NavLink to='/' ><button type='submit'>Register</button></NavLink>
            </div>
            <div className='part2' >
                    <img src={DragAndDrop} ></img>
                    <h3>Web Generator</h3>
                        <div className="pp">
                        <section >
                                 <img src={google}></img> Register with Google
                                </section>
                                <section>
                                  <img src={facebook} ></img> Register with Facebook
                                </section>
                        </div>
                               
                    
            </div>
        </div>
)

} 