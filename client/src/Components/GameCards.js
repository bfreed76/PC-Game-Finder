import React, { useState, useEffect } from "react";
import {
  Card,
  Button,
  ListGroup,
  ListGroupItem,
  Modal,
  Form,
  Row,
  Col,
  Spinner,
} from "react-bootstrap";
import { Alerts, AlertsContainer } from "./AlertsContainer";
import { DealsContainer } from "./DealsContainer";
import { Profile } from "./Profile";

export const GameCards = ({
  createAlert,
  user,
  title,
  thumb,
  price,
  cheapestID,
  gameID,
  loggedin,
}) => {
  const [gameIDfromDB, setGameIDfromDB] = useState("1");
  const dealLink =
    "https://www.cheapshark.com/redirect?dealID={" + cheapestID + "}";
  const [show, setShow] = useState(false);
  const [alertName, setAlertName] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  // const alertLink = "https://www.cheapshark.com/api/1.0/alerts?action=set&email=someone@example.org&gameID=34&price=14.99"

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    if (e.target.name === "alertName") setAlertName(e.target.value);
    if (e.target.name === "maxPrice") setMaxPrice(e.target.value);
  };

  const handleSubmit = (e) => {
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
      });
      .catch(err) => console.log("error =", err);
  };

  return (
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
