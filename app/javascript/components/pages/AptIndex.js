import React, {Component} from "react"
import { ListGroup, Button }
 from 'reactstrap'; 
import apts from './apts'
import {Link, Route, BrowserRouter as Router, Switch} from "react-router-dom"
import AptShow from "./AptShow"


class AptIndex extends Component{ 
    render(){
          return(
                <>
                    <div>
                        {this.props.apts.map((apt, index) => {
                            return(
                            <ListGroup key={ index }>
                                <Link to={`/apt/${apt.id}`}><h4 id= "name"> { apt.name }</h4></Link>
                                <br/>
                                {/* <img src={CrazyCat}/> */}
                                <br/>
                                <small>Address: { apt.street }  </small>
                                <br/>
                                <small>Contact: { apt.manager_name } </small>
                            </ListGroup>
                            )
                        })}
                    </div>
                </>
          )}}

export default AptIndex