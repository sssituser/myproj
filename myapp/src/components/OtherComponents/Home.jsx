import React from "react";
import PersonalInfo from "./PersonalInfo";

const Home=()=>{
    return (
        <React.Fragment>
           <div className="container">
            
             <h1 className="text-success text-center">Home </h1>
              <PersonalInfo name="kiran" age="25" contact="999999"/>
           
           </div>
        </React.Fragment>
    )
}
export default Home;