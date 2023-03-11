import { useContext, useRef, useState } from 'react';
import { useDrop } from 'react-dnd';
import styles from '../../assets/css/dashboard.module.css';
import { DropItem } from './DropItem';
import '../../assets/css/dropItem.css';
import { AppContext } from '../../context/AppContext';
export const Dashboard = () => {

    const refItems = useRef();

    const {itemList, setItemList} = useContext(AppContext);
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
            return [...previousState,{id:previousState.length+1,tag:tag,class:"container",value:"11",style:{},parentId:0}];
        });
    }

    return (
        <div ref={drop} className={styles.container}>
            {
                itemList.map((element,index)=> element.parentId === 0 ? <DropItem key={index} class={element.class} style={element.style} value={element.value} tag={element.tag} id={element.id} parentId={element.parentId}/> : null )
            }
        </div>
    );
}