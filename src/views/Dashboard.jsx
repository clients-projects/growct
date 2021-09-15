import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { HiLink } from 'react-icons/hi'

import CrytoMarketWatch from '../tradeviewWidgets/CryptoMarketWatch'
import * as orderAction from '../store/actions/burgerIndex'

import GradBgRev from '../images/grad_bg_rev.png'
import WhiteBg from '../images/white_bg.png'

import Header from '../main/layout/clientLayout/Header'
import SubHeader from '../main/layout/clientLayout/SubHeader'
import Sidebar from '../main/layout/clientLayout/SideBar'

const Dashboard = (props) => {
    const [totalUserDeposit, setTotalUserDeposit] = useState(0)
    const [totalUserWithdrawal, setTotalUserWithdrawal] = useState(0)

    useEffect(() => {
        if (props.userDeposits) {
            const deposits = props.userDeposits
            let totalDepositAmount = 0

            for (let i of deposits) {
                totalDepositAmount += i.amount
            }

            setTotalUserDeposit(totalDepositAmount)
        }

        if (props.userWithdrawals) {
            const withdrawals = props.userWithdrawals
            let totalWithdrawalAmount = 0
            for (let i of withdrawals) {
                totalWithdrawalAmount += i.amount
            }
            setTotalUserWithdrawal(totalWithdrawalAmount)
        }
    }, [props.userDeposits, props.userWithdrawals])

    return (
        <>
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
                                <Sidebar />

                                <div class='right'>
                                    <div class='balInfo'>
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
                    <div class='cabItem profile'>
                        <span class='captionDark center'>your account</span>
                        <div class='accTbl'></div>{' '}
                        <div class='row' style={{ padding: '0 3rem' }}>
                            <div class='item col6'>
                                <div class='tblWrap'>
                                    <ul class='tblTempl2 in table full'>
                                        <li class='tRow'>
                                            <span class='param tCell middle'>
                                                Daily Earning
                                            </span>
                                            <span class='data tCell middle'>
                                                ${props.userData.dailyEarning}
                                            </span>
                                        </li>
                                        <li class='tRow'>
                                            <span class='param tCell middle'>
                                                Pending withdrawal
                                            </span>
                                            <span class='data tCell middle'>
                                                $
                                                {
                                                    props.userPendingWithdrawalAmount
                                                }
                                            </span>
                                        </li>
                                        <li class='tRow'>
                                            <span class='param tCell middle'>
                                                Total Withdrawal
                                            </span>
                                            <span class='data tCell middle'>
                                                ${totalUserWithdrawal}
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div class='item col6'>
                                <div class='tblWrap'>
                                    <ul class='tblTempl2 out table full'>
                                        <li class='tRow'>
                                            <span class='param tCell middle'>
                                                Total Earning
                                            </span>
                                            <span class='data tCell middle'>
                                                ${props.userData.totalEarnings}
                                            </span>
                                        </li>
                                        <li class='tRow'>
                                            <span class='param tCell middle'>
                                                Last deposit
                                            </span>
                                            <span class='data tCell middle'>
                                                ${props.lastDepositAmount}
                                            </span>
                                        </li>
                                        <li class='tRow'>
                                            <span class='param tCell middle'>
                                                Total deposit
                                            </span>
                                            <span class='data tCell middle'>
                                                ${totalUserDeposit}
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <br />
                        <br />
                        <br />
                        <div class='refLink' style={{ padding: '2rem 3rem' }}>
                            <div class='linkBlock'>
                                <div class='iconLeft'>
                                    <span class='icon-link'>
                                        <HiLink
                                            style={{
                                                position: 'relative',
                                                top: 5,
                                            }}
                                        />
                                    </span>
                                    <span class='title'>referal link: </span>
                                    <Link to='referrals' id='linkRef'>
                                        {props.userData.referralLink}{' '}
                                    </Link>
                                </div>

                                <CopyToClipboard
                                    text={props.userData.referralLink}
                                    onCopy={() => console.log('copied')}
                                >
                                    <button
                                        class='btnFillGradMd copyBtn'
                                        data-clipboard-target='#linkRef'
                                    >
                                        Copy Link
                                    </button>
                                </CopyToClipboard>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p class='copyright'>
                © 2021 Growveon cryptotrading. All rights reserved.
            </p>
        </>
    )
}

const mapStateToProps = (state) => {
    console.log('the state', state)
    return {
        err: state.auth.error,
        loading: state.users.loading,
        tokenId: state.auth.tokenId,
        userData: state.auth.userData,
        lastDepositAmount: state.auth.lastDepositAmount,
        userPendingWithdrawalAmount: state.auth.userPendingWithdrawalAmount,
        userDeposits: state.auth.userDeposits,
        userWithdrawals: state.auth.userWithdrawals,
        userId: state.auth.userId,
        pendingWithdrawal: state.fundAccount.pendingWithdrawal,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        //onInitGetUser: (token) => dispatch(actionTypes.initGetUser(token)),
        onLogOut: () => dispatch(orderAction.logOut()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
