import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import React from "react";
import axios from "axios";
import "./Landing_page.css";
import "./Landing_page_menu.css";
import { Helmet } from "react-helmet";



const ClientLP = () => {

  const [datalist,setDatalist] = useState([]);

  const [block_1,setBlock1] = useState({});
  const [block_2,setBlock2] = useState({});
  const [block_3,setBlock3] = useState({});
  const [globals,setGlobals] = useState({});
    

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

    useEffect (() => {
    
        axios.get(`https://server-test-3emq.onrender.com/api/getLPbyid/${id}`)
          .then((response) =>  { 

           

            setValues(response.data[0].block_1,response.data[0].block_2,response.data[0].block_3,response.data[0].globals);
            
           
           
            
          }
          );


          
        
        }, []); 


        function setValues(block_1,block_2,block_3,globals){

          var data_globals = JSON.parse(atob(globals));

          setGlobals(data_globals);

          var data_b1 = JSON.parse(atob(block_1));
          
          setBlock1(data_b1);

          var data_b2 = JSON.parse(atob(block_2));

          setBlock2(data_b2);

          if(data_b2.title == ""){

            var target = document.querySelector(".lp_block_2");
            target.classList.add("none");
            
          }

          var data_b3 = JSON.parse(atob(block_3));

          setBlock3(data_b3);

          if(data_b3.title == ""){

            var target = document.querySelector(".lp_block_3");
            target.classList.add("none");
            
          }
          if(data_b3.title_2 == ""){

            var target = document.querySelector("#display");
            target.classList.add("none");
            
          }


          
        
      
        }


        
  
  
  
  


  return (
    <div className="Page Blog window">

      <Helmet>
       <title>{globals.metat}</title>
       <meta name="description" content={globals.metad} />
       
      </Helmet>

      <Link to="../landing_page">
      <button class="edit_button">Retour au Menu </button></Link>

<div class="editor_display block" >
            <div class="lp_block_1">
              
              <img src={block_1.image} />

               

            <div class="block_title">

  <h1>{block_1.title}</h1>
            
            <div class="underline_title"/>

            
            <p><div dangerouslySetInnerHTML={{__html: block_1.paragraph}}></div></p>
            
                <a href="https://www.winentretien.com/contact"><button class="contact_button" >me contacter</button></a></div>
            </div>

            <div class="float_line"/>


            <div class="lp_block_2" id="block_2_content">

            
            
            <div class="block_title" >
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

                <h3 >
                  {block_3.subtitle}  
                </h3>
                
                <p><div dangerouslySetInnerHTML={{__html: block_3.paragraph}}></div></p>
                
                </div>

                <img src={block_3.image}/>

                

            </div>


            <div class="lp_section" id="display">
                
                
            
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
}

export default ClientLP;