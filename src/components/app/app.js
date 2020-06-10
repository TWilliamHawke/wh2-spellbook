import React from 'react';

import Row from '../row';
import PageScroll from '../page-scroll';
import SpellDial from '../spell-dial';

import './app.scss';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <Row/>
        <PageScroll/>
        <SpellDial/>
      </header>
    </div>
  );
}

export default App;
