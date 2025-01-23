import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import React from "react";
import axios from "axios";
import "./Landing_page.css";
import "./Landing_page_menu.css";
import { Helmet } from "react-helmet";
import Block_1 from "./Block_1.js";
import Block_2 from "./Block_2.js";
import Block_3 from "./Block_3.js";



const ClientLP = () => {

  

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

          var data_b3 = JSON.parse(atob(block_3));

          setBlock3(data_b3);

          


          
        
      
        }

  const section_1 = { title: block_3.title, subtitle: block_3.subtitle , paragraph: block_3.paragraph, image: block_3.image , alt: block_3.alt_image1 , description: block_3.desc_image1 };
  const section_2 = { title: block_3.title_2, subtitle: block_3.subtitle_2 , paragraph: block_3.paragraph_2, image: block_3.image_2 , alt: block_3.alt_image2 , description: block_3.desc_image2};

        
  
  
  
  


  return (
    <div className="Page Blog window">

      <Helmet>
       <title>{globals.metat}</title>
       <meta name="description" content={globals.metad} />
       <script type="application/ld+json">
{globals.script}

</script>
       
      </Helmet>

      <Link to="../landing_page">
      <button class="edit_button">Retour au Menu </button></Link>

<div class="editor_display block" >

            <Block_1 block={block_1}/>

            <div class="float_line"/>

            <Block_2 block={block_2}/>
           
  
  <div class="lp_block_3">
                
                 
            
            <Block_3 block={section_1}/>


            <Block_3 block={section_2}/>

            <a href="https://www.winentretien.com/rendez-vous"><button class="contact_button" >prendre rendez-vous</button></a>
            
            </div>


           

            
            
            </div>
  

   
    
    

    

 

    </div>

   
    

    


    
      
    
  );
}

export default ClientLP;