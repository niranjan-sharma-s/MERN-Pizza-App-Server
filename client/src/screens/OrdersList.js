import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deliverOrder, getAllOrders } from "../actions/orderActions";
import Error from "../Components/Error";
import Loading from "../Components/Loading";

const OrdersList = () => {
  const dispatch = useDispatch();
  const ordersState = useSelector((state) => state.getAllOrdersReducer);
  const { loading, error, orders } = ordersState;
  useEffect(() => {
    dispatch(getAllOrders());
  }, [dispatch]);
  return (
    <div>
      {loading && <Loading />}
      {error && <Error error="unable to fetch orders" />}
      <table className="table table-striped table-bordered table-responsive-sm">
        <thead>
          <tr>
            <th>Order Id</th>
            <th>Email</th>
            <th>User Id</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {orders &&
            orders.map((order) => {
              return (
                <tr>
                  <td>{order._id}</td>
                  <td>{order.email}</td>
                  <td>{order.userID}</td>
                  <td>{order.orderAmount}</td>
                  <td>{order.createdAt.substring(0, 10)}</td>
                  <td>
                    {console.log(order.isDelivered)}
                    {order.isDelivered ? (
                      <h1>Delivered</h1>
                    ) : (
                      <button
                        className="btn"
                        onClick={() => dispatch(deliverOrder(order._id))}
                      >
                        Deliver
                      </button>
                    )}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersList;
