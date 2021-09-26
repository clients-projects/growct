import React, { useEffect } from 'react'
import { useLastLocation } from 'react-router-last-location'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'

import SubHeader from '../main/layout/SubHeader'
import Footer from '../main/layout/Footer'

import * as orderAction from '../store/actions/burgerIndex'

function Layout(props) {
    useEffect(() => {
        if (props.tokenId) {
            props.onInitActivities(props.tokenId)
        }
    }, [props])

    const lastLocation = useLastLocation()
    const history = useHistory()

    let fromlocationPath = ''
    for (let i in lastLocation) {
        if (i === 'pathname') {
            fromlocationPath = lastLocation[i]
        }
    }
    const fromLocationSplit = fromlocationPath.split(' ')
    console.log('from location', fromLocationSplit)

    let toRender

    const adminPath = props.isAdmin.pathname
    let isAdmin = adminPath.includes('/admin')

    if (isAdmin) {
        if (adminPath === '/admin' || adminPath === '/admin/') {
            history.push('/admin/dashboard')
        }
     
        localStorage.setItem('cssLoaded', false)
      
        // const all = import('../sass/components/home.scss')
        // all.finally((result) => {
        //     localStorage.setItem('cssLoaded', true)
        // })

        toRender = (
            <>
                <Helmet>
                    <meta
                        name='viewport'
                        content='width=device-width, initial-scale=0'
                    />
                </Helmet>
                {props.children}
            </>
        )
    } else {
         if (fromLocationSplit[0].includes('admin')) {
             window.location.reload()
         }
        toRender = (
            <div className='homeBody'>
                <div className='section-subHeader'>
                    <SubHeader />
                </div>
                <main>{props.children}</main>
                <div className='section-footer'>
                    <Footer />
                </div>
            </div>
        )
    }

    return <>{toRender}</>
}

const mapStateToProps = (state) => {
    console.log('layout state', state)
    console.log('url is loaded')
    return {
        tokenId: state.auth.tokenId,

        siteOwner: state.auth.siteOwner,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onInitActivities: (token) =>
            dispatch(orderAction.initActivities(token)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Layout)
