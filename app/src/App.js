import './assets/css/App.css';
import ServiceNavbar from './components/navbar/ServiceNavbar';
import Navbar from './components/navbar/Navbar';
import { Dashboard } from './components/dashboard/Dashboard';
import { Palette } from './components/palette/Palette';
import { Properties } from './components/props/Properties';
import { useContainer } from './hooks/useContainer';

function App() {
  const { type, typeChanger } = useContainer();
  return (
    <div className='App'>
    <Navbar />
    <ServiceNavbar />
    <Palette type={type} setType={typeChanger}/>
    <Dashboard />
    <Properties />
    </div>
  );
}

export default App;
