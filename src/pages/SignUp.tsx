import React from 'react'
import { Input } from '../components/forms/input/Input'
import * as S from '../styles/pages/signup/styles'
import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom'
import { Button } from '../components/forms/button/Button'
import { useForm } from '../hooks/useForm'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from '../firebase/firebase'
import { userContextCreate } from '../context/UserContext'

export function SignUp() {

  const stateReducer = useForm()

  function handleSubmit(e) {
    e.preventDefault()

    console.log('lala')
  }

  const auth = getAuth(app);

  function registerUser(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault()
    createUserWithEmailAndPassword(auth, stateReducer.state.email.value, stateReducer.state.password.value)
      .then((userCredential) => {
        // Signed in 
        console.log('userCredential', userCredential)
        const user = userCredential.user;
        console.log('user', user)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error)
        // ..
      });
  }



  return (
    <S.SignUpContainer>
      <S.BgImg>
        <S.ContainerBgVidro>
          <S.BgVidro>
            <S.TextInfo>
              Every Woman can wear what she loves
            </S.TextInfo>
          </S.BgVidro>
          <S.CicleFirst />
          <S.CicleLast />
        </S.ContainerBgVidro>
      </S.BgImg>

      <S.SignUpDetails>
        <S.LogoDetails>
          <S.SignUpTitle>Sign Up</S.SignUpTitle>
          <Link to='/'>
            <S.Logo src={logo} alt="Logo" />
          </Link>
        </S.LogoDetails>
        <S.SignUpForm onSubmit={registerUser}>
          <Input
            type="text"
            name='email'
            label='Email'
            value={stateReducer.state.email.value}
            onChange={stateReducer.onChange}
            onBlur={stateReducer.onBlur}
            error={stateReducer.state.email.error}
          />
          <Input
            type="text"
            name='password'
            label='Password'
            value={stateReducer.state.password.value}
            onChange={stateReducer.onChange}
            onBlur={stateReducer.onBlur}
            error={stateReducer.state.password.error}
          />
          <Input
            type="text"
            name='passwordConfirmed'
            label='Password Confirmed'
            value={stateReducer.state.passwordConfirmed.value}
            onChange={stateReducer.onChange}
            onBlur={stateReducer.onBlur}
            error={stateReducer.state.passwordConfirmed.error}
          />
          <S.FormDetails>
            <span>Already Accoaunt? <Link to='/signin'>Sign In</Link></span>
            <Button>Register</Button>
          </S.FormDetails>
        </S.SignUpForm>
      </S.SignUpDetails>
    </S.SignUpContainer>
  )
}
