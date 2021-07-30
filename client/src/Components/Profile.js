import React, { useEffect, useState } from 'react'
import { Alerts } from './Alerts'

export const Profile = ({ user, setLoggedin }) => {

return (
    <div>
        <h1>Profile Info</h1>
        <Alerts />
    </div>
    )
}
