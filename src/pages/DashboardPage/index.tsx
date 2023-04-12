import React from 'react'
import { CoinTable } from '../../components/CoinsTable'
import { PopUp } from '../../components/PopUp'

export const DashboardPage = () => {
  return (
    <div>
      Coin Dashboard
      <PopUp />
      <CoinTable />
    </div>
  )
}
