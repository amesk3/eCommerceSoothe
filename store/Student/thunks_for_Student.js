import actions from "./actions_for_Student"

export const getName = () => dispatch => {
 
  return fetch('/api/name')
      .then((resp) => resp.json()) 
      .then(function( {data} ) {
 
          dispatch(actions.getName(data))
  });
};

export default {
	getName,
}