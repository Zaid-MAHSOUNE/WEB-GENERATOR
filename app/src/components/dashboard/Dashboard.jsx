import { useState } from 'react';
import { useDrop } from 'react-dnd';
import styles from '../../assets/css/dashboard.module.css';
import { DropItem } from './DropItem';
import '../../assets/css/dropItem.css';
export const Dashboard = () => {

    const [itemList, setItemList] = useState([]);
    
    const [{isOver}, drop] = useDrop(()=>({
        accept:"item",
        drop:(item) => dropHandler(item.tag),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        })
    })); 

    const dropHandler = (tag)=>{
        setItemList((previousState)=>{
            return [...previousState,tag];
        });
    }

    return (
        <div ref={drop}  id="Drop" className={styles.container}>
            {
                itemList.map((element)=><DropItem tag={element}/>)
            }
        </div>
    );
}