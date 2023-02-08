import { useDrag } from "react-dnd";
import styles from "../../assets/css/palette.module.css";
export const DraggableItem = (props) => {
    const [{isDragging},drag] = useDrag(()=>({
        type:"item",
        item:{tag:props.tag}
    }));
    return (
        <div ref={drag}  className={styles.tool}>
            
        </div>
    );
    
}