import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import NotificationSystem from 'react-notification-system'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'
import * as actionTypes from '../store/actions/burgerIndex'

import PlanOrder from '../views/PlanOrder'
import PlanConfirmation from '../views/PlanConfirmation'
//import FixedPlugin from "../components/FixedPlugin/FixedPlugin";

import { style } from '../variables/Variables'

import { dashboardRoutes } from '../routes.js'

//import image from "../assets/img/sidebar-3.jpg";
import sideBarImg from '../images/about_img.jpg'

class Admin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            _notificationSystem: null,
            routes: null,
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
                    Welcome to{' '}
                    <b>Growveon cryptotrading investment Dashboard</b> - The
                    most advanced trading platform
                </div>
            ),
            level: level,
            position: position,
            autoDismiss: 15,
        })
    }
    getdashboardRoutes = (dashboardRoutes) => {
        return dashboardRoutes.map((prop, key) => {
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
        for (let i = 0; i < dashboardRoutes.length; i++) {
            if (
                this.props.location.pathname.indexOf(
                    dashboardRoutes[i].layout + dashboardRoutes[i].path
                ) !== -1
            ) {
                return dashboardRoutes[i].name
            }
        }
        const pathRoute = path.slice(7)
        return pathRoute ? pathRoute : 'Growveon cryptotrading'
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
                    Welcome to <b>Growveon cryptotrading Dashboard</b> - The
                    most advanced trading platform
                </div>
            ),
            level: level,
            position: 'tr',
            autoDismiss: 15,
        })

        if (this.props.tokenId) {
            this.props.onInitGetUser(this.props.tokenId)
            this.props.onInitGetAdmin(this.props.tokenId)
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

                <div
                    id='main-panel'
                    // className='main-panel'
                    ref='mainPanel'
                >
                    <Switch>
                        <Route
                            path='/admin/plan-order/:id'
                            component={PlanOrder}
                        />
                        <Route
                            path='/admin/plan-confirmation/:id'
                            component={PlanConfirmation}
                        />

                        {this.getdashboardRoutes(dashboardRoutes)}
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
        onInitGetAdmin: (token) => dispatch(actionTypes.initGetAdmin(token)),
        onInitGetUser: (token) => dispatch(actionTypes.initGetUser(token)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Admin)
