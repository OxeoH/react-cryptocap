import React from 'react'
import UserStore from './user/user.store'
import PortfolioStore from './portfolio/portfolio.store'
import CoinsStore from './coins/coins.store'

export class RootStore {
  userStore: UserStore
  portfolioStore: PortfolioStore
  coinsStore: CoinsStore
  constructor() {
    this.userStore = new UserStore(this)
    this.portfolioStore = new PortfolioStore(this)
    this.coinsStore = new CoinsStore(this)
  }
}

const storeContext = React.createContext(new RootStore())

export const useStore = () => React.useContext(storeContext)
