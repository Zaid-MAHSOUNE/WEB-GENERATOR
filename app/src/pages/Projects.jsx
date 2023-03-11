import { useContext, useEffect } from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import '../assets/css/ProjectPage.css'
import Navbar from "../components/navbar/Navbar";
import ProjetDashboard from "../components/ProjectPageComponent/ProjectDashboard";
import { auth } from '../context/firebase/FirebaseConfig';

export default function Projects() {
        return (
            (localStorage.length > 1 ? (
                <div className="ctrn">
                <Navbar />
                <ProjetDashboard />
                </div>
            ):(
                <Navigate to="/Login" />
            ))
            
         )
        
}