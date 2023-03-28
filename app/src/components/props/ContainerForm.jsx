import { useContext, useEffect, useState } from 'react';
import {set, useForm} from 'react-hook-form';
import * as yup from "yup";
import styles from '../../assets/css/prop.module.css';
import {FiPlusSquare,FiMinusSquare} from "react-icons/fi";
import {yupResolver} from "@hookform/resolvers/yup";
import { AppContext } from '../../context/AppContext';


export const ContainerForm = ({obj,class: classes,value,change}) => {

    const {itemList,setItemList,setChanges,changes} = useContext(AppContext);
    
    const [Flx,setFlx]=useState(false);
    const [Brd,setBrd]=useState(false);
    const [PlaceH,setPlaceH]=useState(true);
    const [name,setName] = useState(obj);
    const [cls,setCls] = useState(obj); 
    const [NList,setNList] = useState(''); 
    useEffect(()=>{
        setName(obj);

      /*  itemList.map((itm)=>{
            if(itm.class === obj.class ){
                console.log("identique")
                obj.style = itm.style
            }
            else{}
    })*/
    },[obj])
    
    const schema = yup.object().shape({
        width: yup.number().integer().min(0).max(100),
        height: yup.number().integer().min(0).max(100),
    });
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
            if(element.value){
                if(element.name === "height" || element.name === "width" || element.name === "opacity" || element.name === "marginTop" || element.name === "marginRight" || element.name === "marginLeft" || element.name === "marginBotton" || element.name === "paddingTop" || element.name === "paddingRight" || element.name === "paddingLeft" || element.name === "padding-botton") 
                style[element.name] = "" + element.value + "%" ;
               else if(element.name === "borderRadius" || element.name === "borderWidth" )   style[element.name] = "" + element.value + "px" ;
                else if (element.name ==='value' ||  element.name === 'class' ||  element.name === 'inputType' ||  element.name === 'placeholder' ||  element.name === 'submit' ||  element.name === 'delete'  ||  element.name === 'list'){}
                else
                 style[element.name] = element.value ;
            }
            else {}
           
        })
        
        obj.style = style
        console.log(obj)
        itemList.map((itm)=>{
            if(itm.class === obj.class ){
                itm.style = obj.style
            }
            else{}
    })
       
    }
    const deleteItem = (e) =>{
        var index = itemList.indexOf(obj)
        itemList.splice(index,1);    
    }
    const addnewlist = (e) =>{
        e.preventDefault();
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(NList));
        obj.appendChild(li);
    }
    const TypeHandler = (e) =>{
        e.preventDefault();
        obj.type = e.target.value;
    }
    const PlaceHolderHandler = (e) => {
        e.preventDefault();
        obj.placeholder = e.target.value;
        
    }
    const ClassHandler = (e)=>{
        e.preventDefault()
        setCls(obj.class = e.target.value)
        console.log('new class : '+obj.class)
    }
    //const a = itemList.map((elm)=>{<option>{JSON.stringify(elm.class).slice(1,elm.class.length+1)}</option>})
    return (
        
        <form className={styles.form} onSubmit={(e)=>handleSubmit(onSubmit(e))}>
             {
            <div className={styles.container_sm}>
            <label className={styles.title_sm}>Class</label>
            <input key={changes} className={styles.input} type="text"   {...register("class")}   value={obj.class} onChange={(e)=>{ClassHandler(e) }}  />
            </div>
            }
              {obj.tag == 'input'  && PlaceH ?(
                        <div className={styles.container_sm} > 
                            <label  className={styles.title_sm} >Place-Holder : </label>
                            <input   className={styles.input} type='text'  {...register("placeholder")}  onChange={(e) => PlaceHolderHandler(e)}  ></input>
                        </div>

                ):
                (
                        <div className={styles.container_sm}>
                            <label className={styles.title_sm} >Value :</label>
                            <input key={changes} className={styles.input} type="text"  {...register("value")}  value={obj.value}  onChange={(e)=>{setName(obj.value = e.target.value)}}/>
                        </div>
                )

                }
        
        
       
        <div className={styles.container_sm}>
             <label className={styles.title_sm}>Color </label>
            <input className={styles.input_color} type="color" {...register("color")}/>
            <label className={styles.title_sm}>Background Color </label> 
            <input className={styles.input_color} type="color"  defaultValue ='#FFFFFF' {...register("backgroundColor")}/>
            
        </div>
        
        <div className={styles.txtStyle}>
              
            
            <div className={styles.sizeArea} >
                    <label>Size :   </label>
                    <input type="number" placeholder='width'  name='width' {...register("width")}></input>
                    <input type="number" placeholder='height' {...register("height")}></input>
            </div>
            {obj.tag == 'input' && (

                    <div>
                    <label htmlFor="Input-Type">Input-Type :</label>
                    <select
                          {...register("inputType")}  onChange={(e) => {e.target.value =="text" || e.target.value =="email" || e.target.value =="tel" || e.target.value =="number" || e.target.value =="password" ? setPlaceH(true):setPlaceH(false) ; TypeHandler(e)} }
                        >
                        <option value="text">text</option>
                        <option value="button">button</option>
                        <option value="color">color</option>
                        <option value="date">date</option>
                        <option value="email">email</option>
                        <option value="tel">tel</option>
                        <option value="range">range</option>
                        <option value="number">number</option>
                        <option value="radio">radio</option>
                        <option value="password">password</option>
                    </select>
                    </div>

            ) }
           
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
                    <label htmlFor="Cursor">Cursor :</label>
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
                    <label htmlFor="Cursor">Text-Align :</label>
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
                    <label htmlFor="Border">Border :</label>
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
                         <label htmlFor="Border">Border-Color :</label>
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
                    <label htmlFor="Display">Display :</label>
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
                         <label htmlFor="Justify-Content">Justify-Content :</label>
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
                         <label htmlFor="align-items">align-items :</label>
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
                         <label htmlFor="flex-wrap">flex-wrap:</label>
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
                    <label htmlFor="Position">Position :</label>
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
            <button type='submit'  {...register("submit")}  >   Submit</button>
            <button  {...register("delete")} onClick={(e)=>{deleteItem(e)}} > Delete</button>
        </div> 
        </form>
    );
}