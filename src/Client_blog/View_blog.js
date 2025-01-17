import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";


const Blog = () => {

  
  const URLtest = window.location.href;
  var url = URLtest.split("/blog/")[1];
  
  
   
  
  
  
  const [Article,setArticle] = useState([]);
  
  
  useEffect (() => {

    axios.get(`https://server-test-3emq.onrender.com/api/getblogsbyurl/${url}`)
    .then((response) =>  { 
      

      setArticle(response.data);
    }
    );
      
    
    }, []); 
    
  
  
  


  return (
    <div className="Page Blog window">

<div class='column_items_center'>
                              
   <h1title>{Article.map (value => value.article_name)}</h1title>
   
  
                              <h2under2></h2under2>
                                
                                                
                              
                        </div>

    <div class="block"/>

   
    
    
    
    <div class="row">
   

    
    <div class="article_content">

  

    {Article.map(value => 

<div class="column_start">

<h3title><blue>{value.article_name}</blue><br/><br/></h3title>

<div class="column_start">
<content dangerouslySetInnerHTML={{__html: value.content}}></content>



</div>


    </div>
    
)}
    
    

    </div>

 

    </div>

   
    

    


    
      
    </div>
  );
}

export default Blog;