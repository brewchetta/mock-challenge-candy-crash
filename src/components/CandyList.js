import React from 'react'
import CandyCard from './CandyCard'

function CandyList({candies}) {
  return (

    <div id="candy-list-container">

      {candies.map(c => <CandyCard key={c.id} candy={c} />)}

    </div>

  )
}

export default CandyList
