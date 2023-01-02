import * as S from './styles'
import React from 'react'

interface InputProps {
  value: string,
  onChange: ({ target }: React.ChangeEvent<HTMLInputElement>) => void,
  error?: string,
  onBlur?: ({ target }: React.ChangeEvent<HTMLInputElement>) => void,
  name: string,
  label: string,
  type: string
}


export function Input({ value, onChange, error, onBlur, name, label, type }: InputProps) {

  return (
    <S.ContainerInput>

      <S.InputStyles
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={label}
        error={error}
      />
      <label htmlFor={name}>{label}</label>
      {error && <p>{error}</p>}
    </S.ContainerInput>

  )
}