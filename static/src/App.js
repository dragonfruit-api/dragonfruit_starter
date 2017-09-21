import React from 'react';
import { DeliveryService, Store } from 'react-at-rest';

import TreeForm from './TreeForm';
import logo from './logo.svg';
import './App.css';

class App extends DeliveryService {
  constructor(props) {
    super(props);

    // create a store for accessing the /contacts API.
    this.TreeStore = new Store('trees');

    this.TreeStore.parseAll = (data) => {
      console.log('parsing all:', data);
      return {
        meta: data.meta,
        trees: data.results,
      };
    };

    // bind our event handlers
    // this.handleEditContact = this.handleEditContact.bind(this);
    // this.handleEditComplete = this.handleEditComplete.bind(this);
  }

  renderTrees() {
    console.log(this.state);
    if (typeof this.state.trees === 'undefined') {
      return [];
    }
    const trees = this.state.trees.map(tree =>
      (<div key={tree.id}>
        <ul>
          <li > {tree.bark} </li>
        </ul>
      </div>),
    );
    return trees;
  }

  bindResources() {
    // subscribe to all Contacts via the ContactStore
    this.subscribeAll(this.TreeStore);
  }

  render() {
    return (
      <div>
        <div className="App">
          {this.renderTrees()}
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
        <div>
          <TreeForm
            store={this.TreeStore}
            model={{}}
          />
        </div>
      </div>
    );
  }
}

export default App;
