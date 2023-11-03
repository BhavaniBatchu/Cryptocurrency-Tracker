import {Component} from 'react'

import './index.css'

class CryptocurrenciesList extends Component {
  renderCryptocurrienciesHeader = () => {
    ;<div className="list-header">
      <p className="list-coin-type-heading">Coin Type</p>
      <div className="usd-and-euro-values-container">
        <p className="list-coin-value-heading">USD</p>
        <p className="list-coin-value-heading">Euro</p>
      </div>
    </div>
  }

  renderCryptocurrienciesView = () => {
    const {cryptocurrenciesData} = this.props

    return (
      <div className="cryptocurriencies-list-container" data-testid="loader">
        {this.renderCryptocurrienciesHeader()}
        <ul className="crptocurriencies-list">
          {cryptocurrenciesData.map(eachCryptocurrency => (
            <CryptocurrencyItem
              key={eachCryptocurrency.id}
              cryptocurrenciesDetails={eachCryptocurrency}
            />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    return (
      <div className="cryptocurrencies-container" data-testid="loader">
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <img
          className="cryptocurrency-img"
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
        />
        {this.renderCryptocurrienciesView()}
      </div>
    )
  }
}

export default CryptocurrenciesList
