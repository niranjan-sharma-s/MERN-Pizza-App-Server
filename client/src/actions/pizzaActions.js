import axios from "axios";
export const getAllPizzas = () => async (dispatch) => {
  dispatch({ type: "GET_PIZZAS_REQUEST" });

  try {
    const response = await axios.get(`/getpizzas`);
    dispatch({ type: "GET_PIZZAS_SUCCESSFUL", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_PIZZAS_FAILED", payload: error });
  }
};

export const filterPizzas = (searchKey, category) => async (dispatch) => {
  var filteredPizzas;
  dispatch({ type: "GET_PIZZAS_REQUEST" });

  if (searchKey || category) {
    const response = await axios.get(`/getpizzas`);
    filteredPizzas = response.data.filter((pizza) =>
      pizza.name.toLowerCase().includes(searchKey)
    );

    if (category !== "all") {
      filteredPizzas = response.data.filter(
        (pizza) => pizza.category.toLowerCase() === category
      );
    }
    dispatch({ type: "GET_PIZZAS_SUCCESSFUL", payload: filteredPizzas });
  } else {
    dispatch({ type: "GET_PIZZAS_FAILED", payload: "No pizzas available" });
  }
};


export const adNewPizzaActions = (pizza) => async dispatch  => {
  dispatch({type:'ADD_PIZZA_REQUEST'})

 if(pizza) {
    const response = await axios.post('/api/pizzas/addpizza' , {pizza})
    dispatch({type:'ADD_PIZZA_SUCCESSFUL'})
  } else {
    dispatch({type:'ADD_PIZZA_FAILED', payload:'Unbale to add new pizza'})
  } 
}

export const getPizzaById = (pizzaid) => async (dispatch) => {
  
  dispatch({ type: "GET_PIZZA_BY_ID_REQUEST" });
 try {
    const response = await axios.post(`/api/pizzas/getpizzabyid` ,{pizzaid});
    console.log(response)
    dispatch({ type: "GET_PIZZA_BY_ID_SUCCESSFUL", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_PIZZA_BY_ID_FAILED", payload: error });
  }
};


export const editPizzaActions = (editedPizza) => async dispatch  => {
  dispatch({type:'EDIT_PIZZA_REQUEST'})

 if(editedPizza) {
    const response = await axios.post('/api/pizzas/editpizza' , {editedPizza})
    dispatch({type:'EDIT_PIZZA_SUCCESSFUL'})
    window.location.href="/admin/pizzaslist"
  } else {
    dispatch({type:'EDIT_PIZZA_FAILED', payload:'Unbale to add new pizza'})
  } 
}

export const deletePizza = (pizzaid) => async dipatch => {
 try {
  const response = await axios.post("/api/pizzas/deletepizza" , {pizzaid})
  alert('Pizza deleted') 
  window.location.reload()
 } catch (error) {
   alert('Cannot delete pizza')
 }
}