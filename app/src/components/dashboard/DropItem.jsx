import '../../assets/css/dropItem.css';
import { useState,useRef } from 'react';
import { useDrop } from 'react-dnd';
export const DropItem = (props) =>  {

    const parentIndex = useRef(props.id);

    const [itemLists, setItemList] = useState([]);
    
    const [{isOver}, drop] = useDrop(()=>({
        accept:"item",
        drop:(item,monitor) => dropHandler(item.tag,monitor),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            isOverCurrent: monitor.isOver({ shallow: true }),
        })
    }));

    const dropHandler = (tag,monitor)=>{
        const didDrop = monitor.didDrop()
        if (didDrop) {
          return
        }
        setItemList((previousState)=>{
            return [...previousState,tag];
        });
    }

    if(props.tag !== "div"){
        return (
            <props.tag id={props.id} className='container'/>
        );
    }else{
        return (
            <div ref={drop} id={props.id} className='container'> 
                {
                    itemLists.map((element,index)=><DropItem id={parentIndex.current+"-"+index} tag={element}/>)
                }
            </div>
        );
    }
}