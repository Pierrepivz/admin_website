
import { useEffect , useState , useRef } from "react";
import { Link } from "react-router-dom";
import React from 'react';
import axios from "axios";
import { Editor } from "@tinymce/tinymce-react";
import "./Landing_page.css";



export default function Page_edit(props){

  const queryParameters = new URLSearchParams(window.location.search);
  const id = queryParameters.get("id");

  const [LP, setLP] = useState([]);

  const [title,setTitle] = useState('');
const [url,setUrl] = useState('');
    
    const [meta_t,setMetat] = useState('');
    const [meta_d,setMetad] = useState('');
    const [datalist,setDatalist] = useState([]);
    const editorRef = useRef();


useEffect(() => {

  axios.get('https://server-test-3emq.onrender.com/api/getlandingpage')
      .then((response) =>  { 
        setDatalist(response.data);}
      );

  axios.get(`https://server-test-3emq.onrender.com/api/getlandingpage/${id}`)
      .then((response) =>  {
        


        setLP(response.data);

        
        
      
      
      }


      
      );


}, []);

const initcontent = LP.map(value => value.content);
const initurl = LP.map(value => value.url);
const initmetat = LP.map(value => value.meta_title);
const initmetad = LP.map(value => value.meta_description);
const inittitle = LP.map(value => value.lp_name);



const [value,setValue] = useState(initcontent);


const submit = async () => {

    if(window.confirm("voulez vous vraiment ajouter cette landing page ?")){

     
  
  
  axios.post('https://server-test-3emq.onrender.com/api/insertlandingpage', {
    
    lp_name: title,
    content: value,
    url: url,
    meta_title: meta_t,
    meta_description: meta_d

  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

  
}
  
}




const deletefunction = (id) => {
    
    
  if(window.confirm("voulez vous vraiment supprimer cette landing page ? tout son contenu sera également supprimé")){
  
  
  
    axios.delete(`https://server-test-3emq.onrender.com/api/deletelandingpage/${id}`).then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    
    
  }

}


function updatefunction(){

  
  var content = "";
  var lp_name = "";
  var lp_url = "";
  var lp_metat = "";
  var lp_metad = "";
  

  
  if(title == ""){ lp_name = inittitle }else{ lp_name = title }
  if(value!=initcontent){ content = value }else{ content = initcontent }
  if(url == ""){ lp_url = initurl }else{ lp_url = url }
  if(meta_t == ""){ lp_metat = initmetat }else{ lp_metat = meta_t }
  if(meta_d == ""){ lp_metad = initmetad }else{ lp_metad = meta_d }

  

  if(window.confirm("voulez vous enregistrer les modifications de la landing page ?")){

  axios.put('https://server-test-3emq.onrender.com/api/updatelandingpagefull', {

id: id,
content: content,
lp_name: lp_name,
url: lp_url,
meta_title: lp_metat,
meta_description: lp_metad






})
.then(function (response) {
console.log(response);
})
.catch(function (error) {
console.log(error);
});


} 



}


function editfunction(value){

  window.location = `./landing_page?id=${value}`;
  
}






    return (
      <div className="Page_edit block">

<div class='column_items_center'>
  
    
<h1title>Landing Page</h1title>

<h2under></h2under>
<h2under2></h2under2>



                              
                              
  

    </div>
    <br/><br/>
    <content>Titre Landing Page :</content><br/>
                              <input type="text" class="textarea" class="research"  placeholder = "Titre landing page" onChange={(e) => setTitle(e.target.value)} defaultValue={inittitle}></input>
      
      

          
          
          <br/><br/>

          <br/><br/>
    <content>Mots clés Url :</content><br/>
                              <input type="text" class="textarea" class="research"  placeholder = "Url" onChange={(e) => setUrl(e.target.value)} defaultValue={initurl}></input>
      
      

                              <content>Meta title :</content><br/>
                              <input type="text" class="textarea" class="research"  placeholder = "Meta title" onChange={(e) => setMetat(e.target.value)} defaultValue={initmetat}></input>
      
      

          
          
          <br/><br/>

          <content>Meta description :</content><br/>
                              <input type="text" class="textarea" class="research"  placeholder = "Meta description" onChange={(e) => setMetad(e.target.value)} defaultValue={initmetad}></input>
      
      

          
          
          <br/><br/>    
          
          

          <button class="bouton_blog" onClick={submit}>Ajouter LP</button>
          <button class="bouton_blog" onClick={(e) => updatefunction()}>Sauvegarder</button>

          

          <br/><br/>


        <div class="editor">

        

        
  <Editor
  init={{
    apiKey: 'puk7gawlgq9hjqtznhwcaed6kxviwu5lg09o2v0vbofxarpo',
    plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate ai mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss emoticons template paste textcolor colorpicker textpattern imagetools',
    toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
     service_message: false,
     height: "700px",
     plugins:"image link",
     
     
    
   }}
  apiKey='puk7gawlgq9hjqtznhwcaed6kxviwu5lg09o2v0vbofxarpo'
  onInit={( evt, editor ) => editorRef.current = editor   
  }
  initialValue={initcontent[0]}
  onEditorChange={( nv , editor ) => { setValue(nv); }
 }
 >


</Editor>
        </div>

        <div class="editor_display">

          <h2><content>Aperçu :</content></h2>



        <div dangerouslySetInnerHTML={{__html: value}}></div>
        
        </div>


        <div class="lp_list column_items_center">

          <h2><content>Liste des landing pages :</content></h2><br/><br/>
        
          {datalist.map(value => 
    <div class="column_start">

        
        <content1>{value.lp_name}</content1><br/>
        
        
          
        
<div class="column">
    <button class="bouton_blog" onClick={(e) => deletefunction(value.id)}>Delete</button>
  <Link to={`/landing_page?id=${value.id}`}>     
        <button class="bouton_blog" onClick={(e) => editfunction(value.id)}>edit</button>
  </Link> 
        
        <br/><br/>
        </div>
        
        
        
        
        
        </div>
        
    )}
        




        </div>
        
      </div>
    );
  }