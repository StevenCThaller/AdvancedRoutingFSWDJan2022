import axios from 'axios'
import { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link, Outlet, Routes, Route, useParams } from 'react-router-dom'
import SetCardInfo from '../../components/SetCardInfo'

const CardSet = () => {
  const [allSets, setAllSets] = useState([])

  useEffect(() => {
    axios.get('https://api.pokemontcg.io/v2/sets')
      .then(response => setAllSets(response.data.data))
  }, [])

  return (
    <Container>
      <Row>
        <Col as="ul">
          {
            allSets.map((setData) => <li key={setData.id}><Link to={`/cards/sets/${setData.id}`}>{setData.name}</Link></li>)
          }
        </Col>
        <Outlet />
      </Row>
    </Container>
  )
}

export default CardSet