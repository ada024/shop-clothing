import React from "react";
import {connect} from "react-redux";

import {toggleCartHidden} from '../../redux/cart/cart.actions';

import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg";


import './cart-icon.styles.scss';
import {selectCartItemsCount} from "../../redux/cart/cart.selector";

const CartIcon = ({toggleCartHidden, itemCount}) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{itemCount}</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = (state) => {
    // console.log("ItemCount computed");
    return ({
        itemCount: selectCartItemsCount(state)
    })
};


// null is the default when no state.
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CartIcon);
