import React, { useEffect, useState } from "react";
import axios from 'axios';
function ApiUser(){
    let[users,setUsers]=useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{
            setUsers(res.data)
        }).catch((error)=>{
            alert(error)
        })

    },[])

 


    return(
        <React.Fragment>
            <p className="h1 text-center">Api Users information</p>
            {
                users.length>0 ?
                <table className="table table-bordered text-center">
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                    {
                        users.map(user=>{
                            return(
                                <tr>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                </tr>
                            )
                        })
                    }
                </table>

                :
                <h1>Records not found</h1>
            }
        </React.Fragment>
    )
}
export default ApiUser;