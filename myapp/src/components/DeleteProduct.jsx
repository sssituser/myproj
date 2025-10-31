import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams,Link } from 'react-router-dom'

function DeleteProduct() {
let {id} = useParams();
let[product,setProuduct]=useState({});
let navigate=useNavigate();
useEffect(()=>{
  axios.get(`http://localhost:9000/products/${id}`)
  .then((response)=>{
    setProuduct(response.data)
  })
  .catch((error)=>{
    alert(error)
  })
},[id])

function delProduct(id){
  axios.delete(`http://localhost:9000/products/${id}`)
  .then(()=>{
    alert("Product Deleted..")
    navigate('/')
  })
  .catch((er)=>{
    alert("Error is "+er)
  })
}

  return (
    <React.Fragment>
       <div className="container">
        <div className="row mt-5">
          <div className="col-md-5">
              <div className="card">
                <div className="card-header bg-primary text-center text-white">
                    <p className="h4">Do You Want Delete the {product.name} ? </p>
                </div>
                <div className="card-footer">
                  <button onClick={()=>delProduct(id)} className='btn btn-sm btn-outline-danger'>Delete</button>
                  <Link to='/' className='btn btn-sm btn-outline-deep-purple'>No</Link>
                </div>
               
              </div>
          </div>
        </div>
       </div>

    </React.Fragment>
  )
}

export default DeleteProduct