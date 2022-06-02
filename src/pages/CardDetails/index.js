import axios from 'axios'
import { Container } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const CardDetails = () => {
  const [card, setCard] = useState(false)
  const [searchId, setSearchId] = useState('')
  
  const { cardId } = useParams() // this will get any route parameters based on the route itself
  const navigate = useNavigate()

  useEffect(() => {
    axios.get(`https://api.pokemontcg.io/v2/cards/${cardId}`)
      .then((response) => {
        setCard(response.data.data)
      })
  }, [cardId])

  const handleSubmit = (e) => {
    e.preventDefault()

    navigate(`/cards/${searchId}`)
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <input type="text" name="searchId" onChange={ (e) => setSearchId(e.target.value) }/>
        <input type="submit" value="Search" />
      </form>
      {
        card ?
        <p>{card.name}</p>
        :
        <p>Loading . . . </p>
      }
    </Container>
  )
}

export default CardDetails