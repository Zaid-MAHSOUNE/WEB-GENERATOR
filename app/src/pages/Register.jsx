import '../../src/assets/css/login.css';
import DragAndDrop from '../../src/assets/img/dad.jpeg';
import facebook from '../../src/assets/img/facebook.png';
import google from '../../src/assets/img/google.png';
import code from '../../src/assets/img/code.png';
import { useNavigate, NavLink } from "react-router-dom";
import back from '../../src/assets/img/back.png';
import { useRef , useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './../context/firebase/FirebaseConfig'
import LoadingPage from '../components/Loading/LoadingPage';

export const Register = () => {
        const nav = useNavigate();
        const [loading,setLoading] = useState(true);
        const Email = useRef();
        const Password = useRef();
        const PasswordC = useRef();
        const [Error1,setError1] = useState(false)
        const [Error2,setError2] = useState(false)
        const Rgstr = async (e)=>{
                setError2(false);
                setError1(false);
                e.preventDefault();
                try{
                        if(Password.current.value==PasswordC.current.value){
                        setLoading(false);
                        const user = await createUserWithEmailAndPassword(auth,Email.current.value,Password.current.value);
                        if(user){
                                nav('/Login');
                        }}
                        else{
                                 setError1(true);    
                        }
                        
                        
                      
                }catch(error){
                        console.log(error);
                        setError2(true)
                }
                finally{
                        setLoading(true);
                       
                }
                
        }
return(
        (loading ? (
        <div className='mainn'>
                <img className='code' src={code} ></img>
                <NavLink to='/Login' > <img className='back' src={back}  ></img></NavLink>
        <form onSubmit={Rgstr} >
            <div className='part1'>
                   
                    <h2>Register</h2>

                    <div className="email">
                        <p>Email</p>
                         <input type='email' ref={Email} required  autoComplete='none' ></input>
                    </div>
                    <div className="password">
                        <p>Create Password</p>
                         <input type='text' ref={Password} required ></input>
                    </div>
                    <div className="password">
                        <p>Confirm Password</p>
                         <input type='text' ref={PasswordC} required ></input>
                    </div>
                    <button type='submit'>Register</button>
                    {Error1 ? <p>check your Password </p>:null}
                    {Error2 ? <p>Account allready exist or check your informations</p>:null}
            </div>
            </form>
            <div className='part2' >
                    <img src={DragAndDrop} ></img>
                    <h3>Web Generator</h3>

                               
                    
            </div>
        </div>
        ):
        (
                <LoadingPage></LoadingPage>
        ))
     

)

} 