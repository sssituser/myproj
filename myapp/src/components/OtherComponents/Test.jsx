import React, { useEffect, useState } from 'react';
 
const Test = () => {
    let[time,setTime]=useState(new Date().toLocaleTimeString());

    useEffect(()=>{
      setInterval(()=>{
        setTime(new Date().toLocaleTimeString()),1000
      })
    },[]);

    return (
        <React.Fragment>
          <div className="container">
              
              <p className="display-4 text-primary">Current Time : {time}</p>
          </div>
        </React.Fragment>
    );
}
 

 
export default Test;