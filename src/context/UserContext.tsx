import React from "react"


export const userContextCreate = React.createContext({})

export function UserContext({ children }) {
  const [cart, setCart] = React.useState(0)

  return (
    <userContextCreate.Provider
      value={{}}
    >
      {children}
    </userContextCreate.Provider>
  )
}