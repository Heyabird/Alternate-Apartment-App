import React from "react"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Nav, NavItem, NavLink } from 'reactstrap'
import style from '../../assets/stylesheets/style.css'

import Header from './components/Header'
import AptIndex from './pages/AptIndex'
import AptShow from './pages/AptShow'
import Login from './pages/Login'
import NewApartment from './pages/NewApartment'
import EditApartment from './pages/EditApartment'

// Importing Mock Data:
// import mock_apartments from './pages/apts'
// import apartments from '/apartments'


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      // ap: mock_apartments,
      apartments: [],
      error: null,
    }
    this.getApartments()
  }

  // methods 

  getApartments = () => {
    fetch("/apartments")
    .then( response => {
      return response.json()
    })
    .then( apartments => {
      this.setState({apartments})
    })
  }

  createApartment = (attrs) =>{
    return fetch("/apartments", {
      method: 'POST',
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({apartment: attrs})
    })
    .then(response => {
      if(response.status === 201){
        this.getApartments()
      }
    })
  }

  editApartment = (id, attrs) => {
    console.log("editing", id, attrs) 
    
  }

  render () {


    const {
      logged_in,
      sign_in_route,
      sign_out_route,
    } = this.props

    // destructure
    const{ apartments, error, apts } = this.state 


    console.log("App.js", apartments)

    return (
      <Router >
        <div>
        <Header/>
        <Link to="/new-apartment" >New Apartment</Link>

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

       
          <Route path="/new-apartment" render={ (props) => {
                  return(
                    <NewApartment {...props} onSubmit={this.createApartment} /> 
                    )}} />
          <Route exact path="/" render={ (props) => <AptIndex apartments={this.state.apartments}  /> } />
          {/* <Route exact path="/apartments" render= {this.state.apts} /> */}
          <Route exact path="/apt/:id" render={ (props) => <AptShow {...props} apts={ apartments }/> }/>
          <Route path= "/edit-apartment/:id" render={ (props) => {
                  return(
                    <EditApartment
                      {...props}
                      onSubmit={this.editApartment}
                    /> )
                  }} />

        </div>
      </Router>


    );
  }
}

export default App
