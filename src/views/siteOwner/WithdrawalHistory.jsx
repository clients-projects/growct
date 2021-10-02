import React, { useState, useEffect, useRef } from 'react'
import { connect } from 'react-redux'

import * as actions from '../../store/actions/burgerIndex'

import ClientCard from '../../components/Card/ClientCard'

import GradBgRev from '../../images/grad_bg_rev.png'
import WhiteBg from '../../images/white_bg.png'

import Header from '../../main/layout/siteOwnerLayout/Header'
import SideBar from '../../main/layout/siteOwnerLayout/SideBar'
import SubHeader from '../../main/layout/siteOwnerLayout/SubHeader'
import Transactions from '../../main/layout/siteOwnerLayout/Transactions'

const thWithdrawalHistoryArray = [
    'No',
    'Username',
    'Amount',
    'Currency',
    'Date',
]

const AllUsersWithdrawalHistory = (props) => {
    const [allUsersWithdrawal, setAllUsersWithdrawal] = useState([])

    const gottenAllUsersWithdrawal = useRef()
    useEffect(() => {
        if (!gottenAllUsersWithdrawal.current) {
            if (props.tokenId) {
                props.onInitGetFunds(props.tokenId)
            }
            gottenAllUsersWithdrawal.current = true
        } else {
            if (props.allUsersWithdrawal) {
                setAllUsersWithdrawal(props.allUsersWithdrawal)
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
                    <span className='captionDark center'>
                        Users Withdrawal History
                    </span>

                    <div className='wrap' style={{ padding: '1rem 3rem' }}>
                        <div className='row'>
                            <ClientCard
                                plain
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
                                                {thWithdrawalHistoryArray.map(
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
                                            {allUsersWithdrawal.map(
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
        tokenId: state.auth.tokenId,
        userId: state.auth.userId,
        allUsersWithdrawal: state.fundAccount.allUsersWithdrawal,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onInitGetFunds: (token) => dispatch(actions.initGetFunds(token)),
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AllUsersWithdrawalHistory)
