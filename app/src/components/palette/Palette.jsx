import { useContext, useEffect, useState } from 'react';
import styles from '../../assets/css/palette.module.css';
import Text from '../../data/Text';
import Container from '../../data/Container';
import Media from '../../data/Media';
import Others from '../../data/Others';
import down from '../../assets/img/down.png';
import { DraggableItem } from './DraggableItem';
import { LoadingContext } from '../../pages/Main';

export const Palette = () => {

    const[Dropped,setDropped] = useState(false);
    const[Dropped2,setDropped2] = useState(false);
    const[Dropped3,setDropped3] = useState(false);
    const[Dropped4,setDropped4] = useState(false);
    //const [loading,setLoading] = useContext(LoadingContext);
    
          
        return(
            <div className={styles.container}>
                <div className={styles.title} >Tools</div>
                <div className={styles.tools}>
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
    
