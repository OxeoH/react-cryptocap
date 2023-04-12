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
      <td>{Number.parseFloat(props.changePercent24Hr).toFixed(3)}%</td>
      <td>${Number.parseFloat(props.marketCapUsd).toFixed(3)}</td>
      <td>${Number.parseFloat(props.volumeUsd24Hr).toFixed(3)}</td>
      <td>
        {Number.parseFloat(props.supply).toFixed(3)} {props.symbol}
      </td>
    </tr>
  )
}
