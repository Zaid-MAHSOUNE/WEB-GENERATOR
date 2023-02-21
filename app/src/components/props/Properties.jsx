import { useContext } from 'react';
import styles from '../../assets/css/prop.module.css';
import { AppContext } from '../../context/AppContext';
import { DynamicInput } from './DynamicInput';
import { TxtForm } from './TxtForm';
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
                    //checkFn(selectedItem)
                }
             </div>
    );
}