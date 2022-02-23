import React from "react";

export const SettingsContext = React.createContext();

function SettingsProvider(props) {
  const state = {
    displayCompleted: false,
    displayMax: 2,
    defaultSort: "status",
  }
  return (
    <SettingsContext.Provider value={state}>{props.children}</SettingsContext.Provider>
  )
}

export default SettingsProvider;