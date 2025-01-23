const Block_3 = (props) => {

    const block_3 = props.block;

    if(block_3.title!=""){
        return(

            
                
                 
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

                <img src={block_3.image} alt={block_3.alt} description={block_3.description}/>

                

            </div>
           

            

        );
    }


}
export default Block_3;