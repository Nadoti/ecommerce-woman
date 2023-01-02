export const initialState = {
  name: {
    value: "",
    error: ""
  },
  email: {
    value: "",
    error: ""
  },
  password: {
    value: "",
    error: ""
  },
  passwordConfirmed: {
    value: "",
    error: ""
  },
}

export const formReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_INPUT":
      return {
        ...state,
        [action.payload.name]: {
          value: action.payload.value,
          error: action.payload.error
        }
      }
    case "ADD_ERROR":
      return {
        ...state,
        [action.payload.name]: {
          value: action.payload.value,
          error: action.payload.error
        }
      }
    case "PASSWORD_ERROR":
      if (state.password.value !== action.payload.value) {
        return {
          ...state,
          [action.payload.name]: {
            value: action.payload.value,
            error: action.payload.error
          }
        }
      }
    default:
      return state
  }
}