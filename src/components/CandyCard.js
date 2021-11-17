import React from 'react'

const defaultImage = "https://www.candywarehouse.com/core/media/media.nl?id=111668&c=322133&h=9JsjKPGDMmrYKxtTsBf9bBU5AVa2bAGqnWUkshBEbEY9zwEF&resizeid=103&resizeh=320&resizew=320"

function CandyCard() {
  return (
    <div className="candy-card">

      <h3>name goes here</h3>

      <img src={defaultImage} alt="name goes here" />

      <h4>Rating: rating goes here</h4>

      <button type="button">{false ? "Unlike" : "Like"}</button>

    </div>
  )
}

export default CandyCard