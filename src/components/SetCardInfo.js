import React from 'react'

const SetCardInfo = ({ card }) => {
  return (
    <div>
      <h3>{card.name}</h3>
      <img src={card.images.small} alt={card.name}/>
    </div>
  )
}

export default SetCardInfo