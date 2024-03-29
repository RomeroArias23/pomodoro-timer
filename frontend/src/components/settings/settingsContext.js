import React from 'react';

const createSettingsContext = (defaultValue = {}) => {
    const SettingsContext = React.createContext({
      showSettings: false,
      setShowSettings: () => {},
    });
    return SettingsContext;
  };
  
  const SettingsContext = createSettingsContext(); // Use with default value
  

export default SettingsContext;