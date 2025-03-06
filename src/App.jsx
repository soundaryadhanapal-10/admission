
import './App.css'
import About from './pages/About';
import { Sidebar } from './pages/Sidebar'
import {Routes,Route} from "react-router-dom";
import Dashboard from "./pages/Dashboard"
import Profile from "./pages/Profile";
import { Admission } from './pages/Admission';
// import { Header} from './pages/Header';
function App() {
 

  return (
    <>
      <div>
      {/* <Header /> */}
      <Sidebar/>
      <Routes>
        <Route path="/" element={<About/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/admission" element={<Admission/>}/>
      </Routes>
       
        
        </div>
    </>
  )
}

export default App
