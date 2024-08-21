
import Admin_rdv from "./Admin_rdv/Admin_rdv.js";
import Login from "./Login/Login.js";
import "./structure.css";
import "./structure2.css";
import './globals.css';
import "./rdv.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Admin_blog from "./Admin_blog/Admin_blog.js";
import Client_blog from "./Client_blog/Client_blog.js";
import Nav from "./Nav/Nav.js";


function App() {
  return (
    <div className="App">

<Router>
    
    <Routes>


      <Route exact path = '/' element={<Login />} />

      <Route exact path = '/admin_rdv' element={<><Nav /><Admin_rdv /></>} />

      <Route exact path = '/admin_blog' element={<><Nav /><Admin_blog /></>} />

      <Route exact path = '/client_blog' element={<><Nav /><Client_blog /></>} />


      
    </Routes>

</Router>
      
    </div>
  );
}

export default App;
