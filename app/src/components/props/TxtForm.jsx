import { useState } from 'react';
import {useForm} from 'react-hook-form';
import * as yup from "yup";
import json from "../../data/CSSjson.json";
import styles from '../../assets/css/prop.module.css';
import {FiPlusSquare,FiMinusSquare} from "react-icons/fi";
import {yupResolver} from "@hookform/resolvers/yup";
import { useSelector } from 'react-redux';


export const TxtForm =({obj,class: classes,value}) => {
    const [newClass,setNewClass] = useState();
    const [Brd,setBrd]=useState(false);

    const cssClasses = useSelector((state)=>state.itemList.value);

    const schema = yup.object();

    const {register,handleSubmit} = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        let keys = Object.keys(data);
        let values = Object.values(data);
        let style = "";
        keys.map((element,index)=>{
            if(values[index]){
            if(element === "opacity" || element === "margin-top" || element === "margin-right" || element === "margin-left" || element === "margin-botton" || element === "padding-top" || element === "padding-right" || element === "padding-left" || element === "padding-botton") 
             style += ""+element+":"+values[index]+"%;\n";
             else if(element === "border-radius" || element === "border-width" || element ==="font-size"  || element === "letter-spacing" )  style += ""+element+":"+values[index]+"px;\n";
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
        
        <form className={styles.form} onChange={handleSubmit(onSubmit)}>
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
            <label className={styles.title_sm}>Color </label>
            <input className={styles.input_color} type="color" {...register("color")}/>
            <label className={styles.title_sm}>Background Color </label>
            <input className={styles.input_color} type="color" {...register("background-color")}/>
        </div>
        <div className={styles.txtStyle}>
           <div>
                    <label>Font-size :   </label>
                    <input type="number"  {...register("font-size")}  ></input>
           </div>
           <div>
                    <label for="TextDecoration">Text-Decoration :</label>
                    <select  {...register("text-decoration")} >
                        <option value="none">none</option>
                        <option value="unherit">unherit</option>
                        <option value="unset">unset</option>
                        <option value="overline">overline</option>
                        <option value="line-through">line-through</option>
                        <option value="overline">overline</option>
                        <option value="underline">underline</option>
                    </select>
                    <label>Text-Decoration-Color :</label>
                    <input className={styles.colors} type="color" {...register("text-decoration-color")}/>
           </div>
           <div>
                    <label for="FontFamily">Font Family :</label>
                    <select  {...register("font-familly")}  >
                        <option value="Default">Default</option>
                        <option value="Georgia, serif">Georgia, serif</option>
                        <option value="Gill Sans', sans-serif"> "Gill Sans", sans-serif</option>
                        <option value="cursive">cursive</option>
                        <option value="Arial">Arial</option>
                        <option value="Helvetica">Helvetica</option>
                        <option value="Verdana">Verdana</option>
                        <option value="'Times New Roman'">Times New Roman</option>
                        <option value="Georgia">Georgian</option>
                    </select>
           </div>
           <div>
                    <label for="TextTransform">Text-Transform :</label>
                    <select  {...register("text-transform")} >
                        <option value="none">none</option>
                        <option value="uppercase">uppercase</option>
                        <option value="lowercase">lowercase</option>
                        <option value="capitalize">capitalize</option>
                    </select>
           </div>
           
           <div>
                    <label for="FontWeight">Font Weight :</label>
                    <select  {...register("font-weight")}  >
                        <option value="Default">Default</option>
                        <option value="bold">bold</option>
                        <option value="bolder">bolder</option>
                        <option value="lighter">lighter</option>
                        <option value="initial">initial</option>
                        <option value="inherit">inherit</option>
                    </select>
           </div>
           <div  >
                    <label>Letter-Spacing :  </label>
                    <input type="number"  {...register("letter-spacing")}  ></input>
           </div>
           <div>
                    <label>Opacity:   </label>
                    <input type="number" {...register("opacity")}></input>
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
                    <label for="Position">Position :</label>
                    <select {...register("position")}  >
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
        </div> 
        </form>
    );
}