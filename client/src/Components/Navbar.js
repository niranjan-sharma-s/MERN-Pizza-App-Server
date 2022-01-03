import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../actions/userActions";
//import { cartReducer } from '../reducers/cartReducer'

export default function Navbar() {
  const cartState = useSelector((state) => state.cartReducer);
  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;

  const dispatch = useDispatch();

  return (
    <div className="w-100">
      <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded ">
          <a className="navbar-brand " href="/"> PIZZA APP </a>
          <button type ='button'className="navbar-toggler"  data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls='navbarNav' aria-expanded='false' aria-label="Toggle navigation">
    <span  ><i style={{color:'black'}}className="fa fa-bars"></i></span>
    
     </button>

        <div className="collapse navbar-collapse" id='navbarNav' >
            <ul className="navbar-nav ms-auto">
              {currentUser ? (<div className="dropdown mt-1 p-1">
                <a type="button"style={{ color: "black", textDecoration: "none" }} className="dropdown-toggle" id="dropdownMenuButton"href="/#" data-bs-toggle="dropdown" aria-expanded='false'>
                    {currentUser.name}</a>
                  <div className="dropdown-menu"aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="/orders">Orders </a>
                    <a className="dropdown-item"href="/#"onClick={dispatch(logoutUser)}> <li>Logout</li></a>
                  </div>
                </div>) : (<li className="nav-item" > <a className="nav-link " href="/login" >Login</a></li>
              )}

              <li className="nav-item"><a className="nav-link" href="/cart"> Cart {cartState.cartItems.length   ? cartState.cartItems.length: null} </a></li>
            </ul>
          </div>
      </nav>
    </div>
  )
}
