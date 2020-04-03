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
        const apartments = this.props
        console.log("apartments", apartments)

        return(
          <>
          { this.props.apartments.map((apartment, index) => {
            

          return (
            <>
              <a href={apts_route} id="button">Back Home</a>

              <tr key={ index }>
                  {(this.state.editable == `${ apartment.id }`)?
                    <th scope="row">
                    <input type='text'
                      ref={input => this.street = input}
                      defaultValue={ apartment.street }/>
                    </th>:
                    <th scope="row">
                      <a href = {`/apartments/${apartment.id}`}>{ apartment.street }</a>
                    </th>}
                  {(this.state.editable == `${ apartment.id }`)?
                    <td><input type='text'
                      ref={input => this.city = input}
                      defaultValue={ apartment.city }/></td>:
                    <td>{ apartment.city }</td>}

                  <td>

                  <button type="button" class="btn btn-info btn-sm"
                    onClick={() => this.handleEdit(`${ apartment.id }`)}>
                    {(this.state.editable == `${ apartment.id }`)? 'Submit' : 'Edit'}</button>
                  </td>
                </tr>
                { this.state.success && <Redirect to="/mylistings"/> }
          </>
        )
   
      }
        )}
             </>
        )
  }
}

export default EditApartment