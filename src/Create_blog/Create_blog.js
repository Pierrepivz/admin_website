
  import { useState, useRef, useEffect } from "react";
  import { Editor } from "@tinymce/tinymce-react";
  import ReactDOM from 'react-dom';
  import axios from "axios";
  import "../Admin_blog/Admin_blog.css";


function Create_Blog(props) {


  
  

   
  
  const queryParameters = new URLSearchParams(window.location.search);
  const id = queryParameters.get("id");
  const [Article,setArticle] = useState([]);

  const [meta_title,setMetatitle] = useState("");
  const [meta_description,setMetadescription] = useState("");
  const [value,setValue] = useState("");
  const editorRef = useRef();
  const [articlefilter,setArticleFilter] = useState("");
  const [image,setImage] = useState("");
  const [title,setTitle] = useState("");
  const [url,setUrl] = useState("");
  
  
  
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
    const initurl = Article.map(value => value.url);
    
    
  
  
  
  
 

 


 function updateurl(){

   if(window.confirm("voulez vous enregistrer les modifications de l'url ?")){
    axios.put('https://server-test-3emq.onrender.com/api/updatearticleurl', {
  
  id: id,
  url: url

  

  
  
  
})
.then(function (response) {
  console.log(response);
})
.catch(function (error) {
  console.log(error);
});

   }
 }
 

 
    
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


  


  function updatearticle(){

    var article_title = "";
    var article_value = "";
    var article_filter = "";
    var article_image = "";
    var article_meta_title = "";
    var article_meta_description = "";
    var article_url = "";

    if(title == ""){ article_title = inittitle }else{ article_title = title }
    if(value == ""){ article_value = initialcontent }else{ article_value = value }
    if(articlefilter == ""){ article_filter = initfilter }else{ article_filter = articlefilter }
    if(image == ""){ article_image = initimage }else{ article_image = image }
    if(meta_title == ""){ article_meta_title = initmetatitle }else{ article_meta_title = meta_title }
    if(meta_description == ""){ article_meta_description = initmetadescription }else{ article_meta_description = meta_description }
    if(url == ""){ article_url = initurl }else{ article_url = url }
    

    if(window.confirm("voulez vous enregistrer les modifications de l'article ?")){

    axios.put('https://server-test-3emq.onrender.com/api/updatearticlefull', {

  id: id,
  article_name: article_title,
  content: article_value,
  filters: article_filter,
  image: article_image,
  meta_title: article_meta_title,
  meta_description: article_meta_description,
  url: article_url,
  
  
  
  
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


  

  


  return (
    <div className="Page Blog">

<div class='column_items_center'>


<div class="note">
                              
                              <content>  Créer et visualisez votre article ici </content>
                              
                             </div>

  
                             <div class="column_items_center">

                             <div class="update_row">
      
      <content>filtre : </content>
      <select class="filtres" defaultValue={initfilter}  class="research" onChange={e => setArticleFilter(e.target.value)}>

                    <option></option>
                    <option value="Divers">Divers</option>
                    <option value="Entretiens" >Entretiens</option>
                    <option value="Coaching">Coaching</option>

                    </select>

                    
</div>

                             <div class="update_row">
                               <content>Mots clés Url : </content><br/>
                             <input type="text" class="textarea" id="input" placeholder = "mots clés pour l'url" onChange={(e) => setUrl(e.target.value)} defaultValue={initurl}   ></input>
                             
                             </div>

                              <div class="update_row">
                              <content>image de l'article : </content>
                             <input type="text" class="textarea" id="input" placeholder = "lien de l'image" onChange={(e) => setImage(e.target.value)} defaultValue={initimage}   ></input>
                             
                             </div>
<br/><br/>
                             <div class="update_row">
                             <content>Meta title : </content>
                             <input type="text" class="textarea" id="input" placeholder = "Meta title" onChange={(e) => setMetatitle(e.target.value)} defaultValue={initmetatitle}   ></input>
                             
                             
                             </div>
                             <br/><br/>
                             <div class="update_row">
                             <content>Meta description : </content>
                             <input type="text" class="textarea" id="input" placeholder = "Meta description" onChange={(e) => setMetadescription(e.target.value)} defaultValue={initmetadescription}   ></input>
      <br/><br/><br/><br/>
                             </div>
                             
      
      
                    <br/><br/>             
                    
        

<div class="update_row">
  <content>titre :</content>
  <input type="input" class="textarea" id="input" placeholder = "Titre de l'article" onChange={(e) => setTitle(e.target.value)} defaultValue={inittitle}></input>  
  
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
<button class="bouton_blog" onClick={() => updatearticle()}>Sauvegarder</button>
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