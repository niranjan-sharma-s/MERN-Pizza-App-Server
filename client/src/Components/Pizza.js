import React, { useState } from "react";
import PizzaModal from "./PizzaModal";
import {  useDispatch } from "react-redux";
import {addToCartAction} from '../actions/cartActions'
import AOS from 'aos'
import 'aos/dist/aos.css'
export default function Pizza({ pizza }) {

  AOS.init()
  const [quantity, setQuantity] = useState(1);
  const [varient, setVarient] = useState("small");
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true)
const props = {show, handleShow,handleClose,pizza}

  const callPizzaModal = () => {

return <div>    

          <PizzaModal props={props}/>
      </div>


}

 const dispatch = useDispatch()

const addToCart = () => {
  dispatch(addToCartAction(pizza ,quantity , varient))
}
  return (
    
    <div data-aos='zoom-in' className=" shadow-lg p-3 mb-5 bg-white rounded">
      <div onClick={handleShow}>
      <h1>{pizza.name}</h1>
      <img
        src={pizza.image}
        alt=""
        style={{ height: "200px", width: "200px" }}
      />
      </div>

      <div className="flex-container">
        <div className="w-100 m-1">
          <p>Varients</p>

          <select
            className="form-control"
            vlaue={varient}
            onChange={(e) => setVarient(e.target.value)}
          >
            {" "}
            {pizza.varients.map((varient) => {
              return <option value={varient}>{varient}</option>;
            })}
          </select>
        </div>

        <div className="w-100 m-1">
          <p>Quantity</p>
          <select
            className="form-control"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          >
            {[...Array(10).keys()].map((num, idx) => {
              return <option value={num + 1}>{num + 1}</option>;
            })}
          </select>
        </div>
      </div>

      <div className="flex-container">
        <div className="m-1 w-100">
          <h1 className="mt-1">
            Price : {pizza.prices[0][varient] * quantity}{" "}
          </h1>
        </div>
        <div className="m-1 w-100">
          <button className="btn" onClick ={addToCart}>Add to cart</button>
        </div>
      </div>
 {show && callPizzaModal()}
</div>
  )

}