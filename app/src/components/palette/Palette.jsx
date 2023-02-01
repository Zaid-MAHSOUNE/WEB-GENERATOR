import styles from '../../assets/css/palette.module.css';

export const Palette = (props) => {


    if(props.type==="Containers"){
        return (
            <div className={styles.container}>
                <div className={styles.title}>Container</div>
                <div onClick={() => props.setType("Header")} className={styles.header}>Header</div>
                <div onClick={() => props.setType("Body")} className={styles.body}>Body</div>
                <div onClick={() => props.setType("Footer")} className={styles.footer}>Footer</div>
            </div>
        );
    }
    else{
        return(
            <div className={styles.container}>
                <div className={styles.title}>{props.type}</div>
                
            </div>
        );
    }
    
}