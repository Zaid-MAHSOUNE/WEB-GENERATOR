import { useState } from 'react';
import {useForm} from 'react-hook-form';
import * as yup from "yup";
import styles from '../../assets/css/prop.module.css';
import {FiPlusSquare,FiMinusSquare} from "react-icons/fi";
import {yupResolver} from "@hookform/resolvers/yup";
import { useSelector } from 'react-redux';


export const ContainerForm = ({obj,class: classes,value}) => {

    const [newClass,setNewClass] = useState();

    const cssClasses = useSelector((state)=>state.itemList.value);

    const schema = yup.object().shape({
        width: yup.number().integer().min(0).max(100).required(),
        height: yup.number().integer().min(0).max(100).required(),
    });

    const {register,handleSubmit} = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        let keys = Object.keys(data);
        let values = Object.values(data);
        let style = "";
        keys.map((element,index)=>{
            if(values[index]){
            if(element === "height" || element === "width")
             style += ""+element+":"+values[index]+"%;\n";
             else
             style += ""+element+":"+values[index]+";\n";
        }
    })

        obj.setAttribute("style",style);
    }

    const valueHandler = (e) => {
        e.preventDefault();
        obj.textContent = e.target.value;
    }

    const classHandler = (e) => {
        let classes = e.target.value;
        if(cssClasses.includes(classes)){
            setNewClass(cssClasses.filter((element)=>element === classes));
        }else{
            if(classes.matches(/^[a-z][A-Za-z0-9_-]*$/i)){
                return true;
            }else{
                alert("Class naming rules violated");
            }
        }   
    }
    

    return (
        
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.container_sm}>
            <label className={styles.title_sm} >Value :</label>
            <input className={styles.input} type="text" onChange={(e)=>valueHandler(e)}/>
        </div>
        {
            <div className={styles.container_sm}>
            <label className={styles.title_sm}>Class :</label>
            <input className={styles.input} type="text" value={classes} onChange={(e)=>classHandler(e)}/>
            </div>
        }
        <div className={styles.container_sm}>

            <label className={styles.title_sm}>Background Color </label>
            <input className={styles.input_color} type="color" {...register("background-color")}/>
            
        </div>
        <div className={styles.txtStyle}>
       
            <div className={styles.sizeArea} >
                    <label>Size :   </label>
                    <input type="number" placeholder='width' {...register("width")}></input>
                    <input type="number" placeholder='height' {...register("height")}></input>
            </div>
           <div>
                    <label>Opacity:   </label>
                    <input type="number" {...register("opacity")}></input>
           </div>
           <div className={styles.MarginArea} >
                    <label>Margin </label>
                    <input type="number" placeholder='top' {...register("top")}></input>
                    <input type="number" placeholder='right' {...register("right")}></input>
                    <input type="number" placeholder='bottom' {...register("bottom")}></input>
                    <input type="number" placeholder='left' {...register("left")}></input>
           </div>
           <div className={styles.MarginArea} >
                    <label>Padding </label>
                    <input type="number" placeholder='top' {...register("top")}></input>
                    <input type="number" placeholder='right' {...register("right")}></input>
                    <input type="number" placeholder='bottom' {...register("bottom")}></input>
                    <input type="number" placeholder='left' {...register("left")}></input>
           </div>
           <div>
                    <label for="Cursor">Cursor :</label>
                    <select {...register("cursor")}>
                        <option value="default">default</option>
                        <option value="crosshair">crosshair</option>
                        <option value="grab">grab</option>
                        <option value="help">help</option>
                        <option value="moove">moove</option>
                        <option value="pointer">pointer</option>
                        <option value="wait">wait</option>
                    </select>
           </div>
           <div>
                    <label for="Border">Border :</label>
                    <select {...register("border-style")}>
                        <option value="none">none</option>
                        <option value="dotted ">dotted </option>
                        <option value="dashed ">dashed </option>
                        <option value="double ">double </option>
                        <option value="groove ">groove </option>
                        <option value="hidden ">hidden </option>
                        <option value="ridge ">solid </option>
                        <option value="ridge ">ridge </option>
                    </select> 
                     <input className={styles.colors} type="color" {...register("border-color")}/>
           </div>
           <div>
                    <label>Border-radius:   </label>
                    <input type="number" {...register("border-radius")}></input>
           </div>
           <div>
                    <label for="Display">Display :</label>
                    <select {...register("display")}>
                        <option value="block">block</option>
                        <option value="none">none</option>
                        <option value="inline">inline</option>
                        <option value="flex">flex</option>
                        <option value="inline-block">inline-block</option>
                        <option value="manualy">manualy</option>
                    </select>
           </div>
           <div>
                    <label for="Position">Position :</label>
                    <select {...register("position")}>
                        <option value="relative">relative</option>
                        <option value="static">static</option>
                        <option value="fixed">fixed</option>
                        <option value="absolute">absolute</option>
                        <option value="sticky">sticky</option>
                    </select>
           </div>
        </div>
        <div className={styles.submit} >
            <button type='submit' > Delete</button>
            <button  type="submit">Save</button>
        </div> 
        </form>
    );
}