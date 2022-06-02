import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate() // navigate is now a function that accepts a route to navigate to

  const handleSubmit = (e) => {
    e.preventDefault()

    alert("Thank you for signing up for emails! You'll never stop hearing from us no matter how hard you try.")
    navigate('/cards')
  }

  return (
    <div>
      <h3>About Us</h3>
      <p>
        This application is used to give you the ability to see all the pokemon cards.
        In fact, you can see them by following <Link to="/cards">this link!</Link>
      </p>
      <h4>Sign up for more info</h4>
      <form onSubmit={handleSubmit}>
        <label>
          Email: 
          <input type="text" name="email" id="email" />
        </label>
        <input type="submit" value="Send me details!" />
      </form>
    </div>
  )
}

export default About