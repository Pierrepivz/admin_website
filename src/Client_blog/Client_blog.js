import { useState, useEffect } from "react";
import React from "react";
import axios from 'axios';
import { Link } from "react-router-dom";




function Home_Blog() {

    
  
    
    const [filter,setFilter] = useState('');
    const [input,setInput] = useState('');
    const [Listset, setDatalist] = useState([]);
    

    

  useEffect (() => {

    axios.get('https://server-test-3emq.onrender.com/api/getblogs')
      .then((response) =>  { 
        setDatalist(response.data);}
      );
      
    
    }, []); 
  
  

  


  
    
    
    window.addEventListener("input", search);

    function search(){
        
        const cards = document.querySelectorAll(".home_article");
        
       

    }
     const getfiltereditems = (query,elements,select) => {
            
        if(!query && !select){
            return elements;
        }else{
            
            
            if(!select){
            return elements.filter( card => card.article_name.includes(query) );
        }else{
            return elements.filter( card => card.article_name.includes(query) ).filter( card => card.filters.includes(select));
            
        }


        }

    }

     const filtereditems = getfiltereditems(input,Listset,filter);

     


  

    
    return (
      <div className="Page Blog">

      
      
      
                              
                              
                            
                            <div class='column_items_center'>

<h1title>Actualité</h1title>

<h2under></h2under>
<h2under2></h2under2>

<content class="note"> Des conseils, des informations utiles, et mon point de vue sur tous les sujets en lien avec les événements de votre parcours professionnel</content>
    

                              
                              
  

    </div>

    <div class="section block">
                        <div class="margin_left">
                        <h1title>Parcourir</h1title>
                        <div id="underline"></div>
                        </div>
                  </div>                        
                             
                              
                  
                              
                            



                             
                    
                    
                    
                    
                    

<div class="window column block">


                    <div class="search_bar line_between">
                    <div class="column_start">
                    <h2title>Cherchez un article </h2title><br/>
                    <input type="text" id="search_bar" class="research" placeholder = ".." onChange={(e) => setInput(e.target.value)} ></input>
                    </div>
                    <div class="column_start">
                    <content2><strong>Filtres</strong></content2><br/>
                    <select class="filtres research"   onChange={e => setFilter(e.target.value)}>
                    <option></option>
                    <option value="Divers">Divers</option>
                    <option value="Entretiens" >Entretiens</option>
                    <option value="Coaching">Coaching</option>

                    </select>
                    </div>
                    
                    
                     <br/>
                    </div>

                    <div class="blog_list block">
                    
    <div class="line_around" id="articles_select">
   
    
    {filtereditems.map(value => 
    <div class="column_start">
        
        
        <Link to={`/blog/${value.article_name}&${value.url}`} >
        
        
        
  
        
        <div class="home_article column_start"> <div class="article_photo" ><img src={value.image}></img></div> 
        <content1>{value.article_name}<br/></content1>
        
        
       
        
       
        
        
        
        </div>
        
        </Link>
        </div>
        
    )}

    
    </div>

    


    </div>
    <div class="block">
       
      

    </div>
    
    </div>
       
    
                        </div>
  
        
      
    );
  }
  
  export default Home_Blog;