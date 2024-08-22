
  import { useState, useRef, useEffect } from "react";
  import { Editor } from "@tinymce/tinymce-react";
  import ReactDOM from 'react-dom';
  import axios from "axios";
  import "../Admin_blog/Admin_blog.css";


function Create_Blog(props) {


  
  const [meta_title,setMetatitle] = useState('');
  const [meta_description,setMetadescription] = useState('');
  const [value,setValue] = useState('');
  const editorRef = useRef();
  const [articlefilter,setArticleFilter] = useState('');
  const [image,setImage] = useState('');
  const [title,setTitle] = useState('');

   
  
  const queryParameters = new URLSearchParams(window.location.search);
  const id = queryParameters.get("id");
  const [Article,setArticle] = useState([]);
  
  
  useEffect (() => {

    axios.get(`https://server-test-3emq.onrender.com/api/getblogs/${id}`)
    .then((response) =>  { 
      
      setArticle(response.data);
      
    
    }

    

    );
    
    
    
    }, []); 
  
  
  
 const initialcontent = Article.map(value => value.content);
 const inittitle = Article.map(value => value.article_name);
 const initfilter = Article.map(value => value.filters);
 const initimage = Article.map(value => value.image);
 const initmetatitle = Article.map(value => value.meta_title);
 const initmetadescription = Article.map(value => value.meta_description);
 

 
    
 function updatemeta(){

  if(window.confirm("voulez vous enregistrer les modifications du meta ?")){

    axios.put('https://server-test-3emq.onrender.com/api/updatemeta', {
  
  
  article: inittitle,
  meta_title: meta_title,
  meta_description: meta_description,
  
  
})
.then(function (response) {
  console.log(response);
})
.catch(function (error) {
  console.log(error);
});


}
} 
 

 
  function updateimage(){

    if(window.confirm("voulez vous enregistrer les modifications de l'image ?")){

      axios.put('https://server-test-3emq.onrender.com/api/updatearticleimage', {
    
    
    article: inittitle,
    image: image,
    
    
    
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  
  
  }
  }

  function updatetitle(){

    if(window.confirm("voulez vous enregistrer les modifications du titre ?")){

      axios.put('https://server-test-3emq.onrender.com/api/updatearticletitle', {
    
    
    article: inittitle,
    article_name: title,
    
    
    
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  
  
  }
  }

  function updatefiltre(){

    if(window.confirm("voulez vous enregistrer les modifications du filtre ?")){

      axios.put('https://server-test-3emq.onrender.com/api/updatearticlefilter', {
    
    
    article: inittitle,
    filters: articlefilter,
    
    
    
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  
  
  }
  }


  function updatecontent(){


    if(window.confirm("voulez vous enregistrer les modifications du contenu ?")){

    axios.put('https://server-test-3emq.onrender.com/api/updatearticlecontent', {
  
  
  content: value,
  article: inittitle,
  
  
})
.then(function (response) {
  console.log(response);
})
.catch(function (error) {
  console.log(error);
});


}
    

  }


  
/* article content tinymce article g  https://server-test-3emq.onrender.com/api/updatearticlecontent*/

  function updatearticle(){

    if(window.confirm("voulez vous enregistrer les modifications ?")){

    axios.put('https://server-test-3emq.onrender.com/api/updatearticlefull', {
  
  article_name: title,
  content: value,
  article: inittitle,
  image: image,
  filters: articlefilter,
  
  
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
    <div className="Page Blog">

<div class='column_items_center'>


<div class="note">
                              
                              <content>  Créer et visualisez votre article ici </content>
                              
                             </div>

                             <div class="column_items_center">

                              <div class="update_row">
                             <input type="text" class="textarea" id="input" placeholder = "lien de l'image" onChange={(e) => setImage(e.target.value)} defaultValue={initimage}   ></input>
                             <button class="bouton_blog" onClick={() => updateimage()}>Update image</button>
                             </div>
<br/><br/>
                             <div class="update_row">
                             <input type="text" class="textarea" id="input" placeholder = "Meta title" onChange={(e) => setMetatitle(e.target.value)} defaultValue={initmetatitle}   ></input>
                             
                             <button class="bouton_blog" onClick={() => updatemeta()}>Update meta</button>
                             </div>
                             <br/>
                             <input type="text" class="textarea" id="input" placeholder = "Meta description" onChange={(e) => setMetadescription(e.target.value)} defaultValue={initmetadescription}   ></input>
      <br/><br/>
      
      <div class="update_row">
      <select class="filtres" defaultValue={initfilter}  class="research" onChange={e => setArticleFilter(e.target.value)}>

                    <option></option>
                    <option value="Divers">Divers</option>
                    <option value="Entretiens" >Entretiens</option>
                    <option value="Coaching">Coaching</option>

                    </select>

                    <button class="bouton_blog" onClick={() => updatefiltre()}>Update filtre</button>
</div>
                    <br/><br/>             
                    
        

<div class="update_row">
  <input type="input" class="textarea" id="input" placeholder = "Titre de l'article" onChange={(e) => setTitle(e.target.value)} defaultValue={inittitle}></input>  
  <button class="bouton_blog" onClick={() => updatetitle()}>update titre</button>
</div>

<br/><br/><br/>

</div>
    <h2title>{inittitle}</h2title>
    <h2under2></h2under2>

  
                  
                              
                              <div class="line_between">
                              
                              
                              
                              
  

                    
                    
                    </div>
                              
                        </div>


<div class="editor_container">
  
  
  
  <Editor
  init={{
    apiKey: 'puk7gawlgq9hjqtznhwcaed6kxviwu5lg09o2v0vbofxarpo',
    plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate ai mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss',
    toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
    
     service_message: false,
     
     height: "700px",
     plugins:"image link",
     
    
   }}
  apiKey='puk7gawlgq9hjqtznhwcaed6kxviwu5lg09o2v0vbofxarpo'
  onInit={( evt, editor ) => editorRef.current = editor   
  }
  initialValue={initialcontent[0]}
  onEditorChange={( nv , editor ) => { setValue(nv); }
 }
 >


</Editor>
</div>





<div class="column_items_center block">
  <div class="update_row">
<button class="bouton_blog" onClick={() => updatearticle()}>Update article</button>
<button class="bouton_blog" onClick={() => updatecontent()}>Update contenu</button>
</div>
                    

   </div>
   


    <div class="block window line_between">

    
    

    

    <div class="column_items_center">

    
    

    

    

    


    </div>

   
    

    


    </div>
      
    </div>
  );
}

export default Create_Blog;