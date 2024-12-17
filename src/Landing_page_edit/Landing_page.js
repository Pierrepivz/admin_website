import { useState, useEffect, useRef } from "react";
import React from "react";
import axios from "axios";
import "./Landing_page.css";
import Form from "../Admin_blog/Form.js";
import { Editor } from "@tinymce/tinymce-react";

const Landing_page = () => {


    const title_ref = useRef();
    const section1_ref = useRef();
    const section2_ref = useRef();


    const editorRef1 = useRef();
    const editorRef2 = useRef();
    const editorRef3 = useRef();
    
    const [block_1,setBlock1] = useState([]);
    
    const [title_h1,setTitle_h1] = useState("Titre landing page");
    const [title_p,setTitle_p] = useState("paragraphe");
    
/*  
*/
    const [block_2,setBlock2] = useState([]);
    
    const [b2Title, setB2Title] = useState("titre 2");
    const [b2_1, setB2_1] = useState("point 1");
    const [b2_2, setB2_2] = useState("point 2");
    const [b2_3, setB2_3] = useState("point 3");
    
    

    /*
    */
   const [b3title, setB3title] = useState("titre section");
   const [b3subtitle, setB3subtitle] = useState("soustitre section");
   const [b3paragraph, setB3paragraph] = useState("paragraph section");

   const [b3title_2, setB3title_2] = useState("titre section");
   const [b3subtitle_2, setB3subtitle_2] = useState("soustitre section");
   const [b3paragraph_2, setB3paragraph_2] = useState("paragraph section");

    const [block_3,setBlock3] = useState([]);

    /* */
    const [alt1,setAlt1] = useState("");
    const [desc1,setDesc1] = useState("");

    const [alt2,setAlt2] = useState("");
    const [desc2,setDesc2] = useState("");

    const [alt3,setAlt3] = useState("");
    const [desc3,setDesc3] = useState("");

    /*globals*/ 

    const [script, setScript] = useState("");
    const [metat, setMetat] = useState("");
    const [metad, setMetad] = useState("");
    const [url, setUrl] = useState("");





function viewer(){
    var edit = document.querySelector("#edit_interface");
    var view = document.querySelector("#view_interface");

    if(edit.classList.contains("none")){
        edit.classList.remove("none");
        view.classList.add("none");
    }else{

        edit.classList.add("none");
        view.classList.remove("none");

    }



}


function updateblock1(){

    const image = title_ref.current.getimage();
    

    setBlock1({title: title_h1, paragraph: title_p, image: image});


}

function updateblock2(){

    
    setBlock2({title: b2Title, b2_1: b2_1, b2_2: b2_2,b2_3: b2_3});


}

function updateblock3(){

  var display = document.querySelector("#display");

    const image_1 = section1_ref.current.getimage();
    const image_2 = section2_ref.current.getimage();

    if(section2_ref.current.getcheck() == false){
      
      display.classList.add("none");

    }else{

      if(display.classList.contains("none")){
        display.classList.remove("none");
      }
    }

    setBlock3({title: b3title, subtitle: b3subtitle, paragraph: b3paragraph, image: image_1, title_2: b3title_2, subtitle_2: b3subtitle_2, paragraph_2: b3paragraph_2, image_2: image_2 });


}

    return(

        <div>
     <button class="edit_button" onClick={(e) => viewer()}>switch view</button>
        
        <div class="editor_display" id="edit_interface">
            <h3>Éditeur de Landing page :</h3>
            <div class="lp_block_1">

            <div>
            <Form ref = {title_ref} />
            <input type="text" class="input_t" onChange={(e) => setAlt1(e.target.value)} placeholder="image alt"></input>
            <input type="text" class="input_t" onChange={(e) => setDesc1(e.target.value)} placeholder="image description"></input>
            
            </div>

            <div class="block_title">
            
            <h1>{title_h1} </h1>
            <input type="text" class="input_t" onChange={(e) => setTitle_h1(e.target.value)}></input>
            
            <Editor
  init={{
    apiKey: 'puk7gawlgq9hjqtznhwcaed6kxviwu5lg09o2v0vbofxarpo',
    plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate ai mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss emoticons template paste textcolor colorpicker textpattern imagetools',
    toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
     service_message: false,
     height: "300px",
     width: "700px",
     plugins:"image link",
     
     
    
   }}
  apiKey='puk7gawlgq9hjqtznhwcaed6kxviwu5lg09o2v0vbofxarpo'
  onInit={( evt, editor ) => editorRef1.current = editor   
  }
 
  onEditorChange={( nv , editor ) => { setTitle_p(nv); }
 }
 >


</Editor>
            


                
            </div>

        
            </div>
            <button class="edit_button_block1 edit_button" onClick={() => updateblock1()}>edit block 1</button>


           

            <div class="lp_block_2">

            <button class="edit_button_block2 edit_button" onClick={() => updateblock2()}>edit block 2</button>
            
            <div class="block_title">
                <h2>{b2Title} </h2>
                <input type="textarea" onChange={(e) => setB2Title(e.target.value)}></input>

                <div class="logos">
                  <div>
                    <h3>{b2_1}</h3>  
                    <input type="textarea" onChange={(e) => setB2_1(e.target.value)}></input></div>
    
                  <div>
                    <h3>{b2_2}</h3>  
                    <input type="textarea" onChange={(e) => setB2_2(e.target.value)}></input></div>

                    <div>

                    <h3>{b2_3}</h3>
                    <input type="textarea" onChange={(e) => setB2_3(e.target.value)}></input></div>
                </div>
            </div>



            </div>

            <div class="lp_block_3">
                
            <button class="edit_button_block3 edit_button" onClick={() => updateblock3()}>edit block 3</button>

            <div class="lp_section">
                
                

                <div class="text">

                <h2>
                  {b3title}  
                </h2>
                <input type="textarea" class="input_t" onChange={(e) => setB3title(e.target.value)}/>
                <h3>
                  {b3subtitle}  
                </h3>
                <input type="textarea" class="input_h3" onChange={(e) => setB3subtitle(e.target.value)}/>
                
                <Editor
  init={{
    apiKey: 'puk7gawlgq9hjqtznhwcaed6kxviwu5lg09o2v0vbofxarpo',
    plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate ai mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss emoticons template paste textcolor colorpicker textpattern imagetools',
    toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
     service_message: false,
     height: "300px",
     width: "700px",
     plugins:"image link",
     
     
    
   }}
  apiKey='puk7gawlgq9hjqtznhwcaed6kxviwu5lg09o2v0vbofxarpo'
  onInit={( evt, editor ) => editorRef2.current = editor   
  }
 
  onEditorChange={( nv , editor ) => { setB3paragraph(nv); }
 }
 >


</Editor>
                </div>

<div>
                <Form ref={section1_ref}/>
                <input type="text" class="input_t" onChange={(e) => setAlt2(e.target.value)} placeholder="image alt"></input>
            <input type="text" class="input_t" onChange={(e) => setDesc2(e.target.value)} placeholder="image description"></input>
</div>
                

            </div>


            <div class="lp_section">
                
                

                <div class="text">

                <h2>
                  {b3title_2}  
                </h2>
                <input type="textarea" class="input_t" onChange={(e) => setB3title_2(e.target.value)}/>
                <h3>
                  {b3subtitle_2}  
                </h3>
                <input type="textarea" class="input_h3" onChange={(e) => setB3subtitle_2(e.target.value)}/>
                
                <Editor
  init={{
    apiKey: 'puk7gawlgq9hjqtznhwcaed6kxviwu5lg09o2v0vbofxarpo',
    plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate ai mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss emoticons template paste textcolor colorpicker textpattern imagetools',
    toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
     service_message: false,
     height: "300px",
     width: "700px",
     plugins:"image link",
     
     
    
   }}
  apiKey='puk7gawlgq9hjqtznhwcaed6kxviwu5lg09o2v0vbofxarpo'
  onInit={( evt, editor ) => editorRef3.current = editor   
  }
 
  onEditorChange={( nv , editor ) => { setB3paragraph_2(nv); }
 }
 >


</Editor>
                </div>

<div>
                <Form ref={section2_ref}/>
            <input type="text" class="input_t" onChange={(e) => setAlt3(e.target.value)} placeholder="image alt"></input>
            <input type="text" class="input_t" onChange={(e) => setDesc3(e.target.value)} placeholder="image description"></input>
</div>
                

            </div>

           
            </div>

            <div class="globals">
            
            <input class="input_t" onChange={(e)=> setMetat(e.target.value)} placeholder= "meta title"/>

            <input class="input_t" onChange={(e)=> setMetad(e.target.value)} placeholder= "meta description"/>

            <input class="input_t" onChange={(e)=> setUrl(e.target.value)} placeholder= "url"/>

            <textarea onChange={(e)=> setScript(e.target.value)} placeholder="script landing page"/>
            
            </div>



        </div>


        <div class="editor_display block none" id="view_interface">
            <div class="lp_block_1">

            <img src={block_1.image} />

            <div class="block_title">

            
            <h1>{block_1.title} </h1>
            <div class="underline_title"/>

            
            <p><div dangerouslySetInnerHTML={{__html: block_1.paragraph}}></div></p>

                <button class="contact_button">me contacter</button></div>
            </div>

            <div class="float_line"/>


            <div class="lp_block_2">

            
            
            <div class="block_title">
                <h2>{block_2.title}</h2>
                <div class="underline"></div>
                
                <div class="logos">
                    <h3>{block_2.b2_1}</h3>  
                    <h3>{block_2.b2_2}</h3>  
                    <h3>{block_2.b2_3}</h3>
                </div>
            </div>

            </div>

            <div class="lp_block_3">
                
                 
            
            <div class="lp_section">
                
                

                <div class="text">

                <h2>
                  {block_3.title}  
                </h2>
                <div class="section_underline"/>
                <h3>
                  {block_3.subtitle}  
                </h3>
                
                <p><div dangerouslySetInnerHTML={{__html: block_3.paragraph}}></div></p>
                
                </div>

                <img src={block_3.image}/>

                

            </div>


            <div class="lp_section" id="display">
                
                
            
                <div class="text">

                <h2>
                  {block_3.title_2}  
                </h2>
                <div class="section_underline"/>
                <h3>
                  {block_3.subtitle_2}  
                </h3>
                
                <p><div dangerouslySetInnerHTML={{__html: block_3.paragraph_2}}></div></p>
                
                </div>

                <img src={block_3.image_2}/>

                

            </div>

            <button class="contact_button">prendre rendez-vous</button>
            
            </div>
            
            </div>

     
    </div>

    );






}

export default Landing_page;