
import Admin_rdv from "./Admin_rdv/Admin_rdv.js";
import Login from "./Login/Login.js";
import "./structure.css";
import "./structure2.css";
import './globals.css';
import "./rdv.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">

<Router>
    
    <Routes>


      <Route exact path = '/' element={<Login />} />

      <Route exact path = '/admin_rdv' element={<Admin_rdv />} /> 


      
    </Routes>

</Router>
      
    </div>
  );
}

export default App;
