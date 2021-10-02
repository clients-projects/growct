import React, { useState, useEffect, useRef } from 'react'
import { connect } from 'react-redux'

import * as orderAction from '../store/actions/burgerIndex'

import ClientCard from '../components/Card/ClientCard'

import GradBgRev from '../images/grad_bg_rev.png'
import WhiteBg from '../images/white_bg.png'

import Header from '../main/layout/clientLayout/Header'
import SideBar from '../main/layout/clientLayout/SideBar'
import SubHeader from '../main/layout/clientLayout/SubHeader'
import Transactions from '../main/layout/clientLayout/Transactions'

const thInvestmentHistoryArray = ['No', 'amount', 'Currency', 'Date']

const Members = (props) => {
    const [getWithdrawalHistory, setWithdrawalHistory] = useState([])

    const gottenWithdrawalHistory = useRef()
    useEffect(() => {
        if (!gottenWithdrawalHistory.current) {
            if (props.tokenId) {
                props.onInitGetUserHistory(props.tokenId)
            }
            gottenWithdrawalHistory.current = true
        } else {
            if (props.getUserWithdrawalHistory) {
                setWithdrawalHistory(props.getUserWithdrawalHistory)
            }
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
                                    <Transactions />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id='content_place'></div>

                <div
                    className='cabItem depList'
                    style={{ background: '#d5e1e3' }}
                >
                    <span className='captionDark center'>Withdrawals</span>

                    <div className='wrap' style={{ padding: '1rem 3rem' }}>
                        <div className='row'>
                            <ClientCard
                                plain
                                title='Your Withdrawal'
                                category='History'
                                ctTableFullWidth
                                ctTableResponsive
                                content={
                                    <table
                                        cellspacing='10'
                                        cellpadding='2'
                                        border='0'
                                        width='100%'
                                    >
                                        <thead>
                                            <tr className='clientCard__tr'>
                                                {thInvestmentHistoryArray.map(
                                                    (prop, key) => {
                                                        return (
                                                            <th key={key}>
                                                                {prop}
                                                            </th>
                                                        )
                                                    }
                                                )}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {getWithdrawalHistory.map(
                                                (prop, key) => {
                                                    return (
                                                        <tr
                                                            key={key}
                                                            className='clientCard__tbody--tr'
                                                        >
                                                            {Object.values(
                                                                prop
                                                            ).map(
                                                                (prop, key) => {
                                                                    return (
                                                                        <td
                                                                            key={
                                                                                key
                                                                            }
                                                                            align='center'
                                                                        >
                                                                            {
                                                                                prop
                                                                            }
                                                                        </td>
                                                                    )
                                                                }
                                                            )}
                                                        </tr>
                                                    )
                                                }
                                            )}
                                        </tbody>
                                    </table>
                                }
                            />

                            <br />
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
        loading: state.users.loading,
        err: state.auth.error,
        tokenId: state.auth.tokenId,
        userId: state.auth.userId,
        getUserWithdrawalHistory: state.users.getUserWithdrawalHistory,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onInitGetUserHistory: (token) =>
            dispatch(orderAction.initGetUserHistory(token)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Members)
