import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import SetCardInfo from './SetCardInfo'

const CardsInSet = () => {
  const [cards, setCards] = useState([])
  const [card, setCard] = useState()

  const params = useParams()
  const { setId } = params 
  const cardId = params['*']



  useEffect(() => {
    axios.get(`https://api.pokemontcg.io/v2/cards?q=set.id:${setId}`)
      .then((response) => setCards(response.data.data))
  }, [setId])

  useEffect(() => {
    setCard(cards.find((c) => c.id === cardId))
  }, [cards, cardId])


  return (
    <>
      <Col as='ul'>
        {
          cards.map((card) => <li key={card.id}><Link to={`/cards/sets/${setId}/${card.id}`}>{card.name}</Link></li>)
        }
      </Col>
      <Col>
        {
          card && <SetCardInfo card={card} />
        }
      </Col>
    </>
  )
}

export default CardsInSet