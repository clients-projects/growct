import React, { useState, useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { FaMoneyBillAlt } from 'react-icons/fa'

import * as orderAction from '../../../store/actions/burgerIndex'

function Transactions(props) {
    const [getDepositHistory, setDepositHistory] = useState([])
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
    }, [props, getDepositHistory])

    return (
        <>
            <div className='balInfo' id='infodata'>
                <div class='item'>
                    <div class='iconLeft'>
                        <div class='icon'>
                            <FaMoneyBillAlt />
                        </div>{' '}
                        <div class='data'>
                            <span>Last Deposit</span>
                            <span>
                                Name: <b>{props.activities.lastDepositName}</b>
                            </span>
                        </div>
                    </div>
                </div>
                <div class='item'>
                    <div class='iconLeft'>
                        <div class='icon'>
                            <FaMoneyBillAlt />
                        </div>
                        <div class='data'>
                            <span>Last Withdrawal</span>
                            <span>
                                Name:{' '}
                                <b>{props.activities.lastWithdrawalName}</b>
                            </span>
                        </div>
                    </div>
                </div>
                <div class='item'>
                    <div class='iconLeft'>
                        <div class='icon'>
                            <FaMoneyBillAlt />
                        </div>
                        <div class='data'>
                            <span>Last Withdrawal</span>
                            <span>
                                Amount:{' '}
                                <b>{props.activities.lastWithdrawalAmount}</b>
                            </span>
                        </div>
                    </div>
                </div>
                <div class='item'>
                    <div class='iconLeft'>
                        <div class='icon'>
                            <FaMoneyBillAlt />
                        </div>
                        <div class='data'>
                            <span>Last Deposit</span>
                            <span>
                                Amount:{' '}
                                <b>{props.activities.lastDepositAmount}</b>
                            </span>
                        </div>
                    </div>
                </div>
                <div class='item'>
                    <div class='iconLeft'>
                        <div class='icon'>
                            <FaMoneyBillAlt />
                        </div>
                        <div class='data'>
                            <span>Total Investments</span>
                            <span>
                                Amount:{' '}
                                <b>{props.activities.totalInvestments}</b>
                            </span>
                        </div>
                    </div>
                </div>
                <div class='item'>
                    <div class='iconLeft'>
                        <div class='icon'>
                            <FaMoneyBillAlt />
                        </div>
                        <div class='data'>
                            <span>Total Payment </span>
                            <span>
                                Amount: <b>{props.totalPayment}</b>
                            </span>
                        </div>
                    </div>
                </div>
                <Link to='referrals' class='btnFillGradMd'>
                    Refferals
                </Link>
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        activities: state.auth.activities,
        totalPayment: state.auth.totalDisbursedAmount,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onInitGetUserHistory: (token) =>
            dispatch(orderAction.initGetUserHistory(token)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Transactions)
