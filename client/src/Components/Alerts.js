import React from 'react'
import { Button, Card } from 'react-bootstrap'

export const Alerts = ({ name, price, deleteAlert, alertID }) => {
    return (
        <div>
            {/* <h3>Alert Name: {name}, Price: {price}</h3>  */}
            <Card className="text-center">
            <Card.Header>Your Alert</Card.Header>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                Maximum Price: ${price}.00
                </Card.Text>
                <Button variant="primary" onClick={() => deleteAlert(alertID)}>Delete</Button>
            </Card.Body>
            <Card.Footer className="text-muted">4 days ago</Card.Footer>
            </Card>
        </div>
    )
}
