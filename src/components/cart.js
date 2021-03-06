import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as cartActions from '../actions/cart';
import Shelf from './shelf';

class Cart extends Component {

  render() {
    const cartList = this.props.cart.map((item, idx) => {
        return <li key={idx}>{item}</li>;
    });

    return (
      <div className="Cart">
        <Shelf addItem={this.props.actions.addToCart}/>
        <h2>Shopping Bag2</h2>
        <ol>
            {cartList}
        </ol>
      </div>
    );
  }
}
function mapStateToProps(state, props) {
    return {
        cart: state.cart
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(cartActions, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);