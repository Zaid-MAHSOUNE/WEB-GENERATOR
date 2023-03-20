import Navbar from "../components/navbar/Navbar";
import { useEffect } from "react";
import { createContext, useState } from "react";
import { Dashboard } from '../components/dashboard/Dashboard';
import { Palette } from '../components/palette/Palette';
import { Properties } from '../components/props/Properties';
import LoadingPage from "../components/Loading/LoadingPage";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useContainer } from '../hooks/useContainer';
import { AppContext } from '../context/AppContext';
import DragAndDrop from '../../src/assets/img/dad.jpeg';


export const LoadingContext = createContext();
export default function Main(){
    const [itemList,setItemList] = useState([]); 
    const [loading,setLoading] = useState(true);
    const [index,setIndex] = useState(-1);
    const [changes,setChanges] = useState(false);
    useEffect(() => {
       setTimeout(()=>{
            setLoading(true);
       },1500);
        
    })
    return(
        <>
            { loading ? (
                       //  <LoadingContext.Provider value={[loading,setLoading]}>
                          <DndProvider backend={HTML5Backend}>
                          <div className='App'>
                          <Navbar />
                          <AppContext.Provider value={{itemList,setItemList,index,setIndex,changes,setChanges}}>
                          <Palette />
                          <Dashboard />
                          <Properties />
                          </AppContext.Provider>
                          </div>
                          </DndProvider>
                        //  </LoadingContext.Provider>
                )
                : 
                (
                   <LoadingPage></LoadingPage>
                    
                )
            }
           
        </>
    )
}