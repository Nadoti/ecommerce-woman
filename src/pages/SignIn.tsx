import React from 'react'
import { Link } from 'react-router-dom'
import { Input } from '../components/forms/input/Input'
import logo from '../assets/logo.svg'
import * as S from '../styles/pages/signin/styles'
import { Button } from '../components/forms/button/Button'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


export function SignIn() {

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')


  function onChangeEmail(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value)
  }

  function onChangePassword(e: React.ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value)
  }

  const auth = getAuth();

  function login(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {

        const user = userCredential.user;
        console.log('user', user)

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error)
      });
  }


  return (
    <S.SignInContainer>
      <S.SignInContent>
        <S.Title>
          <h2>Sign In</h2>
          <Link to='/'>
            <img src={logo} />
          </Link>
        </S.Title>

        <S.Info>
          <h3>Welcome</h3>
          <p>Enter the information you entered while registering</p>
        </S.Info>

        <S.SignInForm onSubmit={login}>
          <Input
            type="text"
            name='email'
            label='E-mail'
            value={email}
            onChange={onChangeEmail}
          />
          <Input
            type="password"
            name='password'
            label='Password'
            value={password}
            onChange={onChangePassword}
          />
          <S.SignInFooter>
            <S.SignInAccount>
              <Link to='/forgotpassword'>Forgot Password?</Link>
              <Link to='/signup'>Don't you have an account?</Link>
            </S.SignInAccount>
            <Button>Login</Button>
          </S.SignInFooter>
        </S.SignInForm>
      </S.SignInContent>

      <S.BgImg>
        <S.ContainerBgVidro>
          <S.BgVidro>
            <S.TextInfo>
              The best time is when
              you dress well
            </S.TextInfo>
          </S.BgVidro>
          <S.CicleFirst />
          <S.CicleLast />
        </S.ContainerBgVidro>
      </S.BgImg>
    </S.SignInContainer>
  )
}
