import React, { useState } from 'react';
import {
  Button,
  Checkbox,
  FormLayout,
  TextStyle,
  Page,
  TextField,
} from '@shopify/polaris';

import './styles.css';

const Index = () => {
  const [modalEnable, setModalEnable] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalDescription, setModalDescription] = useState('');

  const [mobileDisableImage, setMobileDisableImage] = useState(false);
  const [mobileDisableText, setMobileDisableText] = useState(false);

  const [desktopDisableMenu, setDesktopDisableMenu] = useState(false);
  const [desktopDisableImage, setDesktopDisableImage] = useState(false);
  const [desktopDisableKeyboard, setDesktopDisableKeyboard] = useState(false);
  const [desktopDisableText, setDesktopDisableText] = useState(false);


  return (
    <Page title="Example app">
      <div className="app">
        <div className="form-container">
          <div className="modal-config">
            <Checkbox
              label="Enable modal"
              checked={modalEnable}
            />
            <TextField
              label="Modal title"
              value={modalTitle}
              multiline={3}
            />
            <TextField
              label="Modal desc"
              value={modalDescription}
              multiline={3}
            />
          </div>

          <div className="devices-config">
            {/* <p>Opções de controle para celular</p> */}
            <TextStyle variation="strong">Good evening, Dominic.</TextStyle>
            <Checkbox
              label="Disable mobile image"
              checked={mobileDisableImage}
              onChange={newChecked => {
                setMobileDisableImage(newChecked);
              }}
            />
            <Checkbox
              label="Disable mobile text"
              checked={mobileDisableText}
              onChange={newChecked => {
                setMobileDisableText(newChecked);
              }}
            />

            <p>Opções de controle para desktop</p>
            <Checkbox
              label="Disable desktop menu"
              checked={desktopDisableMenu}
              onChange={newChecked => {
                setDesktopDisableMenu(newChecked);
              }}
            />
        
            <Checkbox
              label="Disable desktop image"
              checked={desktopDisableImage}
            />
        
            <Checkbox
              label="Disable desktop keyboard"
              checked={desktopDisableKeyboard}
            />
        
            <Checkbox
              label="Disable desktop text"
              checked={desktopDisableText}
            />
          </div>
        </div>
      
        <Button size="large">
          Save
        </Button>
      </div>
    </Page>
  );
} 
  

export default Index;