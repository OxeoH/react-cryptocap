import axios from 'axios'
import { useStore } from '../store'

export async function fetchCoinsDataFromApi(limit: number, offset: number) {
  try {
    const response = await axios.get(
      `https://api.coincap.io/v2/assets?limit=${limit}&offset=${offset}`
    )
    const coinsList = await response.data?.data

    localStorage.setItem('coinsList', coinsList)
    return coinsList
  } catch (e) {
    console.log('Error fetching coins: ', e)
  }
}
