import React from 'react'
import { CoinItem } from '../CoinItem'
import { useStore } from '../../store'
import { observer } from 'mobx-react'

export const CoinTable = observer(() => {
  const { coinsStore, sortsStore } = useStore()

  React.useEffect(() => {
    coinsStore.updateCoinsData(sortsStore.pageLimit, sortsStore.offset)
    const fetchInterval = setInterval(() => {
      coinsStore.updateCoinsData(sortsStore.pageLimit, sortsStore.offset)
    }, 3000) //30s for dev

    return () => {
      clearInterval(fetchInterval)
    }
  }, [sortsStore.page])

  const nextPageHandleClick = () => {
    sortsStore.nextPage()
  }

  const prevPageHandleClick = () => {
    sortsStore.prevPage()
  }

  return (
    <div>
      <table>
        <thead>
          <th>#</th>
          <th>Name</th>
          <th>Price</th>
          <th>24h%</th>
          <th>Market Cap</th>
          <th>{'Volume(24h)'}</th>
          <th>Circulating Supply</th>
        </thead>
        <tbody>
          {!!coinsStore.coins.length &&
            coinsStore.coins.map(coin => (
              <CoinItem
                key={coin.id}
                changePercent24Hr={coin.changePercent24Hr}
                explorer={coin.explorer}
                id={coin.id}
                marketCapUsd={coin.marketCapUsd}
                maxSupply={coin.maxSupply}
                name={coin.name}
                priceUsd={coin.priceUsd}
                rank={coin.rank}
                supply={coin.supply}
                symbol={coin.symbol}
                volumeUsd24Hr={coin.volumeUsd24Hr}
                vwap24Hr={coin.vwap24Hr}
              />
            ))}
        </tbody>
      </table>
      <button onClick={() => prevPageHandleClick()}>Back</button>
      <button onClick={() => nextPageHandleClick()}>Next</button>
    </div>
  )
})
