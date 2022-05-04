import React, {Component} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import {castlesList} from './castlesList';


export default class App extends Component {
  render() {
    return (
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {castlesList.map(castle => {
            const Page = require(`./pages/${castle.page}`).default;
            return <Route key={castle.url} path={castle.url} element={<Page />} />
          })}
        </Routes>
      </Router>
    );
  }
}
