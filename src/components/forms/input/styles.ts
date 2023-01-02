import styled from "styled-components";

export const ContainerInput = styled.div`
  position: relative;

  label {
    position: absolute;
    top: 20px;
    left: 16px;
    transition: all .3s;
    pointer-events: none;
    color: ${props => props.theme["purple-300"]};
  }

  p {
    color: red;
    font-size: 14px;
    margin: 0;
    text-align: left;
    max-width: 400px;
  }
  
`

export const InputStyles = styled.input`
  width: 100%;
  padding: 20px;
  border: 3px solid transparent;
  outline: none;
  font-size: 14px;
  font-family: monospace;
  border-color: ${props => props.error && 'red'};
  border-radius: 8px;
  transition: all .3s ease;
  background: ${props => props.theme["gray-200"]};;

  &:focus, &:hover {
    border-color: ${props => props.error ? 'red' : `${props.theme["purple-300"]}`};

    & + label {
      color: ${props => props.error ? 'red' : `${props.theme["purple-300"]}`};
    }
  }

  &:focus + label {
    top: 8px;
    font-size: 12px;
    color: ${props => props.error ? 'red' : `${props.theme["purple-300"]}`}
  }

  &::placeholder {
    color: transparent;
  }

  &:not(:placeholder-shown)&:not(:focus) + label {
    font-size: 12px;
    top: 8px;
    color: ${props => props.error ? 'red' : `${props.theme["purple-300"]}`};
  }
  
`