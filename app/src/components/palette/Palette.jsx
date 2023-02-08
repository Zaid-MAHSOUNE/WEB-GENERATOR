import { useState } from 'react';
import Item from './Item';
import styles from '../../assets/css/palette.module.css';
import HmImg from '../../assets/img/main.png';
import HdrImg from '../../assets/img/header.png';
import FtImg from '../../assets/img/footer.png';
import rtrn from '../../assets/img/undo.png';
import tools from '../../data/tools';
import down from '../../assets/img/down.png';
import { DraggableItem } from './DraggableItem';

export const Palette = (props) => {

    const[Dropped,setDropped] = useState(false);
   
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
                {
                    tools.map((element) => <DraggableItem tag={element.tag}/>)
                }
            </div>
        );
    }
    
}