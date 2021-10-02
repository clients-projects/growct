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
        console.log('gotten deposit history', gottenDepositHistory)
        if (!gottenDepositHistory.current) {
            if (props.tokenId) {
                console.log('token id of transaction', props.tokenId)
                props.onInitGetUserHistory(props.tokenId)
            }
            gottenDepositHistory.current = true
        } else {
            if (props.getUserDepositHistory) {
                console.log('get user deposit', props.getUserDepositHistory)
                setDepositHistory(props.getUserDepositHistory)
            }
        }

        if (getDepositHistory.length > 0) {
            for (let i of getDepositHistory) {
                if (i.planName === 'Helm') {
                    setHelm(i.amount)
                }
                if (i.planName === 'Premium') {
                    setPremium(i.amount)
                }
                if (i.planName === 'Business') {
                    setBusiness(i.amount)
                }
                if (i.planName === 'Bronze') {
                    setBronze(i.amount)
                }
                if (i.planName === 'Silver') {
                    setSilver(i.amount)
                }
                if (i.planName === 'Gold') {
                    setGold(i.amount)
                }
                if (i.planName === 'Diamond') {
                    setDiamond(i.amount)
                }
                if (i.planName === 'OneMonth') {
                    setOneMonth(i.amount)
                }
                if (i.planName === 'TwoMonths') {
                    setTwoMonths(i.amount)
                }
                if (i.planName === 'ThreeMonths') {
                    setThreeMonths(i.amount)
                }
                if (i.planName === 'SixMonths') {
                    setSixMonths(i.amount)
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
                            <span><b>Helm</b></span>
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
                            <span><b>Premium</b></span>
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
                            <span><b>Business</b></span>
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
                            <span><b>Bronze</b></span>
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
                            <span><b>Silver</b></span>
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
                            <span> <b>Gold</b> </span>
                            <span>
                                Funds: <b>{Gold}</b>
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
                            <span><b>Diamond</b> </span>
                            <span>
                                Funds: <b>{Diamond}</b>
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
                            <span> <b>OneMonth</b> </span>
                            <span>
                                Funds: <b>{OneMonth}</b>
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
                            <span><b>TwoMonths</b> </span>
                            <span>
                                Funds: <b>{TwoMonths}</b>
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
                            <span><b>ThreeMonths</b> </span>
                            <span>
                                Funds: <b>{ThreeMonths}</b>
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
                            <span><b>SixMonths</b> </span>
                            <span>
                                Funds: <b>{SixMonths}</b>
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
