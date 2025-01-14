import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import "./Landing_page.css";
import "./Landing_page_menu.css";
import { Link } from "react-router-dom";



const MenuLP = () => {

    const [datalist,setDatalist] = useState([]);
    const [test,setTest] = useState([]);

    useEffect (() => {
    
        axios.get('https://server-test-3emq.onrender.com/api/getLP')
          .then((response) =>  { 
            setDatalist(response.data);
            
            
            
          }
          );

  

  
  
  
  
  
          
        
        }, []); 


        function testfunction(){

          const datablock1 = datalist.map(value => value.block_1); 
          const tab = []; 
          var target = document.querySelector(".landing_page_list");

          for(var i = 0; i < datablock1.length; i++){

          var res = JSON.parse(atob(datablock1[i]));
          var id = datalist.map(value => value.id)[i];
          tab.push({ id: id, data: res});
          

          }
          
          setTest(tab);
          target.classList.remove("none");
          
            }
  
  function deletefunction(id){

    if(window.confirm("voulez vous vraiment supprimer cette Landing page ?")){
     
      axios.delete(`https://server-test-3emq.onrender.com/api/deleteLP/${id}`).then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });


    }



  }
  
  


  return (
    <div className="Page Blog window">

      <h1>Menu LP</h1>

      <content class="note"> Création, suppression et édition des Landing Pages </content>

    <div class="block"/>


    
   
    <button class="edit_button" onClick={(e) => testfunction()}>Liste landing Page</button>

    <Link to="../create_lp">
    <button class="edit_button" >Ajouter une Landing page</button></Link>
    
    
    
    <div class="row">
   

    
    <div class="editor_display">

      <div class="landing_page_list none" >

      {test.map(value => 

        <div class="landing_page_info">

        
        <Link to={`../LP?id=${value.id}`}>
        <img src={value.data.image} width="200" height="200"/>
        </Link>

         <h3>{value.data.title}</h3>

         <div>
         <Link to={`../edit_lp?id=${value.id}`}>
         <button class="edit_button">edit</button></Link>
         <button class="edit_button" onClick={() => deletefunction(value.id)}>delete</button>
         
         </div>
        
        </div>
       
        
        )} 
        
        </div>

  

   
    
    

    </div>

 

    </div>

   
    

    


    
      
    </div>
  );
}

export default MenuLP;