import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavItem, Nav } from 'react-bootstrap'

import * as orderAction from '../../store/actions/burgerIndex'

class AdminNavbarLinks extends Component {
    render() {
        return (
            <div className='adminNavLinks'>
                <Nav pullRight>
                    <NavItem eventKey={7} onClick={this.props.onLogOut}>
                        Log out
                    </NavItem>
                </Nav>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        err: state.auth.error,
        loading: state.users.loading,
        redirectToLoginPage: state.auth.redirect,
        tokenId: state.auth.tokenId,
        userId: state.auth.userId,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogOut: () => dispatch(orderAction.logOut()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AdminNavbarLinks)
