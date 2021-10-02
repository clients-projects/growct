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
            case 'Helm':
                setPlanDetails({
                    name: 'Helm',
                    percent: 2,
                    days: 1,
                    minimum: 500,
                    maximum: 4999,
                })
                break
            case 'Premium':
                setPlanDetails({
                    name: 'Premium',
                    percent: 2.5,
                    days: 1,
                    minimum: 5000,
                    maximum: 1999,
                })
                break
            case 'Business':
                setPlanDetails({
                    name: 'Business',
                    percent: 3.5,
                    days: 1,
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
