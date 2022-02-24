import React, { useState, useEffect } from "react";

export const SettingsContext = React.createContext();

function SettingsProvider(props) {

  const [showComplete, setShowComplete] = useState(false);
  const [displayMax, setDisplayMax] = useState(2);
  const [defaultSort, setDefaultSort] = useState('status');

  function toggleShowComplete() {
    setShowComplete(showComplete === false ? true : false);
    // setShowComplete();
  }

  const state = {
    showComplete,
    displayMax,
    defaultSort,
    toggleShowComplete,
    setDisplayMax
  }


  return (
    <SettingsContext.Provider value={state}>{props.children}</SettingsContext.Provider>
  )
}

export default SettingsProvider;