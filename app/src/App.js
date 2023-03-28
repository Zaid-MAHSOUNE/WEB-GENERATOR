import './assets/css/App.css';
import {Route ,Routes} from 'react-router-dom';
import { Login } from './pages/Login';
import Main from './pages/Main';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import { Register } from './pages/Register';
import {  useState } from "react";
import { AppContext } from '../src/context/AppContext';
import LoadingPage from './components/Loading/LoadingPage';


function App() {
  const [itemList,setItemList] = useState([]); 
  const [loading,setLoading] = useState(false);
  const [index,setIndex] = useState(-1);
  const [changes,setChanges] = useState(false);
  const[Project,setProject] = useState('WebProject');
  return (
    <AppContext.Provider value={{itemList,setItemList,index,setIndex,changes,setChanges,Project,setProject,setLoading}}>
      {loading  == false ? (
               <Routes>
               <Route path='/Login' element={
                   <Login></Login>
                    
               }  />
         
             <Route path='/Register' element={
                   <Register></Register>
                    
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
             
      ):(
        <LoadingPage></LoadingPage>
      )}
    </AppContext.Provider>
  );
}

export default App;
