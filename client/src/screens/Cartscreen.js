import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteFromCart, addToCartAction } from "../actions/cartActions";
import Checkout from "../Components/Checkout";
import AOS from 'aos'
import 'aos/dist/aos.css'

const Cartscreen = () => {
  const dispatch = useDispatch();
  const cartSelector = useSelector((state) => state.cartReducer);
  const cartItems = cartSelector.cartItems;
  let subTotal = cartItems.reduce((acc, cur) => acc + cur.price, 0);
 AOS.init()
 
  return (
    < div className="d-flex justify-content-between" data-aos="fade-down">
          <div div className="col-md-6 mx-4">
          <h2 className="mb-7 text-center pb-2 "style={{ borderBottom: "1px solid grey" }}>
            My Cart
          </h2>
          
          {cartItems.map((item) => {
            return (
              <div className="d-flex " style={{ borderBottom: "1px solid grey"}}>
                <div className=" m-1 p-4 w-100 ">
                  <h6>{item.name} [{item.varient}]</h6>
                  <h6> Price : {item.quantity} * {item.prices[0][item.varient]} = {item.price} </h6>
                  <h6 style={{ display: "inline" }}>Quantity : </h6>
                  <i className="fa fa-plus" aria-hidden="true" onClick={() => {dispatch(addToCartAction(item, item.quantity+1,item.varient))}}></i>
                  <b>{item.quantity}</b>
                  <i className="fa fa-minus" aria-hidden="true" onClick={() => {dispatch(addToCartAction(item, item.quantity-1,item.varient))}}></i>
                
            </div>
                

               <div className="d-flex p-4">
                  <img className="m-1 w-100" src={item.image}  style={{ height: "80px", width: "80px" }} alt=""  />
                  <i className="fa fa-trash align-items-center fa fa-trash h-50 mx-5" aria-hidden="true" onClick={() => dispatch(deleteFromCart(item))}></i>
                </div>
                
                </div>


            
            );
          })}


        </div>
        < div className="col-md-4">
        <h2 style={{fontSize:'30px'}}>Subtotal : {subTotal} /-</h2>
        <Checkout subTotal={subTotal} />
      </div>
        {/* < div className="col-md-4">
        <h2 style={{fontSize:'30px'}}>Subtotal : {subTotal} /-</h2>
        <Checkout subTotal={subTotal} />
      </div> */}

    
</div>
  )
};

export default Cartscreen;
