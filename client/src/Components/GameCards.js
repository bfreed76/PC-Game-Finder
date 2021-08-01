import React, { useState, useEffect } from 'react'
import { Card, Button, ListGroup, ListGroupItem } from 'react-bootstrap'
import { Profile } from './Profile'


export const GameCards = ({ gameID, title, thumb, price, cheapestID }) => {
    const [addInfo, setAddInfo] = useState({})
    const dealLink = "https://www.cheapshark.com/redirect?dealID={" + cheapestID + "}"


    useEffect(() => { 
        fetchAdditionalInfo()
      }, [])

    const fetchAdditionalInfo = () => {
            fetch("https://www.cheapshark.com/api/1.0/deals?id=" + cheapestID)
            .then((res) => res.json())
            .then((res) => console.log(res))
            .then((game) => setAddInfo(game))
            .catch((err) => console.log("error =", err))
         } 

    return (

        <div>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={thumb} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>Current Lowest Price: {price}</ListGroupItem>
                {/* {addInfo.gameInfo.steamRatingText ? <ListGroupItem>Cheapest Price Ever: {addInfo.gameInfo.steamRatingText} </ListGroupItem> : <></>} */}
            </ListGroup>
            <Card.Body>
                <Card.Link href={dealLink} >Link to Deal</Card.Link>
            </Card.Body>
            </Card>
            <br></br>
        </div>
    )
}