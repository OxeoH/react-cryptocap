import { makeAutoObservable, toJS } from 'mobx'
import { RootStore } from '..'
import { CoinType } from './coins.types'
import { fetchCoinsDataFromApi } from '../../utils/fetchCoinsDataFromApi'

export default class CoinsStore {
  coins: CoinType[]
  filteredCoins: CoinType[]
  rootStore: RootStore
  constructor(rootStore: RootStore) {
    this.coins = []
    this.filteredCoins = []
    this.rootStore = rootStore
    makeAutoObservable(this)
  }

  filterCoinsByParams() {
    if (!this.coins.length) return

    this.filteredCoins = []

    const limit = this.rootStore.sortsStore.offset + this.rootStore.sortsStore.pageLimit

    for (let i = this.rootStore.sortsStore.offset; i < limit; i++) {
      this.filteredCoins.push(this.coins[i])
    }
    console.log('Offset: ', this.rootStore.sortsStore.offset)
    console.log('PageLimit: ', this.rootStore.sortsStore.pageLimit)
    console.log('Filtered coins: ', toJS(this.filteredCoins))
  }

  async updateCoinsData() {
    this.coins = await fetchCoinsDataFromApi()
    this.filterCoinsByParams()
  }
}
