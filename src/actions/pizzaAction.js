
import axios from 'axios';

export const getAllPizzas = () => async (dispatch) => {
  dispatch({ type: 'GET_PIZZAS_REQUEST' });

  try {
    const res = await axios.get('/api/pizzas/getAllpizzas');

    // console.log(res);
    dispatch({ type: 'GET_PIZZAS_SUCCESS', payload: res.data });
  } catch (err) {
    dispatch({ type: 'GET_PIZZAS_FAIL', payload: err });
  }
};




export const getAllBurgers = () => async (dispatch) => {
  dispatch({ type: 'GET_BURGERS_REQUEST' });

  try {
    const res = await axios.get('/api/burgers/getAllburgers');

    
    dispatch({ type: 'GET_BURGERS_SUCCESS', payload: res.data });
    console.log(res);
  } catch (err) {
    dispatch({ type: 'GET_BURGERS_FAIL', payload: err });
  }
};
