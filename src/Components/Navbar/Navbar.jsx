import React, { useContext, useState} from 'react'
import './Navbar.css';
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';


const Navbar = () => {

    const [menu,setMenu] = useState("shop");
  const {getTotalCartItems}=useContext(ShopContext);

  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt=""/>
            <p>SHOWROOM</p>
    </div>
    <ul className="nav-menu">
        <li onClick={()=>{setMenu("shop")}}><Link className='Linked' style={{textDecoration: 'none'}} to='/'>Shop</Link> {menu==="shop"?<hr/>:<></>}</li> 
        <li onClick={()=>{setMenu("car")}}><Link className='Linked' style={{textDecoration: 'none'}} to='/car'>Car</Link>{menu==="car"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("bike")}}><Link className='Linked' style={{textDecoration: 'none'}} to='/bike'>Bike</Link>{menu==="bike"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("gadgets")}}><Link className='Linked' style={{textDecoration: 'none'}} to='/gadgets'>Gadgets</Link>{menu==="gadgets"?<hr/>:<></>}</li>
    </ul>   
    <div className='nav-login-cart'>
        <Link to='/Login'><button>Login</button></Link>
        <Link to='/cart'><img className='cart'  src={cart_icon} alt=""/></Link>
        <div className='nav-cart-count'>{getTotalCartItems()}</div>
    </div>
    </div>
  )
}

export default Navbar
