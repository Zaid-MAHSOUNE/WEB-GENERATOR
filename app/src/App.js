import './assets/css/App.css';
import {Route ,Routes} from 'react-router-dom';
import { Login } from './pages/Login';
import Main from './pages/Main';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

 
function App() {
 
  return (
    <Routes>
      <Route path='/Login' element={
          <Login></Login>
           
      }  />
     
       <Route path='/' element={
            <Main></Main>
      }  />

        <Route path='/Projects' element={
            <>
              <Projects></Projects>
            </>
      }  />

        <Route path='/Contact' element={
            <>
              <Contact></Contact>
            </>
      }  />
    
    </Routes>
  );
}

export default App;
