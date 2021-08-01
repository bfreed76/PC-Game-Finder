import React, { useState, useEffect } from 'react'
import { Card, Button, ListGroup, ListGroupItem, Modal,  Form, Row, Col } from 'react-bootstrap'
import { Alerts, AlertsContainer } from './AlertsContainer'
import { DealsContainer } from './DealsContainer'
import { Profile } from './Profile'


export const GameCards = ({ createAlert, user, title, thumb, price, cheapestID, gameID }) => {
    const [addInfo, setAddInfo] = useState({})
    const [gameIDfromDB, setgameIDfromDB] = useState("")
    const dealLink = "https://www.cheapshark.com/redirect?dealID={" + cheapestID + "}"
    const alertLink = "https://www.cheapshark.com/api/1.0/alerts?action=set&email=someone@example.org&gameID=34&price=14.99"
    const [show, setShow] = useState(false);
    const [alertName, setAlertName] = useState("")
    const [maxPrice, setMaxPrice] = useState("")

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // useEffect(() => { 
    //     fetchAdditionalInfo()
    //   }, [])

    // const fetchAdditionalInfo = () => {
    //         fetch("https://www.cheapshark.com/api/1.0/deals?id=" + cheapestID)
    //         .then((res) => res.json())
    //         .then((res) => console.log(res))
    //         .then((game) => setAddInfo(game))
    //         .catch((err) => console.log("error =", err))
    //      } 


    const handleChange = (e) => {
        if (e.target.name === "alertName") setAlertName(e.target.value)
        if (e.target.name === "maxPrice") setMaxPrice(e.target.value)
    }



    const handleSubmit = (e) => {
        //? persist game data, persist alert data through user
        e.preventDefault()
        const gameObj = {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                "title": title,
                "game_code": gameID
                }),
            }
        const alertObj = {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                "name": alertName,
                "price": maxPrice,
                "game_id": gameID
                }),
            }
        fetch("/add_game", gameObj)
                .then((res) => res.json())
                .then((res) => {
                    console.log("NEW GAME ID: " + res.id)
                    setgameIDfromDB(res.id)
                    })
                .then(fetch("/add_alert", alertObj)
                        .then((res) => res.json())
                        .then((res) => {
                            console.log(res)
                        }
                        ))
            }


    

    return (

        <div>
            <Card style={{ width: '18rem', height: '25rem'}}>
            <Card.Img variant="top" src={thumb} style={{ height: '10rem', objectFit: "cover" }}/>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>Current Lowest Price: ${price}</ListGroupItem>
                {/* {addInfo.gameInfo.steamRatingText ? <ListGroupItem>Cheapest Price Ever: {addInfo.gameInfo.steamRatingText} </ListGroupItem> : <></>} */}
            </ListGroup>
            <Button variant="primary" onClick={handleShow}>Create Alert</Button>
            <Card.Body>
                <Card.Link href={dealLink}>Link to Deal</Card.Link>
            </Card.Body>
            </Card>

            <>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>New Alert</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {title}
                    <Form onSubmit={handleSubmit}>
                <Row>
                    <Col>
                    <Form.Control placeholder="Alert Name" onChange={handleChange} name="alertName" value={alertName} />
                    </Col>
                    <Col>
                    <Form.Control placeholder="Max Price" onChange={handleChange} name="maxPrice" value={maxPrice} />
                    </Col>
                    <Col>
                    <Button variant='primary' type='submit'>Create Alert</Button>
                    </Col>
                </Row>
            </Form>
                    <AlertsContainer user={user}></AlertsContainer>
                    </Modal.Body>
                </Modal>
            </>
            <br></br>
        </div>
    )
}