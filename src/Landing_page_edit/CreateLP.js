import { useState, useEffect, useRef } from "react";
import React from "react";
import axios from "axios";
import "./Landing_page.css";
import Landing_page from "./Landing_page.js";
import {Link} from "react-router-dom";


const CreateLP = () => {


  
var LPref = useRef();

const submit = async () => {

    if(window.confirm("voulez vous vraiment ajouter cette Landing page ?")){

    const values = LPref.current.get();

    var LPglobals = btoa(JSON.stringify(values.LPglobals));
    var block_1 = btoa(JSON.stringify(values.block_1));
    var block_2 = btoa(JSON.stringify(values.block_2));
    var block_3 = btoa(JSON.stringify(values.block_3));
    var url = values.url;

    
    /*var result = JSON.parse(atob(block_1));
    console.log(result);*/
    
  
  
  axios.post('https://server-test-3emq.onrender.com/api/insertLP', {
    
    LPglobals: LPglobals,
    block_1: block_1,
    block_2: block_2,
    block_3: block_3,
    url: url,
  
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  
  
  }
  
  }

  return (
    


    

    

     <div className="Page Blog window">



    <div class="block"/>

   
    
    
    
    
   

    
    <div class="editor_display">

    <Link to="../landing_page">
    <button class="edit_button" >Menu Landing Page</button></Link>
    <button class="edit_button" onClick={(e) => submit()}>Ajout LP</button>

     <Landing_page ref = {LPref}/>

   
    
    

    </div>

 

    

   
    

    


    
      
    </div>

   

      
    
  );
}

export default CreateLP;