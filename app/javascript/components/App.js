import React from "react"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Nav, NavItem, NavLink } from 'reactstrap'
import style from '../../assets/stylesheets/style.css'

import Header from './components/Header'
import AptIndex from './pages/AptIndex'
import AptShow from './pages/AptShow'
import apts from './pages/apts'
import Login from './pages/Login'


class App extends React.Component {
  constructor(){
    super()
    this.state = {
      apts: apts,
    }
  }

  render () {
    const {
      logged_in,
      sign_in_route,
      sign_out_route,
      new_apt_route
    } = this.props

    return (
      <Router >
        <div>
        <Header/>
        <a href={new_apt_route}>Add New</a>


        {logged_in &&
          <div>
            <a href={sign_out_route}>Sign Out</a>
          </div>
        }

        {!logged_in &&
          <div>
            <a href={sign_in_route}>Sign In</a>
          </div>
        }        

       

          <Route exact path="/" render={ (props) => <AptIndex apts={ this.state.apts } /> } />
          <Route exact path="/apt/:id" render={ (props) => <AptShow {...props} apts={ this.state.apts }/> }/>
        </div>
      </Router>


    );
  }
}

export default App
