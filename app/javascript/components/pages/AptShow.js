import React, { Component } from 'react'
import {ListGroup, Button} from 'reactstrap';
import {Link, Route, Switch, BrowserRouter as Router} from "react-router-dom"



class AptShow extends Component {
    render() {
        console.log("SHOW PROPS", this.props.apts) //returns empty array - WHY
        const {id} = this.props.match.params
        const apt = this.props.apts.find((v) => v.id === parseInt(id))
        console.log(apt)
    return (
        <>
        {/* "if statement" */}
        {/* before apt gets assigned, code will skip apt (falsey) and not run the following codes */}
        {/* apt will eventually get assigned to an object - become truthy */}
        {apt &&
        <div>
            <Link to="/" id="button"><Button>Back Home</Button></Link>
            <div>
                <ListGroup>
                    <br/>
                    <br/>
                    <br/>
                <div> 
                    <h4>{apt.name}</h4>
                    <small>Address: { apt.street }  </small>
                    <br/>
                    <small>Contact: { apt.manager_name } </small>
                </div>
                </ListGroup>
                <br/>
                <br/>
                <Button>Edit</Button> &nbsp;
                <Button>Delete</Button>
            </div>
        </div>
        }
        </>
    )
    }
}

export default AptShow