
export const getAllPizzaReducer = (state = { pizzas: [] }, action) => {
    switch (action.type) {
      case 'GET_PIZZAS_REQUEST':
        return {
          ...state,
          loading: true,
        };
      case 'GET_PIZZAS_SUCCESS':
        return {
          pizzas: action.payload,
          loading: false,
        };
      case 'GET_PIZZAS_FAIL':
        return {
          error: action.payload,
          loading: false,
        };
      default:
        return state;
    }
  };
  

  export const getAllBurgerReducer = (state = { burgers: [] }, action) => {
    switch (action.type) {
      case 'GET_BURGERS_REQUEST':
        return {
          ...state,
          loading: true,
        };
      case 'GET_BURGERS_SUCCESS':
        return {
          burgers: action.payload,
          loading: false,
        };
      case 'GET_BURGERS_FAIL':
        return {
          error: action.payload,
          loading: false,
        };
      default:
        return state;
    }
  };