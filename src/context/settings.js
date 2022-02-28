import React, { useState } from "react";

export const SettingsContext = React.createContext();

function SettingsProvider(props) {

  const [showComplete, setShowComplete] = useState(false);
  const [displayMax, setDisplayMax] = useState(2);
  // const [defaultSort, setDefaultSort] = useState('status');

  function toggleShowComplete() {
    setShowComplete(showComplete === false ? true : false);
  }

  const state = {
    showComplete,
    displayMax,
    toggleShowComplete,
    setDisplayMax
  }

  return (
    <SettingsContext.Provider value={state}>{props.children}</SettingsContext.Provider>
  )
}

export default SettingsProvider;