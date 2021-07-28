
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home } from './Components/Home'
import { Alerts } from './Components/Alerts'
  import { Profile } from './Components/Profile'
import { NoMatch } from './Components/NoMatch'
import { Navigation } from './Components/Navigation'
import { Jumbotron, Button, Container } from 'react-bootstrap'
import './App.css'

function App() {
  return (
      <Router>
        <div className="App">
          <div className="container">
              <Navigation />
              <Switch>
                <Route exact path ="/" component={Home} />
                <Route exact path ="/alerts" component={Alerts} />
                <Route exact path ="/deals" component={Deals} />
                <Route exact path ="/signIn" component={SignIn} />
                <Route exact path ="/register" component={Register} />
                <Route exact path ="/profile" component={Profile}/>
                <Route component={NoMatch} />
              </Switch>
          </div>
        </div>
      </Router>
  );
}

export default App;
