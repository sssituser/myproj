import React from 'react';
;
 
const Child = (props) => {
    return (
        <React.Fragment>
            <p className="h1">Iam child compoment</p>
            <p className="h1">Messsage:{props.message}</p>
        </React.Fragment>
    );
}
 

 
export default Child;