
const Block_1 = (props) => {

    const block_1 = props.block;

    if(block_1.title!=""){
        return(
            <div class="lp_block_1">
              
              <img src={block_1.image} alt={block_1.alt} description={block_1.desc} />

               

            <div class="block_title">

  <h1>{block_1.title}</h1>
            
            <div class="underline_title"/>

            
            <p><div dangerouslySetInnerHTML={{__html: block_1.paragraph}}></div></p>
            
                <a href="https://www.winentretien.com/contact"><button class="contact_button" >me contacter</button></a></div>
            </div>

            

        );
    }


}
export default Block_1;