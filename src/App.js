
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
import Create_Blog from "./Create_blog/Create_blog.js";
import Blog from "./Client_blog/View_blog.js";
import Page_edit from "./Landing_page_edit/Page_edit.js";

function App() {
  return (
    <div className="App">

<Router>
    
    <Routes>


      <Route exact path = '/' element={<Login />} />

      <Route exact path = '/landing_page' element={<Page_edit />} />


      <Route exact path = '/admin_rdv' element={<><Nav /><Admin_rdv /></>} />

      <Route exact path = '/admin_blog' element={<><Nav /><Admin_blog /></>} />

      <Route exact path = '/client_blog' element={<><Nav /><Client_blog /></>} />

      <Route path = '/create_blog' element={<><Nav /><Create_Blog /></>} />

      <Route path = '/blog' element={<><Nav /><Blog /></>} />


      
    </Routes>

</Router>
      
    </div>
  );
}

export default App;
