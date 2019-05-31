import actions from "./action_constants_for_USER"

const initialState = {
  UserList : [],
  isLoading: false,
  SingleUser: {
    name: '', 
      phone: 0, 
      address: '',
  }
}

export default function User_reducer (state = initialState, action) {
  
  switch (action.type) {

    case actions.GET_USER: {
      
      return { ...state, SingleUser: action.payload }
    }

    case actions.GET_ALL_USER: {
      
      return { ...state, UserList: [...action.payload]}
    }

    case actions.ADD_USER: {

      return { ...state, UserList: [...state.UserList, action.payload ] }
    }

    case actions.UPDATE_USER: {
      const updatedUser = state.UserList.filter(item => item.id === action.payload.id)

      return {...state, SingleUser: updatedUser}
    }

    case actions.DELETE_USER: {
      const updatedUser = state.UserList.filter(item => item.id !== action.payload.id)

      return {...state, SingleUser: updatedUser}
    }
    
    default:
      return state
  }
}