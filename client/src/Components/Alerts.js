import React, { useState } from 'react'
import { Button, Card, ListGroup, ListGroupItem, Form, Row, Col } from 'react-bootstrap'
import { NewAlertForm } from './NewAlertForm'

export const Alerts = ({ name, price, deleteAlert, alertID, title, updateAlert }) => {
    const [newName, setNewName] = useState("")
    const [newPrice, setNewPrice] = useState("")

    const handleChange = (e) => {
        if (e.target.name === "newName") setNewName(e.target.value)
        if (e.target.name === "newPrice") setNewPrice(e.target.value)
    }

    const updateAlertT = (e) => {
        e.preventDefault()
        return updateAlert(alertID, newName, newPrice)
    }

    return (
        <div>

            <Card style={{margin: "auto", width: "50%"}}>
            <Card.Body>
                <Card.Title>Alert Name: {name}</Card.Title>
            <ListGroup className="list-group-flush">
                <ListGroupItem>Game Title: {title}</ListGroupItem>
                <ListGroupItem>Maximum Price: ${price}.00</ListGroupItem>
                <br></br>
            </ListGroup>
            <Form onSubmit={updateAlertT}>
                <Row>
                    <Col>
                    <Form.Control placeholder="Name" onChange={handleChange} name="newName" value={newName} />
                    </Col>
                    <Col>
                    <Form.Control placeholder="Price" onChange={handleChange} name="newPrice" value={newPrice} />
                    </Col>
                    <Col>
                    <Button variant='primary' type="submit" style={{margin: "auto", width: "200px"}}>Update</Button>
                    </Col>
                </Row>
            <hr></hr>
                    <Button variant="secondary" type="submit" style={{margin: "auto", width: "200px"}}>Delete</Button>
            </Form>
            </Card.Body>
            </Card>
            <br></br>

        </div>
    )
}
