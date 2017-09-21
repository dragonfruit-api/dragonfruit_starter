import React from 'react';
import {RestForm, Forms} from 'react-at-rest';

module.exports = class HiddenInput extends React.Component

  render() {
    return (<Forms.TextInput {...this.props} inputType='hidden' />);
  }
    
