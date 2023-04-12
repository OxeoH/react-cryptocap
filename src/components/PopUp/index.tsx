import React, { ChangeEvent, FormEvent, MouseEvent } from 'react'
import styles from './PopUp.module.scss'
import { CoinSelector } from '../CoinSelector'

enum TransactionType {
  BUY = 'buy',
  SELL = 'sell',
}

interface IAddCryptoForm {
  type: TransactionType
  buyPrice: number
  count: number
}

export const PopUp = () => {
  const [price, setPrice] = React.useState(0)
  const [quantity, setQuantity] = React.useState(0.0)

  const [form, setForm] = React.useState<IAddCryptoForm>({
    type: TransactionType.BUY,
    buyPrice: 0,
    count: 0,
  })

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    alert(form) //dev
  }

  const setTransactionType = (type: TransactionType, e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault()

    setForm(form => (form = { ...form, type }))
  }

  const handlePriceChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()

    const value = Number.parseInt(e.target.value)

    if (value < 0) return

    setPrice(value)
  }

  const handleQuantityChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()

    const value = Number.parseInt(e.target.value)

    if (value < 0) return

    setQuantity(value)
  }

  const countTotal = () => {
    if (!quantity || !price) return 0

    return (quantity * price).toFixed(3)
  }

  return (
    <div className={styles.container}>
      <h2>Add Transaction</h2>
      <form onSubmit={e => handleSubmit(e)}>
        <div>
          <div onClick={e => setTransactionType(TransactionType.BUY, e)}>Buy</div>
          <div onClick={e => setTransactionType(TransactionType.SELL, e)}>Sell</div>
        </div>
        <CoinSelector />
        <div>
          <p>Quantity:</p>
          <input type="number" onChange={e => handleQuantityChange(e)} value={quantity} />
        </div>
        <div>
          <p>Price Per Coin:</p>
          <input type="number" onChange={e => handlePriceChange(e)} value={price} />
        </div>
        <p>Total {form.type === TransactionType.BUY ? 'Spent' : 'Received'}:</p>
        <span>${countTotal()}</span>
        <input type="submit" value="Add" />
      </form>
    </div>
  )
}
