import React, {Component} from "react"
import { ListGroup, Button }
 from 'reactstrap'; 
import apts from './apts'
import {Link, Route, BrowserRouter as Router, Switch} from "react-router-dom"
import AptShow from "./AptShow"
import TurtleShell from './turtleshell.jpg'

class AptIndex extends Component{ 
    render(){
        const {
            apts,
            new_apt_route
          } = this.props

          return(
                <>
                    
                    <div id="list">
                        {apts.map((apt, index) => {
                            return(
                            <ListGroup id="item" key={ index }>
                                <Link to={`/apt/${apt.id}`}><h4 id= "name"> { apt.name }</h4></Link>
                                <br/>
                                <img src={TurtleShell}/>
                                <br/>
                                <small>Address: { apt.street }  </small>
                                <small>Contact: { apt.manager_name } </small>
                            </ListGroup>
                            )
                        })}
                    </div>
                    {/* <>
                    <div>        
                        <br/>
                        <img src={TurtleShell}/>
                        <h6>Address: 7556 Charmant Dr  </h6>
                        <h6>Contact: Heya Kwon </h6>
                    </div>
                    <div>        
                        <br/>
                        <img src={TurtleShell}/>
                        <h6>Address: 7556 Charmant Dr  </h6>
                        <h6>Contact: Heya Kwon </h6>
                    </div>
                </> */}
                </>
          )}}

export default AptIndex