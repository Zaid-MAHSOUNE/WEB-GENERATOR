import styles from '../../assets/css/prop.module.css';
export const DynamicInput = (props) => {
    if(props.type === "txt"){
        return (
        <div className={styles.container_sm}>
            <label className={styles.title_sm}>{props.title} :</label>
            <input className={styles.input} type="text"/>
        </div>
        );
    }
    else if(props.type === "dropdown"){
        console.log(props.data);
        return (
        <div className={styles.container_sm}>
            <label className={styles.title_sm}>{props.title} :</label>
            <select className={styles.select}>
                {
                   props.data.map((element)=><option value={element}>{element}</option>)
                }
            </select>
        </div>
        );
    }
}