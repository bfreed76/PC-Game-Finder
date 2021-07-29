
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom'
import { Home } from './Components/Home'
import { Alerts } from './Components/Alerts'
import { Deals } from './Components/Deals'
import { Login } from './Components/Login'
import { Register } from './Components/Register'
import { Profile } from './Components/Profile'
import { NoMatch } from './Components/NoMatch'
import { Navigation } from './Components/Navigation'
import React, { useState, useEffect } from 'react'
import { Jumbotron, Button, Container } from 'react-bootstrap'
import './App.css'

function App() {
  const [user, setUser] = useState({})
  const [loggedin, setLoggedin] = useState(false)
  let history = useHistory()

  useEffect(() => {  //matches user in system(if one) with session user, passes user info
    findMe()
  }, [])

  const findMe = () => {    
    fetch("/me")
      .then((res) => res.json())
      .then((data) => {
        console.log("current user: ", data)
        if (!data.error) {
          setUser(data)
          setLoggedin(true)
          // history.push("/")
        }
      }
    )
  }

   const handleLogout = (e) => {
     const delObj = {
       method: "DELETE"
      }
      fetch("/logout", delObj)
      .then((res) => res.json())
      .then((res) => {
        setLoggedin(false)
        setUser({})
        console.log(res)
      })
      .catch((err) => console.log("error =", err))
   }

  return (
      <Router>
        <div className="App">
          <div className="container">
              <Navigation loggedin={loggedin} handleLogout={handleLogout}/>
              <Switch>
                <Route exact path ="/" component={Home} />
                <Route exact path ="/alerts" component={Alerts} />
                <Route exact path ="/deals" component={Deals} />
                <Route exact path ="/login">
                  <Login setUser={setUser} setLoggedIn={setLoggedin} />
                 </Route>
                <Route exact path ="/register">
                  <Register setUser={setUser} setLoggedin={setLoggedin} />  
                 </Route>
                <Route exact path ="/profile" findMe={findMe} setLoggedin>
                  <Profile />
                  </Route>
                <Route component={NoMatch} />
              </Switch>
          </div>
        </div>
      </Router>
  );
}

export default App;
