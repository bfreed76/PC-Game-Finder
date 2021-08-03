import React, { useEffect, useState } from "react";
import { Alerts } from "./Alerts";

export const AlertsContainer = ({ user }) => {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => fetchAlerts());       // Retrieves alerts for logged in user

  const fetchAlerts = () => {
    fetch("users/" + user.id + "/alerts")
      .then((res) => res.json())
      .then((res) => setAlerts(res))
      .catch((err) => console.log("error = ", err));
  };

  const renderAlerts = () => {              // Renders alerts
    if (!!alerts) {
      return alerts.map((alert, id) => (
        <Alerts
          key={id}
          name={alert.name}
          title={alert.title}
          price={alert.price}
          alertID={alert.id}
          deleteAlert={deleteAlert}
          updateAlert={updateAlert}
        />
      ));
    }
  };

  const deleteAlert = (alertID) => {          // Deletes alerts
    console.log("DELETE WORKING");
    const delObj = {
      method: "DELETE",
    };
    fetch("alerts/" + alertID, delObj)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => console.log("delete err = ", err));
  };

  const updateAlert = (alertID, newName, newPrice) => {         // Updates selected alert
    console.log("updateAlert = ", alertID, newName, newPrice);
    const updateObj = {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name: newName,
        price: newPrice,
      }),
    };
    fetch("alerts/" + alertID, updateObj)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => console.log("delete err = ", err));
  };

  return (
    <div>
      <hr></hr>
      <br></br>
      {alerts.length === 0 ? (
        <h1>No Active Alerts</h1>
      ) : (
        <>
          <h2>Your Alerts</h2>
          {renderAlerts()}
        </>
      )}
    </div>
  );
};
