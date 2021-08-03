import React, { useState } from "react";
import {
  Card,
  Button,
  ListGroup,
  ListGroupItem,
  Modal,
  Form,
  Row,
  Col,
} from "react-bootstrap";
import { AlertsContainer } from "../Containers/AlertsContainer";

export const GameCards = ({
  user,
  title,
  thumb,
  price,
  cheapestID,
  gameID,
  loggedin,
}) => {
  const dealLink =
    "https://www.cheapshark.com/redirect?dealID={" + cheapestID + "}";
  const [show, setShow] = useState(false);
  const [alertName, setAlertName] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    if (e.target.name === "alertName") setAlertName(e.target.value);
    if (e.target.name === "maxPrice") setMaxPrice(e.target.value);
  };

  const handleSubmit = (e) => {         // Create alert and game, and makes assoc. in local DB
    e.preventDefault();
    const gameObj = {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        title: title,
        game_code: gameID,
        alerts: [
          {
            name: alertName,
            title: title,
            price: maxPrice,
            user_id: user.id,
          },
        ],
      }),
    };
    fetch("/add_game", gameObj)
      .then((res) => res.json())
      .then((game) => {
        console.log("Alert and game saved = ", game);
      }
      );
  };

  return (                                // Game card and create alert model
    <div>
      <Card style={{ width: "18rem", height: "25rem" }}>
        <Card.Img
          variant="top"
          src={thumb}
          style={{ height: "10rem", objectFit: "cover" }}
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>
            <h5>Current Deal: ${price}</h5>
          </ListGroupItem>
        </ListGroup>
        {loggedin ? (
          <Button variant="primary" onClick={handleShow}>
            Create Alert
          </Button>
        ) : (
          <>
            {" "}
            <br></br> <h4>Login to create alerts</h4>{" "}
          </>
        )}
        <Card.Body>
          <Card.Link onClick={() => window.open(dealLink)}>Link to Deal</Card.Link>
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
                  <Form.Control
                    placeholder="Alert Name"
                    onChange={handleChange}
                    name="alertName"
                    value={alertName}
                  />
                </Col>
                <Col>
                  <Form.Control
                    placeholder="Max Price"
                    onChange={handleChange}
                    name="maxPrice"
                    value={maxPrice}
                  />
                </Col>
                <Col>
                  <Button variant="primary" type="submit" onClick={handleClose}>
                    Create Alert
                  </Button>
                </Col>
              </Row>
            </Form>
            <AlertsContainer user={user} title={title}></AlertsContainer>
          </Modal.Body>
        </Modal>
      </>
      <br></br>
    </div>
  );
};