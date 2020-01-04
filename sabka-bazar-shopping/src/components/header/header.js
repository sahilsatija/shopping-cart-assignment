import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../../styles/header.scss';
import "../../styles/Flex.scss";
import Model from "../model";
import Anchor from '../shared/Anchor/Anchor';
import Button from '../shared/Button/Button';
import "font-awesome/css/font-awesome.min.css";

function Header(props) {
    const { cartProducts } = props;
    const [display, setDisplay] = useState('none');
    const [show, setModel] = useState(false);
   

    let showModal = () => {
        setModel(true);
    };

    let hideModal = () => {
        console.log('handle close clicked');
        setModel(false);
    };

  function showMobileMenu(e) {
    if (display === "block") {
      setDisplay('none');
  } else {
      setDisplay('block');
  }
  }

  return (
    <div>
      <header>
         <div className="mobile-navbar">
                <div className="flexContainer mobile-nav">
                    <div className="mobile-logo">
                        <Link to={'/'} title="logo"><img src={'/static/images/logo.png'} alt="logo" /></Link>
                        <ul className="myLinks" style={{ display: display }}>
                            <li><Link to={'/'}>Home</Link></li>
                            <li><Link to={'/plp/all'}>Products</Link></li>
                            <li><Link to={'/login'}>Sign In</Link></li>
                            <li><Link to={'/register'}>Register</Link></li>
                        </ul>
                    </div>
           
                        <div className="mobile-cart">
                            <i onClick={showModal} className="m-btn-cart">  <img src={'/static/images/cart.svg'} alt="cart logo" /><span>({cartProducts ? cartProducts.length : 0})</span></i>
                        </div>
                        <div className="mobile-menu">
                            <i onClick={() => showMobileMenu()} className="fa fa-bars"></i>
                        </div>

                </div>
            </div>

        <div className="flexContainer web-app">
          <div className="flexItem flexContainer flexCenter itemCenter logo">
            
              <Anchor to="#" title="logo">
              <img src="/static/images/logo.png" alt="sabka-bazar-logo" />
              </Anchor>
           
          </div>
          <nav role="navigation" aria-label="header navigation" className="flexItem  header-nav">
            <ul role="menu">
              <li role="menuitem">
                <Anchor to="/" aria-label="Home Menu Item" title="Home">Home</Anchor>
              </li>
              <li role="menuitem">
                <Anchor to="/plp/all" aria-label="Products Menu Item" title="Products">Products</Anchor>
              </li>
            </ul>
          </nav>
          <div className="flexItem" >
          <nav aria-label="site navigation" className="top-nav">
            <ul role="menu" className="flexTop flexContainer flexCenter">
              <li role="menuitem">
                <Anchor to="/login" aria-label="SignIn Menu Item" title="SignIn">SignIn</Anchor>
              </li>
              <li role="menuitem">
                <Anchor to="/Register" aria-label="Register Menu Item" title="Register">Register</Anchor>
              </li>
            </ul>
            </nav>
            <div className="flexCart flexContainer flexCenter flexEnd">
              <Button className="btn-cart" aria-label={`${cartProducts ? cartProducts.length : 0} items cart`} onClick={showModal}>
              <img src="/static/images/cart.svg" alt="cart-logo" />
              <span>{cartProducts ? cartProducts.length : 0} {cartProducts && cartProducts.length === 1 ? 'item' : 'items'}</span>
              </Button>
            </div>
            </div>
        </div>
      </header>

      <Model show={show} handleClose={hideModal} />
  </div>
  );
}

export default Header;
