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

    
   
    if( props.tag !=="div" &&  props.tag === "input" ){
        return (
            <props.tag id={props.id} className={props.class + ' button'} type={props.type}  style={props.style} onClick={(e)=>{
                setIndex(e.target.getAttribute("id"));
            }}   placeholder={props.placeholder}  readOnly='readonly'  />
        );
    }
    else if( props.tag !=="div" &&  props.tag === "img" ){
        return (
            <props.tag id={props.id} className={props.class + ' media'} alt='media'  src={props.src} style={props.style} onClick={(e)=>{
                setIndex(e.target.getAttribute("id"));
            }} />
        );
    }
    else if( props.tag !=="div" &&  props.tag === "a" ){
        return ( 
            <props.tag id={props.id}  target='_blank' className={props.class + ' link'} href={props.href} style={props.style} onClick={(e)=>{
                setIndex(e.target.getAttribute("id"));
            }}> {props.value}</props.tag>
        );
    }
    else if(props.tag !== "div" && props.tag === "h1" || props.tag === "h2" || props.tag === "h3" || props.tag === "p" || props.tag === "b" || props.tag === "label"  || props.tag === "i"  ){
        return (
            <props.tag id={props.id} className={props.class + ' text'}  style={props.style} onClick={(e)=>{
                setIndex(e.target.getAttribute("id"));
            }}> {props.value}  </props.tag>
        );
    }
    else{
        return (
            <props.tag ref={drop} id={props.id} className={props.class}  style={props.style} onClick={(e)=>{
                setIndex(e.target.getAttribute("id"));
            }}>
                {
                props.value
                }
                {
                    itemList.map((element,index)=> element.parentId === props.id ? <DropItem key={index} tag={element.tag} class={element.class} src={element.src} style={element.style} placeholder={element.placeholder} href={element.href}  type={element.type} value={element.value} id={element.id} parentId={element.parentId}/> : null )
                }
            </props.tag>
        );
    }
}