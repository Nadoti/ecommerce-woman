import styled from "styled-components";



export const ProductsFooterContainer = styled.section`
  max-width: 1200px;
`

export const StyleProduct = styled.div`
  width: 350px;
  border: 2px solid ${props => props.theme["purple-300"]};
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  border-radius: 8px;
  height: 400px;
  gap: 10px;
`

export const BtnFavorites = styled.button`
  background: none;
  color: ${props => props.theme["purple-300"]};
  font-size: 1.125rem;
  position: absolute;
  top: -2px;
  right: -2px;
  border: 2px solid ${props => props.theme["purple-300"]};
  width: 30px;
  height: 30px;
  border-radius: 8px 8px 8px 50px;
  transition: all .2s ease-in-out;

  &:hover {
    border-bottom-left-radius: 8px;
    background: ${props => props.theme["purple-300"]};
    color: white;
  }
`

export const ProductImg = styled.img`
  
`

export const ProductTitle = styled.h3`
  font-size: 1.5rem;
  color: ${props => props.theme["pink-50"]};
`

export const BtnAddCart = styled.button`
  background: ${props => props.theme["purple-300"]};
  padding: 10px 20px;
  font-size: 1.125rem;
  border-radius: 8px;
  color: ${props => props.theme["gray-200"]};
  font-weight: bold;
  transition: all .2s ease-in-out;

  &:hover {
    filter: brightness(.9);
  }
`

export const ContentPriceFavorites = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1.25rem;
`

export const ContentFavorites = styled.span`
  font-size: 1rem;
  color: ${props => props.theme["gray-250"]};
`

export const ContentPrice = styled.span`
  font-size: 2rem;
  color: ${props => props.theme["white"]};
`

export const ContainerBtnMove = styled.div`
  display: flex;
  gap: 20px;
`

export const BtnMoveLeft = styled.button`
  
`

export const BtnMoveRight = styled.button`
  
`