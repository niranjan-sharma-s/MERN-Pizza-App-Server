import React, { useEffect } from "react";
import Pizza from "../Components/Pizza";
import { useDispatch, useSelector } from "react-redux";
import { getAllPizzas } from "../actions/pizzaActions";
import Loading from "../Components/Loading";
import Error from "../Components/Error";
import Filter from "../Components/Filter";

export default function Homescreen() {
  const dispatch = useDispatch();

  const pizzaState = useSelector((state) => state.getAllPizzasReducer);

  const { pizzas, error, loading } = pizzaState;

  useEffect(() => {
    dispatch(getAllPizzas());
  }, [dispatch]);

  return (
    <div className='container'>
      <Filter/>
      <div className="row text-center justify-content-center">
        
        {loading ? (
          <Loading/>
        ) : error ? (
          (<Error error="Something went wrong"/>)
        ) : ( 
          pizzas.map((pizza) => {
            return (
              <div className="col-md-4" key={Math.random()*10}>
                <div>
                  <Pizza pizza={pizza} />
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
