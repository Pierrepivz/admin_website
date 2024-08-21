import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Login() {

    

    const [login,setLogin] = useState('');
    const [password,setPassword] = useState('');
    const [Listset, setDatalist] = useState([]);
  
    useEffect (() => {

        axios.get('https://server-test-3emq.onrender.com/api/get')
          .then((response) =>  { 
            setDatalist(response.data);}
          );
         
          
        
        }, []); 

       const connect = () => {
          
          
          
            
              const psswrd = Listset.map(value => value.password)[0];
            const mail = Listset.map(value => value.email)[0];
            
            if(mail == login){

              if(psswrd == password){

                window.location = "./admin_rdv";
                
              }else{
                window.alert("wrong password");
              }



            }else{
              window.alert("wrong email");
            }
          
        }


    return( <div class="Page Block">
            <div class="column_items_center">
             <div class="content_blue">
             <div class="column_start">

                <br/>
                <content>* Login : <br/></content>
                <input type="text" className="form-control" placeholder="login"  id="input" value={login} required
                onChange={(e) => setLogin(e.target.value)}/>
                <content>* Password : <br/></content>
                <input type="text" className="form-control" placeholder="password"  id="input" value={password} required
                onChange={(e) => setPassword(e.target.value)}/>
                      
        
        </div>
             </div>
             
             <button id="bouton" class="btn" onClick={ () => connect() }>Se connecter</button>
             
             </div>
    </div>
    )
                  
}