
import Navbar from "../components/navbar/Navbar";
import { useState } from "react";
import ServiceNavbar from "../components/navbar/ServiceNavbar";
import { Dashboard } from '../components/dashboard/Dashboard';
import { Palette } from '../components/palette/Palette';
import { Properties } from '../components/props/Properties';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useContainer } from '../hooks/useContainer';
import { AppContext } from '../context/AppContext';



export default function Main(){
    const [selectedItem,setSelectedItem] = useState({}); 
    return(
        <>
             <DndProvider backend={HTML5Backend}>
              <div className='App'>
              <Navbar />
              <ServiceNavbar />
              <Palette />
              <AppContext.Provider value={{selectedItem,setSelectedItem}}>
              <Dashboard />
              <Properties />
              </AppContext.Provider>
              </div>
              </DndProvider>
        </>
    )
}