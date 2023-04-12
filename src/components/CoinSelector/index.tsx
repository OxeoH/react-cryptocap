import React, { ChangeEvent, MouseEvent } from 'react'
import { useStore } from '../../store'
import { observer } from 'mobx-react'
import { CoinType } from '../../store/coins/coins.types'
import { EMPTY_COIN } from '../../utils/consts'

export const CoinSelector = observer(() => {
  const { coinsStore } = useStore()

  const [selectedCoin, setSelectedCoin] = React.useState<CoinType>(EMPTY_COIN)

  const [showOptions, setShowOptions] = React.useState(false)

  const handleSelect = (e: MouseEvent<HTMLDivElement>, coin: CoinType) => {
    e.stopPropagation()
    setSelectedCoin(coin)
    setShowOptions(false)
  }

  const handleToggle = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    setShowOptions(prev => !prev)
  }

  return (
    <div onClick={e => handleToggle(e)}>
      {selectedCoin.name} {selectedCoin.symbol}
      {showOptions && (
        <div>
          {coinsStore.coins.map(coin => (
            <div onClick={e => handleSelect(e, coin)}>
              {coin.name} {coin.symbol}
            </div>
          ))}
        </div>
      )}
    </div>
  )
})
