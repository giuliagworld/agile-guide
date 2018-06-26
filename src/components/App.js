import React from 'react';
import Nav from 'react-burger-menu/lib/menus/slide';

import Header from './Header';
import SprintReview from './SprintReview';
import Footer from './Footer';

import { SocialIcon } from 'react-social-icons';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
      active: 'header'
    };
  }

  // This keeps your state in sync with the opening/closing of the menu
  // via the default means, e.g. clicking the X, pressing the ESC key etc.
  handleStateChange = (state) => {
    this.setState({
      menuOpen: state.isOpen
    })
  }

  // close menu when clicking on any link in the menu
  closeMenu = (name) => {
    this.setState({
      menuOpen: false,
      active: name
    })
  }

  render () {
    return (
      <div>
        <div className="nav-container">
          <Nav right isOpen={this.state.menuOpen} onStateChange={(state) => this.handleStateChange(state)}>
            <a className="menu-item" href="#home" onClick={() => this.closeMenu('header')}>Home</a>
            <a className="menu-item" href="#sprint-review" onClick={() => this.closeMenu('sprintReview')}>Sprint Review</a>
            <SocialIcon className="menu-item social" url="https://www.facebook.com/" color="white" />
            <SocialIcon className="menu-item social" url="https://www.twitter.com/" color="white" />
          </Nav>
        </div>
        { this.state.active == 'header' ? <Header /> : null }
        { this.state.active == 'sprintReview' ? <SprintReview /> : null }
        <Footer />
      </div>
    )
  }
}

export default App;
