import '../../assets/css/dropItem.css';
import { useState,useRef,useContext } from 'react';
import { useDrop } from 'react-dnd';
import { AppContext } from '../../context/AppContext';
export const DropItem = (props) =>  {

    const {selectedItem,setSelectedItem} = useContext(AppContext);

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
            <props.tag id={props.id} className='container' onClick={(e)=>{
                setSelectedItem(e.target);
            }}/>
        );
    }else{
        return (
            <div ref={drop} id={props.id} className='container' onClick={(e)=>{
                setSelectedItem(e.target);
            }}>
                {
                    itemLists.map((element)=><DropItem tag={element}/>)
                }
            </div>
        );
    }
}