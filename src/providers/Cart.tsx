import React, { useContext, useReducer } from 'react'

interface IProduct {
  id: string,
  amount: number
}

interface ICart {
  products: IProduct[]
}

type Action = | {
  type: 'ADD', product: {
    id: string,
    amount: number
  }
} | { type: 'REMOVE', id: string }

const initiaValues: ICart = {
  products: []
};

const reducer = (state: ICart = initiaValues, action: Action) => {
  switch (action.type) {
    case 'ADD':
      return { ...state, products: [...state.products, action.product] }
    case 'REMOVE':
      return { ...state, products: state.products.filter(product => product.id !== action.id) }
    default:
      throw new Error()
  }
}

const CartContext = React.createContext(null)

export const useCart = () => {
  const context = useContext(CartContext)

  if (context === undefined) {
    throw new Error('[useCart]: must be used within a CartContext')
  }

  return context
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initiaValues)
  const value = { state, dispatch };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
