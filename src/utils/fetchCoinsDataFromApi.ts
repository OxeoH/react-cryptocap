import axios from 'axios'
import { useStore } from '../store'

export async function fetchCoinsDataFromApi() {
  try {
    const response = await axios.get(`https://api.coincap.io/v2/assets?limit=${200}`)
    const coinsList = await response.data?.data

    localStorage.setItem('coinsList', coinsList)
    return coinsList
  } catch (e) {
    console.log('Error fetching coins: ', e)
  }
}
