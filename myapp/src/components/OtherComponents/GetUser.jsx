import React, { useEffect, useState } from "react";
import axios from 'axios';
export default function GetUser(){
    const[users,setUsers]=useState([]);
    useEffect(
        ()=>{
            axios.get("https://jsonplaceholder.typicode.com/users")
            .then(
                (response)=>{
                    setUsers(response.data)
                }
            )
            .catch(
                (error)=>{
                    alert(error)
                }
            )
        }


    );
    return(
        <React.Fragment>
            <div className="container">
               
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col">
                                {
                                    users.length>0 ?
                                    <table className="table table-bordered text-capitalize text-center">
                                        <thead className="bg-primary text-white">
                                            <tr>
                                                <th>ID</th>
                                                <th>Name</th>
                                                <th>User Name</th>
                                                <th>Email</th>
                                                <th>Street</th>
                                                <th>City</th>
                                                <th>ZipCode</th>
                                                <th>Phone</th>
                                                
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                users.map(

                                                    (user)=>{
                                                        return(
                                                            <tr>
                                                                <td>{user.id}</td>
                                                                <td>{user.name}</td>
                                                                <td>{user.username}</td>
                                                                <td>{user.email}</td>
                                                                <td>{user.address.street}</td>
                                                                <td>{user.address.city}</td>
                                                                <td>{user.address.zipcode}</td>
                                                                <td>{user.phone}</td>
                                                                
                                                            </tr>
                                                        )
                                                    }

                                                )
                                            }
                                        </tbody>
                                    </table>
                                    :
                                    <p className="display-4 text-teal">Records not found</p>
                                }
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </React.Fragment>
    )

}