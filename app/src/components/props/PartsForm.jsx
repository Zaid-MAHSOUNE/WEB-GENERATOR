import { useEffect, useState } from 'react';
import {useForm} from 'react-hook-form';
import * as yup from "yup";
import styles from '../../assets/css/prop.module.css';
import {FiPlusSquare,FiMinusSquare} from "react-icons/fi";
import {yupResolver} from "@hookform/resolvers/yup";
import { useSelector } from 'react-redux';


export const PartsForm = ({obj,class: classes,value}) => {
    const [Flx,setFlx]=useState(false);
    const [Brd,setBrd]=useState(false);
    const [newClass,setNewClass] = useState();
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
            if(element === "padding-top" || element === "padding-right" || element === "padding-left" || element === "padding-botton") 
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
                    <label for="Cursor">Text-Align :</label>
                    <select {...register("text-align")}>
                        <option value=""></option>
                        <option value="center">center</option>
                        <option value="end">end</option>
                        <option value="right">right</option>
                        <option value="start">start</option>
                        <option value="inherit">inherit</option>
                        <option value="initial">initial</option>
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
                    <label>Font-size :   </label>
                    <input type="number"  {...register("font-size")}  ></input>
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
            
        </div>
        <div className={styles.submit} >
            <button type='submit' > Delete</button>
        </div> 
        </form>
    );
}