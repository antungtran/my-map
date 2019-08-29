import React, {Component} from 'react';
import './App.css';

import MapPanel from './Components/MapPanel.js';
import SearchPanel from './Components/SearchPanel.js';

class App extends Component {
  render() {
    return <div className="App">
              <MapPanel/>
              <SearchPanel/>
            </div>;
  };
}

export default App;
