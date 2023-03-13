import { useState } from 'react';
import {useForm} from 'react-hook-form';
import * as yup from "yup";
import json from "../../data/CSSjson.json";
import styles from '../../assets/css/prop.module.css';
import {FiPlusSquare,FiMinusSquare} from "react-icons/fi";
import {yupResolver} from "@hookform/resolvers/yup";


export const ImgForm =({obj,class: classes,value}) => {

    const [Flx,setFlx]=useState(false);
    const [Brd,setBrd]=useState(false);

    const [newClass,setNewClass] = useState();
    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        console.log(obj.src);   
        setFile(URL.createObjectURL(e.target.files[0]));
        obj.src= file;
    }
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
                    <input type="file"  accept="image/png, image/jpg, image/gif, image/jpeg" onChange={handleChange}  ></input>
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
                    <input  placeholder='width' {...register("width")} ></input>
                    <input placeholder='Height' {...register("height")} ></input>
            </div>
            <div>
                    <label>Opacity:   </label>
                    <input type="number" {...register("opacity")} ></input>
           </div>
           <div>
                    <label for="Display">Display :</label>
                    <select {...register("display")} onChange={ (e) => {  e.target.value==="flex"?  setFlx(true):setFlx(false)  } }  >
                        <option value="block">block</option>
                        <option value="none">none</option>
                        <option value="inline">inline</option>
                        <option value="flex">flex  </option>
                        <option value="inline-block">inline-block</option>
                        <option value="manualy">manualy</option>
                    </select>
                    </div>
                    {Flx && (
                        <>
                         <div>
                         <label for="Justify-Content">Justify-Content :</label>
                         <select {...register("justify-content")}>
                             <option value="baseline">baseline</option>
                             <option value="center">center</option>
                             <option value="end">end</option>
                             <option value="flex-end">flex-end</option>
                             <option value="left">left</option>
                             <option value="right">right</option>
                             <option value="space-around">space-around</option>
                             <option value="space-between">space-between</option>
                         </select>
                        </div>
                         <div>
                         <label for="align-items">align-items :</label>
                         <select {...register("align-items")}>
                             <option value="normal" >normal</option>
                             <option value="baseline">baseline</option>
                             <option value="center">center</option>
                             <option value="end">end</option>
                             <option value="flex-end">flex-end</option>
                             <option value="flex-start">flex-start</option>
                             <option value="start">start</option>
                             <option value="normal" >normal</option>
                         </select>
                        </div>
                        <div>
                         <label for="flex-wrap">flex-wrap:</label>
                         <select {...register("flex-wrap")}>
                             <option value="nowrap" >nowrap</option>
                             <option value="wrap">wrap</option>
                             <option value="wrap-reverse">wrap-reverse</option>
                             <option value="inherit">inherit</option>
                             <option value="initial">initial</option>
                             <option value="unset">unset</option>
                         </select>
                        </div>
                        </>
                    )}
            
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
                    <option value="ridge ">solid </option>
                         <option value="none">none</option>
                        <option value="dotted ">dotted </option>
                        <option value="dashed ">dashed </option>
                        <option value="double ">double </option>
                        <option value="groove ">groove </option>
                        <option value="hidden ">hidden </option>
                        
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