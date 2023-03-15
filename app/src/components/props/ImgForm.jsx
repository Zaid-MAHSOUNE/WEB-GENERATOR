import {  useContext, useEffect, useState } from 'react';
import {useForm} from 'react-hook-form';
import * as yup from "yup";
import json from "../../data/CSSjson.json";
import styles from '../../assets/css/prop.module.css';
import {FiPlusSquare,FiMinusSquare} from "react-icons/fi";
import {yupResolver} from "@hookform/resolvers/yup";
import { AppContext } from '../../context/AppContext';

export const ImgForm = ({obj,class: classes,value,change}) => {
    const {itemList,setItemList,setChanges,changes} = useContext(AppContext);
    const [Flx,setFlx]=useState(false);
    const [Brd,setBrd]=useState(false);
    const [name,setName] = useState(obj);
    useEffect(()=>{
        setName(obj);
    },[obj])

    const [newClass,setNewClass] = useState();
    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);  
        console.log(obj.src);  
        setFile(URL.createObjectURL(e.target.files[0]));
        obj.src= file[0];   
        console.log(file)
    }
    const schema = yup.object().shape({
        width: yup.number().integer().min(0).max(100),
        height: yup.number().integer().min(0).max(100),
        opacity: yup.number().integer().min(0).max(100),
    });

    const {register,handleSubmit} = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (e) => {
        e.preventDefault();
        setChanges((pre)=>!pre);
          const style = {};
        const keys = Array.from(e.target);
       keys.map((element)=>{
            if(element.name === "height" || element.name === "width" || element.name === "opacity" || element.name === "marginTop" || element.name === "marginRight" || element.name === "marginLeft" || element.name === "marginBotton" || element.name === "paddingTop" || element.name === "paddingRight" || element.name === "paddingLeft" || element.name === "padding-botton") 
            style[element.name] = "" + element.value + "%" ;
           else if(element.name === "borderRadius" || element.name === "borderWidth" )   style[element.name] = "" + element.value + "px" ;
            else if (element.name ==='picture' || element.name === 'class'|| element.name === 'submit' ||  element.name === 'delete' ){}
             else
             style[element.name] = element.value ;
             
        })
        obj.style = style
       console.log(style)

    }

    const classHandler = (e) => {
          
    }
    

    return (
        
        <form className={styles.form} onSubmit={(e)=>handleSubmit(onSubmit(e))}>
        {
            <div className={styles.container_sm}>
            <label className={styles.title_sm}>Class :</label>
            <input className={styles.input} type="text" value={classes}  {...register("class")}  onChange={(e)=>classHandler(e)}/>
            </div>
        }
        <div className={styles.txtStyle}>
           <div  className={styles.fileArea} >
                    <label>Source :   </label>
                    <input type="file"   {...register("picture")} onChange={handleChange}  ></input>
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
                         <select {...register("justifyContent")}>
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
                         <select {...register("alignItems")}>
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
                         <select {...register("flexWrap")}>
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
                    <input type="number" placeholder='top' {...register("marginTop")}></input>
                    <input type="number" placeholder='right' {...register("marginRight")}></input>
                    <input type="number" placeholder='bottom' {...register("marginBottom")}></input>
                    <input type="number" placeholder='left' {...register("marginLeft")}></input>
           </div>
           <div className={styles.MarginArea} >
                    <label>Padding </label>
                    <input type="number" placeholder='top' {...register("paddingTop")}></input>
                    <input type="number" placeholder='right' {...register("paddingRight")}></input>
                    <input type="number" placeholder='bottom' {...register("paddingBottom")}></input>
                    <input type="number" placeholder='left' {...register("paddingLeft")}></input>
           </div>
           <div>
                    <label for="Border">Border :</label>
                    <select {...register("borderStyle")} onChange={ (e) => {  e.target.value !="none"?  setBrd(true):setBrd(false)  } } >
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
                          <input className={styles.colors} type="color" {...register("borderColor")}/>
                          </div>
                          <div>
                           <label>Border-width:   </label>
                           <input type="number" {...register("borderWidth")}></input>
                            </div>
                           <div>
                           <label>Border-radius:   </label>
                           <input type="number" {...register("borderRadius")}></input>
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
            <button type='submit'  {...register("submit")}  >   Submit</button>
            <button  {...register("delete")}  > Delete</button>
        </div> 
        
        
        </form>
    );
}