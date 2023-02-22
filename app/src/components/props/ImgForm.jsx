import { useState } from 'react';
import {useForm} from 'react-hook-form';
import * as yup from "yup";
import json from "../../data/CSSjson.json";
import styles from '../../assets/css/prop.module.css';
import {FiPlusSquare,FiMinusSquare} from "react-icons/fi";
import {yupResolver} from "@hookform/resolvers/yup";


export const ImgForm = () => {


    const [switchInput,setSwitch] = useState(false);

 

    const schema = yup.object().shape({
        value: yup.string().required(),
        indefined_class: yup.string().notOneOf(json.map((element)=>element.class)).required().matches(/^[a-z][A-Za-z0-9_-]*$/i),
        defined_class: yup.string().oneOf(json.map((element)=>element.class)).required(), 
    });

    const {register,handleSubmit} = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        console.log(data);
    }

    const switchHandler = (e) => {
        e.preventDefault();
        setSwitch((previousState)=>!previousState);
    }

    

    return (
        
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.container_sm}>
            <label className={styles.title_sm}>Value :</label>
            <input className={styles.input} type="text" {...register("value")}/>
        </div>
        {
            switchInput ? (
            <div className={styles.container_sm}>
            <label className={styles.title_sm}>Class :</label>
            <input className={styles.input} type="text" {...register("indefined_class")}/>
            <FiMinusSquare title='Choose a defined class' size="25px" className={styles.icons} onClick={(e)=>switchHandler(e)}/>
            </div>
            ):(
            <div className={styles.container_sm}>
            <label className={styles.title_sm}>Class :</label>
            <select className={styles.select} {...register("defined_class")}>
                {
                   json.map((element)=><option value={element.class}>{element.class}</option>)
                }
            </select>
            <FiPlusSquare title='Add a new class' size="25px" className={styles.icons} onClick={(e)=>switchHandler(e)}/>
            </div>
            )
        }
        <div className={styles.txtStyle}>
           <div  className={styles.fileArea} >
                    <label>Source :   </label>
                    <input type="file"  accept="image/png, image/jpg, image/gif, image/jpeg" aria-label="File browser example"></input>
           </div>
          
           <div>
                    <label>Border-radius :   </label>
                    <input type="number" ></input>
           </div>
           <div>
                    <label for="BackgroundSize">Background-Size :</label>
                    <select >
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
                    <input type="number" placeholder='width'></input>
                    <input type="number" placeholder='Height'></input>
            </div>
            <div>
                    <label>Opacity:   </label>
                    <input type="number" ></input>
           </div>
           <div>
                    <label for="Display">Display :</label>
                    <select >
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
                    <select >
                        <option value="relative">relative</option>
                        <option value="static">static</option>
                        <option value="fixed">fixed</option>
                        <option value="absolute">absolute</option>
                        <option value="sticky">sticky</option>
                    </select>
           </div>
           <div className={styles.MarginArea} >
                    <label>Margin </label>
                    <input type="number" placeholder='top' ></input>
                    <input type="number" placeholder='right' ></input>
                    <input type="number" placeholder='down' ></input>
                    <input type="number" placeholder='left' ></input>
           </div>
           <div className={styles.MarginArea} >
                    <label>Padding  </label>
                    <input type="number" placeholder='top' ></input>
                    <input type="number" placeholder='right' ></input>
                    <input type="number" placeholder='down' ></input>
                    <input type="number" placeholder='left' ></input>
           </div>
           <div>
                    <label for="Border">Border :</label>
                    <select >
                        <option value="none">none</option>
                        <option value="dotted ">dotted </option>
                        <option value="dashed ">dashed </option>
                        <option value="double ">double </option>
                        <option value="groove ">groove </option>
                        <option value="hidden ">hidden </option>
                        <option value="ridge ">ridge </option>
                    </select> 
                     <input className={styles.colors} type="color" {...register("background-color")}/>
           </div>
           <div>
                    <label>Border-radius:   </label>
                    <input type="number" ></input>
           </div>
           <div>
                    <label for="Cursor">Cursor :</label>
                    <select >
                        <option value="Default">Default</option>
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
            <button  type="submit">Save</button>
        </div>
        
        
        </form>
    );
}