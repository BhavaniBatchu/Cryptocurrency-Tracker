import {Component} from 'react'
import Loader from 'react-loader-spinner'

import CryptocurrenciesList from '../CryptocurrenciesList'

import './index.css'

const apiUrl = 'https://apis.ccbp.in/crypto-currency-converter'

class CryptocurrencyTracker extends Component {
  state = {
    cryptocurrenciesData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getCryptocurrencies()
  }

  getCryptocurrencies = async () => {
    const response = await fetch(apiUrl)
    const fetchedData = await response.json()

    this.setState({
      cryptocurrenciesData: fetchedData.map(eachCryptocurrency => ({
        id: eachCryptocurrency.id,
        currencylogoUrl: eachCryptocurrency.currency_logo,
        currencyName: eachCryptocurrency.currency_name,
        usdValue: eachCryptocurrency.usd_value,
        euroValue: eachCryptocurrency.euro_value,
      })),
      isLoading: false,
    })
  }

  renderCryptocurrenciesList = () => {
    const {cryptocurrenciesData} = this.state

    return <CryptocurrenciesList cryptocurrenciesData={cryptocurrenciesData} />
  }

  renderLoader = () => {
    ;<div>
      <Loader type="Rings" color="#fffff" height={50} width={50} />
    </div>
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="app-container" data-testid="loader">
        {isLoading ? this.renderLoader() : this.renderCryptocurrenciesList()}
      </div>
    )
  }
}

export default CryptocurrencyTracker
