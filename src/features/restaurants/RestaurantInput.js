import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { restaurantAdded } from './restaurantsSlice'

function RestaurantInput() {
  const [name, setName] = useState('')
  const dispatch = useDispatch()

  const handleChange = (e) => {
    setName(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(restaurantAdded(name))
    setName('')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input type='text' value={name} onChange={handleChange} />
        </label>
        <input type='submit' value='add restaurant' />
      </form>
    </div>
  )
}

export default RestaurantInput