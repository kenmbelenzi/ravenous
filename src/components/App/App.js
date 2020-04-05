import React, {Component} from 'react';
import logo from '../../logo.svg';
import './App.css';
import SearchBar from "../SearchBar/SearchBar";
import BusinessList from "../BusnessList/BusinessList";

class App extends Component {
  render() {


    return (
        <div className="App">
          <h1>ravenous</h1>
          <SearchBar/>

        </div>
    );
  }
}
export default App;
