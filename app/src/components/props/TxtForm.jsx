import { useState } from 'react';
import {useForm} from 'react-hook-form';
import * as yup from "yup";
import json from "../../data/CSSjson.json";
import styles from '../../assets/css/prop.module.css';
import {FiPlusSquare,FiMinusSquare} from "react-icons/fi";
import {yupResolver} from "@hookform/resolvers/yup";


export const TxtForm = () => {

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
        
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
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
        <div className={styles.container_sm}>
            <label className={styles.title_sm}>Color </label>
            <input className={styles.input_color} type="color" {...register("color")}/>
            <label className={styles.title_sm}>Background Color </label>
            <input className={styles.input_color} type="color" {...register("background-color")}/>
        </div>
        <div className={styles.txtStyle}>
           <div>
                    <label>Font-size :   </label>
                    <input type="number" ></input>
           </div>
           <div className={styles.checkArea}>
                    <section>
                        <label>Italic :</label>
                        <input type="checkbox" ></input>
                    </section>
                    <section>
                        <label>Underline :</label>
                        <input type="checkbox" ></input>
                    </section>
           </div>
           <div>
                    <label for="TextDecoration">Text-Decoration :</label>
                    <select >
                        <option value="none">none</option>
                        <option value="unherit">unherit</option>
                        <option value="unset">unset</option>
                        <option value="overline">overline</option>
                        <option value="line-through">line-through</option>
                        <option value="overline">overline</option>
                    </select>
                    <label>Text-Decoration-Color :</label>
                    <input className={styles.colors} type="color" {...register("background-color")}/>
           </div>
           <div>
                    <label for="FontFamily">Font Family :</label>
                    <select >
                        <option value="Default">Default</option>
                        <option value="Georgia, serif">Georgia, serif</option>
                        <option value=" 'Gill Sans', sans-serif"> "Gill Sans", sans-serif</option>
                        <option value="cursive">cursive</option>
                        <option value="Arial">Arial</option>
                        <option value="Helvetica">Helvetica</option>
                        <option value="Verdana">Verdana</option>
                        <option value="Times New Roman">Times New Roman</option>
                        <option value="Georgia">Georgian</option>
                    </select>
           </div>
           <div>
                    <label for="TextTransform">Text-Transform :</label>
                    <select >
                        <option value="none">none</option>
                        <option value="uppercase">uppercase</option>
                        <option value="lowercase">lowercase</option>
                        <option value="capitalize">capitalize</option>
                    </select>
           </div>
           
           <div>
                    <label for="FontWeight">Font Weight :</label>
                    <select >
                        <option value="Default">Default</option>
                        <option value="bold">bold</option>
                        <option value="bolder">bolder</option>
                        <option value="lighter">lighter</option>
                        <option value="initial">initial</option>
                        <option value="inherit">inherit</option>
                    </select>
           </div>
           <div  >
                    <label>Letter-Spacing :   </label>
                    <input type="number" ></input>
           </div>
           <div>
                    <label>Opacity:   </label>
                    <input type="number" ></input>
           </div>
           <div className={styles.MarginArea} >
                    <label>Margin :</label>
                    <input type="number" placeholder='top' ></input>
                    <input type="number" placeholder='right' ></input>
                    <input type="number" placeholder='down' ></input>
                    <input type="number" placeholder='left' ></input>
           </div>
           <div className={styles.MarginArea} >
                    <label>Padding :</label>
                    <input type="number" placeholder='top' ></input>
                    <input type="number" placeholder='right' ></input>
                    <input type="number" placeholder='down' ></input>
                    <input type="number" placeholder='left' ></input>
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
        </div>
        <div className={styles.submit} >
            <button type='submit' > Delete</button>
            <button  type="submit">Save</button>
        </div> 
        </form>
    );
}