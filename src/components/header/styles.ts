import styled from "styled-components";



export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => props.theme["black-800"]};
`

export const SignUp = styled.div`
  a {
    background-color: ${props => props.theme["purple-600"]};
    border: 2px solid transparent;
    padding: 50px 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    color: ${props => props.theme["pink-100"]};

    transition: all .2s ease-in-out;

    &:hover {
      background: none;
      color: ${props => props.theme["purple-600"]};
      border: 2px solid ${props => props.theme["purple-600"]};
    }
  }
`

export const Navigation = styled.nav`
  border-bottom: 2px solid ${props => props.theme["purple-300"]};
`
export const LinkContainer = styled.ul`
  display: flex;
  align-items: center;
  gap: 120px;
  padding-bottom: 1rem;
  outline: none;
`

export const LinksContent = styled.span`
  display: flex;
  gap: 60px;

  li {
    a {
      font-size: 1.125rem;
      color: ${props => props.theme["purple-300"]};
      position: relative;

      &::after {
        content: "";
        position: absolute;
        top: 25px;
        right: 0;
        height: 2px;
        width: 100%;
        background-color:  ${props => props.theme["purple-300"]};
        transform: scaleX(0);
        transform-origin: center;
        transition: transform 0.6s;
      }

      &:hover::after {
        transform: scaleX(1);
        transform-origin: center;
      }
      
    }
  }
`

export const Logo = styled.img`
  width: 80px;
`

export const SignIn = styled.div`
  a {
    border: 2px solid ${props => props.theme["pink-300"]};
    padding: 50px 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    color: ${props => props.theme["pink-300"]};
    transition: all .2s ease-in-out;

    &:hover {
      background: ${props => props.theme["pink-300"]};
      color: ${props => props.theme["white"]};
    }
  }
`