import {  useContext, useEffect, useState } from 'react';
import {useForm} from 'react-hook-form';
import * as yup from "yup";
import styles from '../../assets/css/prop.module.css';
import {yupResolver} from "@hookform/resolvers/yup";
import { AppContext } from '../../context/AppContext';
import { uploadPic } from '../../context/firebase/FirebaseConfig'
import {ref,listAll, getDownloadURL } from  'firebase/storage'
import { storage } from '../../context/firebase/FirebaseConfig';
import  spinner from "../../assets/svg/Spinner-1s-200px.svg"
export const ImgForm = ({obj,class: classes,value,change}) => {
    const {itemList,setItemList,setChanges,changes,Project,setProject} = useContext(AppContext);
    const [Flx,setFlx]=useState(false);
    const [Brd,setBrd]=useState(false);
    const [name,setName] = useState(obj);
    const [cls,setCls] = useState(obj); 
    useEffect(()=>{
        setName(obj);
    },[obj])

    const PicToFirebase =  async (e)=>{
        e.preventDefault()
        setChanges((pre)=>!pre);
        obj.src = spinner
        await uploadPic(e.target.files[0],localStorage.getItem('email')).then((res)=>{
            console.log("uploading ...")
            const ListRef = ref(storage , localStorage.getItem('email') + '/')
             listAll(ListRef).then((res)=>{
              res.items.forEach((itm)=>{
                    if(itm.name===e.target.files[0].name){
                        getDownloadURL(itm).then((url)=>{ obj.src = url; setChanges((pre)=>!pre); })
                    }
              })
            })     
        }) 
        console.log(obj)
    }
    const schema = yup.object().shape({
        width: yup.number().integer().min(0).max(100),
        height: yup.number().integer().min(0).max(100),
        opacity: yup.number().integer().min(0).max(100),
    });

    const {register,handleSubmit} = useForm({
        resolver: yupResolver(schema),
    });
    const deleteItem = (e) =>{
        var index = itemList.indexOf(obj)
        itemList.splice(index,1);    
    }

   const onSubmit = (e) => {
        e.preventDefault();
        setChanges((pre)=>!pre);
          const style = {};
        const keys = Array.from(e.target);
       keys.map((element)=>{
        if(element.value){
            if(element.name === "height" || element.name === "width" || element.name === "opacity" || element.name === "marginTop" || element.name === "marginRight" || element.name === "marginLeft" || element.name === "marginBotton" || element.name === "paddingTop" || element.name === "paddingRight" || element.name === "paddingLeft" || element.name === "padding-botton") 
            style[element.name] = "" + element.value + "%" ;
           else if(element.name === "borderRadius" || element.name === "borderWidth" )   style[element.name] = "" + element.value + "px" ;
            else if (element.name ==='picture' || element.name === 'class'|| element.name === 'submit' ||  element.name === 'delete' ){}
             else
             style[element.name] = element.value ;
            }
            else {}
        })
        obj.style = style
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
        
        <form className={styles.form}  onSubmit={(e)=>handleSubmit(onSubmit(e))}>
        {
            <div className={styles.container_sm}>
            <label className={styles.title_sm}>Class :</label>
            <input className={styles.input} type="text" {...register("class")} value={obj.class} onChange={(e)=>{ClassHandler(e) }}  /> 
            </div>
        }
        <div className={styles.txtStyle}>
           <div  className={styles.fileArea} >
                    <label  >Source :   </label>
                    <input type="file"   {...register("picture")}  onChange={(e)=>{PicToFirebase(e)}}    ></input>
           </div>
           <div>
                    <label >Background-Size :</label>
                    <select  {...register("backgroundSize")}  >
                        <option value=""></option>
                        <option value="auto">auto</option>
                        <option value="cover">cover</option>
                        <option value="contain">contain</option>
                        <option value="initial">initial</option>
                        <option value="inherit">inherit</option>
                        <option value="manualy">manualy</option>
                    </select>
           </div>
           <div className={styles.sizeArea} >
                    <label  >Size :   </label>
                    <input  placeholder='width' {...register("width")} ></input>
                    <input placeholder='Height' {...register("height")} ></input>
            </div>
            <div>
                    <label >Opacity:   </label>
                    <input type="number" {...register("opacity")} ></input>
           </div>
           <div>
                    <label>Display :</label>
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
                         <label >Justify-Content :</label>
                         <select {...register("justifyContent")}>
                         <option value=""></option>
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
                         <label >align-items :</label>
                         <select {...register("alignItems")}>
                         <option value=""></option>
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
                         <label >flex-wrap:</label>
                         <select {...register("flexWrap")}>
                         <option value=""></option>
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
                    <label >Position :</label>
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
                    <label >Border :</label>
                    <select {...register("borderStyle")} onChange={ (e) => {  e.target.value !="none" && e.target.value !="" ?  setBrd(true):setBrd(false)  } } >
                     <option > </option>
                         <option value="solid ">solid </option>
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
                         <label>Border-Color :</label>
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
                    <label >Cursor :</label>
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
            <button  {...register("delete")} onClick={(e)=>{deleteItem(e)}} > Delete</button>
        </div> 
        
        
        </form>
    );
}