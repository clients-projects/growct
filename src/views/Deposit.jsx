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
    const [minAmount, setMinAmount] = useState(500)
    const [maxAmount, setMaxAmount] = useState(5000)

    const [planDetails, setPlanDetails] = useState({})
    const [planDuration, setPlanDuration] = useState('24hrs')
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
        { label: 'Six Months ($50,000 - $500,000)', value: 'Six Months' },
    ]

    const onPackageChange = (newValue) => {
        const selectedPackage = newValue.value

        if (selectedPackage === 'Helm') {
            setPackageName('Helm')
            setPackageProfit(amountToDeposit * 0.02)

            setPlanDuration('24hrs')
        }
        if (selectedPackage === 'Premium') {
            setPackageName('Premium')

            setPackageProfit(amountToDeposit * 0.025)
            setPlanDuration('24hrs')
        }
        if (selectedPackage === 'Business') {
            setPackageName('Business')

            setPackageProfit(amountToDeposit * 0.035)
            setPlanDuration('24hrs')
        }
        if (selectedPackage === 'Bronze') {
            setPackageName('Bronze')

            setPackageProfit(amountToDeposit * 0.1)
            setPlanDuration('1 week')
        }
        if (selectedPackage === 'Silver') {
            setPackageName('Silver')

            setPackageProfit(amountToDeposit * 0.15)
            setPlanDuration('1 week')
        }
        if (selectedPackage === 'Gold') {
            setPackageName('Gold')

            setPackageProfit(amountToDeposit * 0.2)
            setPlanDuration('1 week')
        }
        if (selectedPackage === 'Diamond') {
            setPackageName('Diamond')

            setPackageProfit(amountToDeposit * 0.25)
            setPlanDuration('1 week')
        }
        if (selectedPackage === 'One Month') {
            setPackageName('One Month')

            setPackageProfit(amountToDeposit * 4.4)
            setPlanDuration('One Month')
        }
        if (selectedPackage === 'Two Months') {
            setPackageName('Two Months')

            setPackageProfit(amountToDeposit * 5.2)
            setPlanDuration('Two Month')
        }
        if (selectedPackage === 'Three Months') {
            setPackageName('Three Months')

            setPackageProfit(amountToDeposit * 6.4)
            setPlanDuration('Three Month')
        }
        if (selectedPackage === 'Six Months') {
            setPackageName('Six Months')

            setPackageProfit(amountToDeposit * 7.6)
            setPlanDuration('Six Month')
        }

    }

    const onAmountChange = (e) => {
        const amountValue = e.target.value

        setMinAmount(planDetails.minimum)
        setMaxAmount(planDetails.maximum)

        if (packageName === 'Helm') {
            setPackageName('Helm')
            setPackageProfit(amountToDeposit * 0.02)
        }
        if (packageName === 'Premium') {
            setPackageName('Premium')

            setPackageProfit(amountToDeposit * 0.025)
        }
        if (packageName === 'Business') {
            setPackageName('Business')

            setPackageProfit(amountToDeposit * 0.035)
        }
        if (packageName === 'Bronze') {
            setPackageName('Bronze')

            setPackageProfit(amountToDeposit * 0.1)
        }
        if (packageName === 'Silver') {
            setPackageName('Silver')

            setPackageProfit(amountToDeposit * 0.15)
        }
        if (packageName === 'Gold') {
            setPackageName('Gold')

            setPackageProfit(amountToDeposit * 0.2)
        }
         if (packageName === 'Diamond') {
             setPackageName('Diamond')

             setPackageProfit(amountToDeposit * 0.25)
         }
         if (packageName === 'One Month') {
             setPackageName('One Month')

             setPackageProfit(amountToDeposit * 4.4)
         }
         if (packageName === 'Two Months') {
             setPackageName('Two Months')

             setPackageProfit(amountToDeposit * 5.2)
         }
         if (packageName === 'Three Months') {
             setPackageName('Three Months')

             setPackageProfit(amountToDeposit * 6.4)
         }
         if (packageName === 'Six Months') {
             setPackageName('Six Months')

             setPackageProfit(amountToDeposit * 7.6)
         }

        setAmountToDeposit(amountValue)
    }

    useEffect(() => {
        switch (packageName) {
            case 'Helm':
                setPlanDetails({
                    name: 'Helm',
                    percent: 2,
                    day: 1,
                    minimum: 500,
                    maximum: 4999,
                })
                break
            case 'Premium':
                setPlanDetails({
                    name: 'Premium',
                    percent: 2.5,
                    day: 1,
                    minimum: 5000,
                    maximum: 1999,
                })
                break
            case 'Business':
                setPlanDetails({
                    name: 'Business',
                    percent: 3.5,
                    day: 1,
                    minimum: 20000,
                    maximum: 50000,
                })
                break
            case 'Bronze':
                setPlanDetails({
                    name: 'Bronze',
                    percent: 10,
                    days: 7,
                    minimum: 500,
                    maximum: 4999,
                })
                break
            case 'Silver':
                setPlanDetails({
                    name: 'Silver',
                    percent: 15,
                    days: 7,
                    minimum: 5000,
                    maximum: 19999,
                })
                break
            case 'Gold':
                setPlanDetails({
                    name: 'Gold',
                    percent: 20,
                    days: 7,
                    minimum: 20000,
                    maximum: 49999,
                })
                break
            case 'Diamond':
                setPlanDetails({
                    name: 'Diamond',
                    percent: 25,
                    days: 7,
                    minimum: 50000,
                    maximum: 500000,
                })
                break
            case 'One Month':
                setPlanDetails({
                    name: 'One Month',
                    percent: 44,
                    days: 30,
                    minimum: 500,
                    maximum: 4999,
                })
                break
            case 'Two Months':
                setPlanDetails({
                    name: 'Two Months',
                    percent: 52,
                    days: 30,
                    minimum: 5000,
                    maximum: 19999,
                })
                break
            case 'Three Months':
                setPlanDetails({
                    name: 'Three Months',
                    percent: 64,
                    days: 30,
                    minimum: 20000,
                    maximum: 49999,
                })
                break
            case 'Six Months':
                setPlanDetails({
                    name: 'Six Months',
                    percent: 76,
                    days: 30,
                    minimum: 50000,
                    maximum: 500000,
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
                                    Profit: $
                                    <pwex>{Math.floor(packageProfit)}</pwex> for{' '}
                                    {planDuration}
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
                                        min={minAmount}
                                        max={maxAmount}
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
