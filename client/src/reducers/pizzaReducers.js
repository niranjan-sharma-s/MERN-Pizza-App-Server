export const getAllPizzasReducer = (state = { pizzas: [] }, action) => {

  switch (action.type) {
    case "GET_PIZZAS_REQUEST":
      return {
        loading: true,
        ...state,
      };
    case "GET_PIZZAS_SUCCESSFUL":
      return {
        loading: false,
        pizzas: action.payload,
      };

    case "GET_PIZZAS_FAILED":
      return {
        pizzas: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};


export const addNewPizzaReducer = (state = { }, action) => {

  switch (action.type) {
    case "ADD_PIZZA_REQUEST":
      return {
        loading: true,
        ...state,
      };
    case "ADD_PIZZA_SUCCESSFUL":
      return {
        loading: false,
        success:true
    
      };

    case "ADD_PIZZA_FAILED":
      return {
        error: action.payload,
        loading: false,
        
      };
    default:
      return state;
  }
};

export const getPizzaByIdReducer = (state = { }, action) => {

  switch (action.type) {
    case "GET_PIZZA_BY_ID_REQUEST":
      return {
        loading: true,
        ...state,
      };
    case "GET_PIZZA_BY_ID_SUCCESSFUL":
      return {
        loading: false,
        pizza: action.payload,
      };

    case "GET_PIZZA_BY_ID_FAILED":
      return {
        error: action.payload,
        loading: false,
       
      };
    default:
      return state;
  }
};

export const editPizzaReducer = (state = { }, action) => {

  switch (action.type) {
    case "EDIT_PIZZA_REQUEST":
      return {
        editLoading: true,
        ...state, 
      };
    case "EDIT_PIZZA_SUCCESSFUL":
      return {
        editLoading: false,
        editSuccess:true
    
      };

    case "EDIT_PIZZA_FAILED":
      return {
        editError: action.payload,
        editLoading: false,
      
      };
    default:
      return state;
  }
};