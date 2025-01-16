import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import "./Landing_page.css";
import "./Landing_page_menu.css";
import { Link } from "react-router-dom";



const MenuLP = () => {

    const [datalist,setDatalist] = useState([]);
    const [datalist_draft,setDatalistdraft] = useState([]);

    const [publique,setPublique] = useState([]);
    const [brouillon,setBrouillon] = useState([]);

    useEffect (() => {


      
    
        axios.get(`https://server-test-3emq.onrender.com/api/getLPbystate/${1}`)
          .then((response) =>  { 
            setDatalist(response.data);
            
            
            
          }
          );

          axios.get(`https://server-test-3emq.onrender.com/api/getLPbystate/${0}`)
          .then((response) =>  { 
            setDatalistdraft(response.data);
            
            
            
          }
          );

  

  
  
  
  
  
          
        
        }, []); 


        function testfunction(){

          const datablock1 = datalist.map(value => value.block_1);
          const datablock1_draft = datalist_draft.map(value => value.block_1);
          const tab_publique = []; 
          const tab_brouillon = [];


          var target = document.querySelector(".landing_page_list");

          for(var i = 0; i < datablock1.length; i++){

          var res = JSON.parse(atob(datablock1[i]));
          var id = datalist.map(value => value.id)[i];
          tab_publique.push({ id: id, data: res});
          
          
          }
          for(var i = 0; i < datablock1_draft.length; i++){

            var res = JSON.parse(atob(datablock1_draft[i]));
            var id = datalist_draft.map(value => value.id)[i];
            tab_brouillon.push({ id: id, data: res});
            
            
            }
          
          setPublique(tab_publique);
          setBrouillon(tab_brouillon);
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

      <div class="LP_view">

      {publique.map(value => 

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
       
        
        )} </div>

        <h2>brouillons :</h2>

        <div class="LP_view">

        {brouillon.map(value => 

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

   
    

    


    
      
    </div>
  );
}

export default MenuLP;