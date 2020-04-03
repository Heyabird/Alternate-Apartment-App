import React from "react"

class Header extends React.Component {
  render() {

    const {
      logged_in,
      sign_in_route,
      sign_out_route,
    } = this.props

    return(
      <>
        <h3>AlternateApartments.com</h3>   
         

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
    </>
        )
  }
}

export default Header

