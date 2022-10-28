import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import TitleScene from './TitleScene';
import GameScene from './GameScene';
import OptionsScene from './OptionsScene';

class Router extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element=<TitleScene /> />
          <Route path="/game" element=<GameScene /> />
          <Route path="/options" element=<OptionsScene /> />
        </Routes>
      </BrowserRouter>
    )
  }

}

export default Router;