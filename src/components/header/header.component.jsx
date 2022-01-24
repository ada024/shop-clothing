import React from "react";
import {Link} from 'react-router-dom';
import './header.styles.scss'
import {ReactComponent as Logo} from "../../assets/crown.svg";
import {auth} from "../../firebase/firebase.utils";

import {connect} from "react-redux";
import { createStructuredSelector} from "reselect";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import {selectCurrentUser} from "../../redux/user/user.selector";
import {selectCartHidden} from "../../redux/cart/cart.selector";
import {HeaderContainer, LogoContainer, OptionLink, OptionsContainer} from "./header.styles";
import {signOutStart} from "../../redux/user/user.actions";



const Header = ({currentUser, hidden, signOutStart}) => (
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo className='logo'/>
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/shop'>
                SHOP
            </OptionLink>
            <OptionLink to='/contact'>
                CONTACT
            </OptionLink>
            {currentUser ?(
                <OptionLink as='div' onClick={ signOutStart }>
                    SIGN OUT
                </OptionLink>
                ) : (
                    <OptionLink to={'/signin'}>SIGN IN</OptionLink>
                )}
            <CartIcon />
        </OptionsContainer>
        {hidden ? null : <CartDropdown />}
    </HeaderContainer>
);
// destruct nested value of another value , (check redux-logger)
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

const mapDispatchToProps = dipatch => ({
    signOutStart: () => dipatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
