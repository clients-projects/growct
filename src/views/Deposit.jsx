import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Select from 'react-select'

import GradBgRev from '../images/grad_bg_rev.png'
import WhiteBg from '../images/white_bg.png'

import Header from '../main/layout/clientLayout/Header'
import SideBar from '../main/layout/clientLayout/SideBar'
import SubHeader from '../main/layout/clientLayout/SubHeader'
import Transactions from '../main/layout/clientLayout/Transactions'

import * as orderAction from '../store/actions/burgerIndex'

function Deposit(props) {
    const [packageProfit, setPackageProfit] = useState(0)
    const [amountToDeposit, setAmountToDeposit] = useState(0)
    const [packageName, setPackageName] = useState('')

    const [planDetails, setPlanDetails] = useState({})
    const [message, setMessage] = useState('')
    const [error, setError] = useState(false)
    const [adminBitcoinAddress, setAdminBitcoinAddress] = useState('')
    const [adminEthereumAddress, setAdminEthereumAddress] = useState('')

    const options = [
        { label: 'Helm ($500 - $4,999)', value: 'Helm' },
        { label: 'Premium ($5,000 - $19,999)', value: 'Premium' },
        { label: 'Business ($20,000 - $50,000)', value: 'Business' },
        { label: 'Bronze ($500 - $4,999)', value: 'Bronze' },
        { label: 'Silver ($5,000 - $19,999)', value: 'Silver' },
        { label: 'Gold ($20,000 - $49,999)', value: 'Gold' },
        { label: 'Diamond ($50,000 - $500,000)', value: 'Diamond' },
        { label: 'One Month ($500 - $4,999)', value: 'One Month' },
        { label: 'Two Months ($5,000 - $19,999)', value: 'Two Months' },
        { label: 'Three Months ($20,000 - $49,999)', value: 'Three Months' },
        { label: 'Six Months ($50,000 - $500,000)', value: 'Six Months' }
       
    ]

    const onPackageChange = (newValue) => {
        const selectedPackage = newValue.value

        if (selectedPackage === 'Helm') {
            setPackageName('Helm')
            setPackageProfit(amountToDeposit * 0.1)
        }
        if (selectedPackage === 'Premium') {
            setPackageName('Premium')

            setPackageProfit(amountToDeposit * 0.2)
        }
        if (selectedPackage === 'Business') {
            setPackageName('Business')

            setPackageProfit(amountToDeposit * 0.3)
        }
        if (selectedPackage === 'Bronze') {
            setPackageName('Bronze')

            setPackageProfit(amountToDeposit * 0.4)
        }
        if (selectedPackage === 'Silver') {
            setPackageName('Silver')

            setPackageProfit(amountToDeposit * 0.6)
        }
        if (selectedPackage === 'Gold') {
            setPackageName('Gold')

            setPackageProfit(amountToDeposit * 0.8)
        }
        if (selectedPackage === 'Diamond') {
            setPackageName('Diamond')

            setPackageProfit(amountToDeposit * 0.8)
        }
        if (selectedPackage === 'One Month') {
            setPackageName('One Month')

            setPackageProfit(amountToDeposit * 0.8)
        }
        if (selectedPackage === 'Two Months') {
            setPackageName('Two Months')

            setPackageProfit(amountToDeposit * 0.8)
        }
        if (selectedPackage === 'Three Months') {
            setPackageName('Three Months')

            setPackageProfit(amountToDeposit * 0.8)
        }
        if (selectedPackage === 'Six Months') {
            setPackageName('Six Months')

            setPackageProfit(amountToDeposit * 0.8)
        }
        
    }

    const onAmountChange = (e) => {
        const amountValue = e.target.value

        if (packageName === 'Helm') {
            setPackageName('Helm')
            setPackageProfit(amountValue * 0.1)
        }
        if (packageName === 'Premium') {
            setPackageName('Premium')

            setPackageProfit(amountValue * 0.2)
        }
        if (packageName === 'Business') {
            setPackageName('Business')

            setPackageProfit(amountValue * 0.3)
        }
        if (packageName === 'Package D') {
            setPackageName('Package D')

            setPackageProfit(amountValue * 0.4)
        }
        if (packageName === 'Package E') {
            setPackageName('Package E')

            setPackageProfit(amountValue * 0.6)
        }
        if (packageName === 'Package F') {
            setPackageName('Package F')

            setPackageProfit(amountValue * 0.8)
        }

        setAmountToDeposit(amountValue)
    }

    useEffect(() => {
        switch (packageName) {
            case 'Helm':
                setPlanDetails({
                    name: 'Helm',
                    percent: 2,
                    hours: 24,
                    minimum: 500,
                    maximum: 4999,
                })
                break
            case 'Premium':
                setPlanDetails({
                    name: 'Premium',
                    percent: 2.5,
                    hours: 24,
                    minimum: 5000,
                    maximum: 1999,
                })
                break
            case 'Business':
                setPlanDetails({
                    name: 'Business',
                    percent: 3.5,
                    days: 6,
                    minimum: 500,
                    maximum: 999,
                })
                break
            case 'Package D':
                setPlanDetails({
                    name: 'PACKAGE D',
                    percent: 40,
                    days: 8,
                    minimum: 1000,
                    maximum: 4999,
                })
                break
            case 'Package E':
                setPlanDetails({
                    name: 'PACKAGE E',
                    percent: 60,
                    days: 10,
                    minimum: 5000,
                    maximum: 9999,
                })
                break
            case 'Package F':
                setPlanDetails({
                    name: 'PACKAGE F',
                    percent: 80,
                    days: 12,
                    minimum: 10000,
                    maximum: 'UNLIMITED',
                })
                break

            default:
                setPlanDetails({})
                break
        }
    }, [packageName])

    useEffect(() => {
        if (props.adminData) {
            setAdminBitcoinAddress(props.adminData.bitcoinAccount)
            setAdminEthereumAddress(props.adminData.ethereumAccount)
        }
    }, [props])

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            packageName,
            amountToDeposit: Math.floor(amountToDeposit),
            currency: 'Bitcoin',
        }

        console.log({ formData })
        if (amountToDeposit === '' || amountToDeposit === '0') {
            setMessage('Please enter a value')
            return setError(true)
        } else {
            // setMessage('Order Successful!! ')
            setError(false)

            if (!error) {
                props.onInitInvestNow(formData, props.tokenId)

                props.history.push('/admin/plan-confirmation/:' + packageName, {
                    ...formData,
                    packageName,
                    planDetails,
                    adminBitcoinAddress,
                    adminEthereumAddress,
                })
            }
        }
    }

    return (
        <>
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

                <div
                    class='cabItem depList'
                    style={{ color: 'black', background: '#b6cece' }}
                >
                    <span class='captionDark center'>deposit</span>

                    <div class='operWrap'>
                        <form
                            class='formLogin'
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
                            <div class='item'>
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

                                <h2
                                    style={{
                                        textAlign: 'center',
                                        margin: '20px',
                                    }}
                                >
                                    Total Profit: $
                                    <pwex>{Math.floor(packageProfit)}</pwex>
                                </h2>

                                <br />

                                <div class='formBlockLight'>
                                    <label style={{ color: 'black' }}>
                                        Package:
                                    </label>
                                    <Select
                                        options={options}
                                        isClearable
                                        onChange={onPackageChange}
                                    />
                                </div>

                                <div class='formBlockLight'>
                                    <label style={{ color: 'black' }}>
                                        Amount:
                                    </label>
                                    <input
                                        type='number'
                                        value={amountToDeposit}
                                        onChange={onAmountChange}
                                        autofocus='autofocus'
                                        name='amount'
                                        placeholder='$0.00'
                                    />
                                </div>

                                <br />
                                <span
                                    class='form-text'
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

                                <div style={{ textAlign: 'center' }}>
                                    <button type='submit' class='btnFillDarkMd'>
                                        {props.loading
                                            ? 'Loading..'
                                            : 'Deposit'}{' '}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <p class='copyright'>
                    © 2021 Growveon cryptotrading. All rights reserved.
                </p>
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        err: state.auth.error,
        loading: state.users.loading,
        tokenId: state.auth.tokenId,
        userData: state.auth.userData,
        userFundAccount: state.auth.userFundAccount,
        userId: state.auth.userId,
        totalUserDeposits: state.auth.totalUserDeposits,
        totalUserWithdrawals: state.auth.totalUserWithdrawals,
        fundAccountCount: state.auth.fundAccountCount,
        adminData: state.users.adminData,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        //onInitGetUser: (token) => dispatch(actionTypes.initGetUser(token)),
        onInitInvestNow: (data, token) =>
            dispatch(orderAction.initInvestNow(data, token)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Deposit)
