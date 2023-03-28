import { useContext } from 'react';
import styles from '../../assets/css/prop.module.css';
import { TxtForm } from './TxtForm';
import { ImgForm } from './ImgForm';
import { ContainerForm } from './ContainerForm';
import { AppContext } from '../../context/AppContext';
import { useState } from 'react';
export const Properties = () => {

    const {itemList,index,changes} = useContext(AppContext);


    let item = itemList.filter((element) => element.id == index);

    const checkFn = (obj) => {
        if(!obj){
            return ;
        }
        else{
            if( obj.tag == "h1" || obj.tag == "p" || obj.tag == "a" ){
                return <TxtForm obj={obj} />
            }
            else if(obj.tag == "img"){
                return <ImgForm obj={obj}/>
            }
            else if( obj.tag == "div" || obj.tag == "button" || obj.tag == "input" || obj.tag == "ul" ){
                return <ContainerForm obj={obj}/>;
            }
        }
    }
    

    return (
        <div className={styles.container}>
            <div className={styles.title}>Properties</div>
                {
                    //console.log(item[0])
                }
                {
                    checkFn(item.length ? item[0] : null)
                }
             </div>
    );
}