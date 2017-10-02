import React, { Component } from 'react';

import { Switch, Route, Link } from 'react-router-dom'
import Home from './pages/home';
import AboutThisWebsite from './pages/about-this-website';

// this component will be rendered by our <___Router>
const App = () => (
    <div>
        <Header />
        <Main />
        <Footer />
    </div>
)

const Header = () => (
    <nav>
        <ul className="index-nav">
            <li className="index-list-item">
                <i className="fa fa-superpowers" aria-hidden="true"></i>
            </li>
            <li className="index-list-item is-active" data-nav="link-item"><Link to='/' className="index-link">Home</Link></li>
            <li className="index-list-item" data-nav="link-item"><Link to='/' className="index-link">2</Link></li>
            <li className="index-list-item" data-nav="link-item"><Link to='/' className="index-link">3</Link></li>
            <li className="index-list-item" data-nav="link-item"><Link to='/this-site' className="index-link">This site</Link></li>
        </ul>
    </nav>
)

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/this-site' component={AboutThisWebsite}/>
    </Switch>
  </main>
)

const Footer = () => (
    <footer className="index-footer">
        <div className="index-footer-items-wrapper">
            <span className="index-footer-item">1</span>|<span className="index-footer-item">2</span>|<span className="index-footer-item">3</span>|<span className="index-footer-item">4</span>
        </div>
    </footer>
)

export default App