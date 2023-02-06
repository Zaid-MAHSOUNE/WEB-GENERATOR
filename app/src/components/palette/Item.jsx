import React, { useRef , useState} from 'react';
import  '../../assets/css/palette.module.css';

const Item = (props) => {
  const ref = useRef(null);
  const [isActive, setIsActive] = useState(false);

  const DragStart = (e) => {
    ref.current.style.opacity = '0.5';
    ref.current.style.cursor = 'pointer';
   setIsActive(isActive => !isActive);
   console.log(isActive);
  };  

  const DragEnd = (e) => {
    ref.current.style.opacity = '1';
    ref.current.style.cursor = 'pointer';
    setIsActive(isActive => !isActive);
    console.log(isActive);
  };



  return (
      <button  className={isActive ? 'dragging' : 'notdragging'} id='item'  ref={ref} draggable  onDragStart={DragStart} onDragEnd={DragEnd} key={props.balise}  value={props.balise} ><img  src={props.src} ></img></button>
   
  );
};

export default Item;