import React from 'react';
import './App.css';
import Header from './components/header/header';
import Timer from './components/timer/timer';
import Settings from './components/settings/settings';
import { useState } from 'react';

const App = () => {

  const [showSettings, setShowSettings] = useState( true );

  return (
    <div className="App">
      <Header/>
      {showSettings ? <Settings/> : <Timer/>}
    </div>
  );
}

export default App;