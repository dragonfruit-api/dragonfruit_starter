import React from 'react';
import { Forms } from 'react-at-rest';
import RestFormLocal from './RestFormLocal';

class TreeForm extends RestFormLocal {
  render() {
    return (<form onSubmit={this.handleSubmit}>
      <Forms.TextInput {...this.getFieldProps('bark')} />
      <Forms.TextInput {...this.getFieldProps('branches')} />
      <button>Save</button>
    </form>);
  }
}

export default TreeForm;
