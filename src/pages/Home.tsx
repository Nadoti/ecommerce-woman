import * as S from '../styles/pages/home/styles'
import woman from '../assets/bg-main-woman.png'
import { ProductsFooter } from '../components/home/products/ProductsFooter'

export function Home() {
  return (
    <S.HomeContainer>
      <S.InfoAboutStore>
        <S.InfoTextStore>
          <h1>Clothes and Acessories for all <span>WOMAN</span></h1>
          <p>Find the best collections for all women</p>
        </S.InfoTextStore>
        <S.InfoImageWoman>
          <img src={woman} alt="Woman" />
        </S.InfoImageWoman>
      </S.InfoAboutStore>
      <ProductsFooter />
    </S.HomeContainer>
  )
}