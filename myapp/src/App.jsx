import React, { Component } from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Products from './components/Products'; 
import DeleteProduct from './components/DeleteProduct';
import ShowProduct from './components/ShowProduct';
import EditProduct from './components/EditProduct';
import AddProduct from './components/AddProduct';
import DahBoard from './components/DahBoard';
import Login from './components/Login';
class App extends Component {
  render() { 
    return (
      <React.Fragment>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/products' element={<Products/>}/>
            <Route path='/add' element={<AddProduct/>}/>
            <Route path='/dash' element={<DahBoard/>}/>
            <Route path='/products/view/:id' element={<ShowProduct/>}/>
            <Route path='/products/edit/:id' element={<EditProduct/>}/>
            <Route path='/products/del/:id' element={<DeleteProduct/>}/>
          </Routes>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}
 
export default App;