import React, { useEffect, useState } from 'react'
import {Link, useParams} from 'react-router-dom'
import axios from 'axios';
function EditProduct() {
 
 let {id} = useParams();

 let[product,setProduct]=useState({});

 useEffect(()=>{
    axios.get(`http://localhost:9000/products/${id}`)
   .then((response)=>{
    setProduct(response.data)
   })
   .catch((error)=>{
    alert(error)
   })
 },[id]);

 function updateInput(event){
  setProduct({
    ...product,
    [event.target.name]:event.target.value
  })
 }

 function save(event){
    event.preventDefault()
    axios.put(`http://localhost:9000/products/${id}`,product)
    .then(()=>{
      alert("Product Updated..")
    })
    .catch((error)=>{
      alert(error)
    })
 }



  return (
    <React.Fragment>
      
    
     
      <div className="container">
        <div className="row">
          <div className="col-md-5">
              <div className="card">
                <div className="card-header bg-primary text-white text-center">
                  <p className="h4">Edit Product</p>
                </div>
                <div className="card-body">
                  <form action="" onSubmit={save}>

                    <div className="form-group">
                      <input type="text" 
                      name="name" 
                      value={product.name} 
                      onChange={updateInput}
                      placeholder='Enter Product Name'
                       className='form-control'
                      />
                    </div>

                    <div className="form-group">
                      <input type="text" 
                      name="desc" 
                      value={product.desc} 
                      onChange={updateInput}
                      placeholder='Enter Product Description'
                      className='form-control'
                      />
                    </div>

                    <div className="form-group">
                      <input type="text" 
                      name="imageUrl" 
                      value={product.imageUrl} 
                      onChange={updateInput}
                      placeholder='Image Address'
                       className='form-control'
                      />
                    </div>
                    <div className="form-group">
                      <input type="number" 
                      name="price" 
                      value={product.price} 
                      onChange={updateInput}
                      placeholder='Enter Price'
                       className='form-control'
                      />
                    </div>
                    <button className='btn btn-sm btn-outline-primary'>Update</button>
                    <Link to='/' className='btn btn-sm btn-outline-primary float-right'>Back</Link>

                  </form>
                </div>
              </div>
          </div>
        </div>
      </div>

    </React.Fragment>
  )
}

export default EditProduct