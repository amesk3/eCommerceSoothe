import actions from "./action_constants_for_User"

const getUser = ( payload ) => {

	return {
		type: actions.GET_USER,
		payload
	}
}

const getAllUser = ( payload ) => {

	return {
		type: actions.GET_ALL_USER,
		payload
	}
}

const createUser = ( payload ) => {

	return {

		type: actions.ADD_USER,
		payload
	}
}

const updateUser = ( payload ) => {

	return {

		type: actions.UPDATE_USER,
		payload
	}
}

const deleteUser = ( payload ) => {

	return {

		type: actions.DELETE_USER,
		payload
	}

}

export default {

	getUser,
	getAllUser,
	createUser,
	updateUser,
	deleteUser,
}