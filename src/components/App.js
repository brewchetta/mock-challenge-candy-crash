import React, { useEffect, useState } from 'react'
import '../App.css';
import Header from './Header'
import CandySearch from './CandySearch'
import NewCandyForm from './NewCandyForm'
import CandyList from './CandyList'
import FullMoon from './FullMoon'

function App() {

  const [candies, setCandies] = useState([])

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/candies`)
    .then(res => res.json())
    .then(data => {
      console.log('Fetched data: ', data)
      setCandies(data)
    })
  }, [])

  return (
    <div className="App">
      <FullMoon />
      <Header />
      <CandySearch />
      <NewCandyForm />
      <CandyList candies={candies} />
    </div>
  );
}

export default App;
