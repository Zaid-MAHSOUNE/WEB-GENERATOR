import bg from '../../assets/svg/bg.svg'
import { IoIosTrash,IoMdDownload } from "react-icons/io";
import '../../assets/css/ProjectPage.css'

export default function ProjetComponent(props){
    return(
        <div className="main">
            <img src={bg} ></img>
            <div className="down">
                <div className="title">
                        <h3> {props.title}</h3>
                </div>  
                <div className="tools">
                    
                    <IoMdDownload size="22px" ></IoMdDownload>
                    <IoIosTrash size="22px" ></IoIosTrash>
                </div>
            </div>
        </div>
    )
}