import axios from "axios";

export const placeOrder =  (token, subTotal) => async (dispatch, getState) => {
  dispatch({ type: "PLACE_ORDER_REQUEST" });
  const currentUser = getState().loginUserReducer.currentUser;
  const cartItems = getState().cartReducer.cartItems;

  try {
    const response = await axios.post(
      "/api/orders/placeorder",
      {token,
      subTotal,
      currentUser,
      cartItems}
    );
    dispatch({ type: "PLACE_ORDER_SUCCESSFUL" });
  } catch (error) {
    dispatch({ type: "PLACE_ORDER_FAILED" });
  }
};


export const getUserOrders = () => async (dispatch , getState) => {
  const currentUser = getState().loginUserReducer.currentUser
  dispatch({ type: "GET_USER_ORDERS_REQUEST" });

  try {
    const response = await axios.post(`/api/orders/getuserorders` ,{userID : currentUser._id});
    dispatch({ type: "GET_USER_ORDERS_SUCCESSFUL", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_USER_ORDERS_FAILED", payload: error });
  }
};

export const getAllOrders = () => async (dispatch , getState) => {
  const currentUser = getState().loginUserReducer.currentUser
  dispatch({ type: "GET_ALL_ORDERS_REQUEST" });

  try {
    const response = await axios.get(`/api/orders/getallorders`);
    dispatch({ type: "GET_ALL_ORDERS_SUCCESSFUL", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_ALL_ORDERS_FAILED", payload: error });
  }
};

export const deliverOrder = (orderId) => async dispatch => {
  
  if(orderId){
    
    const response = await axios.post("/api/orders/deliverorder" , {orderId})
    alert('Order Delivered')
    const orders = await axios.get("/api/orders/getallorders")
    dispatch({type : "GET_ALL_ORDERS_SUCCESSFUL", payload: orders.data })
    
  } else {
    alert("delivery not processed")
  }
}