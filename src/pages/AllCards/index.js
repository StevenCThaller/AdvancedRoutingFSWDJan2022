import axios from 'axios'
import { useState, useEffect } from 'react'
import { Col, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const AllCards = () => {
  const [allCards, setAllCards] = useState([])

  useEffect(() => {
    axios.get('https://api.pokemontcg.io/v2/cards')
      .then(response => setAllCards(response.data.data))
      .catch(err => console.log("Something went wrong"))
  }, [])

  console.log(allCards)


  return (
    <Container>
      <Col as={'ul'}>
      {
        allCards.map((card) => <li><Link to={`/cards/all/${card.id}`}>{card.name}</Link></li>)
      }
      </Col>
      <Col>
        
      </Col>
    </Container>
  )
}

export default AllCards