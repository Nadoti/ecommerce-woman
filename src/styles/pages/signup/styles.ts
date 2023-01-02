import styled from "styled-components";
import img from '../../../assets/signup.png'



export const SignUpContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: ${props => props.theme["black-800"]};
  height: 100vh;
  width: 100%;
`

export const BgImg = styled.div`
  background: url(${img}) no-repeat center center;
  background-size: cover;
  margin: 50px 0 50px 50px;
  border-radius: 0 100px 100px 0;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ContainerBgVidro = styled.div`
  position: relative;
  z-index: 1;
`

export const BgVidro = styled.div`
  //background: rgba(255,255,255, 0.1);
  background: #ffffff10;
  box-shadow: 20px 20px 50px rgba(0,0,0,0.5);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border: 7px solid #ffffff10;
  width: 600px;
  height: 500px;
  border-radius: 8px;
  //border-inline-style: unset;
  z-index: 1;
  display: grid;
  place-content: center;
`

export const CicleFirst = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 100%;
  background: linear-gradient(135deg, rgba(216, 76, 211, 0) 10.79%, #D84CD3 87.16%);
  top: -100px;
  left: -100px;
  z-index: -1;
`

export const CicleLast = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 100%;
  background: linear-gradient(135.04deg, #8622EA 8.91%, rgba(134, 34, 234, 0) 98.34%);
  bottom: -100px;
  right: -100px;
  z-index: -1;
`

export const TextInfo = styled.p`
  font-size: 2.5rem;
  max-width: 400px;
  color: #fff;
`


export const SignUpDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 10rem;
`

export const LogoDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 3.75rem;
`

export const SignUpTitle = styled.h2`
  font-size: 2.5rem;
  color: ${props => props.theme["purple-600"]};
  display: flex;
  align-items: center;
  gap: 1rem;
  
  &::before {
    content: '';
    width: 15px;
    height: 15px;
    background: ${props => props.theme["purple-600"]};
    border-radius: 100%;
    display: block;
  }
`

export const Logo = styled.img``


export const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
`

export const FormDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.75rem;


  span {
    text-align: right;
    color: ${props => props.theme["gray-550"]};

    a {
      color: ${props => props.theme["pink-200"]};

      &:hover {
        text-decoration: underline;
      }
    }
  }

`