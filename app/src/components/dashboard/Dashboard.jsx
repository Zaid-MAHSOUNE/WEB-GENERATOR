import { useContext, useRef, useState } from 'react';
import { useDrop } from 'react-dnd';
import styles from '../../assets/css/dashboard.module.css';
import { DropItem } from './DropItem';
import '../../assets/css/dropItem.css';
export const Dashboard = () => {


    const refItems = useRef();

    const [itemList, setItemList] = useState([]);
    const [{isOver}, drop] = useDrop(()=>({
        accept:"item",
        drop:(item,monitor) => dropHandler(item.tag,monitor),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            isOverCurrent: monitor.isOver({ shallow: true }),
        })
    }));

    const dropHandler = (tag,monitor)=>{
        refItems.current = drop.current;
        const didDrop = monitor.didDrop()
        if (didDrop) {
          return
        }
        setItemList((previousState)=>{
            return [...previousState,tag];
        });
    }

    return (
        
        <div ref={drop} className={styles.container}>
            {
                itemList.map((element)=><DropItem tag={element}/>)
            }
        </div>
    
    );
}