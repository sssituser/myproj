import React, { useState } from 'react';

 
const CounterApp = () => {
  let [count,setCount]=useState(0)
  let incr=()=>{
    setCount(count+1)
  }
  let decr=()=>{
    setCount(count-1>0 ? count-1: 0)
  }
  return (
    <React.Fragment>
      <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="card">
                  <div className="card-header bg-primary text-white text-center">
                    <p className="h4">Counter App</p>
                  </div>
                  <div className="card-body text-center text-success">
                    <button className='btn btn-md btn-primary me-2' onClick={incr}>Increase</button>
                    
                      <span className='font-weight-bold'>count : {count}</span>
                    
                      <button className='ms-2 btn btn-md btn-danger' onClick={decr}>Decrease</button>
                  </div>
                </div>
              </div>
            </div>
      </div>
    </React.Fragment>
  );
}
 

 
export default CounterApp;