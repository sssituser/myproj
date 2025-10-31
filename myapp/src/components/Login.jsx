import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {
   let navigate = useNavigate();
    let[user,setUser]=useState({
        user:{
            username:"",
            password:""
        }
    });
    
    function updateInput(event){
        setUser({
            ...user,
            [event.target.name]:event.target.value
        })
    }
   
    function getUser(event){
        event.preventDefault()
       axios.get(`http://localhost:9000/users?username=${user.username}`)
       .then((res)=>{
        if(res.data[0].password==user.password){
            alert("Login Success")
        
            localStorage.setItem('uname',user.username)
            
            navigate('/products')
        }else{
            alert("Loing Failed")
        }
       }).catch((er)=>{
        alert(er)
       })
    }
  return (
    <React.Fragment>
        <div className="container">
            <div className="row mt-5">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-header text-center bg-success text-white">
                            <p className="h4">Login Here</p>
                        </div>
                        <div className="card-body">
                            <form onSubmit={getUser} >
                                <div className="form-group">
                                        <input type="text"
                                        onChange={updateInput} 
                                        name="username" 
                                        value={user.username} 
                                        className='form-control' 
                                        placeholder='User Name' />
                                </div>
                                 <div className="form-group">
                                        <input type="password"
                                        onChange={updateInput} 
                                        name="password" value={user.password}
                                         className='form-control' 
                                         placeholder='passowrd' />
                                </div>
                                <button className='btn btn-sm btn-success'>Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default Login