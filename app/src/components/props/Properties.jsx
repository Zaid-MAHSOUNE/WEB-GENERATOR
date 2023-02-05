import { useState } from 'react';
import styles from '../../assets/css/prop.module.css';
import { DynamicInput } from './DynamicInput';
export const Properties = () => {
    
    const [clicked ,setClicked] = useState(false);

    return (
        <div className={styles.container}>
            <div className={styles.title}>Properties</div>
            {
                !clicked ? 
                <div className={styles.container_sm}>
                <label className={styles.class_title}>Class: </label>
                <select className={styles.select}>
                    <option value="JSX">jsx</option>
                    <option value="JSX">jsx</option>
                </select>
                <button className={styles.svg} title='Add a new class' onClick={() => {
                    setClicked((previousState)=>!previousState)
                }}></button>
                </div>
                :
                <>
                <input type="text"/>
                <button title='Assign an already defined class' onClick={() => {
                    setClicked((previousState)=>!previousState)
                }}>-</button>
                </>
             }
             <DynamicInput title="Value" type="txt"/>
             <DynamicInput title="Layout" type="dropdown" data={["zaid","ay","sa"]}/>
        </div>
    );
}