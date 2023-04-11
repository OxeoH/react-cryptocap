import React from 'react'
import { CoinType } from '../../store/coins/coins.types'

export const CoinItem: React.FC<CoinType> = props => {
  return (
    <tr>
      <td>{props.rank}</td>
      <td>
        {props.name} <span>{props.symbol}</span>
      </td>
      <td>${props.priceUsd}</td>
      <td>{props.changePercent24Hr}</td>
      <td>{props.marketCapUsd}</td>
      <td>{props.volumeUsd24Hr}</td>
      <td>{props.supply}</td>
    </tr>
  )
}
