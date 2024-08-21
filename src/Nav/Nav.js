
import logo from '../images/firstlogo.svg';
import { Link } from "react-router-dom";

function Nav() {
  
    
    
      
    return (
      <div className="Nav">
        

      
      
      <Link to='../admin_blog'>
        <a onClick={() => window.scrollTo(0,10)}>
        <div class="row">
        <div class="nav-logo">
        <img src={logo} className="nav-logo" alt="logo" />
            </div>
            <div class="column_start title_logo">
            <content>win<blue>entretien</blue></content>
            <content2>préparez vous à réussir</content2>

            </div>
            
            
            </div>
            </a>
        </Link>

        <div class="nav-links">

        
        <ul>
        
        


        </ul>
        
        <ul>
        <Link to='../Admin_rdv' >

        <a onClick={() => window.scrollTo(0,10)}>Rendez-vous</a>

        

       </Link>
        </ul>
        
        

        <ul>
          <Link to='../Client_blog'>
        <a >Actualités</a>
          </Link>

         
        
        </ul>

        <ul>
          <Link to='../Admin_blog'>
        <a >Création d'articles</a>
          </Link>

         
        
        </ul>

        
        </div>
        
       
      





      </div>
    );
  }
  
  export default Nav;