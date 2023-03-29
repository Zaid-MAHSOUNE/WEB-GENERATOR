import { useContext, useRef, useState , useEffect } from 'react';
import { useDrop } from 'react-dnd';
import styles from '../../assets/css/dashboard.module.css';
import { DropItem } from './DropItem';
import '../../assets/css/dropItem.css';
import { AppContext } from '../../context/AppContext';
export const Dashboard = () => {

    const refItems = useRef();

    const {itemList, setItemList,changes} = useContext(AppContext);
    const [{isOver}, drop] = useDrop(()=>({
        accept:"item",
        drop:(item,monitor) => dropHandler(item.tag,monitor),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            isOverCurrent: monitor.isOver({ shallow: true }),
        })
    }));
    //refresh
    /*useEffect(() => {
        window.addEventListener("beforeunload", handleBeforeUnload);
        return () => {
          window.removeEventListener("beforeunload", handleBeforeUnload);
        };
      
      }, []);
      const handleBeforeUnload = (e) => {
        e.preventDefault();
        const message =
          "Are you sure you want to leave? All your work will be lost.";
        e.returnValue = message;
        return message;
      }*/
    const dropHandler = (tag,monitor)=>{
        refItems.current = drop.current;
        const didDrop = monitor.didDrop()
        if (didDrop) {
          return
        }
        setItemList((previousState)=>{
            return [...previousState,{id:previousState.length+1,tag:tag,class:"container",value:"",style:{},parentId:0}];
        });
    }

    return (
        <div ref={drop} className={styles.container}>
            {
                itemList.map((element,index)=> element.parentId === 0 ? <DropItem key={index} placeholder={element.placeholder} href={element.href} class={element.class} style={element.style} value={element.value} type={element.type} src={element.src}  tag={element.tag} id={element.id} parentId={element.parentId}/> : null )
            }
        </div>
    );
}