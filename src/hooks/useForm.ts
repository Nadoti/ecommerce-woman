import React from "react"
import { formReducer, initialState } from "../reducer/signUpReducer"

const types = {
  email: {
    regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Preencha um email válido'
  },
  password: {
    regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
    message: "A senha precisa ter 1 caracter maisculo, 1 minusculo e 1 digito. Com no mínimo 8 caracteres."
  }
}


export function useForm() {

  const [state, dispatch] = React.useReducer(formReducer, initialState)

  function validate(val, name) {
    if (val.length === 0) {
      dispatch({ type: "ADD_ERROR", payload: { name: name, value: val, error: "campo não pode ser vazio" } })
      return false
    } else if (types[name] && !types[name].regex.test(val)) {
      dispatch({ type: "ADD_ERROR", payload: { name: name, value: val, error: types[name].message } })
      return false
    } else if (name === 'passwordConfirmed') {
      dispatch({ type: "PASSWORD_ERROR", payload: { name: name, value: val, error: "Senha Não Confere" } })
    } else {
      dispatch({ type: "ADD_ERROR", payload: { name: name, value: val, error: "" } })
      return true
    }

  }

  function onChange({ target }: React.ChangeEvent) {

    if (state[target.name].error) validate(target.value, target.name)
    //console.log('target', target)
    dispatch({ type: "CHANGE_INPUT", payload: { name: target.name, value: target.value } })
  }

  function onBlur({ target }: React.ChangeEvent) {
    validate(target.value, target.name)
  }


  return {
    state,
    onChange,
    onBlur,
  }
}