import React from 'react'
import { Jumbotron, Button, Container } from 'react-bootstrap'
import { NavLink, Link } from 'react-router-dom'

export const Home = () => {         // Landing page
    return (
        <Jumbotron >
        <h1>PC GameFinder</h1>
        <p>Find the lowest prices for your next PC game! PC Gamefinder searches all over the 
            internet to find you the best deal.</p>
            <Button href="deals">Search Games</Button>
        </Jumbotron>
    )
}
