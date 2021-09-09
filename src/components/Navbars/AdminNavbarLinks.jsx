import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { NavItem, Nav } from 'react-bootstrap'

import * as orderAction from '../../store/actions/burgerIndex'

class AdminNavbarLinks extends Component {
    render() {
        //   const notification = (
        //     <div>
        //       <i className="fa fa-globe" />
        //       <b className="caret" />
        //       <span className="notification">0</span>
        //       <p className="hidden-lg hidden-md">Notification</p>
        //     </div>
        //   );

        let siteOwnerAdminLinks = (
            <>
                {/* <Nav>
                  <NavItem eventKey={1} href='#'>
                    <p className='hidden-lg hidden-md'>Dashboard</p>
                </NavItem> 
                  <NavDropdown
                      eventKey={2}
                      title={notification}
                      noCaret
                      id='basic-nav-dropdown'
                  >
                      <MenuItem eventKey={2.1}>No notifications</MenuItem>
                  </NavDropdown>
                  {/* <NavItem eventKey={3} href='#'>
                    <i className='fa fa-search' />
                    <p className='hidden-lg hidden-md'>Search</p>
                </NavItem>
              </Nav> */}
                <Nav pullRight>
                    <NavItem eventKey={1}>
                        <Link
                            to='/admin/fund-account'
                            className='adminNav__fundAccount'
                        >
                            Fund Account
                        </Link>
                    </NavItem>
                    {/* <NavDropdown
                    eventKey={2}
                    title='Dropdown'
                    id='basic-nav-dropdown-right'
                >
                    <MenuItem eventKey={2.1}>Action</MenuItem>
                    <MenuItem eventKey={2.2}>Another action</MenuItem>
                    <MenuItem eventKey={2.3}>Something</MenuItem>
                    <MenuItem eventKey={2.4}>Another action</MenuItem>
                    <MenuItem eventKey={2.5}>Something</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey={2.5}>Separated link</MenuItem>
                </NavDropdown> */}
                    <NavItem eventKey={7} onClick={this.props.onLogOut}>
                        Log out
                    </NavItem>
                </Nav>
            </>
        )

        if (this.props.siteOwner) {
            siteOwnerAdminLinks = (
                <>
                    <Nav>
                        {/* <NavItem eventKey={1} href='#'>
                    <p className='hidden-lg hidden-md'>Dashboard</p>
                </NavItem> */}
                        {/* <NavDropdown
                          eventKey={2}
                          title={notification}
                          noCaret
                          id='basic-nav-dropdown'
                      >
                          <MenuItem eventKey={2.1}>No notifications</MenuItem>
                      </NavDropdown> */}

                        <NavItem eventKey={7} onClick={this.props.onLogOut}>
                            Log out
                        </NavItem>
                    </Nav>
                </>
            )
        }
        return <div className='adminNavLinks'>{siteOwnerAdminLinks}</div>
    }
}

const mapStateToProps = (state) => {
    return {
        err: state.auth.error,
        loading: state.users.loading,
        redirectToLoginPage: state.auth.redirect,
        tokenId: state.auth.tokenId,
        userId: state.auth.userId,
        siteOwner: state.auth.siteOwner,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogOut: () => dispatch(orderAction.logOut()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AdminNavbarLinks)
