import '../../src/assets/css/login.css';
import DragAndDrop from '../../src/assets/img/dad.jpeg';
import facebook from '../../src/assets/img/facebook.png';
import google from '../../src/assets/img/google.png';
import code from '../../src/assets/img/code.png';
import { NavLink } from "react-router-dom";

export const Login = () => {

return(
        <div className='mainn'>
                <img className='code' src={code} ></img>

            <div className='part1'>
                   
                    <h2>Login</h2>
                    <div className="username">
                        <p>Username</p>
                         <input ></input>
                    </div>
                    <div className="password">
                        <p>Password</p>
                         <input ></input>
                    </div>
                    <NavLink to='/' ><button type='submit'>Login</button></NavLink>
                    <h4>Don't have an account ? <NavLink to='/Register' >register</NavLink></h4>
                   
            </div>
            <div className='part2' >
                    <img src={DragAndDrop} ></img>
                    <h3>Web Generator</h3>
                        <div className="pp">
                        <section >
                                 <img src={google}></img> Sign in with Google
                                </section>
                                <section>
                                  <img src={facebook} ></img> Sign in with Facebook
                                </section>
                        </div>
                               
                    
            </div>
        </div>
)

} 