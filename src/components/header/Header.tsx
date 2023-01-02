import { Link } from "react-router-dom";
import logo from '../../assets/logo.svg'
import * as S from './styles'

export function Header() {
  return (
    <S.HeaderContainer>
      <S.SignUp>
        <Link to='signup'> Sign Up</Link>
      </S.SignUp>

      <S.Navigation>
        <S.LinkContainer>
          <S.LinksContent>
            <li><Link to='tshirt'>T-shirts</Link></li>
            <li><Link to='pants'>Pants</Link></li>
            <li><Link to='boots'>Boots</Link></li>
          </S.LinksContent>
          <span>
            <li><Link to='/'><S.Logo src={logo} alt="Logo" /></Link></li>
          </span>
          <S.LinksContent>
            <li><Link to='balletshoes'>Ballet Shoes</Link></li>
            <li><Link to='dresses'>Dresses</Link></li>
            <li><Link to='hoodies'>Hoodies</Link></li>
          </S.LinksContent>
        </S.LinkContainer>
      </S.Navigation>

      <S.SignIn>
        <Link to='signin'>Sign In</Link>
      </S.SignIn>
    </S.HeaderContainer>
  )
}