import React, { useState, useEffect } from "react";

export const SettingsContext = React.createContext();

function SettingsProvider(props) {

  // const [displayCompleted, setDisplayCompleted] = useState(false);
  const state = {
    showComplete: false,
    displayMax: 2,
    defaultSort: "status",
  }


  return (
    <SettingsContext.Provider value={state}>{props.children}</SettingsContext.Provider>
  )
}

export default SettingsProvider;