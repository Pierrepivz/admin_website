import React from 'react';
import { useState , forwardRef, useImperativeHandle } from 'react';

const Form = forwardRef((props,ref) => {


  
  const [check,setCheck] = useState(false);
  const [image,setImage] = useState();

  useImperativeHandle(ref, () => ({
    getimage() {
      return image;
    },
    getcheck() {
      return check;
    }
  }));

  


  
  
  

  function converttobase64(e){

    console.log(e.target.files[0]);

    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      
      
      console.log(reader.result);
      setImage(reader.result);
      setCheck(true);
      console.log(check);

    }
    reader.onerror = error => {

      console.log(error);

    };
  }

  return (
    <form class="Form">
      <input 
      type="file" 
      accept = "image/*"
      onChange={converttobase64}
      
      />
     
    </form>


  );

  
  
});

export default Form;



