import { useState } from 'react';
import {useForm} from 'react-hook-form';
import * as yup from "yup";
import json from "../../data/CSSjson.json";
import styles from '../../assets/css/prop.module.css';
import {FiPlusSquare,FiMinusSquare} from "react-icons/fi";
import {yupResolver} from "@hookform/resolvers/yup";


export const TxtForm = () => {


    const [switchInput,setSwitch] = useState(false);

 

    const schema = yup.object().shape({
        value: yup.string().required(),
        indefined_class: yup.string().notOneOf(json.map((element)=>element.class)).required().matches(/^[a-z][A-Za-z0-9_-]*$/i),
        defined_class: yup.string().oneOf(json.map((element)=>element.class)).required(), 
    });

    const {register,handleSubmit} = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        console.log(data);
    }

    const switchHandler = (e) => {
        e.preventDefault();
        setSwitch((previousState)=>!previousState);
    }

    

    return (
        
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.container_sm}>
            <label className={styles.title_sm}>Value :</label>
            <input className={styles.input} type="text" {...register("value")}/>
        </div>
        {
            switchInput ? (
            <div className={styles.container_sm}>
            <label className={styles.title_sm}>Class :</label>
            <input className={styles.input} type="text" {...register("indefined_class")}/>
            <FiMinusSquare title='Choose a defined class' size="25px" className={styles.icons} onClick={(e)=>switchHandler(e)}/>
            </div>
            ):(
            <div className={styles.container_sm}>
            <label className={styles.title_sm}>Class :</label>
            <select className={styles.select} {...register("defined_class")}>
                {
                   json.map((element)=><option value={element.class}>{element.class}</option>)
                }
            </select>
            <FiPlusSquare title='Add a new class' size="25px" className={styles.icons} onClick={(e)=>switchHandler(e)}/>
            </div>
            )
        }
        <div className={styles.container_sm}>
            <label className={styles.title_sm}>Color :</label>
            <input className={styles.input_color} type="color" {...register("color")}/>
            <label className={styles.title_sm}>Background Color :</label>
            <input className={styles.input_color} type="color" {...register("background-color")}/>
        </div>
        <button type="submit">HHH</button>
        </form>
    );
}