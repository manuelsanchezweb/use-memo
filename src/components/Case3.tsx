import { useState, useMemo } from 'react'

type ProductType = {
  id: number
  name: string
  price: number
  quantity: number
}

const Case3 = () => {
  const initialCart: ProductType[] = [
    { id: 1, name: 'Madera', price: 10, quantity: 0 },
    { id: 2, name: 'Hierro', price: 15, quantity: 0 },
    { id: 3, name: 'Paja', price: 5, quantity: 0 },
  ]

  const [cart, setCart] = useState<ProductType[]>(initialCart) // Initialized with example products

  const calculateTotal = (cart: ProductType[]): number => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
  }

  const total = useMemo(() => calculateTotal(cart), [cart])

  const updateQuantity = (id: number, quantityToAdd: number): void => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + quantityToAdd }
          : item
      )
    )
  }

  const resetCart = (): void => {
    setCart([...initialCart])
  }

  return (
    <div>
      <h2>Caso 3: Lista de carrito con productos</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price} - Quantity: {item.quantity}
            <button onClick={() => updateQuantity(item.id, 1)}>+1</button>
            <button onClick={() => updateQuantity(item.id, 2)}>+2</button>
            <button onClick={() => updateQuantity(item.id, 3)}>+3</button>
          </li>
        ))}
      </ul>
      Total Price: {total}
      <button onClick={resetCart}>Reset Cart</button>
    </div>
  )
}

export default Case3
