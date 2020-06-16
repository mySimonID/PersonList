import React from 'react';
import './App.css';

import PersonList from './components/PersonList'
import PersonInput from './components/PersonInput'

//
// Simple API call to data source to show a list of people
// Uses Axios.
// npx create-react-app personlist
// cd personlist
// npm i axios
// https://jsonplaceholder.typicode.com/users
//

function App() {
  return (
    <div className="App">
      <PersonInput />
      <PersonList />
    </div>
  );
}

export default App;
