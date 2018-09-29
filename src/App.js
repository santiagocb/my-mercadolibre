import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Product from './Product'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: [],
      query: ''
    }
    this.searchChange = this.searchChange.bind(this);
  }

  searchChange(event) {
    fetch(`https://api.mercadolibre.com/sites/MCO/search?q=${this.state.query}`)
      .then(response => response.json())
      .then(products => this.setState({products: products.results}))
      event.preventDefault();
  }

  render() {    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My MercadoLibre</h1>
        </header>
        <div>
          <form onSubmit={this.searchChange}>
            <label>
              Search a product:
            <input type="text" value={this.state.query} onChange={(event) => this.setState({ query: event.target.value })} />
            </label>
            <input type="submit" value="Buscar" />
          </form>
        </div>
        <section className="section">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-10">
                <div className="product-list">
                {this.state.products.map((product, index) => <Product key={index} att={product}/> )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
