import React, {useContext} from "react";
import {SettingsContext} from '../../context/settings';
import Button from '@mui/material/Button';
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Switch from "@mui/material/Switch";
import Slider from "@mui/material/Slider";

function SettingsForm(props){
  const settings = useContext(SettingsContext)
  return (
    <>
      <h1>SETTINGS FORM</h1>
      <Button onClick={settings.toggleShowComplete}>{settings.showComplete === false ? 'Show Completed Tasks' : 'Hide Completed Tasks'}</Button>
      <FormGroup>
        <FormControlLabel control={<Slider defaultValue={3} step={1} marks min={1} max={5}/>} label="this" />
        <FormControlLabel control={<Switch defaultChecked />} label="Show Completed ToDo's:"/>
        <Button>Update Settings</Button>
      </FormGroup>
    </>

  )
}

export default SettingsForm;
