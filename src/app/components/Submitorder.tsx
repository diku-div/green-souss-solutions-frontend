import React from 'react'
type props = {
  orderid?: number;
}

const Submitorder = () => {
  return (
    <div>
      <label htmlFor="email"> email </label>
      <input type="email" />
      <label htmlFor="idorder"> Id Order</label>
      <input type="number" />
    </div>
  )
}

export default Submitorder
