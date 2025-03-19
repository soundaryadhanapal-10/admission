import './App.css';
import { Routes, Route } from 'react-router-dom'; 
import About from './pages/About';
import { Sidebar } from './pages/Sidebar';

import Sample from './pages/Sample';

import Study from './pages/Study'
  

import { Header } from './pages/Header';

function App() {
  return (
    
      <div>
        <Header />
        <Sidebar />
        
        <div style={{ marginLeft: '200px', padding: '20px' }}>
          <Routes>
            <Route path="/" element={<About/>} />
           
            <Route path="/Sample" element={<Sample />} />/
            <Route path="/Study" element={<Study/>} />
          
          </Routes>
        </div>
      </div>
    
  );
}

export default App;
