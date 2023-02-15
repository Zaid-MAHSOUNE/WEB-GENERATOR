import './assets/css/App.css';
import ServiceNavbar from './components/navbar/ServiceNavbar';
import Navbar from './components/navbar/Navbar';
import { Dashboard } from './components/dashboard/Dashboard';
import { Palette } from './components/palette/Palette';
import { Properties } from './components/props/Properties';
import { useContainer } from './hooks/useContainer';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { GeneralContext } from './context/GeneralContext';

function App() {
  const { type, typeChanger } = useContainer();
  return (
    <GeneralContext>
    <DndProvider backend={HTML5Backend}>
    <div className='App'>
    <Navbar />
    <ServiceNavbar />
    <Palette type={type} setType={typeChanger}/>
    <Dashboard />
    <Properties />
    </div>
    </DndProvider>
    </GeneralContext>
  );
}

export default App;
