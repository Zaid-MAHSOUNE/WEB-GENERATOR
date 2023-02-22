import { useContext } from 'react';
import styles from '../../assets/css/prop.module.css';
import { AppContext } from '../../context/AppContext';
import { DynamicInput } from './DynamicInput';
import { TxtForm } from './TxtForm';
import { ImgForm } from './ImgForm';
import { ContainerForm } from './ContainerForm';
export const Properties = () => {
    
    const {selectedItem,setSelectedItem} = useContext(AppContext);

    const checkFn = (obj) => {
        if(Object.keys(obj).length === 0){
            return ;
        }
        else{
            
        }
    }
    

    return (
        <div className={styles.container}>
            <div className={styles.title}>Properties</div>
                {
                    
                    <TxtForm />
                   // <ImgForm></ImgForm>
                  // <ContainerForm></ContainerForm>
                    //checkFn(selectedItem)
                
                }
             </div>
    );
}