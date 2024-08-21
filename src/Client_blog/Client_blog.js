import { useState, useEffect } from "react";
import React from "react";
import axios from 'axios';
import { Link } from "react-router-dom";




function Home_Blog() {

  
    const [article_name,setArticlename] = useState('');
    const [filter,setFilter] = useState('');
    const [input,setInput] = useState('');
    const [Listset, setDatalist] = useState([]);
    const [description,setDescription] = useState('');
    const [title,setTitle] = useState('');
    const [articlefilter,setArticleFilter] = useState('');
    const [image,setImage] = useState('');

    

  useEffect (() => {

    axios.get('https://server-test-3emq.onrender.com/api/getblogs')
      .then((response) =>  { 
        setDatalist(response.data);}
      );
      
    
    }, []); 
  
  var verif = (Listset.map(value => value.id));
  var last = verif.length - 1;
  var id = verif[last] + 1;
  

  const submit = () => {

    if(window.confirm("voulez vous vraiment ajouter cet article ?")){
  
  
  axios.post('https://server-test-3emq.onrender.com/api/insert', {
    id: id,
    article_name: title,
    description: description,
    filter: articlefilter,
    image: image

  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

  window.location.reload();
}
  
}

const updatefunction = (aname) => {

setArticlename(aname);

}
const editfunction = (id) => {
 
  axios.put('https://server-test-3emq.onrender.com/api/update', {
    id: id,
    article_name: title,
    description: description,
    filter: articlefilter,
    image: image

});
  
  
  }


const update = (article_name) => {
            
  axios.put('https://server-test-3emq.onrender.com/api/update', {

article_name: article_name,
description: "nouvelle desc",

})
.then(function (response) {
console.log(response);
})
.catch(function (error) {
console.log(error);
});


  }
  const deletefunction = (article_name) => {

    if(window.confirm("voulez vous vraiment supprimer cet article ? tout son contenu sera également supprimé")){
    axios.delete(`https://server-test-3emq.onrender.com/api/delete/${article_name}`);
    axios.delete(`https://server-test-3emq.onrender.com/api/deletecontent/${article_name}`);
    window.location.reload();}
    

  }
  
    
    
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

     const getlastitems = (elements) => {
          
          const newarticles = [];
     
          /*return elements.filter( card => card.id.includes(1)  );*/
          const article1 = elements.filter( card => card.id ==  verif[last] );
          const article2 = elements.filter( card => card.id ==  verif[last-1] );
          const article3 = elements.filter( card => card.id ==  verif[last-2] );

      newarticles.push(article1,article2,article3);

      return newarticles;


      }

    const lastitems = getlastitems(Listset);

  

     

  

    /*const [filter,Setfilter] = useState('');

      function article_select(e){


      

      }*/
     /* function filter_select(e){

      Setfilter(e.value);


    }*/
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
        
        
        <Link to={`/blog?id=${value.id}`}>
        
        
        
  
        
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