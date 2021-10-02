import React, { useState, useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { FaMoneyBillAlt } from 'react-icons/fa'

import * as orderAction from '../../../store/actions/burgerIndex'

function Transactions(props) {
    const [packageA, setPackageA] = useState(0)
    const [packageB, setPackageB] = useState(0)
    const [packageC, setPackageC] = useState(0)
    const [packageD, setPackageD] = useState(0)
    const [packageE, setPackageE] = useState(0)
    const [packageF, setPackageF] = useState(0)

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

        if (getDepositHistory.length > 0) {
            for (let i of getDepositHistory) {
                if (i.planName === 'Package A') {
                    setPackageA(i.amount)
                }
                if (i.planName === 'Package B') {
                    setPackageB(i.amount)
                }
                if (i.planName === 'Package C') {
                    setPackageC(i.amount)
                }
                if (i.planName === 'Package D') {
                    setPackageD(i.amount)
                }
                if (i.planName === 'Package E') {
                    setPackageE(i.amount)
                }
                if (i.planName === 'Package F') {
                    setPackageF(i.amount)
                }
            }
        }
    }, [props, getDepositHistory])

    return (
        <>
            <div className='balInfo' id='infodata'>
                <div className='item'>
                    <div className='iconLeft'>
                        <div className='icon'>
                            <FaMoneyBillAlt />
                        </div>
                        <div className='data'>
                            <span>PACKAGE A</span>
                            <span>
                                Funds: <b>{packageA}</b>
                            </span>
                        </div>
                    </div>
                </div>
                <div className='item'>
                    <div className='iconLeft'>
                        <div className='icon'>
                            <FaMoneyBillAlt />
                        </div>
                        <div className='data'>
                            <span>PACKAGE B</span>
                            <span>
                                Funds: <b>{packageB}</b>
                            </span>
                        </div>
                    </div>
                </div>
                <div className='item'>
                    <div className='iconLeft'>
                        <div className='icon'>
                            <FaMoneyBillAlt />
                        </div>
                        <div className='data'>
                            <span>PACKAGE C</span>
                            <span>
                                Funds: <b>{packageC}</b>
                            </span>
                        </div>
                    </div>
                </div>
                <div className='item'>
                    <div className='iconLeft'>
                        <div className='icon'>
                            <FaMoneyBillAlt />
                        </div>
                        <div className='data'>
                            <span>PACKAGE D</span>
                            <span>
                                Funds: <b>{packageD}</b>
                            </span>
                        </div>
                    </div>
                </div>
                <div className='item'>
                    <div className='iconLeft'>
                        <div className='icon'>
                            <FaMoneyBillAlt />
                        </div>
                        <div className='data'>
                            <span>PACKAGE E</span>
                            <span>
                                Funds: <b>{packageE}</b>
                            </span>
                        </div>
                    </div>
                </div>
                <div className='item'>
                    <div className='iconLeft'>
                        <div className='icon'>
                            <FaMoneyBillAlt />
                        </div>
                        <div className='data'>
                            <span>PACKAGE F </span>
                            <span>
                                Funds: <b>{packageF}</b>
                            </span>
                        </div>
                    </div>
                </div>
                <Link to='referrals' className='btnFillGradMd'>
                    Refferals
                </Link>
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        getUserDepositHistory: state.users.getUserDepositHistory,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onInitGetUserHistory: (token) =>
            dispatch(orderAction.initGetUserHistory(token)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Transactions)
