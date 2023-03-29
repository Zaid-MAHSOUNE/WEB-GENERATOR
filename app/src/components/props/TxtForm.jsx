import { useContext ,useEffect, useState } from 'react';
import {useForm} from 'react-hook-form';
import * as yup from "yup";
import json from "../../data/CSSjson.json";
import styles from '../../assets/css/prop.module.css';
import {FiPlusSquare,FiMinusSquare} from "react-icons/fi";
import {yupResolver} from "@hookform/resolvers/yup";
import { AppContext } from '../../context/AppContext';


export const TxtForm = ({obj,class: classes,value,change}) => {
    const {itemList,setItemList,setChanges,changes} = useContext(AppContext);
    const [newClass,setNewClass] = useState();
    const [Brd,setBrd]=useState(false);
    const [cls,setCls] = useState(obj); 
    const [name,setName] = useState(obj);
    const [href,sethref] = useState(obj);
    useEffect(()=>{
        setName(obj);
    },[obj])
    const schema = yup.object();

    const {register,handleSubmit} = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (e) => {
        e.preventDefault();
        setChanges((pre)=>!pre);
          const style = {};
        const keys = Array.from(e.target);
       keys.map((element)=>{
        if(element.value){
            if( element.name === "opacity" || element.name === "marginTop" || element.name === "marginRight" || element.name === "marginLeft" || element.name === "marginBotton" || element.name === "paddingTop" || element.name === "paddingRight" || element.name === "paddingLeft" || element.name === "padding-botton") 
            style[element.name] = "" + element.value + "%" ;
           else if(element.name === "borderRadius" || element.name === "borderWidth" || element.name === "fontSize" || element.name === "letterSpacing" )     style[element.name] = "" + element.value + "px" ;
            else if (element.name ==='value' || element.name === 'class' || element.name === 'href' || element.name === 'submit' ||  element.name === 'delete' ){}
             else
             style[element.name] = element.value ;
            }
            else {}
        })
        obj.style = style
        console.log(obj)
        console.log(obj)
        itemList.map((itm)=>{
            if(itm.class === obj.class ){
                itm.style = obj.style
            }
            else{}
    })
    }
    const ClassHandler = (e)=>{
        e.preventDefault()
        setCls(obj.class = e.target.value)
        console.log('new class : '+obj.class)
    }
    

    return (
        
        <form className={styles.form} onSubmit={(e)=>handleSubmit(onSubmit(e))}>
        <div className={styles.container_sm}>
            <label className={styles.title_sm} >Value :</label>
            <input key={changes} className={styles.input} type="text"  {...register("value")}  value={obj.value}  onChange={(e)=>{setName(obj.value = e.target.value)}}/>
        </div>
        {
            <div className={styles.container_sm}>
            <label className={styles.title_sm}>Class :</label>
            <input className={styles.input} type="text"  {...register("class")}   value={obj.class} onChange={(e)=>{ClassHandler(e) }}  />
            </div>
        }
        {obj.tag === 'a'  && (
                <div className={styles.container_sm}>
                <label className={styles.title_sm} >Href :</label>
                <input key={changes} className={styles.input} type="text"  {...register("href")}  value={obj.href}  onChange={(e)=>{sethref(obj.href = e.target.value)}}/>
                </div>
        )}
         
        <div className={styles.container_sm}>
            <label className={styles.title_sm}>Color </label>
            <input className={styles.input_color} type="color" {...register("color")}/>
            <label className={styles.title_sm}>Background Color </label>
            <input className={styles.input_color} type="color"  defaultValue ='#FFFFFF'{...register("backgroundColor")}/>
        </div>
        <div className={styles.txtStyle}>
           <div>
                    <label>Font-size :   </label>
                    <input type="number"  {...register("fontSize")}  ></input>
           </div>
           <div>
                    <label>Text-Decoration :</label>
                    <select  {...register("textDecoration")} >
                        <option value="none">none</option>
                        <option value="unherit">unherit</option>
                        <option value="unset">unset</option>
                        <option value="overline">overline</option>
                        <option value="line-through">line-through</option>
                        <option value="overline">overline</option>
                        <option value="underline">underline</option>
                    </select>
                    <label>Text-Decoration-Color :</label>
                    <input className={styles.colors} type="color" {...register("textDecorationColor")}/>
           </div>
           <div>
                    <label >Font Family :</label>
                    <select  {...register("fontFamilly")}  >
                        <option value="Default">Default</option>
                        <option value="Georgia, serif">Georgia, serif</option>
                        <option value="Gill Sans', sans-serif"> "Gill Sans", sans-serif</option>
                        <option value="cursive">cursive</option>
                        <option value="Arial">Arial</option>
                        <option value="Helvetica">Helvetica</option>
                        <option value="Verdana">Verdana</option>
                        <option value="Times New Roman">'Times New Roman'</option>
                        <option value="Georgia">Georgian</option>
                    </select>
           </div>
           <div>
                    <label >Text-Transform :</label>
                    <select  {...register("textTransform")} >
                        <option value="none">none</option>
                        <option value="uppercase">uppercase</option>
                        <option value="lowercase">lowercase</option>
                        <option value="capitalize">capitalize</option>
                    </select>
           </div>
           
           <div>
                    <label >Font Weight :</label>
                    <select  {...register("fontWeight")}  >
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
                    <input type="number"  {...register("letterSpacing")}  ></input>
           </div>
           <div>
                    <label>Opacity:   </label>
                    <input type="number" {...register("opacity")}></input>
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
                         <label >Border-Color :</label>
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
                    <label >Position :</label>
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
            <button type='submit'  {...register("submit")}  >   Submit</button>
            <button  {...register("delete")}  > Delete</button>
        </div> 
        </form>
    );
}