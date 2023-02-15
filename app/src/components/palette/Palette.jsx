import { useState } from 'react';
import styles from '../../assets/css/palette.module.css';
import HmImg from '../../assets/img/main.png';
import HdrImg from '../../assets/img/header.png';
import FtImg from '../../assets/img/footer.png';
import rtrn from '../../assets/img/undo.png';
import Text from '../../data/Text';
import Container from '../../data/Container';
import Media from '../../data/Media';
import Others from '../../data/Others';
import down from '../../assets/img/down.png';
import up from '../../assets/img/up.png';
import { DraggableItem } from './DraggableItem';

export const Palette = (props) => {

    const[Dropped,setDropped] = useState(false);
    const[Dropped2,setDropped2] = useState(false);
    const[Dropped3,setDropped3] = useState(false);
    const[Dropped4,setDropped4] = useState(false);
       if(props.type==="Containers"){
        return (
            <div className={styles.container}>
                <div className={styles.title}>Container</div>
                <div className={styles.pages}>
                <div onClick={() => props.setType("Header")} className={styles.header}><img src={HdrImg} alt='Header'></img><h2>Header</h2></div>
                <div onClick={() => props.setType("Body")} className={styles.body}><img src={HmImg} alt='Body' ></img><h2>Body</h2></div>
                <div onClick={() => props.setType("Footer")} className={styles.footer}><img src={FtImg} alt='Footer' ></img> <h2>Footer</h2></div>
                </div>
            </div>
        );
    }
    else{
        return(
            <div className={styles.container}>
                <div className={styles.title} >{props.type}</div>
                <div className={styles.tools}>
                        <button onClick={() => props.setType("Containers")} ><img  alt='img' src={rtrn}></img></button>
                            <section>
                                <button onClick={(e) =>{ setDropped(!Dropped) }} >Container <img  alt='img' src={down} ></img></button>
                               {Dropped && (
                                     
                                    <div  className={styles.items} >
                                             {
                                         Container.map((element) => <DraggableItem  key={element.tag} tag={element.tag} src={element.src} >  </DraggableItem>)
                                            }
                                     </div> 
                                   
                                )}
                                
                                <button onClick={(e) => setDropped2(!Dropped2)} >Text <img  alt='img' src={down} ></img></button>
                               {Dropped2 && (
                                     
                                    <div  className={styles.items} >
                                             {
                                         Text.map((element) => <DraggableItem  key={element.tag} tag={element.tag} src={element.src} >  </DraggableItem>)
                                            }
                                     </div> 
                                   
                                )}   

                                <button onClick={(e) => setDropped3(!Dropped3)} >Media <img  alt='img' src={down} ></img></button>
                                    {Dropped3 && (
                                     
                                    <div  className={styles.items} >
                                             {
                                         Media.map((element) => <DraggableItem  key={element.tag} tag={element.tag} src={element.src} >  </DraggableItem>)
                                            }
                                     </div> 
                                   
                                )}   

                                <button onClick={(e) => setDropped4(!Dropped4)} >Clickable items <img  alt='img' src={down} ></img></button>
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
    
}