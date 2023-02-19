
import Navbar from "../components/navbar/Navbar";
import ServiceNavbar from "../components/navbar/ServiceNavbar";
import { Dashboard } from '../components/dashboard/Dashboard';
import { Palette } from '../components/palette/Palette';
import { Properties } from '../components/props/Properties';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useContainer } from '../hooks/useContainer';


export default function Main(){
    return(
        <>
             <DndProvider backend={HTML5Backend}>
              <div className='App'>
              <Navbar />
              <ServiceNavbar />
              <Palette/>
              <Dashboard />
              <Properties />
              </div>
              </DndProvider>
        </>
    )
}