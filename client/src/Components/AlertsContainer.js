import React, {useEffect, useState} from 'react'
import { Alerts } from './Alerts'
import { NewAlertForm } from './NewAlertForm'


export const AlertsContainer = ({ user }) => {
    const [alerts, setAlerts] = useState([])
    
    useEffect(() => fetchAlerts(), [])
    
    const fetchAlerts = () => {
        fetch("users/" + user.id + "/alerts")
            .then((res) => res.json())
            .then((res) => setAlerts(res))
            .catch((err) => console.log("error = ", err))
    }

    const renderAlerts = () => {
        if (!!alerts) { 
            return alerts.map(alert => <Alerts name={alert.name} 
                price={alert.price} alertID={alert.id} deleteAlert={deleteAlert} />)
         } else { 
        console.log("alerts =", alerts)}
    }

    const deleteAlert = (alertID) => {
        const delObj = {
            method: "DELETE"
        }
        fetch("alerts/" + alertID, delObj)
        .then((res) => res.json())
        .then((res) => {
            console.log(res)
            window.location.reload()
        })
        .catch((err) => console.log("delete err = ", err))
    }

    return (
        <div>
            {/* <NewAlertForm /> */}
            <hr></hr>
            <br></br>
             {alerts.length === 0 ? <h1>No Alerts Found</h1> : 
                <> 
                <h2>Your Alerts</h2>
                {renderAlerts()}
                </>}
        </div>
    )
}
