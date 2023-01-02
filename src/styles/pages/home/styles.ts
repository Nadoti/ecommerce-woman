import styled from "styled-components";


export const HomeContainer = styled.main`
  width: 100%;
  height: calc(100vh - 7.68rem);
  background: ${props => props.theme['black-800']};
`

export const InfoAboutStore = styled.div`
  max-width: 1920px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 0 1.125rem;
`

export const InfoTextStore = styled.div`
  margin-top: 10rem;
  max-width: 700px;

  h1 {
    font-size: 4rem;
    color: ${props => props.theme["gray-500"]};

    span {
      color: ${props => props.theme["pink-200"]};
    }
  }

  p {
    font-size: 2.25rem;
    color:  ${props => props.theme["gray-700"]};
    margin-top: 0.5rem;
  }
`

export const InfoImageWoman = styled.div`
  img {
    max-width: 500px;
  }
`

