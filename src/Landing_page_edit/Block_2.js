const Block_2 = (props) => {

    const block_2 = props.block;

    if(block_2.title!=""){
        return(
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

            

        );
    }


}
export default Block_2;