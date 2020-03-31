import React from "react"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Nav, NavItem, NavLink } from 'reactstrap'
import style from './style.css'

import Header from './components/Header'
import AptIndex from './pages/AptIndex'
import AptShow from './pages/AptShow'
import apts from './pages/apts'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      apts: apts,
    }
  }

  render () {
    return (
      <Router>
        <Header/>
        <h1>Hello World!</h1>
        <Nav className="nav-bar">
            <NavItem>
              {/* <NavLink to="/" tag={ Link }>Home</NavLink> */}
            </NavItem>
        </Nav>
          <Route exact path="/" render={ (props) => <AptIndex apts={ this.state.apts } /> } />
          <Route exact path="/apt/:id" render={ (props) => <AptShow {...props} apts={ this.state.apts }/> }/>
      </Router>

      // <link rel="stylesheet" href="styles.css">

    );
  }
}

export default App
