import actions from "./actions_for_User"

export const getNames = () => dispatch => {
 
  return fetch('/api/names')
      .then((resp) => resp.json()) 
      .then(function( {data} ) {
 
          dispatch(actions.getNames(data))
  });
};

export default {
	getNames,
}