import React, {Component} from "react"
import { ListGroup, Button }
 from 'reactstrap'; 
import {Link, Route, BrowserRouter as Router, Switch} from "react-router-dom"
import AptShow from "./AptShow"
import TurtleShell from './turtleshell.jpg'
import Pineapple from './pineapple.jpg'

class AptIndex extends Component{ 
    render(){

        console.log(this.props.apartments)

        const {
            apartments,
            new_apt_route
          } = this.props

          return(
                <>
                {apartments &&
                    <div id="list">
                        {apartments.map((apt, index) => {
                            return(
                            <ListGroup id="item" key={ index }>
                                <a href={`/apt/${apt.id}`}>{apt.city}<h4 id= "name"> { apt.street }</h4></a>
                                <br/>
                                <img src={ TurtleShell }/>
                                <br/>
                                <small>{ apt.city }</small>
                            </ListGroup>
                            )
                        })}
                    </div>
                     }
                </>
          )}}

export default AptIndex