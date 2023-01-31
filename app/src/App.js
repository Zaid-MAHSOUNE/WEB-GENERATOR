import './assets/css/App.css';
import ServiceNavbar from './components/navbar/ServiceNavbar';
import Navbar from './components/navbar/Navbar';
import { Dashboard } from './components/dashboard/Dashboard';
import { Palette } from './components/palette/Palette';
import { Properties } from './components/props/Properties';

function App() {
  return (
    <div className='App'>
    <Navbar />
    <ServiceNavbar />
    <Palette />
    <Dashboard /> 
    <Properties />
    </div>
  );
}

export default App;
