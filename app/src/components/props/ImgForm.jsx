import { useState } from 'react';
import {useForm} from 'react-hook-form';
import * as yup from "yup";
import json from "../../data/CSSjson.json";
import styles from '../../assets/css/prop.module.css';
import {FiPlusSquare,FiMinusSquare} from "react-icons/fi";
import {yupResolver} from "@hookform/resolvers/yup";
import { useSelector } from 'react-redux';


export const ImgForm =({obj,class: classes,value}) => {


    const [Brd,setBrd]=useState(false);

    const [newClass,setNewClass] = useState();

    const cssClasses = useSelector((state)=>state.itemList.value);

    const schema = yup.object().shape({
        width: yup.number().integer().min(0).max(100),
        height: yup.number().integer().min(0).max(100),
        opacity: yup.number().integer().min(0).max(100),
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
            if(element === "height" || element === "width" || element === "height" || element === "width" || element === "opacity" || element === "margin-top" || element === "margin-right" || element === "margin-left" || element === "margin-botton" || element === "padding-top" || element === "padding-right" || element === "padding-left" || element === "padding-botton") 
             style += ""+element+":"+values[index]+"%;\n";
             else if(element === "border-radius" || element === "border-width" )  style += ""+element+":"+values[index]+"px;\n";
             else
             style += ""+element+":"+values[index]+";\n";
        }
    })

        obj.setAttribute("style",style);
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
        
        <form className={styles.form} onChange={handleSubmit(onSubmit)}>
        {
            <div className={styles.container_sm}>
            <label className={styles.title_sm}>Class :</label>
            <input className={styles.input} type="text" value={classes} onChange={(e)=>classHandler(e)}/>
            </div>
        }
        <div className={styles.txtStyle}>
           <div  className={styles.fileArea} >
                    <label>Source :   </label>
                    <input type="file"  accept="image/png, image/jpg, image/gif, image/jpeg" aria-label="File browser example"></input>
           </div>
           <div>
                    <label for="BackgroundSize">Background-Size :</label>
                    <select  {...register("background-size")}  >
                        <option value="auto">auto</option>
                        <option value="cover">cover</option>
                        <option value="contain">contain</option>
                        <option value="initial">initial</option>
                        <option value="inherit">inherit</option>
                        <option value="manualy">manualy</option>
                    </select>
           </div>
           <div className={styles.sizeArea} >
                    <label>Size :   </label>
                    <input type="number" placeholder='width' {...register("width")} ></input>
                    <input type="number" placeholder='Height' {...register("height")} ></input>
            </div>
            <div>
                    <label>Opacity:   </label>
                    <input type="number" {...register("opacity")} ></input>
           </div>
           <div>
                    <label for="Display">Display :</label>
                    <select  {...register("display")} >
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
                    <select  {...register("position")} >
                        <option value="relative">relative</option>
                        <option value="static">static</option>
                        <option value="fixed">fixed</option>
                        <option value="absolute">absolute</option>
                        <option value="sticky">sticky</option>
                    </select>
           </div>
           <div className={styles.MarginArea} >
                    <label>Margin </label>
                    <input type="number" placeholder='top' {...register("margin-top")}></input>
                    <input type="number" placeholder='right' {...register("margin-right")}></input>
                    <input type="number" placeholder='bottom' {...register("margin-bottom")}></input>
                    <input type="number" placeholder='left' {...register("margin-left")}></input>
           </div>
           <div className={styles.MarginArea} >
                    <label>Padding </label>
                    <input type="number" placeholder='top' {...register("padding-top")}></input>
                    <input type="number" placeholder='right' {...register("padding-right")}></input>
                    <input type="number" placeholder='bottom' {...register("padding-bottom")}></input>
                    <input type="number" placeholder='left' {...register("padding-left")}></input>
           </div>
           <div>
                    <label for="Border">Border :</label>
                    <select {...register("border-style")} onChange={ (e) => {  e.target.value !="none"?  setBrd(true):setBrd(false)  } } >
                        <option value="none">none</option>
                        <option value="dotted ">dotted </option>
                        <option value="dashed ">dashed </option>
                        <option value="double ">double </option>
                        <option value="groove ">groove </option>
                        <option value="hidden ">hidden </option>
                        <option value="ridge ">solid </option>
                        <option value="ridge ">ridge </option>
                    </select> 
            </div>
                {Brd && (
                        <>
                         <div>
                         <label for="Border">Border-Color :</label>
                          <input className={styles.colors} type="color" {...register("border-color")}/>
                          </div>
                          <div>
                           <label>Border-width:   </label>
                           <input type="number" {...register("border-width")}></input>
                            </div>
                           <div>
                           <label>Border-radius:   </label>
                           <input type="number" {...register("border-radius")}></input>
                            </div>
                            </>

                )}
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
        </div>
        <div className={styles.submit} >
            <button type='submit' > Delete</button>
        </div>
        
        
        </form>
    );
}