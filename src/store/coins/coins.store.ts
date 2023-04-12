import { makeAutoObservable } from 'mobx'
import { RootStore } from '..'
import { CoinType } from './coins.types'
import { fetchCoinsDataFromApi } from '../../utils/fetchCoinsDataFromApi'

export default class CoinsStore {
  coins: CoinType[]
  rootStore: RootStore
  constructor(rootStore: RootStore) {
    this.coins = []
    this.rootStore = rootStore
    makeAutoObservable(this)
  }

  async updateCoinsData(limit: number, offset: number) {
    this.coins = await fetchCoinsDataFromApi(limit, offset)
  }
}
