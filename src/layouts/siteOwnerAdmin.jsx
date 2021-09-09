import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import NotificationSystem from 'react-notification-system'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'

import * as actionTypes from '../store/actions/burgerIndex'
import { style } from '../variables/Variables'
import { siteOwnerDashboardRoutes } from '../routes.js'

import sideBarImg from '../images/about_img.jpg'
import UserDetails from '../views/siteOwner/UserDetails'
class Admin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            _notificationSystem: null,
            image: sideBarImg,
            color: 'black',
            hasImage: true,
            fixedClasses: 'dropdown show-dropdown open',
        }
    }

    handleNotificationClick = (position) => {
        var color = Math.floor(Math.random() * 4 + 1)
        var level
        switch (color) {
            case 1:
                level = 'success'
                break
            case 2:
                level = 'warning'
                break
            case 3:
                level = 'error'
                break
            case 4:
                level = 'info'
                break
            default:
                break
        }

        this.state._notificationSystem.addNotification({
            title: <span data-notify='icon' className='pe-7s-gift' />,
            message: (
                <div>
                    Welcome to <b>Robot44trade Dashboard</b> - The most advanced
                    trading platform
                </div>
            ),
            level: level,
            position: position,
            autoDismiss: 15,
        })
    }
    getsiteOwnerDashboardRoutes = (siteOwnerDashboardRoutes) => {
        return siteOwnerDashboardRoutes.map((prop, key) => {
            if (prop.layout === '/admin') {
                return (
                    <Route
                        path={prop.layout + prop.path}
                        render={(props) => (
                            <prop.component
                                {...props}
                                handleClick={this.handleNotificationClick}
                            />
                        )}
                        key={key}
                    />
                )
            } else {
                return null
            }
        })
    }
    getBrandText = (path) => {
        for (let i = 0; i < siteOwnerDashboardRoutes.length; i++) {
            if (
                this.props.location.pathname.indexOf(
                    siteOwnerDashboardRoutes[i].layout +
                        siteOwnerDashboardRoutes[i].path
                ) !== -1
            ) {
                return siteOwnerDashboardRoutes[i].name
            }
        }
        const pathRoute = path.slice(7)
        return pathRoute ? pathRoute : 'Robot44trade'
    }
    handleImageClick = (image) => {
        this.setState({ image: image })
    }
    handleColorClick = (color) => {
        this.setState({ color: color })
    }
    handleHasImage = (hasImage) => {
        this.setState({ hasImage: hasImage })
    }
    handleFixedClick = () => {
        if (this.state.fixedClasses === 'dropdown') {
            this.setState({ fixedClasses: 'dropdown show-dropdown open' })
        } else {
            this.setState({ fixedClasses: 'dropdown' })
        }
    }
    componentDidMount() {
        this.setState({ _notificationSystem: this.refs.notificationSystem })
        var _notificationSystem = this.refs.notificationSystem
        var color = Math.floor(Math.random() * 4 + 1)
        var level
        switch (color) {
            case 1:
                level = 'success'
                break
            case 2:
                level = 'warning'
                break
            case 3:
                level = 'error'
                break
            case 4:
                level = 'info'
                break
            default:
                break
        }
        _notificationSystem.addNotification({
            title: <span data-notify='icon' className='pe-7s-gift' />,
            message: (
                <div>
                    Welcome to <b>Robot44trade Dashboard</b> - The most advanced
                    trading platform
                </div>
            ),
            level: level,
            position: 'tr',
            autoDismiss: 15,
        })

        if (this.props.tokenId) {
            this.props.onInitGetUser(this.props.tokenId)
       }
    }

    render() {
        return (
            <div>
                <Helmet>
                    <meta
                        name='viewport'
                        content='width=device-width, initial-scale=0'
                    />
                </Helmet>
                <NotificationSystem ref='notificationSystem' style={style} />

                <div id='main-panel' ref='mainPanel'>
                    <Switch>
                        <Route path='/admin/member' component={UserDetails} />

                        {this.getsiteOwnerDashboardRoutes(
                            siteOwnerDashboardRoutes
                        )}
                    </Switch>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        err: state.auth.error,
        loading: state.users.loading,
        siteOwner: state.auth.siteOwner,
        redirectToLoginPage: state.auth.redirect,
        tokenId: state.auth.tokenId,
        userId: state.auth.userId,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onInitGetUser: (token) => dispatch(actionTypes.initGetUser(token)),
        onInitActivities: (token) => dispatch(actionTypes.initActivities(token)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Admin)
