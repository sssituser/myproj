import React, { useEffect, useState } from 'react';
import {Link,useNavigate} from 'react-router-dom';
import axios from 'axios'; 
import Login from './Login';
const Products = () => {
let[products,setProducts]=useState([]);
let[search,setSearch]=useState("")
let[user,setUser]=useState(localStorage.getItem('uname'));
useEffect(()=>{
  getProducts()
},[])

function getProducts(){
  axios.get("http://localhost:9000/products")
  .then((response)=>{
    setProducts(response.data)
  })
  .catch((error)=>{
    alert(error)
  })
}

function delProduct(id){
  axios.delete(`http://localhost:9000/products/${id}`)
  .then(()=>{
    alert("Product Deleted..")
    getProducts()
  })
  .catch((er)=>{
    alert("Error is "+er)
  })
}

const filtered = products.filter((pro)=>
`${pro.name}`.toLowerCase().includes(search.toLowerCase())
);



  return (
    <React.Fragment>
      
      <section>
        <div className="container">
          <p className="lead">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore laborum, sint ex sapiente accusantium ipsa enim mollitia, corporis autem explicabo recusandae pariatur expedita animi atque ea. Repellendus exercitationem, cupiditate expedita earum sit ex ratione sed neque deserunt assumenda quia a quaerat possimus, harum incidunt quod. Suscipit minima deserunt laboriosam similique ea, earum magni expedita, facere voluptatum dolor minus tempora illo?</p>
           <div className="row">
              <div className="col-md-8">
                <Link to={'/add'} className='btn btn-sm btn-outline-deep-purple'>Add Product</Link>
                <p className="h3">Welcome : {user}</p>
              </div>
              <div className="col-md-4">
                <input type='search' name="search" value={search}
               
              onChange={(event)=>{
                setSearch(event.target.value)
              }}

                className='form-control-lg' placeholder='Enter Name'/>
              </div>
           </div>
        </div>
      </section>
      <section>
           <div className="container mt-2">
            <div className="card h-100 ">
              <div className="card-body h-100">
                {
                  filtered.length > 0 ?
                  <div className="row">
                    {
                      filtered.map((prod)=>{
                          return(
                            <div className="col-md-3">
                              <div className="card mt-5">
                                <img src={prod.imageUrl} alt="Image Loading" height={'180px'} width={'150px'}  />
                                <div className="card-body">
                                  <p className="display-5">Produt Name :{prod.name}<br/>
                                  Description : {prod.desc.slice(0,50)}
                                  <br/>
                                   Price : {prod.price}
                                  </p>
                                 
                                </div>
                                <div className="card-footer">
                                  <Link to={`/products/view/${prod.id}`}>
                                      <i className='fa fa-eye fa-2x'/>
                                  </Link>

                                  <Link to={`/products/edit/${prod.id}`} className='ml-3 text-success'>
                                      <i className='fa fa-pen fa-2x'/>
                                  </Link>

                                  {/* <Link >
                                    <i onClick={()=>delProduct(prod.id)} className='fa fa-trash fa-2x text-danger'/>
                                  </Link> */}

                                   <Link to={`/products/del/${prod.id}`} >
                                    <i  className='fa fa-trash fa-2x text-danger'/>
                                  </Link>



                                </div>
                              </div>
                            </div>
                          )
                      })
                    }
                  </div>
                  :
                  <p className="h3 text-center text-danger">Out of stock</p>
                }
              </div>
            </div>
           </div>
      </section>
    </React.Fragment>
  );
}
 

 
export default Products;