
import DragAndDrop from '../../assets/img/dad.jpeg';
import RiseLoader from 'react-spinners/RiseLoader';
import "../../assets/css/LoadingPage.css";
export default function LoadingPage (){

    return(
         <div className="CCTR">
                 <div className="UpDown">
                    <div className="Up">
                            <img src={DragAndDrop} ></img>
                    </div>

                    <div className="Down">
                            <RiseLoader color="#2cbade" />
                    </div>
       
                </div>
         </div>
       
    
    )

}