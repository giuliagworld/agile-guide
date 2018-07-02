import React from 'react';
import Nav from 'react-burger-menu/lib/menus/slide';

import Header from './Header';
import SprintReview from './SprintReview';
import Done from './Done';
import Ready from './Ready';
import Footer from './Footer';

import { SocialIcon } from 'react-social-icons';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
      active: 'ready'
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
            <a className="menu-item" href="#" onClick={() => this.closeMenu('header')}>Home</a>
            <a className="menu-item" href="#sprint-review" onClick={() => this.closeMenu('sprintReview')}>Sprint Review</a>
            <a className="menu-item" href="#done" onClick={() => this.closeMenu('done')}>"Done"</a>
            <a className="menu-item" href="#ready" onClick={() => this.closeMenu('ready')}>"Ready"</a>
            <SocialIcon className="menu-item social" url="https://www.linkedin.com/in/giuliagazzabin" color="white" />
            <SocialIcon className="menu-item social" url="https://github.com/giuliagworld" color="white" />
          </Nav>
        </div>
        { this.state.active == 'header' ? <Header /> : null }
        { this.state.active == 'sprintReview' ? <SprintReview /> : null }
        {this.state.active == 'done' ? <Done /> : null}
        {this.state.active == 'ready' ? <Ready /> : null}
        <Footer />
      </div>
    )
  }
}

export default App;
