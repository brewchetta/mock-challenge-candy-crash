import React from 'react'

function NewCandyForm() {

  return (
      <form>

        <h3>Add A Candy</h3>

        <label for="name">Name: </label>
        <input type="text" name="name" />

        <label for="rating">Rating: </label>
        <input type="text" name="rating" />

        <input type="submit" name="submit" value="Add Candy" />

      </form>
  )

}

export default NewCandyForm
