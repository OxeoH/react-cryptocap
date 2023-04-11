import React from 'react'
import UserStore from './user/user.store'
import PortfolioStore from './portfolio/portfolio.store'

export class RootStore {
  userStore: UserStore
  portfolioStore: PortfolioStore
  constructor() {
    this.userStore = new UserStore(this)
    this.portfolioStore = new PortfolioStore(this)
  }
}

const storeContext = React.createContext(new RootStore())

export const useStore = () => React.useContext(storeContext)
