import React, { useState, useEffect } from 'react'

import { connect } from 'react-redux'

import GradBgRev from '../../images/grad_bg_rev.png'
import WhiteBg from '../../images/white_bg.png'

import Header from '../../main/layout/siteOwnerLayout/Header'
import SideBar from '../../main/layout/siteOwnerLayout/SideBar'
import SubHeader from '../../main/layout/siteOwnerLayout/SubHeader'
import Transactions from '../../main/layout/siteOwnerLayout/Transactions'

import * as orderAction from '../../store/actions/burgerIndex'

const UserSettings = (props) => {
    const [fullname, setFullname] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [bitcoin, setBitcoin] = useState('')
    const [ethereum, setEthereum] = useState('')
    // const [profilePic, setProfilePic] = useState('')
    const [phone, setPhone] = useState('')
    const [country, setCountry] = useState('')
    const [city, setCity] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmNewPassword] = useState('')

    const [oldEmail, setOldEmail] = useState('')

    const [message, setMessage] = useState('')
    const [error, setError] = useState(false)

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value

        if (name === 'fullname') {
            setFullname(value)
        }
        if (name === 'username') {
            setUsername(value)
        }
        if (name === 'email') {
            setEmail(value)
        }
        if (name === 'bitcoin') {
            setBitcoin(value)
        }
        if (name === 'ethereum') {
            setEthereum(value)
        }
        if (name === 'phone') {
            setPhone(value)
        }
        if (name === 'country') {
            setCountry(value)
        }
        if (name === 'city') {
            setCity(value)
        }
        if (name === 'password') {
            setPassword(value)
        }
        if (name === 'confirmNewPassword') {
            setConfirmNewPassword(value)
        }
    }

    useEffect(() => {
        if (props.userData) {
            const fetchedBitcoin = props.userData.bitcoinAccount
            const fetchedEmail = props.userData.email
            const fetchedEthereum = props.userData.ethereumAccount
            const fetchedFullname = props.userData.fullname
            const fetchedUsername = props.userData.username
            const fetchedCity = props.userData.city
            const fetchedCountry = props.userData.country
            const fetchedPhone = props.userData.phone

            setFullname(fetchedFullname)

            setCity(fetchedCity)
            setCountry(fetchedCountry)
            setPhone(fetchedPhone)
            setUsername(fetchedUsername)

            setEmail(fetchedEmail)
            setOldEmail(fetchedEmail)
            setBitcoin(fetchedBitcoin)

            setEthereum(fetchedEthereum)
        }
    }, [props])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            setMessage('Passwords do not match')
            setError(true)
            return
        } else {
            setMessage('Updated successfully')
            setError(false)
        }
        const formData = {
            fullname,
            username,
            password,
            oldEmail,
            email,
            city,
            country,
            phone,
            ethereum,
            bitcoin,
            confirmPassword,
        }

        props.onInitUpdateProfile(formData, props.tokenId)
    }

    return (
        <div className='content'>
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
                                    <div className='balInfo' id='infodata'>
                                        <Transactions />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id='content_place'></div>

                <div
                    className='cabItem depList'
                    style={{ background: '#d5e1e3' }}
                >
                    <span className='captionDark center'>Account Settings</span>

                    <div className='wrap' style={{ padding: '1rem 3rem' }}>
                        <div className='row'>
                            <>
                                <div className='formBlockDark'>
                                    <br />

                                    <center>
                                        <form
                                            onSubmit={handleSubmit}
                                            style={{ color: 'black' }}
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
                                            <table
                                                cellspacing='0'
                                                cellpadding='2'
                                                border='0'
                                            >
                                                <tbody>
                                                    <tr>
                                                        <td>FullName</td>
                                                        <td>
                                                            <input
                                                                type='text'
                                                                name='fullname'
                                                                onChange={
                                                                    handleChange
                                                                }
                                                                value={fullname}
                                                            />
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td>Username:</td>
                                                        <td>
                                                            <input
                                                                name='username'
                                                                type='text'
                                                                value={username}
                                                                onChange={
                                                                    handleChange
                                                                }
                                                            />
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td>
                                                            Your E-mail address:
                                                        </td>
                                                        <td>
                                                            <input
                                                                minLength={5}
                                                                type='email'
                                                                name='email'
                                                                value={email}
                                                                onChange={
                                                                    handleChange
                                                                }
                                                            />
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td>
                                                            Your Phone number:
                                                        </td>
                                                        <td>
                                                            <input
                                                                type='number'
                                                                name='phone'
                                                                value={phone}
                                                                onChange={
                                                                    handleChange
                                                                }
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>City:</td>
                                                        <td>
                                                            <input
                                                                type='text'
                                                                name='city'
                                                                value={city}
                                                                onChange={
                                                                    handleChange
                                                                }
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Country:</td>
                                                        <td>
                                                            <input
                                                                type='text'
                                                                name='country'
                                                                value={country}
                                                                onChange={
                                                                    handleChange
                                                                }
                                                            />
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td>New Password:</td>
                                                        <td>
                                                            <input
                                                                type='password'
                                                                value={password}
                                                                name='password'
                                                                onChange={
                                                                    handleChange
                                                                }
                                                            />
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td>
                                                            Retype Password:
                                                        </td>
                                                        <td>
                                                            <input
                                                                type='password'
                                                                value={
                                                                    confirmPassword
                                                                }
                                                                name='confirmNewPassword'
                                                                onChange={
                                                                    handleChange
                                                                }
                                                            />
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td>
                                                            Your BITCOIN Wallet:
                                                        </td>
                                                        <td>
                                                            <input
                                                                type='text'
                                                                name='bitcoin'
                                                                value={bitcoin}
                                                                onChange={
                                                                    handleChange
                                                                }
                                                            />
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td>
                                                            Your ETHEREUM
                                                            Wallet:
                                                        </td>
                                                        <td>
                                                            <input
                                                                type='text'
                                                                name='ethereum'
                                                                value={ethereum}
                                                                onChange={
                                                                    handleChange
                                                                }
                                                            />
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td>&nbsp;</td>
                                                        <td>
                                                            <button
                                                                type='submit'
                                                                name='post'
                                                                className='btnFillGradLg center'
                                                            >
                                                                {props.loading
                                                                    ? 'Loading...'
                                                                    : 'Update Profile'}
                                                            </button>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </form>
                                    </center>
                                </div>
                            </>
                        </div>
                    </div>
                </div>
                <p className='copyright'>
                    © 2021 Growveon cryptotrading. All rights reserved.
                </p>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        loading: state.users.loading,
        err: state.auth.error,
        tokenId: state.auth.tokenId,
        userId: state.auth.userId,
        userData: state.auth.userData,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onInitUpdateProfile: (data, token) =>
            dispatch(orderAction.initUpdateProfile(data, token)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserSettings)
