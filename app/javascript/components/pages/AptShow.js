import React, { Component } from 'react'
import {ListGroup, Button} from 'reactstrap';
import {Link, Route, Switch, BrowserRouter as Router} from "react-router-dom"



class AptShow extends Component {
    
    render() {
        console.log("SHOW PROPS", this.props.apts) //returns empty array - WHY
        const {id} = this.props.match.params
        const apt = this.props.apts.find((v) => v.id === parseInt(id))
        const apts_route = this.props
        console.log(apt)
    return (
        <>
        {/* "Poor man's if statement" */}
        {apt &&
        <div>
            <a href={apts_route} id="button">Back Home</a>
            <div>
                <ListGroup>
                    <br/>
                    <br/>
                    <br/>
                <div> 
                    <h4>{apt.name}</h4>
                    <small>Address:  </small>
                    <small>{ apt.street }, { apt.city }, {apt.state}, {apt.country}</small>
                    <br/>
                    <small>Contact  </small>
                    <small>{ apt.manager_name }</small>
                    <small> at { apt.manager_contact } </small>
                    <br/>
                    <small>Contact hours:{ apt.manager_contact_hours}</small>
                    <br/>
                    <Link to={`/edit-apartment/${apt.id}`}>Edit</Link>
                    <Button onClick={() => this.props.handleDelete(apt.id)} >Delete</Button>




                </div>
                </ListGroup>
                <br/>
                <br/>
            </div>
        </div>
        }
        </>
    )
    }
}

export default AptShow