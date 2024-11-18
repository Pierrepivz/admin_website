
import { useEffect , useState , useRef } from "react";
import React from 'react';

import { Editor } from "@tinymce/tinymce-react";
import "./Landing_page.css";
import Drafteditor from "./Editor.js";
import { EditorState } from "draft-js";


export default function Page_edit(props){

    


    
    const [value,setValue] = useState('');
    const editorRef = useRef();
 const initialcontent = "";

useEffect(() => {




});



    return (
      <div className="Page_edit block">

          
          
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
  initialValue={initialcontent}
  onEditorChange={( nv , editor ) => { setValue(nv); }
 }
 >


</Editor>
        </div>

        <div class="editor_display">



        <content dangerouslySetInnerHTML={{__html: value}}></content>
        
        </div>
        
      </div>
    );
  }