import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import AddNewPizza from "./AddNewPizza";
import OrdersList from "./OrdersList";
import PizzasList from "./PizzasList";
import UsersList from "./UsersList";
import { Switch, Route, Link } from "react-router-dom";
import EditPizza from "./EditPizza";

const Adminscreen = () => {
  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;

  useEffect(() => {
    if (!currentUser.isAdmin) {
      window.location.href = "/";
    }
  }, [currentUser]);
  return (
    <div className="container">
      <div className="col-md-10 text-center w-100 ">
        <h1>Admin Panel</h1>
        <ul className="adminfunction">
          <li>
            <Link className="link" to={"/admin/userslist"}>
              Users
            </Link>
          </li>
          <li>
            <Link className="link" to={"/admin/pizzaslist"}>
              Pizzas
            </Link>
          </li>
          <li>
            <Link className="link" to={"/admin/addnewpizza"}>
              Add new pizza
            </Link>
          </li>
          <li>
            <Link className="link" to={"/admin/orderslist"}>
              Orders
            </Link>
          </li>
        </ul>

        <Switch>
          <Route path="/admin" component={UsersList} exact />
          <Route path="/admin/pizzaslist" component={PizzasList} exact />
          <Route path="/admin/addnewpizza" component={AddNewPizza} exact />
          <Route path="/admin/orderslist" component={OrdersList} exact />
          <Route path="/admin/userslist" component={UsersList} exact />
          <Route exact path="/admin/editpizza/:pizzaid" component={EditPizza} />
        </Switch>
      </div>
    </div>
  );
};

export default Adminscreen;
