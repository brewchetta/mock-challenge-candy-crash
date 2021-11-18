import React from 'react'

function CandyCard({candy}) {
  return (
    <div className="candy-card">

      <h3>{candy.name}</h3>

      <img src={candy.img_url} alt="name goes here" />

      <h4>Rating: {candy.rating}</h4>

      <button type="button">{false ? "Unlike" : "Like"}</button>

    </div>
  )
}

export default CandyCard
