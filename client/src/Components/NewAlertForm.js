import React, { useState } from 'react'
import { Button, Form, Row, Col } from 'react-bootstrap'

export const NewAlertForm = () => {
    const [alert, setAlert] = useState("")
    const [price, setPrice] = useState("")
    const [game, setGame] = useState("")
    const [gameID, setGameID] = useState("")

    const handleChange = (e) => {
        if (e.target.name === "alert") setAlert(e.target.value)
        if (e.target.name === "game") setGame(e.target.value)
        if (e.target.name === "price") setPrice(e.target.value)
    }

    const handleSubmit = (e) => {
        console.log("SUBMITTED!!!")
        e.preventDefault()
    const createObj = {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            name: "testing",
            price: 44,
            game_id: 99
            }),
        }
        fetch("/create", createObj)
            .then((res) => res.json())
            .then((res) => {
                console.log(res)
            })
        }

    return (
        <div>
            <h2>Update Alert</h2>
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col>
                    <Form.Control placeholder="Game Title" onChange={handleChange} name="game" value={game} />
                    </Col>
                    <Col>
                    <Form.Control placeholder="Alert Name" onChange={handleChange} name="alert" value={alert} />
                    </Col>
                    <Col>
                    <Form.Control placeholder="Max Price" onChange={handleChange} name="price" value={price} />
                    </Col>
                    <Col>
                    <Button variant='primary' type='submit'>Create Alert</Button>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}
