import styled from "styled-components";


export const ButtonStyles = styled.button`
  width: 100%;
  padding: 20px;
  background: ${props => props.theme["purple-700"]};
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: 8px;

  &:hover {
    filter: brightness(1.2);
  }
`