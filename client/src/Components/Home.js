import React from 'react'
import { Jumbotron, Button, Container } from 'react-bootstrap'
import { NavLink, Link } from 'react-router-dom'

export const Home = () => {
    return (
        <Jumbotron >
        <h1>PC GameFinder</h1>
        <p>
            Find the lowest prices for your next PC game! PC Gamefinder searches all over the 
            internet to find you the best deal.
        </p>
        {/* <Link to="/deals"> */}
            <Button href="login">Search Games</Button>
        {/* </Link> */}
        </Jumbotron>
    )
}
