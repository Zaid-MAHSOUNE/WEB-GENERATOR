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
import {Route ,Routes} from 'react-router-dom';
import { Login } from './components/authentification/Login';

 
function App() {
  const { type, typeChanger } = useContainer();
  return (
    <Routes>
      <Route path='/Login' element={
          <Login></Login>
           
      }  />
     
       <Route path='/' element={
              <DndProvider backend={HTML5Backend}>
              <div className='App'>
              <Navbar />
              <ServiceNavbar />
              <Palette type={type} setType={typeChanger}/>
              <Dashboard />
              <Properties />
              </div>
              </DndProvider>
      }  />

        <Route path='/Projects' element={
            <>
              <Navbar />
              <ServiceNavbar />
            </>
      }  />

        <Route path='/Contact' element={
            <>
              <Navbar />
              <ServiceNavbar />
            </>
      }  />
    
    </Routes>
  );
}

export default App;
