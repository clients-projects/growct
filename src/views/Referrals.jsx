import React from 'react'
import { connect } from 'react-redux'

import * as orderAction from '../store/actions/burgerIndex'

import GradBgRev from '../images/grad_bg_rev.png'
import WhiteBg from '../images/white_bg.png'
import avatar from '../assets/img/faces/face-1.jpg'

import Header from '../main/layout/clientLayout/Header'
import SideBar from '../main/layout/clientLayout/SideBar'
import SubHeader from '../main/layout/clientLayout/SubHeader'
import Transactions from '../main/layout/clientLayout/Transactions'

const Referrals = (props) => {
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
                                    <Transactions />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id='content_place'></div>

                <div
                    className='cabItem depList'
                    style={{ background: '#d5e1e3', padding: '4rem 3rem' }}
                >
                    <span className='captionDark center'>Referrals</span>

                    <div className='refLink'>
                        <div className='userLink'>
                            <div
                                className='userpic'
                                style={{
                                    backgroundImage: `url(${avatar})`,
                                }}
                            ></div>
                            <span className='subtitle'>your upline:</span>
                            <h2 style={{ color: 'black' }}>{props.upline}</h2>
                        </div>
                        <div className='refInfo'>
                            <div className='row'>
                                <div className='item col4'>
                                    <div className='in tot'>
                                        <span>
                                            Total referral comission:{' '}
                                            <b>
                                                ${props.totalReferralCommission}
                                            </b>
                                        </span>
                                    </div>
                                </div>
                                <div className='item col4'>
                                    <div className='in sum'>
                                        <span>
                                            Referrals:{' '}
                                            <b>{props.totalReferrals}</b>
                                        </span>
                                    </div>
                                </div>
                                <div className='item col4'>
                                    <div className='in act'>
                                        <span>
                                            Active referrals:{' '}
                                            <b>{props.activeReferrals}</b>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <p className='copyright'>
                    © 2021 Growveon cryptotrading. All rights reserved.
                </p>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        upline: state.auth.userData.upline,
        referrals: state.auth.userData.referrals,
        activeReferrals: state.auth.userData.activeReferrals,
        totalReferrals: state.auth.userData.totalReferrals,
        totalReferralCommission: state.auth.userData.totalReferralCommission,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onInitGetUserHistory: (token) =>
            dispatch(orderAction.initGetUserHistory(token)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Referrals)
