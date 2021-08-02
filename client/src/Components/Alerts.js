import React from 'react'
import { Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap'

export const Alerts = ({ name, price, deleteAlert, alertID, title, editAlert }) => {
    return (
        <div>

            <Card style={{margin: "auto", width: "50%"}}>
            <Card.Body>
                <Card.Title>Alert Name: {name}</Card.Title>
            <ListGroup className="list-group-flush">
                <ListGroupItem>Game Title: {title}</ListGroupItem>
                <ListGroupItem>Maximum Price: ${price}.00</ListGroupItem>
                <br></br>
                <div style={{display: "inline-block"}}>
                    <Button variant="primary" onClick={() => deleteAlert(alertID)} style={{margin: "1%", width: "30%"}}>Delete</Button>
                    <Button variant="secondary" onClick={() => editAlert(editAlert)} style={{margin: "auto", width: "30%"}}>Edit</Button>
                </div>
            </ListGroup>
            <hr></hr>
            </Card.Body>
            </Card>
            <br></br>

        </div>
    )
}
