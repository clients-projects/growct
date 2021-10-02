import React, { useEffect } from 'react'

import { connect } from 'react-redux'

import GradBgRev from '../../images/grad_bg_rev.png'
import WhiteBg from '../../images/white_bg.png'

import Header from '../../main/layout/siteOwnerLayout/Header'
import SideBar from '../../main/layout/siteOwnerLayout/SideBar'
import SubHeader from '../../main/layout/siteOwnerLayout/SubHeader'

import * as actions from '../../store/actions/burgerIndex'
import CrytoMarketWatch from '../../tradeviewWidgets/CryptoMarketWatch'

const Dashboard = (props) => {
    useEffect(() => {
        if (props.tokenId) {
            props.onInitGetFunds(props.tokenId)
        }
    }, [props])

    return (
        <div className='content'>
            <div className='bodyWrap'>
                <Header />

                <div
                    className='cabContent'
                    style={{
                        backgroundImage: `url(${GradBgRev}), url(${WhiteBg})`,
                    }}
                >
                    <div className='container'>
                        <div className='cabHead'>
                            <SubHeader />

                            <div className='row'>
                                <SideBar />

                                <div className='right'>
                                    <div className='balInfo'>
                                        <div
                                            style={{
                                                height: '50vh',
                                                //     maxHeight: '300px',
                                                overflow: 'hidden',
                                                maxWidth: '100%',
                                                borderRadius:
                                                    '10px 10px 20px 20px',
                                            }}
                                        >
                                            <CrytoMarketWatch />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        id='content_place'
                        style={{
                            padding: '20px',
                            background: '#04a4f2',
                            width: '100%',
                            borderRadius: '10px',
                            textAlign: 'center',
                            marginTop: '30px',
                            color: 'white',
                        }}
                    >
                        <b>NOTIFICATION</b>
                        <br />
                        <br />

                        <p>none</p>
                    </div>
                </div>
            </div>
            <p className='copyright'>
                © 2021 Growveon cryptotrading. All rights reserved.
            </p>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        err: state.auth.error,
        loading: state.users.loading,
        redirectToLoginPage: state.auth.redirect,
        tokenId: state.auth.tokenId,
        userId: state.auth.userId,
        totalReceivedAmount: state.auth.totalReceivedAmount,
        totalDisbursedAmount: state.auth.totalDisbursedAmount,
        pendingDepositsCount: state.auth.pendingDepositsCount,
        pendingWithdrawalsCount: state.auth.pendingWithdrawalsCount,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onInitGetFunds: (token) => dispatch(actions.initGetFunds(token)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
