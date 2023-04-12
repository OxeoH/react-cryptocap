import { CoinType } from '../store/coins/coins.types'

export const LOGIN_ROUTE = '/login'
export const REGISTER_ROUTE = '/register'
export const PROFILE_ROUTE = '/profile'
export const DASHBOARD_ROUTE = '/'
export const COIN_ROUTE = '/coin/:id'
export const NOTFOUND_ROUTE = '*'
export const EMPTY_COIN: CoinType = {
  changePercent24Hr: '',
  explorer: '',
  id: '',
  marketCapUsd: '',
  maxSupply: '',
  name: 'Select Coin',
  priceUsd: '',
  rank: '',
  supply: '',
  symbol: '',
  volumeUsd24Hr: '',
  vwap24Hr: '',
}
