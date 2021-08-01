
import { BrowserRouter as Router, Route, Switch, useHistory, Redirect, withRouter } from 'react-router-dom'
import { Home } from './Components/Home'
import { AlertsContainer } from './Components/AlertsContainer'
import { DealsContainer } from './Components/DealsContainer'
import { Login } from './Components/Login'
import { Register } from './Components/Register'
import { Profile } from './Components/Profile'
import { NoMatch } from './Components/NoMatch'
import { Navigation } from './Components/Navigation'
import { GameCards } from './Components/GameCards'
import { GamesContainer } from './Components/GamesContainer'
import React, { useState, useEffect } from 'react'
import './App.css'

function App( props ) {
  const [user, setUser] = useState({})
  const [loggedin, setLoggedin] = useState(false)

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
            }
          }  
        )
      .catch((err) => console.log("error =", err))
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
                <Route exact path ="/alerts">
                {loggedin ? <AlertsContainer user={user} /> 
                  : <Login setUser={setUser} setLoggedIn={setLoggedin} /> }
                  </Route>
                <Route exact path ="/deals">
                  <DealsContainer user={user} />
                </Route> 
                <Route exact path ="/login">
                  <Login setUser={setUser} setLoggedIn={setLoggedin} />
                </Route>
                <Route exact path ="/register">
                  <Register setUser={setUser} setLoggedin={setLoggedin} />  
                </Route>
                <Route exact path ="/profile"> 
                  {loggedin ? <Profile user={user} setLoggedin={setLoggedin} /> 
                        : <Login setUser={setUser} setLoggedIn={setLoggedin} /> }
                </Route> 
                <Route component={NoMatch} />
              </Switch>
          </div>
        </div>
      </Router>
  );
}

export default App;
