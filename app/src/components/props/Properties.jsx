import { useContext } from 'react';
import styles from '../../assets/css/prop.module.css';
import { TxtForm } from './TxtForm';
import { ImgForm } from './ImgForm';
import { BodyForm } from './BodyForm';
import { ContainerForm } from './ContainerForm';
import { useSelector } from 'react-redux';
export const Properties = () => {
    
    const selected = useSelector(((state) => state.selected.value))

    const checkFn = (obj) => {
        if(Object.keys(obj).length === 0){
            return ;
        }
        else{
           
            if( obj.tagName == "H1" || obj.tagName == "P" || obj.tagName == "A" ){
                return <TxtForm obj={obj} class={obj.getAttribute("class")} />
            }
            else if(obj.tagName == "IMG"){
                return <ImgForm obj={obj} class={obj.getAttribute("class")}/>
            }
            else if( obj.tagName == "DIV" || obj.tagName == "BUTTON" || obj.tagName == "INPUT"){
                return <ContainerForm obj={obj} class={obj.getAttribute("class")} value={obj.textContent}/>;
            }
        }
    }
    

    return (
        <div className={styles.container}>
            <div className={styles.title}>Properties</div>
                {
                    
                    checkFn(selected)
                
                }
             </div>
    );
}