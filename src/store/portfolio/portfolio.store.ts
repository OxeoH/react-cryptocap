import { makeAutoObservable } from 'mobx'
import { RootStore } from '..'
import { Coin } from './portfolio.types'

export default class PortfolioStore {
  coins: Coin[]
  rootStore: RootStore
  constructor(rootStore: RootStore) {
    this.coins = []
    this.rootStore = rootStore
    makeAutoObservable(this)
  }
}
