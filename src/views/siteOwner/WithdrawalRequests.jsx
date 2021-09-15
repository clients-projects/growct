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

const thWithdrawalArray = [
    'No',
    'Username',
    'Amount',
    'Currency',
    'Status',
    'Date',
]

const PendingWithdrawals = (props) => {
    const [userPendingWithdrawal, setUserPendingWithdrawal] = useState([])

    const gottenUserPendingWithdrawal = useRef()
    useEffect(() => {
        if (!gottenUserPendingWithdrawal.current) {
            if (props.tokenId) {
                props.onInitGetFunds(props.tokenId)
            }
            gottenUserPendingWithdrawal.current = true
        } else {
            if (props.pendingWithdrawal) {
                setUserPendingWithdrawal(props.pendingWithdrawal)
            }
        }
    }, [props])

    const handleApproval = (id) => {
        for (let i = 0; i < props.idsOfPendingWithdrawals.length; i++) {
            if (id === i) {
                return props.onInitWithdrawNowApproval(
                    props.idsOfPendingWithdrawals[i]._id,
                    props.tokenId
                )
            }
        }
    }

    // if (props.investNowApprovalSuccess) {
    //     console.log('the approval', props.investNowApprovalSuccess)
    // }
    return (
        <div className='content'>
            {/* <Grid fluid>
                <Row>
                    <Col md={12}>
                        <Card
                            plain
                            title='Withdrawal Requests'
                            category='Users that want to purchase a plan'
                            ctTableFullWidth
                            ctTableResponsive
                            content={
                                <Table>
                                    <thead>
                                        <tr>
                                            {thWithdrawalArray.map(
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
                                        {userPendingWithdrawal.map(
                                            (prop, key) => {
                                                return (
                                                    <tr key={key}>
                                                        {Object.values(
                                                            prop
                                                        ).map((prop) => {
                                                            return (
                                                                <td key={key}>
                                                                    {prop}
                                                                </td>
                                                            )
                                                        })}
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
                                </Table>
                            }
                        />
                    </Col>
                </Row>
            </Grid> */}
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
                    <span class='captionDark center'>
                        Users Withdrawal Requests
                    </span>

                    <div class='wrap' style={{ padding: '1rem 3rem' }}>
                        <div class='row'>
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
                                                {thWithdrawalArray.map(
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
                                            {userPendingWithdrawal.map(
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
        fundLoading: state.fundAccount.loading,
        err: state.auth.error,
        tokenId: state.auth.tokenId,
        userId: state.auth.userId,
        withdrawNowApprovalSuccess:
            state.fundAccount.fundAccountApprovalSuccess,
        idsOfPendingWithdrawals: state.fundAccount.idsOfPendingWithdrawals,
        pendingWithdrawal: state.fundAccount.pendingWithdrawal,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onInitGetFunds: (token) => dispatch(actions.initGetFunds(token)),
        onInitWithdrawNowApproval: (id, token) =>
            dispatch(actions.initWithdrawNowApproval(id, token)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PendingWithdrawals)
