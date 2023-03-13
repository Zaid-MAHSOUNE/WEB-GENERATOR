import '../../assets/css/dropItem.css';
import { useState,useRef,useContext } from 'react';
import { useDrop } from 'react-dnd';
import { AppContext } from '../../context/AppContext';
export const DropItem = (props) =>  {

    const {itemList, setItemList,setIndex} = useContext(AppContext);
    
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
            return [...previousState,{id:previousState.length+1,tag:tag,class:"container",value:"",style:{},parentId:props.id}];
        });
    }


    if(props.tag === "div"){
        return (
            <div ref={drop} id={props.id} className={props.class} style={props.style} onClick={(e)=>{
                setIndex(e.target.getAttribute("id"));
            }}>
                {
                props.value
                }
                {
                    itemList.map((element,index)=> element.parentId === props.id ? <DropItem key={index} tag={element.tag} class={element.class} style={element.style} value={element.value} id={element.id} parentId={element.parentId}/> : null )
                }
            </div>
        );
    }
    else if(props.tag === "input" || props.tag === "img"){
        return (
            <props.tag id={props.id} className={props.class} style={{ color : "red" }} onClick={(e)=>{
                setIndex(e.target.getAttribute("id"));
            }}/>
        );
    }else{
        return (
            <props.tag id={props.id} className={props.class} style={{ color : "red" }} onClick={(e)=>{
                setIndex(e.target.getAttribute("id"));
            }}>{props.value}</props.tag>
        );
    }
}