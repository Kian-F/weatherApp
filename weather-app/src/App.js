import React from 'react';
import './App.css';
import SearchForm from './components/SearchForm';
import Weather from './components/Weather';

function App() {
  return (
    <div className="App">
    <Weather/>  
    <SearchForm/>
    </div>
  );
}

export default App;
