import actions from "./actions_for_Campus"

export const getCampus = () => dispatch => {
 
  return fetch('/api/campus')
      .then((resp) => resp.json()) 
      .then(function( {data} ) {
 
          dispatch(actions.getCampus(data))
  });
};

export default {
	getCampus,
}