import React from "react";
import { AlertsContainer } from "./AlertsContainer";
import { ListGroup } from "react-bootstrap";

export const Profile = ({ user }) => {
  return (
    <div>
      <h1>Profile Info</h1>
      <ListGroup variant="flush" style={{ width: "50%", margin: "auto" }}>
        <ListGroup.Item>email: {user.email}</ListGroup.Item>
      </ListGroup>
      <AlertsContainer user={user} />
    </div>
  );
};
