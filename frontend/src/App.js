import React from 'react';
import './App.css';
import Header from './components/header/header';
import Timer from './components/timer/timer';
import Settings from './components/settings/settings';
import SettingsContext from './components/settings/settingsContext';
import { useState } from 'react';

const App = () => {

  const [showSettings, setShowSettings] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(25);
  const [breakMinutes, setBreakMinutes] = useState(5);

  return (
    <div className="App">
      <Header/>
      <SettingsContext.Provider value={{ 
        showSettings,
        setShowSettings,
        workMinutes,
        setWorkMinutes,
        breakMinutes,
        setBreakMinutes,
       }}>
        {showSettings ? <Settings/> : <Timer/>}
      </SettingsContext.Provider>

    </div>
  );
}

export default App;