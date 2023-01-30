import React from "react";
import './ServiceNavbar.css';
import Sidebar from './pictures/sidebar.png'
import Fullscreen from './pictures/expand.png'
import down from './pictures/down.png'

function ServiceNavbar(){
    return(
        <>
            <div className="Service">
                <div className="Left">
                    <ul>
                        <li>File <img src={down}></img>
                                    <ul className="Dropdown" >
                                        <li>test</li>
                                        <li>test</li>
                                        <li>test</li>
                                        <li>test</li>
                                    </ul>
                        </li>
                        <li>Edit <img src={down}></img>
                                    <ul className="Dropdown" >
                                        <li>test</li>
                                        <li>test</li>
                                        <li>test</li>
                                        <li>test</li>
                                    </ul>
                        </li>
                        <li>Settings</li>
                        <li>Support</li>
                    </ul>
                </div>
                <div className="Right">
                    <img src={Fullscreen} ></img>
                    <img src={Sidebar} ></img>
                </div>
            </div>
    
        
        
        </>

    )
}
export default ServiceNavbar 