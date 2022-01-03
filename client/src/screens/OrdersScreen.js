import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserOrders } from "../actions/orderActions";
import { useEffect } from "react";
import Error from "../Components/Error";
import Loading from "../Components/Loading";
import AOS from "aos";
import "aos/dist/aos.css";

const OrdersScreen = () => {
  const dispatch = useDispatch();
  const ordersState = useSelector((state) => state.getUserOrdersReducer);
  const { error, loading, orders } = ordersState;

  AOS.init();
  useEffect(() => {
    dispatch(getUserOrders());
  }, [dispatch]);
  return (
    <div data-aos="fade-down" className="text-center" >
      <h2 className="text-center" style={{ fontSize: "35px" }}>
        My Orders
      </h2>
      <hr />
      <div className="f-flex row justify-content-center m-3">
        {loading && <Loading />}
        {error && <Error error="something went worng" />}
        {orders &&
          orders.map((order) => {
            return (
              <div
                className="col-md-10 m-2 p-10"
                style={{ color: "white", background: "red" }}
              >
                <div className="flex-container">
                  <div className="text-ledt w-100 m-1">
                    <h2 style={{ fontSize: "25px" }}>Items</h2>
                    <hr />
                    {order.orderItems.map((item) => {
                      return (
                        <div>
                          <p>
                            {item.name} [{item.varient}] * {item.quantity} ={" "}
                            {item.price}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                  <div className="text-ledt w-100 m-1">
                    <h2 style={{ fontSize: "25px" }}>Address</h2>
                    <hr />
                    <p>Street : {order.shippingAddress.street}</p>
                    <p>City : {order.shippingAddress.city}</p>
                    <p>Country : {order.shippingAddress.country}</p>
                    <p>Pincode : {order.shippingAddress.pincode}</p>
                  </div>
                  <div className="text-ledt w-100 m-1">
                    <h2 style={{ fonSize: "25px" }}>Order Info.</h2>
                    <hr />
                    <p> Order Amount : {order.orderAmount}</p>
                    <p>Date : {order.createdAt.substring(0, 10)}</p>
                    <p>Transaction ID: {order.transactionID}</p>
                    <p>Order ID : {order._id}</p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default OrdersScreen;
