import axios from 'axios'
import { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link, Outlet, useParams, useNavigate } from 'react-router-dom'

const CardSet = () => {
  const [allSets, setAllSets] = useState([])

  const { setId } = useParams()

  const navigate = useNavigate()

  useEffect(() => {
    axios.get('https://api.pokemontcg.io/v2/sets')
      .then(response => setAllSets(response.data.data))
  }, [])

  return (
    <Container className="sets-tool">
      <Row>
        <Col xs={4}>
          <h3 className="col-head">
            Sets 
            {
              setId &&
              <button className="collapse-btn" onClick={() => navigate('/cards/sets')}>&lt;&lt;</button>
            }
          </h3>
          <ul className="sets-col">
          {
            allSets.map((setData) => <li key={setData.id}><Link to={`/cards/sets/${setData.id}`}>{setData.name}</Link></li>)
          }
          </ul>
        </Col>
        <Outlet />
      </Row>
    </Container>
  )
}

export default CardSet