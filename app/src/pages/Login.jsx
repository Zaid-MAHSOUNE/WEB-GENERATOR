import '../../src/assets/css/login.css';
import DragAndDrop from '../../src/assets/img/dad.jpeg';
import facebook from '../../src/assets/img/facebook.png';
import google from '../../src/assets/img/google.png';
import github from '../../src/assets/img/github.png';
import code from '../../src/assets/img/code.png';
import close from '../../src/assets/img/close.png';
import check from '../../src/assets/img/check.png';
import declined from '../../src/assets/img/declined.png';
import rstpass from '../../src/assets/img/wrong-password.png';
import { NavLink,useNavigate } from "react-router-dom";
import back from '../../src/assets/img/back.png';
import { useRef , useState } from 'react';
import { signInWithEmailAndPassword ,GoogleAuthProvider,signInWithPopup, FacebookAuthProvider,GithubAuthProvider, sendPasswordResetEmail } from 'firebase/auth';
import { auth } from './../context/firebase/FirebaseConfig'
import LoadingPage from '../components/Loading/LoadingPage';
export const Login = () => {
        const nav = useNavigate();
        let user;
        const [loading,setLoading] = useState(true);
        const [Error,setError] = useState(false);
        const [ErrorS,setErrorS] = useState(false);
        const [Done,setDone] = useState(false);
        const [forget,setForget] = useState(true);
        const Email = useRef();
        const EmailS = useRef();
        const Password = useRef();
        const Sign = async (e)=>{
                e.preventDefault();
                try{
                        setLoading(false);
                         user = await signInWithEmailAndPassword(auth,Email.current.value,Password.current.value);
                        if(user){
                                localStorage.setItem("email",user.user.email)
                                localStorage.setItem("username",user.user.displayName)
                                nav('/');
                        }
                        
 
                }catch(error){
                        console.log(error);
                        setError(error);
                }
                finally{
                        setLoading(true);
                       
                }
        }
        const signWithG = (e)=>{
                        e.preventDefault();
                        setLoading(false);
                        const Provider = new GoogleAuthProvider();
                        signInWithPopup(auth,Provider).then((result)=>{  
                                if(result){
                                        localStorage.setItem("email",result.user.email)
                                        localStorage.setItem("username",result.user.displayName)
                                        localStorage.setItem("pic",result.user.photoURL)
                                        nav('/');
                                }
                        }).catch((error)=> { console.log(error) }).finally (setLoading(true))
                       
        }
        const signWithF = (e)=>{
                e.preventDefault();
                setLoading(false);
                const Provider = new FacebookAuthProvider();
                signInWithPopup(auth,Provider).then((result)=>{  
                        if(result){
                                localStorage.setItem("email",result.user.email)
                                localStorage.setItem("username",result.user.displayName)
                                localStorage.setItem("pic",result.user.photoURL)
                                nav('/');
                        }
                }).catch((error)=> { console.log(error) }).finally (setLoading(true))
               
        }
         const signWithGit = (e)=>{
                e.preventDefault();
                setLoading(false);
                const Provider = new GithubAuthProvider();
                signInWithPopup(auth,Provider).then((result)=>{  
                        if(result){
                                localStorage.setItem("email",result.user.email)
                                localStorage.setItem("username",result.user.displayName)
                                localStorage.setItem("pic",result.user.photoURL)
                                nav('/');
                        }
                }).catch((error)=> { console.log(error) }).finally (setLoading(true))
               
                }
        const resetPass = ()=>{
                        try{
                        if(sendPasswordResetEmail(auth,EmailS.current.value) && EmailS.current.value.length > 5  ){

                                setDone(true)
                                setTimeout(()=>{
                                        setDone(false)
                                },5000)
                                }
                                else{
                                        setErrorS(true);
                                        setTimeout(()=>{
                                                setErrorS(false)
                                        },5000) 
                                }
                        } catch(error){
                                console.log(error);
                                setErrorS(true);
                                setTimeout(()=>{
                                        setErrorS(false)
                                },5000)
                        }
               
        }
       
return(
        <>
       {loading ? (
        
        <div className='mainn'>
                <img className='code' src={code} ></img>
               <NavLink to='/' > <img className='back' src={back}  ></img></NavLink>
               <form onSubmit={Sign}  >
            <div className='part1'>
                   
                    <h2>Login</h2>
                    <div className="username">
                        <p>Email</p>
                         <input  ref={Email} required ></input>
                    </div>
                    <div className="password">
                        <p>Password</p>
                         <input ref={Password}  required ></input>
                    </div>
                    <button type='submit'>Login</button>
                    <h4>Don't have an account ? <NavLink  to='/Register' >register</NavLink></h4>
                    <h4>forget password ? <NavLink onClick={()=>{setForget(false)}}  >recovering</NavLink></h4>
                    {Error ? <p>Email or Password invalid</p>:null}
            </div>
            </form>
            {forget ? ( 
                  <div className='part2' >
                    <img src={DragAndDrop} loading='lazy'></img>
                    <h3>Web Generator</h3>
                        <div className="pp">
                                 <section onClick={signWithG}  >
                                 <img src={google}></img> Sign in with Google
                                </section>
                                <section onClick={signWithF} >
                                  <img src={facebook} ></img> Sign in with Facebook
                                </section>
                                <section onClick={signWithGit} >
                                  <img src={github} ></img> Sign in with Github
                                </section>
                        </div>
                         </div> ):(
                                <div className='part3'>
                                <img  onClick={()=>{setForget(true)}}  className='close'  src={close} ></img>
                                
                                {Done ? <><img src={check} loading='lazy'  ></img><h2>Done</h2></> : ErrorS ? <><h2>Invalid email</h2> </> :<><img src={rstpass}  loading='lazy' ></img> <h2>forget password</h2></>}
                                
                                <input type='email' ref={EmailS}  placeholder='enter your email' required ></input><br></br>
                                <button onClick={resetPass} >send email</button>
                                </div>
                         )}
            
           
        </div> ):
        (
               <LoadingPage></LoadingPage>
        )}
        </>
)}
