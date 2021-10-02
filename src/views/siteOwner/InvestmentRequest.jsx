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
//import { thWithdrawalArray, tdWithdrawalArray } from '../../variables/Variables'

const thInvestmentRequestArray = [
    'No',
    'Username',
    'Amount',
    'Plan',
    'Status',
    'Date',
]

const PendingDeposits = (props) => {
    const [userPendingDeposit, setUserPendingDeposit] = useState([])

    const gottenUserPendingDeposit = useRef()
    useEffect(() => {
        if (!gottenUserPendingDeposit.current) {
            if (props.tokenId) {
                props.onInitGetFunds(props.tokenId)
            }
            gottenUserPendingDeposit.current = true
        } else {
            if (props.pendingDeposit) {
                setUserPendingDeposit(props.pendingDeposit)
            }
        }
    }, [props])

    const handleApproval = (id) => {
        for (let i = 0; i < props.idsOfPendingDeposits.length; i++) {
            if (id === i) {
                return props.onInitInvestNowApproval(
                    props.idsOfPendingDeposits[i]._id,
                    props.tokenId
                )
            }
        }
    }

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
                        Investment Requests
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
                                                {thInvestmentRequestArray.map(
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
                                            {userPendingDeposit.map(
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
                                                            <button
                                                                className='btn1'
                                                                onClick={() =>
                                                                    handleApproval(
                                                                        key
                                                                    )
                                                                }
                                                            >
                                                                {props.loading
                                                                    ? 'Loading...'
                                                                    : 'approve'}
                                                            </button>
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
        fundLoading: state.fundAccount.loading,
        err: state.auth.error,
        tokenId: state.auth.tokenId,
        userId: state.auth.userId,
        investNowApprovalSuccess: state.fundAccount.fundAccountApprovalSuccess,
        idsOfPendingDeposits: state.fundAccount.idsOfPendingDeposits,
        pendingDeposit: state.fundAccount.pendingDeposit,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onInitGetFunds: (token) => dispatch(actions.initGetFunds(token)),
        onInitInvestNowApproval: (id, token) =>
            dispatch(actions.initInvestNowApproval(id, token)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PendingDeposits)
