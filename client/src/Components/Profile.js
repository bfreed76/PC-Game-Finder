import React, { useEffect, useState } from 'react'
import { AlertsContainer } from './AlertsContainer'
import { Alerts } from './Alerts'
import { ListGroup } from 'react-bootstrap'

export const Profile = ({ user, setLoggedin }) => {

return (
    <div>
        <h1>Profile Info</h1>
        <ListGroup variant="flush" style={{ width: "50%", margin: "auto" }}>
        <ListGroup.Item>email: {user.email}</ListGroup.Item>
        </ListGroup>
        <AlertsContainer user={user} />
    </div>
    )
}
