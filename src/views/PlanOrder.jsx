import React, { useState, useEffect } from 'react'
import { FormGroup, FormControl, Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import { StatsCard } from '../components/StatsCard/StatsCard'

// import { generateBase64FromImage } from '../util/image'
import * as orderAction from '../store/actions/burgerIndex'

const PlanOrder = (props) => {
    let [amount, setAmount] = useState('')
    const [currency, setCurrency] = useState('Bitcoin')
    //const [file, setFile] = useState('')
    //const [imagePreview, setImagePreview] = useState(null)
    const [planDetails, setPlanDetails] = useState({})
    const [userAccountBalance, setUserAccountBalance] = useState(0)
    const [message, setMessage] = useState('')
    const [error, setError] = useState(false)
    const [adminBitcoinAddress, setAdminBitcoinAddress] = useState('')
    const [adminEthereumAddress, setAdminEthereumAddress] = useState('')

    const handleAmountChange = (e) => {
        setAmount(e.target.value)
    }
    const handleSelectChange = (e) => {
        setCurrency(e.target.value)
    }
    // const handleFileChange = (e) => {
    //     const files = e.target.files
    //     if (files) {
    //         generateBase64FromImage(files[0])
    //         generateBase64FromImage(files[0])
    //             .then((b64) => {
    //                 setImagePreview(b64)
    //             })
    //             .catch((e) => {
    //                 setImagePreview(null)
    //             })
    //     }
    //     setFile(e.target.files)
    // }

    const selectedPlan = props.match.params.id.split(':')[1]

    useEffect(() => {
        switch (selectedPlan) {
            case 'PACKAGE A':
                setPlanDetails({
                    name: 'PACKAGE A',
                    percent: 10,
                    hours: 48,
                    minimum: 50,
                    maximum: 199,
                })
                break
            case 'PAKAGE B':
                setPlanDetails({
                    name: 'PACKAGE B',
                    percent: 20,
                    days: 4,
                    minimum: 200,
                    maximum: 499,
                })
                break
            case 'PACKAGE C':
                setPlanDetails({
                    name: 'PACKAGE C',
                    percent: 30,
                    days: 6,
                    minimum: 500,
                    maximum: 999,
                })
                break
            case 'PACKAGE D':
                setPlanDetails({
                    name: 'PACKAGE D',
                    percent: 40,
                    days: 8,
                    minimum: 1000,
                    maximum: 4999,
                })
                break
            case 'PACKAGE E':
                setPlanDetails({
                    name: 'PACKAGE E',
                    percent: 60,
                    days: 10,
                    minimum: 5000,
                    maximum: 9999,
                })
                break
            case 'PACKAGE F':
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
    }, [selectedPlan])

    useEffect(() => {
        if (props.userData.hasOwnProperty('username')) {
            setUserAccountBalance(props.userData.accountBalance)
        }

        if (props.adminData) {
            setAdminBitcoinAddress(props.adminData.bitcoinAccount)
            setAdminEthereumAddress(props.adminData.ethereumAccount)
        }
    }, [props])

    const displayUserFunds = `$${userAccountBalance}`

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            selectedPlan,
            amount,
            currency,
        }

        if (amount === '' || amount === '0') {
            setMessage('Please enter a value')
            return setError(true)
        }

        if (amount > userAccountBalance) {
            setMessage('Insufficiant Balance')
            return setError(true)
        } else {
            setMessage('Order Successful!! ')
            setError(false)

            if (!error) {
                amount = Number(amount)

                props.onInitInvestNow(formData, props.tokenId)

                props.history.push(
                    '/admin/plan-confirmation/:' + selectedPlan,
                    {
                        ...formData,
                        selectedPlan,
                        planDetails,
                        adminBitcoinAddress,
                        adminEthereumAddress,
                    }
                )
            }
        }
    }

    return (
        <>
            <div className='fundAccount'>
                <Row className='fundAccount__balance'>
                    <Col lg={12} sm={12}>
                        <StatsCard
                            bigIcon={
                                <i className='pe-7s-server text-warning' />
                            }
                            statsText='Account Balance'
                            statsValue={displayUserFunds}
                            statsIcon={<i className='fa fa-refresh' />}
                            statsIconText='Updated now'
                        />
                    </Col>
                </Row>

                <div className='fundAccount__package'>
                    <h3 className='fundAccount__package--text'>
                        SELECTED PLAN:{' '}
                        <span style={{ textTransform: 'uppercase' }}>
                            {selectedPlan}
                        </span>
                    </h3>
                </div>
                <form className='fundAccount__form' onSubmit={handleSubmit}>
                    {message && (
                        <p
                            className={
                                error ? 'message message__error' : 'message'
                            }
                        >
                            {message}
                        </p>
                    )}
                    <input
                        type='number'
                        className='fundAccount__form--input'
                        placeholder='Amount to Spend - USD'
                        name='amount'
                        id='amount'
                        onChange={handleAmountChange}
                        value={amount}
                    />

                    <select
                        name='select'
                        id='select'
                        onChange={handleSelectChange}
                        value={currency}
                        className='fundAccount__form--select'
                    >
                        <option value='Bitcoin'>Bitcoin</option>
                        <option value='Ethereum'>Ethereum</option>
                    </select>

                    <FormGroup className='fundAccount__form--instruction'>
                        <FormControl.Static>
                            INSTRUCTIONS: Transfer the equivalent amount in
                            bitcoin or ethereum(depending on your selection) to
                            the above wallet address.
                        </FormControl.Static>
                    </FormGroup>

                    {/* <div>
                        <label className='fundAccount__controlLabel'>
                            Proof of Payment (Image or PDF)
                        </label>
                        <input
                            type='file'
                            id='file'
                            name='file'
                            onChange={handleFileChange}
                            className='fundAccount__form--file'
                        />
                        {imagePreview && (
                            <>
                                <div className='image'>
                                    <img
                                        src={imagePreview}
                                        alt='...'
                                        style={{ width: '100%' }}
                                    />
                                </div>
                            </>
                        )}
                    </div> */}
                    <div className='fundAccount__form--btn'>
                        {/* <button
                            type='submit'
                            className='fundAccount__form--btn-item'
                        >
                            Submit
                        </button> */}

                        <button type='submit' className='button'>
                            {props.loading ? 'Loading..' : 'Proceed'}
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        adminData: state.users.adminData,
        loading: state.users.loading,
        err: state.auth.error,
        tokenId: state.auth.tokenId,
        userId: state.auth.userId,
        userData: state.auth.userData,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onInitInvestNow: (data, token) =>
            dispatch(orderAction.initInvestNow(data, token)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PlanOrder)
