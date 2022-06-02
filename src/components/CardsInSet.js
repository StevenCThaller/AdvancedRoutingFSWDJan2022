import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col } from 'react-bootstrap'
import { Link, useNavigate, useParams } from 'react-router-dom'
import SetCardInfo from './SetCardInfo'

const CardsInSet = () => {
  const [cards, setCards] = useState([])
  const [card, setCard] = useState()

  const params = useParams()
  const { setId } = params 
  const cardId = params['*']

  const navigate = useNavigate()



  useEffect(() => {
    axios.get(`https://api.pokemontcg.io/v2/cards?q=set.id:${setId}`)
      .then((response) => setCards(response.data.data))
  }, [setId])

  useEffect(() => {
    setCard(cards.find((c) => c.id === cardId))
  }, [cards, cardId])


  return (
    <>
      <Col xs={4}>
        <h3 className="col-head">
          Cards 
          {
            cardId !== '' &&
            <button className="collapse-btn" onClick={() => navigate(`/cards/sets/${setId}`)}>&lt;&lt;</button>
          }
        </h3>
        <ul className="sets-col">
          {
            cards.map((card) => <li key={card.id}><Link to={`/cards/sets/${setId}/${card.id}`}>{card.name}</Link></li>)
          }
        </ul>
      </Col>
      <Col xs={4} className="sets-col">
        {
          card && <SetCardInfo card={card} />
        }
      </Col>
    </>
  )
}

export default CardsInSet