import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
 
const AddProduct = () => {
  let[product,setProdut]=useState({
    name:"",
    desc:"",
    imageUrl:"",
    price:""
  })
  
  function updateInput(event){
    setProdut({
      ...product,
      [event.target.name]:event.target.value
    })
  }
function save(event){
  event.preventDefault()
  axios.post("http://localhost:9000/products",product)
  .then(()=>{
    alert("Produt Added...")
  })
  .catch((error)=>{
    alert("Product Insertion Failed : "+error)
  })
}

  return (
    <React.Fragment>
            <div className="container">
                <div className="row mt-5">
                  <div className="col-md-5">
                    <div className="card">
                        <div className="card-header bg-primary text-white text-center">
                          <p className="h4">Add Product</p>
                        </div>
                        <div className="card-body">
                          <form action="" onSubmit={save}>

                              <div className="form-group">
                                <input type='text' name="name" value={product.name}
                                 onChange={updateInput}
                                 placeholder='Enter Pro Name'
                                 className='form-control'/>
                              </div>

                              <div className="form-group">
                                <input type='text' name="desc" value={product.desc}
                                 onChange={updateInput}
                                 placeholder='Enter Pro Description'
                                 className='form-control'/>
                              </div>

                              <div className="form-group">
                                <input type='text' name="imageUrl" value={product.imageUrl}
                                 onChange={updateInput}
                                 placeholder='Image Link'
                                 className='form-control'/>
                              </div>

                            <div className="form-group">
                                <input type='number' name="price" value={product.price}
                                 onChange={updateInput}
                                 placeholder='Enter Price'
                                 className='form-control'/>
                              </div>
                            <button className='btn btn-md btn-outline-primary'>Register</button>
                            <Link to='/' className='btn btn-md btn-outline-primary float-right'>Back</Link>

                          </form>
                        </div>
                    </div>
                  </div>
                </div>
            </div>
    </React.Fragment>
  );
}
 

 
export default AddProduct;