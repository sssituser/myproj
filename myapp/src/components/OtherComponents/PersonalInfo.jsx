import React from "react";

export default function PersonalInfo(props){
    return(
        <React.Fragment>
            <div className="container">
                <p className="h1">Hi Iam PersonalInfoComponent</p>
                <p className="h4">Name :{props.name}</p>
                <p className="h4">Age : {props.age}</p>
                <p className="h4">Contact :{props.contact}</p>
            </div>
        </React.Fragment>
    )
}