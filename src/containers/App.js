import React, { useEffect, useRef } from 'react'
import {
    Switch,
    Route,
    Redirect,
    useLocation,
    withRouter,
} from 'react-router-dom'
import { connect } from 'react-redux'

import WhatsappLivechat from '../images/whatsapp.png'
import * as actions from '../store/actions/burgerIndex'
import asyncComponent from '../main/hoc/asyncComponent'
import Layout from './Layout'
import Home from './Home'
import AdminLayout from '../layouts/Admin'
import SiteOwnerAdmin from '../layouts/siteOwnerAdmin'
import ContactUs from './ContactUs'
import Faq from './Faq'
import ForgotPassword from './ForgotPassword'
import AboutUs from './AboutUs'
import Pricing from './Pricing'
import LoginPage from '../main/auth/Login'
import SignupPage from '../main/auth/Signup'

function App(props) {
    const location = useLocation()

    const ref = useRef()
    useEffect(() => {
        const token = localStorage.getItem('token')
        const userId = localStorage.getItem('userId')
        if (!ref.current) {
            if (token) {
                props.onCheckState(token, userId)
            }
        }
        ref.current = true
    }, [props])

    const AsyncLogin = asyncComponent(() => {
        return import('../main/auth/Login')
    })

    const AsyncAboutUs = asyncComponent(() => {
        return import('./AboutUs')
    })

  
    let AuthGuard = (
        <Switch>
            <Route
                path='/'
                exact
                component={Home}
                render={(props) => (
                    <Home
                        {...props}
                    />
                )}
            />
            <Route
                path='/Auth/login'
                render={(props) => <LoginPage {...props} />}
            />
            <Route
                path='/Auth/signup/'
                render={(props) => <SignupPage {...props} />}
            />

            <Route path='/about-us' component={AboutUs} />
            <Route path='/pricing' component={Pricing} />
            <Route path='/forgot-password' component={ForgotPassword} />
            <Route path='/contact-us' component={ContactUs} />
            <Route path='/faq' component={Faq} />
            <Redirect to='/' />
        </Switch>
    )
    if (props.auth) {
        let admintoShow = (
            <Route
                path='/admin'
                render={(props) => <AdminLayout {...props} />}
            />
        )

        if (props.siteOwner) {
            admintoShow = (
                <Route
                    path='/admin'
                    render={(props) => <SiteOwnerAdmin {...props} />}
                />
            )
        }

        AuthGuard = (
            <Switch>
                <Route path='/' exact component={Home} />
                <Route
                    path='/Auth/login'
                    render={(props) => <AsyncLogin {...props} />}
                />
                <Route path='/pricing' component={Pricing} />
                <Route path='/about-us' component={AsyncAboutUs} />
                <Route path='/contact-us' component={ContactUs} />
                <Route path='/faq' component={Faq} />

                {admintoShow}
                <Redirect to='/' />
            </Switch>
        )
    }

    return (
        <div className='rootApp'>
            <a
                href='https://wa.me/+447423037842'
                alt=''
                target='_blank'
                rel='noopener noreferrer'
            > 
               <img
                  src={WhatsappLivechat}
                    alt=''
                    className='liveChat__whatsapp'
                />
             </a> 
            <a
                href='hghh'
                alt=''
                target='_blank'
                rel='noopener noreferrer'
            > 
               <img
                  src={WhatsappLivechat}
                    alt=''
                    className='instagram'
                />
             </a> 
            <Layout isAdmin={location} siteOwner={props.siteOwner}>
                {AuthGuard}
            </Layout>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        siteOwner: state.auth.siteOwner,
        auth: state.auth.tokenId,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onCheckState: (tokenId, userId) =>
            dispatch(actions.authSuccess(tokenId, userId)),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
