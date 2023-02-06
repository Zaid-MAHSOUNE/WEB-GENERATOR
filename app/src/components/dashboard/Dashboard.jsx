import styles from '../../assets/css/dashboard.module.css';
export const Dashboard = () => {

   
    const Dragover =(e) =>{
        e.preventDefault();
        let frm = document.getElementById('frm');
        console.log("you are in the iframe");
        let save = document.querySelector('.dragging');
        frm.style.cursor = 'move';
        frm.contentDocument.body.innerHTML += save.value;
        //case of css style
        //  frm.contentDocument.body.innerHTML += save.value + "<styles>"+ htl+"</styles>";
    }
    return (
        <div  onDragOver={Dragover} id="container" className={styles.container}>
            <iframe  className='iframe' id='frm' >

            </iframe>
        </div>
    );
}