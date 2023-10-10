import { DATA_ERROR, DATA_SUCCESS, DATA_REQUEST } from "./actionType";
import axios from "axios";

export const getAllPets = (paramObj) => (dispatch) => {
  dispatch({ type: DATA_REQUEST });
  axios
    .get(`https://pethub-u60q.onrender.com/pet`)
    .then((res) => {
      if (paramObj.params.gender) {
        dispatch({
          type: DATA_SUCCESS,
          payload: res.data.filter(
            (el, i) => el.gender === paramObj.params.gender
          ),
        });
      } else if (paramObj.params.breed) {
        dispatch({
          type: DATA_SUCCESS,
          payload: res.data.filter(
            (el, i) => el.breed === paramObj.params.breed
          ),
        });
      } else if (paramObj.params.age) {
        dispatch({
          type: DATA_SUCCESS,
          payload: res.data.filter((el, i) => el.age === paramObj.params.age),
        });
      } else if (paramObj.params.size) {
        dispatch({
          type: DATA_SUCCESS,
          payload: res.data.filter((el, i) => el.size === paramObj.params.size),
        });
      } else {
        dispatch({ type: DATA_SUCCESS, payload: res.data });
      }
    })
    .catch((err) => {
      dispatch({ type: DATA_ERROR });
    });
};
export const getOnePet = (id) => (dispatch) => {
  console.log(id);
  dispatch({ type: DATA_REQUEST });
  axios
    .get(`https://pethub-u60q.onrender.com/pet/${id}`)
    .then((data) => {
      dispatch({ type: DATA_SUCCESS, payload: data.data });
      console.log(data.data);
    })
    .catch((err) => {
      dispatch({ type: DATA_ERROR });
    });
};
