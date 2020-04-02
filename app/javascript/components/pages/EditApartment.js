import React from "react"
import PropTypes from "prop-types"
class EditApartment extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      apartmentId: null,
      apartmentAttrs: {},
      edit: false
    }
  }
  componentDidUpdate(prevProps){
    if(prevProps.match.params.id != this.props.match.params.id){
      this.getApartment()
    }
  }
  
  getApartment(){
    //fetch apartment from show method
  }

  
  
  render () {
        const apts_route = this.props
    return (
      <>
        <a href={apts_route} id="button">Back Home</a>

      </>
    );
  }
}

export default EditApartment