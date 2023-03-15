import { useEffect, useState ,useContext } from 'react';
import {useForm} from 'react-hook-form';
import * as yup from "yup";
import styles from '../../assets/css/prop.module.css';
import {FiPlusSquare,FiMinusSquare} from "react-icons/fi";
import {yupResolver} from "@hookform/resolvers/yup";
import { AppContext } from '../../context/AppContext';


export const PartsForm =  ({obj,class: classes,value,change}) => {
    const {itemList,setItemList,setChanges,changes} = useContext(AppContext);
    const [Flx,setFlx]=useState(false);
    const [Brd,setBrd]=useState(false);
    const [newClass,setNewClass] = useState();
    const schema = yup.object();
    const [name,setName] = useState(obj);
    const [cls,setCls] = useState(obj); 
    
    useEffect(()=>{
        setName(obj);
    },[obj])

    const {register,handleSubmit} = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (e) => {
        e.preventDefault();
        const style = {};
        const keys = Array.from(e.target);
        setChanges((pre)=>!pre);
        //new class
       keys.map((element)=>{
            if( element.name === "paddingTop" || element.name === "paddingRight" || element.name === "paddingLeft" || element.name === "padding-botton") 
            style[element.name] = "" + element.value + "%" ;
           else if(element.name === "borderRadius" || element.name === "borderWidth" || element.name === "fontSize" || element.name === "letterSpacing" )   style[element.name] = "" + element.value + "px" ;
            else if (element.name ==='value' || element.name === 'class'  ||  element.name === 'submit' ||  element.name === 'delete' ){}
             else
             style[element.name] = element.value ;
             
            })
            obj.style = style
            //allready exist
            itemList.map((itm)=>{
                    if(JSON.stringify(itm.class).slice(1,itm.class.length+1) === cls ){
                        console.log("identique")
                        obj.style = itm.style
                    }
                    else{}
                
            })
               console.log(itemList)     
         
        }
    const valueHandler = (e) => {
        e.preventDefault();
        obj.textContent = e.target.value;
    }
    const classHandler = (e) => {
    }
    
    const a = itemList.map((elm)=><option>{JSON.stringify(elm.class).slice(1,elm.class.length+1)}</option>)
    return (
        
        <form className={styles.form} onSubmit={(e)=>handleSubmit(onSubmit(e))}>
                        <div className={styles.container_sm}>
                            <label className={styles.title_sm} >Value :</label>
                            <input key={changes} className={styles.input} type="text"  {...register("value")}  value={name.value} onChange={(e)=>{setName(obj.value = e.target.value)}}/>
                        </div>
        {
            <div className={styles.container_sm}>
            <label className={styles.title_sm}>Class :</label>
            <input key={changes} className={styles.input} type="text"   {...register("class")}   value={obj.class} onChange={(e)=>{ setCls(obj.class = e.target.value) }}  />
            
            </div>
        }
        <select>
            {a}
        </select>
        <div className={styles.container_sm}>
            <label className={styles.title_sm}>Color </label>
            <input className={styles.input_color} type="color" {...register("color")}/>
            <label className={styles.title_sm}>Background Color </label>
            <input className={styles.input_color} type="color" {...register("backgroundColor")} defaultValue ='#FFFFFF' />
        </div>
        
        <div className={styles.txtStyle}>
              
           <div className={styles.MarginArea} >
                    <label>Padding </label>
                    <input type="number" placeholder='top' {...register("paddingTop")}></input>
                    <input type="number" placeholder='right' {...register("paddingright")}></input>
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
                    <label for="Cursor">Text-Align :</label>
                    <select {...register("textAlign")}>
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
                    <select {...register("borderStyle")} onChange={ (e) => {  e.target.value !="none"?  setBrd(true):setBrd(false)  } } >
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
                    <label>Font-size :   </label>
                    <input type="number"  {...register("fontSize")}  ></input>
           </div>
           <div>
                    <label for="FontFamily">Font Family :</label>
                    <select  {...register("fontFamilly")}  >
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
                    <select  {...register("textTransform")} >
                        <option value="none">none</option>
                        <option value="uppercase">uppercase</option>
                        <option value="lowercase">lowercase</option>
                        <option value="capitalize">capitalize</option>
                    </select>
           </div>
           
           <div>
                    <label for="FontWeight">Font Weight :</label>
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
            
        </div>
        <div className={styles.submit} >
            <button type='submit'  {...register("submit")}  >   Submit</button>
            <button  {...register("delete")}  > Delete</button>
        </div> 
        </form>
    );
}