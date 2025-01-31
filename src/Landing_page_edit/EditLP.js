import { useState, useEffect, useRef } from "react";
import React from "react";
import axios from "axios";
import "./Landing_page.css";
import Landing_page from "./Landing_page.js";
import { Link } from "react-router-dom";


const EditLP = () => {

    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
  
var LPref = useRef();

function setValues(globals,url,block_1,block_2,block_3){

    var globals = JSON.parse(atob(globals));

    var url = url;

    var data_b1 = JSON.parse(atob(block_1));

    var data_b2 = JSON.parse(atob(block_2));

    var data_b3 = JSON.parse(atob(block_3));

    LPref.current.set(globals,data_b1,data_b2,data_b3,url);
 

  }

useEffect (() => {
    
    axios.get(`https://server-test-3emq.onrender.com/api/getLPbyid/${id}`)
    .then((response) =>  { 
      
        setValues(response.data[0].globals,response.data[0].url,response.data[0].block_1,response.data[0].block_2,response.data[0].block_3);
      
    
    });


        
        
        
      }
      );

      const submit = async (state) => {

        if(window.confirm("voulez vous vraiment modifier cette Landing page ?")){

          const values = LPref.current.get();

    var LPglobals = btoa(JSON.stringify(values.LPglobals));
    var block_1 = btoa(JSON.stringify(values.block_1));
    var block_2 = btoa(JSON.stringify(values.block_2));
    var block_3 = btoa(JSON.stringify(values.block_3));
    var url = values.url;


    console.log(block_3);

            
            axios.put('https://server-test-3emq.onrender.com/api/updateLPfull', {

  id: id,
  globals: LPglobals,
  block_1: block_1,
  block_2: block_2,
  block_3: block_3,
  url: url,
  state: state
  
  
  
  
  
},{ 
  maxBodyLength: Infinity , maxContentLength: Infinity})
            .then((response) =>  {
              
            console.log(response);

              }).catch(function (error) {
                console.log(error.status);
                
            
              });

/*
axios.put('https://server-test-3emq.onrender.com/api/updateLPblock1', {

  id: id,
  
  block_1: block_1,
  
  
  
  
  
  
  
})
            .then((response) =>  {
              
            console.log(response);

              }).catch(function (error) {
                console.log(error.status);
                
            
              });*/

              

              


        }
    
    
    }


  
  

  return (
    


    

    

     <div className="Page Blog window">



    <div class="block"/>

   
    
    
    
    
   

    
    <div class="editor_display">
      <Link to="../landing_page">
    <button class="edit_button">Retour au Menu </button></Link>
    
    <button class="edit_button" onClick={(e) => submit(1)}>Sauvegarder les changements (publique)</button>
    <button class="edit_button" onClick={(e) => submit(0)}>Sauvegarder les changements (Brouillon)</button>
    

     <Landing_page ref = {LPref}/>

   
    
    

    </div>

 

    

   
    

    


    
      
    </div>

   

      
    
  );
}

export default EditLP;