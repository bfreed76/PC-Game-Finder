import React, { useState, useEffect } from 'react'
import { Card, Button, ListGroup, ListGroupItem } from 'react-bootstrap'
import { Profile } from './Profile'


export const GameCards = ({ gameID, title, thumb, price, cheapestID }) => {
    const [addInfo, setAddInfo] = useState({})
    // const { steamRatingText, steamRatingCount, metacriticsScore, releaseDate } = addInfo.gameInfo.
    const { steamRatingText, steamRatingPercent, steamRatingCount, metacriticScore } = addInfo.gameInfo
    // const { price, date } = addInfo.cheapestPrice

    useEffect(() => { 
        fetchAdditionalInfo()
      }, [])

    const fetchAdditionalInfo = () => {
            fetch("https://www.cheapshark.com/api/1.0/deals?id=" + cheapestID)
            .then((res) => res.json())
            .then((game) => setAddInfo(game))
            .catch((err) => console.log("error =", err))
         } 

    return (

        <div>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={thumb} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                <p> Metacritic Score: {metacriticScore} </p>
                <p> Steam Rating: {steamRatingText}, {steamRatingPercent}, count: {steamRatingCount} </p>
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>Lowest Price: {price}</ListGroupItem>
                <ListGroupItem>Cheapest Price Ever: {addInfo.cheapestPrice.price} </ListGroupItem>
                <ListGroupItem>Cheapest Price Date: {addInfo.cheapestPrice.date}</ListGroupItem>
            </ListGroup>
            <Card.Body>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
            </Card>
        </div>
    )
}