import styled from "styled-components";
import img from '../../../assets/quadrados.png'

export const SignInContainer = styled.section`
  width: 100%;
  height: 100vh;
  background: ${props => props.theme["black-800"]};
  display: grid;
  grid-template-columns: 1fr 1fr;
`


export const SignInContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 10rem;
  gap: 2.5rem;
`




export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
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
  }
`


export const Info = styled.div`
  h3 {
    font-size: 1.5rem;
    color: ${props => props.theme["purple-500"]};
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1rem;
    color: ${props => props.theme["purple-600"]};
  }
`


export const SignInForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
`


export const SignInFooter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`



export const SignInAccount = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  a {
    color: ${props => props.theme["gray-600"]};
    font-size: 0.875rem;

    &:hover {
      text-decoration: underline;
    }
  }
`


export const BgImg = styled.div`
  background: url(${img}) no-repeat center center;
  background-size: cover;
  margin: 50px 50px 50px 0;
  border-radius: 100px 0 0 100px;
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
  background: #ffffff10;
  box-shadow: 20px 20px 50px rgba(0,0,0,0.5);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border: 7px solid #ffffff10;
  width: 600px;
  height: 500px;
  border-radius: 8px;
  z-index: 1;
  display: grid;
  place-content: center;
`

export const TextInfo = styled.div`
  font-size: 2.5rem;
  max-width: 400px;
  color: #fff;
`

export const CicleFirst = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 100%;
  background: linear-gradient(219.33deg, #3D0B4E 5.79%, #692D7D 86.27%);
  bottom: -100px;
  left: -100px;
  z-index: -1;
`

export const CicleLast = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 100%;
  background: linear-gradient(218.33deg, #692D7D 12.25%, #49075B 86.48%);
  top: -100px;
  right: -100px;
  z-index: -1;
`


