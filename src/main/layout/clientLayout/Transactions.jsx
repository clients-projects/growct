import React, { useState, useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { FaMoneyBillAlt } from 'react-icons/fa'

import * as orderAction from '../../../store/actions/burgerIndex'

function Transactions(props) {
    const [Helm, setHelm] = useState(0)
    const [Business, setBusiness] = useState(0)
    const [Premium, setPremium] = useState(0)
    const [Bronze, setBronze] = useState(0)
    const [Silver, setSilver] = useState(0)
    const [Gold, setGold] = useState(0)
    const [Diamond, setDiamond] = useState(0)
    const [OneMonth, setOneMonth] = useState(0)
    const [TwoMonths, setTwoMonths] = useState(0)
    const [ThreeMonths, setThreeMonths] = useState(0)
    const [SixMonths, setSixMonths] = useState(0)

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
                if (i.planName === 'Helm') {
                    setHelm(i.amount)
                }
                if (i.planName === 'Package B') {
                    setBusiness(i.amount)
                }
                if (i.planName === 'Package C') {
                    setPremium(i.amount)
                }
                if (i.planName === 'Package D') {
                    setBronze(i.amount)
                }
                if (i.planName === 'Package E') {
                    setSilver(i.amount)
                }
                if (i.planName === 'Package F') {
                    setGold(i.amount)
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
                                Funds: <b>{Helm}</b>
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
                                Funds: <b>{Business}</b>
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
                                Funds: <b>{Premium}</b>
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
                                Funds: <b>{Bronze}</b>
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
                                Funds: <b>{Silver}</b>
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
                                Funds: <b>{Gold}</b>
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
