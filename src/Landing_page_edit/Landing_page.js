import { useState, useEffect, useRef, forwardRef, useImperativeHandle } from "react";
import React from "react";
import axios from "axios";
import "./Landing_page.css";
import Form from "../Admin_blog/Form.js";
import { Editor } from "@tinymce/tinymce-react";

const Landing_page = forwardRef((props,ref) => {

  useImperativeHandle(ref, () => ({
    get(){
  
      const values = { LPglobals : LPglobals, block_1 : block_1, block_2: block_2, block_3 : block_3, url: url };
      return values;
    
    },
    set(globals,data_b1,data_b2,data_b3,url){

      

      setBlock1(data_b1);
      setTitle_h1(data_b1.title);
      setTitle_p(data_b1.paragraph);
      setAlt1(data_b1.alt);
      setDesc1(data_b1.desc);
      setImage1(data_b1.image);

      
      setBlock2(data_b2);

      setB2Title(data_b2.title);
      setB2_1(data_b2.b2_1);
      setB2_2(data_b2.b2_2);
      setB2_3(data_b2.b2_3);
      



      setBlock3(data_b3);

      setB3title(data_b3.title);
      setB3subtitle(data_b3.subtitle);
      setB3paragraph(data_b3.paragraph);
      setAlt2(data_b3.alt_image1);
      setDesc2(data_b3.desc_image1);
      setB3title_2(data_b3.title_2);
      setB3subtitle_2(data_b3.subtitle_2);
      setB3paragraph_2(data_b3.paragraph_2);
      setAlt3(data_b3.alt_image2);
      setDesc3(data_b3.desc_image2);
      setImagesection(data_b3.image);
      setImagesection2(data_b3.image_2);

      
      
      setLPglobals(globals);

      setUrl(url);
      setScript(globals.script);
      setMetat(globals.metat);
      setMetad(globals.metad);

 
 }
  }));


    const title_ref = useRef();
    const section1_ref = useRef();
    const section2_ref = useRef();


    const editorRef1 = useRef();
    const editorRef2 = useRef();
    const editorRef3 = useRef();

     
    
    
    const [title_h1,setTitle_h1] = useState("Titre landing page");
    const [title_p,setTitle_p] = useState("paragraphe");
    const [image1,setImage1] = useState("");
    const [alt1,setAlt1] = useState("");
    const [desc1,setDesc1] = useState("");

    

    const [block_1,setBlock1] = useState({title: title_h1, paragraph: title_p, image: image1 ,alt: alt1, desc: desc1});
    
    
/*  
*/
    
    
    const [b2Title, setB2Title] = useState("");
    const [b2_1, setB2_1] = useState("");
    const [b2_2, setB2_2] = useState("");
    const [b2_3, setB2_3] = useState("");

    const [block_2,setBlock2] = useState({title: b2Title, b2_1: b2_1, b2_2: b2_2,b2_3: b2_3});
    

    /*
    */
   
   const [b3title, setB3title] = useState("");
   
   const [b3subtitle, setB3subtitle] = useState("");
   const [b3paragraph, setB3paragraph] = useState("");

   const [b3title_2, setB3title_2] = useState("");
   const [b3subtitle_2, setB3subtitle_2] = useState("");
   const [b3paragraph_2, setB3paragraph_2] = useState("");
   
   const [alt2,setAlt2] = useState("");
    const [desc2,setDesc2] = useState("");

    const [alt3,setAlt3] = useState("");
    const [desc3,setDesc3] = useState("");
    const [imagesection,setImagesection] = useState("");
    const[imagesection2,setImagesection2] = useState("");

   const [block_3,setBlock3] = useState({ title: b3title, subtitle: b3subtitle, paragraph: b3paragraph, image: imagesection, alt_image1: alt2, desc_image1: desc2, title_2: b3title_2, subtitle_2: b3subtitle_2, paragraph_2: b3paragraph_2, image_2: imagesection2, alt_image2: alt3, desc_image2: desc3 });


    /* */
    

    

    
    /*globals*/ 

    const [LPglobals,setLPglobals] = useState([]);

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

    /*display block2*/
var state = document.querySelector("#block_2_content");

    if(b2Title==""){
      
      state.classList.add("none");
    }else{
      state.classList.remove("none");
    }

    /*display b3 section 2*/


    
    var block_3_section2 = document.querySelector("#block_3_section2");
    var block_3_full = document.querySelector("#block_3");

    if(b3title==""){
      
      block_3_full.classList.add("none");

    }else{

      if(block_3_full.classList.contains("none")){
        block_3_full.classList.remove("none");
      }
    }

    if(b3title_2==""){
      
      block_3_section2.classList.add("none");

    }else{

      if(block_3_section2.classList.contains("none")){
        block_3_section2.classList.remove("none");
      }
    }

    



}




function updateblock1(){

  const image = title_ref.current.getimage();

  if(title_ref.current.getcheck()==true){
    
    setBlock1({title: title_h1, paragraph: title_p, image: image ,alt: alt1, desc: desc1});
    setImage1(image);

  }else{
    setBlock1({title: title_h1, paragraph: title_p, image: image1 ,alt: alt1, desc: desc1});
  }
    

}

function updateblock2(){

    
    setBlock2({title: b2Title, b2_1: b2_1, b2_2: b2_2,b2_3: b2_3});

    


}


function updateblock3(){

  

    var new_image_section = section1_ref.current.getimage();
    var new_image_section2 = section2_ref.current.getimage();

    if(section1_ref.current.getcheck()==false){
    
    new_image_section = imagesection; 
      
    }else{
setImagesection(new_image_section);
    }
    if(section2_ref.current.getcheck()==false){

      new_image_section2 = imagesection2;

    }else{
  setImagesection2(new_image_section2);

    }

      setBlock3({title: b3title, subtitle: b3subtitle, paragraph: b3paragraph, image: new_image_section, alt_image1: alt2, desc_image1: desc2, title_2: b3title_2, subtitle_2: b3subtitle_2, paragraph_2: b3paragraph_2, image_2: new_image_section2, alt_image2: alt3, desc_image2: desc3 });

      
    
    
    

    

}

function updateLPglobals(){

  setLPglobals({url: url, metat: metat, metad: metad, script: script});



}

/* get fonctions */ 











    return(

        <div class="landing_page">
     <button class="edit_button" onClick={(e) => viewer()}>switch view</button>
        
        <div class="editor_display" id="edit_interface">
            <h3>Éditeur de Landing page :</h3>
            <div class="lp_block_1">

            <div>
            <Form ref = {title_ref} />
            <input type="text" class="input_t" onChange={(e) => setAlt1(e.target.value)} placeholder="image alt" value={alt1}></input>
            <input type="text" class="input_t" onChange={(e) => setDesc1(e.target.value)} placeholder="image description" value={desc1}></input>
            
            </div>

            <div class="block_title">
            
            <h1>{title_h1} </h1>
            <input type="text" class="input_t" onChange={(e) => setTitle_h1(e.target.value)} value={title_h1}></input>
            
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
  initialValue={block_1.paragraph}
 
  onEditorChange={( nv , editor ) => { setTitle_p(nv); }
 }
 >


</Editor>
            


                
            </div>

        
            </div>
            <button class="edit_button_block1 edit_button" onClick={() => updateblock1()}>edit block 1</button>


           

            <div class="lp_block_2" >

            <button class="edit_button_block2 edit_button" onClick={() => updateblock2()}>edit block 2</button>
            
            <div class="block_title">
                <h2>{b2Title} </h2>
                <input type="textarea" onChange={(e) => setB2Title(e.target.value)} value={b2Title}></input>

                <div class="logos">
                  <div>
                    <h3>{b2_1}</h3>  
                    <input type="textarea" onChange={(e) => setB2_1(e.target.value)} value={b2_1}></input></div>
    
                  <div>
                    <h3>{b2_2}</h3>  
                    <input type="textarea" onChange={(e) => setB2_2(e.target.value)} value={b2_2}></input></div>

                    <div>
                    <h3>{b2_3}</h3>
                    <input type="textarea" onChange={(e) => setB2_3(e.target.value)} value={b2_3}></input></div>
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
                <input type="textarea" class="input_t" onChange={(e) => setB3title(e.target.value)} value={b3title}/>
                <h3 >
                  {b3subtitle}  
                </h3>
                <input type="textarea" class="input_h3" onChange={(e) => setB3subtitle(e.target.value)} value={b3subtitle}/>
                
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
  initialValue={block_3.paragraph}
  onEditorChange={( nv , editor ) => { setB3paragraph(nv); }
 }
 >


</Editor>
                </div>

<div>
                <Form ref={section1_ref}/>
                <input type="text" class="input_t" onChange={(e) => setAlt2(e.target.value)} placeholder="image alt" value={alt2}></input>
            <input type="text" class="input_t" onChange={(e) => setDesc2(e.target.value)} placeholder="image description" value={desc2}></input>
</div>
                

            </div>


            <div class="lp_section">
                
                

                <div class="text">

                <h2>
                  {b3title_2}  
                </h2>
                <input type="textarea" class="input_t" onChange={(e) => setB3title_2(e.target.value)} value={b3title_2}/>
                <h3>
                  {b3subtitle_2}  
                </h3>
                <input type="textarea" class="input_h3" onChange={(e) => setB3subtitle_2(e.target.value)} value={b3subtitle_2}/>
                
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
 initialValue={block_3.paragraph_2}
  onEditorChange={( nv , editor ) => { setB3paragraph_2(nv); }
 }
 >


</Editor>
                </div>

<div>
                <Form ref={section2_ref}/>
            <input type="text" class="input_t" onChange={(e) => setAlt3(e.target.value)} placeholder="image alt" value={alt3}></input>
            <input type="text" class="input_t" onChange={(e) => setDesc3(e.target.value)} placeholder="image description" value={desc3}></input>
</div>
                

            </div>

           
            </div>

            <div class="globals">
            <button class="edit_button" onClick={() => updateLPglobals()}>update globals</button>

            <input class="input_t" onChange={(e)=> setMetat(e.target.value)} placeholder= "meta title" value={metat}/>

            <input class="input_t" onChange={(e)=> setMetad(e.target.value)} placeholder= "meta description" value={metad}/>

            <input class="input_t" onChange={(e)=> setUrl(e.target.value)} placeholder= "url" value={url}/>

            <textarea onChange={(e)=> setScript(e.target.value)} placeholder="script landing page" value={script}/>
            
            </div>



        </div>










        <div class="editor_display block none" id="view_interface">
            <div class="lp_block_1">

            <img src={block_1.image} />

            <div class="block_title">

            
            <h1>{block_1.title} </h1>
            <div class="underline_title"/>

            
            <p><div dangerouslySetInnerHTML={{__html: block_1.paragraph}}></div></p>

            <a href="https://www.winentretien.com/contact"><button class="contact_button" href="https://www.winentretien.com/contact">me contacter</button></a></div>
            </div>

            <div class="float_line"/>


            <div class="lp_block_2" id="block_2_content">

            
            
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

            <div class="lp_block_3" id="block_3">
                
                 
            
            <div class="lp_section">
                
                

                <div class="text">

                <h2>
                  {block_3.title}  
                </h2>
                <div class="section_underline"/>

                <h3 >
                  {block_3.subtitle}  
                </h3>
                
                <p><div dangerouslySetInnerHTML={{__html: block_3.paragraph}}></div></p>
                
                </div>

                <img src={block_3.image}/>

                

            </div>


            <div class="lp_section" id="block_3_section2">
                
                
            
                <div class="text" >

                <h2>
                  
                  {block_3.title_2}  
                </h2>
                <div class="section_underline"/>

                <h3 >
                  {block_3.subtitle_2}  
                </h3>
                
                <p><div dangerouslySetInnerHTML={{__html: block_3.paragraph_2}}></div></p>
                
                </div>

                <img src={block_3.image_2}/>

                

            </div>

            <a href="https://www.winentretien.com/rendez-vous"><button class="contact_button" >prendre rendez-vous</button></a>
            
            </div>
            
            </div>

     
    </div>

    );






});

export default Landing_page;