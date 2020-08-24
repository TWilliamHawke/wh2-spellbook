import React from 'react';

import Row from '../row';
import PageScroll from '../page-scroll';
import SpellDial from '../spell-dial';

import './app.scss';
import { useWindowWidth } from './hooks/useWindowWidth';

function App() {
  const { showWarning } = useWindowWidth()

  if(showWarning) return(
    <div className='low-warning'>
      Минимальная ширина экрана для отображения этого приложения - <span>1280 пикселей :(</span>
    </div>
  )
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
