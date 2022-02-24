import React, {useContext} from "react";
import {SettingsContext} from '../../context/settings';
import Button from '@mui/material/Button';

function SettingsForm(props){
  const settings = useContext(SettingsContext)
  return (
    <>
      <h1>SETTINGS FORM</h1>
      <Button onClick={settings.toggleShowComplete}>{settings.showComplete === false ? 'Show Completed Tasks' : 'Hide Completed Tasks'}</Button>
    </>

  )
}

export default SettingsForm;
