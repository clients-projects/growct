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
            <div class='bodyWrap'>
                <Header />

                <div
                    class='cabContent'
                    style={{
                        backgroundImage: `url(${GradBgRev}), url(${WhiteBg})`,
                    }}
                >
                    <div class='container'>
                        <div class='cabHead'>
                            <SubHeader />

                            <div class='row'>
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
                    class='cabItem depList'
                    style={{ background: '#d5e1e3', padding: '4rem 3rem' }}
                >
                    <span class='captionDark center'>Referrals</span>

                    <div class='refLink'>
                        <div class='userLink'>
                            <div
                                class='userpic'
                                style={{
                                    backgroundImage: `url(${avatar})`,
                                }}
                            ></div>
                            <span class='subtitle'>your upline:</span>
                            <h2 style={{ color: 'black' }}>{props.upline}</h2>
                        </div>
                        <div class='refInfo'>
                            <div class='row'>
                                <div class='item col4'>
                                    <div class='in tot'>
                                        <span>
                                            Total referral comission:{' '}
                                            <b>
                                                ${props.totalReferralCommission}
                                            </b>
                                        </span>
                                    </div>
                                </div>
                                <div class='item col4'>
                                    <div class='in sum'>
                                        <span>
                                            Referrals:{' '}
                                            <b>{props.totalReferrals}</b>
                                        </span>
                                    </div>
                                </div>
                                <div class='item col4'>
                                    <div class='in act'>
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

                <p class='copyright'>
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
