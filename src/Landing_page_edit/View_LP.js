import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import "./Landing_page.css";
import Landing_page from "./Landing_page.js";


const View_LP = () => {

/*
  const URLtest = window.location.href;
    var lp_name = URLtest.split("/landing_page/")[1].split("/")[0];
   
  
   
  
  
  
  const [LP,setLP] = useState([]);
  
  
  useEffect (() => {

    axios.get(`https://server-test-3emq.onrender.com/api/getlandingpagebyname/${lp_name}`)
    .then((response) =>  { 
      
      setLP(response.data);}
    );
      
    
    }, []); */
    
  /* {LP.map(value => 

<div class="column_start">



<div class="column_start">
<content dangerouslySetInnerHTML={{__html: value.content}}></content>



</div>


    </div>
    
)}*/
  
  


  return (
    <div className="Page Blog window">



    <div class="block"/>

   
    
    
    
    <div class="row">
   

    
    <div class="editor_display">

     <Landing_page />

   
    
    

    </div>

 

    </div>

   
    

    


    
      
    </div>
  );
}

export default View_LP;