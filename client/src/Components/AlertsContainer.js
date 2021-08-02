import React, {useEffect, useState} from 'react'
import { Alerts } from './Alerts'
import { NewAlertForm } from './NewAlertForm'


export const AlertsContainer = ({ user, title }) => {
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
            return alerts.map(alert => <Alerts name={alert.name} title={alert.title} editAlert={editAlert}
                price={alert.price} alertID={alert.id} deleteAlert={deleteAlert} />)
         } 
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

    const editAlert = () => {}


    return (
        <div>
            <hr></hr>
            <br></br>
             {alerts.length === 0 ? <h1>No Active Alerts</h1> : 
                <> 
                <h2>Your Alerts</h2>
                {renderAlerts()}
                </>}
        </div>
    )
}
