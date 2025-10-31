import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ShowProduct() {
  let {id} = useParams();
  let[product,setProduct]=useState({});
  useEffect(()=>{
    axios.get(`http://localhost:9000/products/${id}`)
    .then((res)=>{
      setProduct(res.data)
      
    })
    .catch((error)=>{
      alert("Error occured : "+error)
    })
  },[id]);


  return (
    <React.Fragment>
        <div className="container">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-md-4">
                 
                 <img src={product.imageUrl} alt="image loading.." className='img-fluid img-thumbnail' />
                 
                </div>
                <div className="col-md-8 mt-5">
                      <ul className='list-group'>
                          <li className='list-group-item'>
                            <p className="h2">Name : {product.name}</p>
                          </li>
                          <li className='list-group-item'>
                            <p className="h3">Name : {product.desc}</p>
                          </li>
                          <li className='list-group-item'>
                            <p className="h2">Price : {product.price}</p>
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

export default ShowProduct