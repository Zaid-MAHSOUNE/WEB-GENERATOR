import Navbar from "../components/navbar/Navbar";
import { useEffect } from "react";
import { createContext, useState } from "react";
import { Dashboard } from '../components/dashboard/Dashboard';
import { Palette } from '../components/palette/Palette';
import { Properties } from '../components/props/Properties';
import LoadingPage from "../components/Loading/LoadingPage";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

export const LoadingContext = createContext();
export default function Main(){
    const [loading,setLoading] = useState(true);
    return(
        <>
            { loading ? (
                          <DndProvider backend={HTML5Backend}>
                          <div className='App'>
                          <Navbar />
                        
                          <Palette />
                          <Dashboard />
                          <Properties />
                         
                          </div>
                          </DndProvider>
     
                )
                : 
                (
                   <LoadingPage></LoadingPage>
                    
                )
            }
           
        </>
    )
}