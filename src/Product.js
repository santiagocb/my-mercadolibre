import React, { Component } from 'react'

class Product extends Component {
    render() {
        this.attributes = this.props.att;            
        return(
            <div className="card product">
                <div className="card-image">
                <figure className="image is-128x128 is-centered">
                    <img
                    src={this.attributes.thumbnail}
                    alt="pokemon" />
                </figure>
                </div>
                <div className="card-content">
                    <div className="media-content">
                        <p className="title is-4">{this.attributes.title}</p>
                    </div>
                    <table className="table is-narrow is-fullwidth">
                        <tbody>
                        <tr>
                            <td className="has-text-bold">Available quantity</td>
                            <td>{this.attributes.available_quantity}</td>
                        </tr>
                        <tr>
                            <td className="has-text-bold">Price</td>
                            <td>{this.attributes.price}</td>
                        </tr>
                        <tr>
                            <td className="has-text-bold">Sold quantity</td>
                            <td>{this.attributes.sold_quantity}</td>
                        </tr>
                        <tr>
                            <td className="has-text-bold">ID seller</td>
                            <td>{this.attributes.seller.id}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <footer className="card-footer">
                    <button className="button is-primary">
                        But it now
                    </button>
                </footer>
            </div>
        )
    }


}

export default Product