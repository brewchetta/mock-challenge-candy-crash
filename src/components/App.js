import React from 'react'
import '../App.css';
import Header from './Header'
import CandySearch from './CandySearch'
import NewCandyForm from './NewCandyForm'
import CandyList from './CandyList'
import FullMoon from './FullMoon'

function App() {
  return (
    <div className="App">
      <FullMoon />
      <Header />
      <CandySearch />
      <NewCandyForm />
      <CandyList />
    </div>
  );
}

export default App;
