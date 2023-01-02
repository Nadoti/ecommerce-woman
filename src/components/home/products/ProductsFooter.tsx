import React from 'react'
import * as S from './styles'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { products } from '../../../utils/data'

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 3
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

export function ProductsFooter() {


  return (
    <S.ProductsFooterContainer >
      <Carousel
        responsive={responsive}
      >
        {products?.map((result) => (
          <S.StyleProduct key={result.id}>
            <S.BtnFavorites>*</S.BtnFavorites>
            <S.ProductImg src={result.img} alt="Pants 1" />
            <S.ProductTitle>{result.name}</S.ProductTitle>
            <S.BtnAddCart>Add Cart</S.BtnAddCart>
            <S.ContentPriceFavorites>
              <S.ContentFavorites>*****</S.ContentFavorites>
              <S.ContentPrice>$120.00</S.ContentPrice>
            </S.ContentPriceFavorites>
          </S.StyleProduct>
        ))}
      </Carousel>
      {/* <S.ContainerBtnMove>
        <S.BtnMoveLeft >Left</S.BtnMoveLeft>
        <S.BtnMoveRight >Right</S.BtnMoveRight>
      </S.ContainerBtnMove> */}

    </S.ProductsFooterContainer>
  )
}
