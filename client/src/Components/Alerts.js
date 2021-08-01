import React from 'react'
import { Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap'

export const Alerts = ({ name, price, deleteAlert, alertID }) => {
    return (
        <div>
            {/* <h3>Alert Name: {name}, Price: {price}</h3>  */}
            {/* <Card className="text-center" style={{margin: "auto", width: "50%"}}>
            <Card.Header>Your Alert</Card.Header>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                Maximum Price: ${price}.00
                </Card.Text>
            </Card.Body>
            </Card> */}

            <Card style={{margin: "auto", width: "50%"}}>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
            <ListGroup className="list-group-flush">
                <ListGroupItem>Maximum Price: ${price}.00</ListGroupItem>
                <Button variant="primary" onClick={() => deleteAlert(alertID)}>Delete</Button>
            </ListGroup>
            <Card.Footer className="text-muted">4 days ago</Card.Footer>
            </Card.Body>
            </Card>

        </div>
    )
}
