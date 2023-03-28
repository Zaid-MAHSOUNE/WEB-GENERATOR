import { useContext, useEffect, useState } from 'react';
import styles from '../../assets/css/palette.module.css';
import Text from '../../data/Text';
import Container from '../../data/Container';
import Media from '../../data/Media';
import Others from '../../data/Others';
import Nfile from '../../assets/img/new-document.png';
import Sfile from '../../assets/img/diskette.png';
import Efile from '../../assets/img/project-status.png';
import Save from '../../assets/img/check.png';
import Declined from '../../assets/img/declined.png';
import {useNavigate } from "react-router-dom";
import { BiCaretDown ,BiEditAlt} from "react-icons/bi";
import { DraggableItem } from './DraggableItem';
import { update, upload } from '../../context/firebase/FirebaseConfig';
import { AppContext } from '../../context/AppContext';
import { database,coll } from '../../context/firebase/FirebaseConfig';
import {doc,deleteDoc,getDocs}  from 'firebase/firestore'

export const Palette = () => {
    const nav = useNavigate();
    const {itemList,setItemList,Project,setProject} = useContext(AppContext);
    const[Dropped,setDropped] = useState(false);
    const[Dropped2,setDropped2] = useState(false);
    const[Dropped3,setDropped3] = useState(false);
    const[Dropped4,setDropped4] = useState(false);  
    const[DetailPop,setDetailPop] = useState(false);  
    const[SavePop,setSavePop] = useState(false);  
    const[Alert,setAlert] = useState(false);  
    const[Alert2,setAlert2] = useState(false);  
   
    const ToProjectPage =  async()=>{
        var docid = null ; 
        const Cid = localStorage.getItem('email')
        const data = await getDocs(coll).then((elm)=>{
         elm.docs.map((doc) => {if(doc.data().id== Cid && doc.data().name == Project  ){ return docid = doc.id }  } );
            if(docid != null ){
                update(itemList,docid).then((rst)=>{
                    if(rst == true){
                        setSavePop(false)
                        setAlert(true)
                        setTimeout(()=>{
                            setAlert(false)
                            setItemList([])
                            nav('/Projects');  
                        },3000)
                    }
                    else{
                        setAlert2(true)
                        setTimeout(()=>{
                            setAlert2(false)
                        },3000)
                    }
                })
                console.log('allready exist')
            }
            else{
                    upload(itemList,Project,localStorage.getItem('email')).then((rst)=>{
                        if(rst == true){
                            setSavePop(false)
                            setAlert(true)
                            setTimeout(()=>{
                                setAlert(false)
                                setItemList([])
                                nav('/Projects');  
                            },3000)
                        }
                        else{
                            setAlert2(true)
                            setTimeout(()=>{
                                setAlert2(false)
                            },3000)
                        }
            
                    })
                
          }
         });
    }
        return(
            <div className={styles.container}>
            

                            <div className={styles.tools}>
                            <section>
                                {localStorage.length > 0 && (
                                    <>
                                        <p>- Tools -</p>
                                        <div  className={styles.Imprt }   >
                                                    <img src={Nfile} onClick={(e)=>{ window.location.reload()}} draggable='false' title='New File'  ></img>
                                                    <img src={Efile}  onClick={(e)=>{ setDetailPop(!DetailPop) ; setSavePop(false) }}   draggable='false' title='Project Settings' ></img>
                                                    <img src={Sfile} onClick={(e)=>{ setSavePop(!SavePop);setDetailPop(false) }} draggable='false'  title='Save Project' ></img>    
                                        </div> 
                                    </>
                                )}
                                {SavePop && (
                                <section  className={styles.pop} >
                                    <div>
                                        <h2 className={styles.ttl} >Save Your work</h2>
                                        <p>Project name : {Project} </p>
                                        <p>Do you want to save all your <br></br> Work</p>
                                   
                                    <div className={styles.choose} >
                                        <button  onClick={(e)=>{setSavePop(false)}}  >Cancel</button>
                                        <button  onClick={(e)=>{ToProjectPage()}} >Save</button>
                                    </div>
                                    </div>
                                </section>  
                            )

                                }

                                  {DetailPop && (
                         <section className={styles.pop}>
                         <div>
                         <h2 className={styles.ttl} >Edit Your Project</h2>
                         <div>
                             <label htmlFor='Title' >Project name</label>
                             <input type='text'  value={Project}  onChange={(e)=>{setProject(e.target.value)}}  ></input>
                         </div>
                         <div className={styles.choose} >
                             <button  onClick={(e)=>{setDetailPop(false)}} >Save</button>
                         </div>
                         </div>
                        </section>
        
                            )}
                             {Alert && (
                                <section  className={styles.pop} >
                                    <div>
                                        <img loading='lazy'  src={Save} ></img>
                                        <h1>Project Saved</h1>
                                    </div>
                                </section>
                            )

                            }
                            {Alert2 && (
                                            <section  className={styles.pop} >
                                                <div>
                                                    <img loading='lazy'  src={Declined} ></img>
                                                    <h1>Error <br></br>Try Agin</h1>
                                                </div>
                                            </section>
                                        )

                            }
                                <button onClick={(e) =>{ setDropped(!Dropped) }} >Container <BiCaretDown size='22' /></button>
                            {Dropped && (
                                    
                                    <div  className={styles.items} >
                                            {
                                        Container.map((element) => <DraggableItem  key={element.tag} tag={element.tag} src={element.src} >  </DraggableItem>)
                                            }
                                    </div> 
                                
                                )}

                                <button onClick={(e) => setDropped2(!Dropped2)} >Text   <BiCaretDown size='22' /> </button>
                            {Dropped2 && (
                                    
                                    <div  className={styles.items} >
                                            {
                                        Text.map((element) => <DraggableItem  key={element.tag} tag={element.tag} src={element.src} >  </DraggableItem>)
                                            }
                                    </div> 
                                
                                )}   

                                <button onClick={(e) => setDropped3(!Dropped3)} >Media <BiCaretDown size='22' /></button>
                                    {Dropped3 && (
                                    
                                    <div  className={styles.items} >
                                            {
                                        Media.map((element) => <DraggableItem  key={element.tag} tag={element.tag} src={element.src} >  </DraggableItem>)
                                            }
                                    </div> 
                                
                                )}   

                                <button onClick={(e) => setDropped4(!Dropped4)} >Clickable items <BiCaretDown size='22' /></button>
                            {Dropped4 && (
                                    
                                    <div  className={styles.items} >
                                            {
                                        Others.map((element) => <DraggableItem  key={element.tag} tag={element.tag} src={element.src} >  </DraggableItem>)
                                            }
                                    </div> 
                                
                                )}   
                            </section>


                            </div>

            
                
              
                
               
               
              
            </div>
        );
    }
    
