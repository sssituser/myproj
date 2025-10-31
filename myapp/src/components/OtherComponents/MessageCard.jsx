import React from "react";
let MessageCard =(props)=>{
     let{name,age,contact,imageUrl,designation,address}=props
    return(
       
        <React.Fragment>
                <div className="container mt-3">
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-4">
                                    <img src={imageUrl} className="img-fluid img-thumbnail rounded-circle" alt="...loding"/>
                                </div>
                                <div className="col-md-6 mt-5">
                                    <ul className="list-group">
                                        <li className="list-group-item">
                                            <p className="text-teal">Name :{name}</p>
                                        </li>
                                        <li className="list-group-item">
                                            <p className="text-teal">Age :{age}</p>
                                        </li>
                                        <li className="list-group-item">
                                            <p className="text-teal">Contact :{contact}</p>
                                        </li>
                                        <li className="list-group-item">
                                            <p className="text-teal">Designation :{designation}</p>
                                        </li>
                                        <li className="list-group-item">
                                            <p className="text-teal">Address :{address}</p>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </React.Fragment>
    )
}
export default MessageCard;