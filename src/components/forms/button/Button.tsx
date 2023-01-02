import React from 'react'
import * as S from './styles'

type Props = {
  children?: React.ReactNode
};

export function Button({ children }: Props) {


  return (
    <S.ButtonStyles>
      {children}
    </S.ButtonStyles>
  )
}