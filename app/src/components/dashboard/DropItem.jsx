import '../../assets/css/dropItem.css';
import { useState,useRef,useContext } from 'react';
import { useDrop } from 'react-dnd';
import { useDispatch } from 'react-redux';
import { setSelected } from '../../context/itemListContext';
export const DropItem = (props) =>  {

    const dispatch = useDispatch();

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

    
   
    if( props.tag !== "div" && props.tag === "h1" || props.tag === "p" ){
        return (
            <props.tag id={props.id} className='text' onClick={(e)=>{
                dispatch(setSelected(e.target))
            }}/>
        );
    }
    else if(  props.tag !=="div" &&  props.tag === "img" ){
        return(
            <props.tag id={props.id} className='media' onClick={(e)=>{
                dispatch(setSelected(e.target))
            }}  alt='Media' src='' />
        )
    }
    else if(  props.tag !=="div" &&  props.tag === "a" ){
        return(
            <props.tag id={props.id} className='text' onClick={(e)=>{
                dispatch(setSelected(e.target))
            }}  >its a link</props.tag>
        )
    }
    else if(  props.tag !=="div" &&  props.tag === "input" ){
        return(
            <props.tag id={props.id} className='container' type='text' onClick={(e)=>{
                dispatch(setSelected(e.target))
            }}  placeholder='clickable item ' />
        )
    }
    else if(  props.tag !=="div" &&  props.tag === "body" ){
        return(
            <props.tag  ref={drop} id={props.id} className='container body'  onClick={(e)=>{
                dispatch(setSelected(e.target))
            }} >
            {
                itemLists.map((element)=><DropItem tag={element}/>)
            }
            </props.tag>

        )
    }
    else if(  props.tag !=="div" &&  props.tag === "header" ){
        return(
            <props.tag  ref={drop} id={props.id} className='container header'  onClick={(e)=>{
                dispatch(setSelected(e.target))
            }} >
            {
                itemLists.map((element)=><DropItem tag={element}/>)
            }
            </props.tag>

        )
    }
    else if(  props.tag !=="div" &&  props.tag === "footer" ){
        return(
            <props.tag  ref={drop} id={props.id} className='container footer'  onClick={(e)=>{
                dispatch(setSelected(e.target))
            }} >
            {
                itemLists.map((element)=><DropItem tag={element}/>)
            }
            </props.tag>

        )
    }
    else{
        return (
            <div ref={drop} id={props.id} className='container' onClick={(e)=>{
                dispatch(setSelected(e.target))
            }}>
                
                {
                    itemLists.map((element)=><DropItem tag={element}/>)
                }
            </div>
        );
    }
}