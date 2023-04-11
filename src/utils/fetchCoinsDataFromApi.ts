import axios from 'axios'

export async function fetchCoinsDataFromApi() {
  try {
    const response = await axios.get('https://api.coincap.io/v2/assets')
    const coinsList = await response.data?.data
    console.log(coinsList)

    localStorage.setItem('coinsList', coinsList)
    return coinsList
  } catch (e) {
    console.log('Error fetching coins: ', e)
  }
}
