import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product'
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import car_banner from './Components/Assets/banner_mens.png'
import bike_banner from './Components/Assets/banner_womens.png'
import gadgets_banner from './Components/Assets/banner_kids.png'
import ShopContextProvider from './Context/ShopContext';


function App() {
  return (
    <div className='xyz' >
      
      <BrowserRouter>
      <ShopContextProvider>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/car' element={<ShopCategory banner={car_banner} category="car"/>}/>
        <Route path='/bike' element={<ShopCategory banner={bike_banner} category="bike"/>}/>
        <Route path='/gadgets' element={<ShopCategory banner={gadgets_banner} category="gadgets"/>}/>
        <Route path="product" element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      <Footer />
      </ShopContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
