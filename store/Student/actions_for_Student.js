import actions from "./action_constants_for_Student"

const getStudent = ( payload ) => {

	return {
		type: actions.GET_STUDENT,
		payload
	}
}

const getAllStudent = ( payload ) => {

	return {
		type: actions.GET_ALL_STUDENT,
		payload
	}
}

const createStudent = ( payload ) => {

	return {

		type: actions.ADD_STUDENT,
		payload
	}
}

const updateStudent = ( payload ) => {

	return {

		type: actions.UPDATE_STUDENT,
		payload
	}
}

const deleteStudent = ( payload ) => {

	return {

		type: actions.DELETE_STUDENT,
		payload
	}

}

export default {

	getStudent,
	getAllStudent,
	createStudent,
	updateStudent,
	deleteStudent,
}