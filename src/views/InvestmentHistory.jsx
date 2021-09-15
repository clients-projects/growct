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

const thInvestmentHistoryArray = ['No', 'Package', 'amount', 'Profit', 'Date']

const Members = (props) => {
    const [getDepositHistory, setDepositHistory] = useState([])

    // const getDepositHistory = [
    //    {
    //        No: 1,
    //        plan: 'Package A',
    //        amount: 232,
    //        currency: 'Bitcoin',
    //        date: '23/1/3183'
    //    }
    // ]

    const gottenDepositHistory = useRef()
    useEffect(() => {
        if (!gottenDepositHistory.current) {
            if (props.tokenId) {
                props.onInitGetUserHistory(props.tokenId)
            }
            gottenDepositHistory.current = true
        } else {
            if (props.getUserDepositHistory) {
                setDepositHistory(props.getUserDepositHistory)
            }
        }
    }, [props])

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

                <div class='cabItem depList' style={{ background: '#d5e1e3' }}>
                    <span class='captionDark center'>deposits</span>

                    <div class='wrap' style={{ padding: '1rem 3rem' }}>
                        <div class='row'>
                            <ClientCard
                                plain
                                title='Your Investment'
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
                                            {getDepositHistory.map(
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
                <p class='copyright'>
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
        getUserDepositHistory: state.users.getUserDepositHistory,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onInitGetUserHistory: (token) =>
            dispatch(orderAction.initGetUserHistory(token)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Members)
