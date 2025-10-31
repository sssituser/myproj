import React, { useState } from 'react';
const Register = () => {
  let[text,setText]=useState("all");
    return (
        <React.Fragment>
          <div className="container">
            <p className="display-4">Hello Welcome {text}</p>
             <h1 className='text-primary text-center' onClick={()=>{
              setText(text="Kiran kumar")
             }}> Register</h1>
             
          </div>
        </React.Fragment>
    );
}
 

 
export default Register;