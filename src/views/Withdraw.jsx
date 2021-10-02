import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import * as orderAction from '../store/actions/burgerIndex'

import Select from 'react-select'

import GradBgRev from '../images/grad_bg_rev.png'
import WhiteBg from '../images/white_bg.png'

import Header from '../main/layout/clientLayout/Header'
import SideBar from '../main/layout/clientLayout/SideBar'
import SubHeader from '../main/layout/clientLayout/SubHeader'
import Transactions from '../main/layout/clientLayout/Transactions'

const PlanOrder = (props) => {
    let [amount, setAmount] = useState(0)
    const [currency, setCurrency] = useState('Bitcoin')
    const [message, setMessage] = useState('')
    const [error, setError] = useState(false)
    const [userAccountBalance, setUserAccountBalance] = useState(0)

    useEffect(() => {
        if (props.userData.hasOwnProperty('username')) {
            setUserAccountBalance(props.userData.accountBalance)
        }
    }, [props])

    const onAmountChange = (e) => {
        setAmount(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        amount = Number(amount)

        if (amount > userAccountBalance) {
            setMessage('Insufficiant Balance')
            setError(true)
        } else {
            setMessage(
                'Withdrawal sent, Your withdrawal will reflect in your account after we have confirmed it, thanks!! '
            )
            setError(false)
            const formData = {
                amount: Math.floor(amount),
                currency,
            }

            props.onInitWithdrawNow(formData, props.tokenId)
        }
    }

    const options = [
        { label: 'Bitcoin', value: 'Bitcoin' },
        { label: 'Ethereum', value: 'Ethereum' },
    ]

    const onCurrencyChange = (e) => {
        setCurrency(e.value)
    }
    return (
        <>
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
                    style={{ color: 'black', background: '#b6cece' }}
                >
                    <span className='captionDark center'>Withdraw</span>

                    <div className='operWrap'>
                        <form
                            className='formLogin'
                            style={{ padding: '2rem 15rem' }}
                            onSubmit={handleSubmit}
                        >
                            {message && (
                                <p
                                    className={
                                        error
                                            ? 'message message__error'
                                            : 'message'
                                    }
                                >
                                    {message}
                                </p>
                            )}
                            <div className='item'>
                                <h1 style={{ textAlign: 'center' }}>
                                    <pwees></pwees>
                                </h1>

                                <h4
                                    style={{
                                        textAlign: 'center',
                                        marginTop: '10px',
                                    }}
                                >
                                    <pweee></pweee>
                                </h4>

                                <br />

                                <div className='formBlockLight'>
                                    <label style={{ color: 'black' }}>
                                        Choose Withdrawal Address:
                                    </label>
                                    <Select
                                        options={options}
                                        isClearable
                                        onChange={onCurrencyChange}
                                    />
                                </div>

                                <div className='formBlockLight'>
                                    <label style={{ color: 'black' }}>
                                        Amount:
                                    </label>
                                    <input
                                        type='number'
                                        value={amount}
                                        onChange={onAmountChange}
                                        autofocus='autofocus'
                                        name='amount'
                                        placeholder='$0.00'
                                    />
                                </div>

                                <br />
                                <span
                                    className='form-text'
                                    style={{
                                        color: 'red',
                                        fontWeight: 'bold',
                                        fontSize: 'small',
                                    }}
                                >
                                    <pwee>Enter Amount ($) </pwee>
                                    <br />
                                    <pweee></pweee>
                                    <br />
                                </span>
                                <br />

                                <div
                                    style={{
                                        textAlign: 'center',
                                        margin: '2rem 0',
                                    }}
                                >
                                    <button
                                        type='submit'
                                        className='btnFillDarkMd'
                                    >
                                        {props.loading
                                            ? 'Loading..'
                                            : 'Withdraw'}{' '}
                                    </button>
                                </div>
                            </div>

                            <h2
                                style={{
                                    textAlign: 'center',
                                    margin: '20px',
                                }}
                            >
                                Amount to Withdraw: ${amount}
                            </h2>
                        </form>
                    </div>
                </div>

                <p className='copyright'>
                    © 2021 Growveon cryptotrading. All rights reserved.
                </p>
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        tokenId: state.auth.tokenId,
        userData: state.auth.userData,
        userId: state.auth.userId,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onInitWithdrawNow: (data, token) =>
            dispatch(orderAction.initWithdrawNow(data, token)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PlanOrder)
