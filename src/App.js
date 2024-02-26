import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';

import {Routes,Route} from 'react-router-dom';
import Addblog from './components/Addblog';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <Navbar/>
      
       <Routes>
        
         <Route path='/addblog' element={<Addblog/>}/>
         <Route path='/dashboard' element={<Dashboard/>}/>
         
      </Routes> 
    </div>
  );
}

export default App;
