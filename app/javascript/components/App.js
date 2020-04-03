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
      delete_success: false,
      editable: null
    }
    this.getApartments()
    // this.handleDelete = this.handleDelete.bind(this),
    // this.deleteApartment = this.deleteApartment.bind(this)

  }

  // activate get apartments after everything loads
  componentDidMount(){
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

  // editApartment = (id, attrs) => {
  //   console.log("editing", id, attrs) 
  // }

  handleEdit = (id) => {
    if(this.state.editable == id){
      this.setState({ editable: null })
      let street = this.street.value
      let city = this.city.value
      // let state = this.states.value
      // let postal_code = this.postal_code.value
      // let country = this.country.value
      let apartment = { street: street, city: city}
      this.handleUpdate(apartment, id)
    }else{
    this.setState({
      editable: id
    })}
  }

  handleUpdate = (apartment, id) => {
    fetch(`/apartments/${id}`,
    {
      method: 'PUT',
      body: JSON.stringify({apartment: apartment}),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
        this.setState({ success: true })
        return this.props.getApartments()
      })
  }



  handleDelete = (id) => {
    fetch(`/apartments/${id}`, {
      method: 'DELETE',
       headers: {
         'Content-Type': 'application/json'
         }
       }
     ).then((response) => {
       if(response.ok){
         alert("this apartment is deleted")
         this.setState({ delete_success: true })
         return this.getApartments()
         console.log("delete attempt!")
       }
     })
    }


  render () {


    const {
      logged_in,
      sign_in_route,
      sign_out_route,
      apartment_route
    } = this.props

    // destructure
    const{ apartments, error, apts } = this.state 


    console.log("App.js", apartments)

    return (
      <Router >
        <div>
        <Header logged_in={logged_in} sign_in_route={sign_in_route} sign_out_route={sign_out_route}/>
        <Link to="/new-apartment" >New Apartment</Link>

        {/* {logged_in &&
          <div>
            <a href={sign_out_route}>Sign Out</a>
          </div>
        }

        {!logged_in &&
          <div>
            <a href={sign_in_route}>Sign In</a>
          </div>
        }         */}

       
          <Route path="/new-apartment" render={ (props) => {
                  return(
                    <NewApartment {...props} onSubmit={this.createApartment} /> 
                    )}} />
          <Route exact path="/" render={ (props) => <AptIndex apartments={this.state.apartments}  /> } />
          {/* <Route exact path="/apartments" render= {this.state.apts} /> */}
          <Route exact path="/apts/:id" render={ (props) => <AptShow {...props} apts={ apartments } handleDelete={this.handleDelete}/> }/>
          {/* <Route path= "/apts/:id/edit" render={ (props) => {
                  return(
                    <EditApartment

                      // {...props}
                      // onSubmit={this.editApartment}
                    /> )
                  }} /> */}

            <Route
            exact path="/apts/:id/edit"
            render={ (props) => <EditApartment
              apartments={ this.state.apartments }
              getApartments={ this.getApartments }
          /> } />

        </div>
      </Router>


    );
  }
}

export default App
