import React, { useState, useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import queryString from 'query-string'

import * as orderAction from '../../store/actions/burgerIndex'
import ClientCard from '../../components/Card/ClientCard'

import GradBgRev from '../../images/grad_bg_rev.png'
import WhiteBg from '../../images/white_bg.png'

import Header from '../../main/layout/siteOwnerLayout/Header'
import SideBar from '../../main/layout/siteOwnerLayout/SideBar'
import SubHeader from '../../main/layout/siteOwnerLayout/SubHeader'
import Transactions from '../../main/layout/siteOwnerLayout/Transactions'

const thDepositArray = ['No', 'Amount', 'Package', 'profit', 'Date']

const UserDetails = (props) => {
    const [userDeposits, setUserDeposits] = useState([])
    const [profit, setProfit] = useState({})
    const [isTouchedProfit, setIsTouchedProfit] = useState(false)

    const gottenAllUser = useRef()

    const parsed = queryString.parse(window.location.search)

    useEffect(() => {
        if (!gottenAllUser.current) {
            if (props.tokenId) {
                props.onInitGetMember(parsed.id, props.tokenId)
            }
            gottenAllUser.current = true
        } else {
            if (props.memberDeposits) {
                setUserDeposits(props.memberDeposits)
            }
        }
    }, [props, parsed.id])

    const [accountBalance, setAccountBalance] = useState(0)
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
    const [activeReferrals, setActiveReferrals] = useState(0)
    const [totalReferrals, setTotalReferrals] = useState(0)
    const [dailyEarning, setDailyEarning] = useState(0)
    const [totalEarnings, setTotalEarnings] = useState(0)
    const [totalReferralCommission, setTotalReferralCommission] = useState(0)

    const [message, setMessage] = useState('')
    const [error, setError] = useState(false)

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value

        if (name === 'fullname') {
            setFullname(value)
        }
        if (name === 'dailyEarning') {
            setDailyEarning(value)
        }
        if (name === 'totalEarnings') {
            setTotalEarnings(value)
        }
        if (name === 'accountBalance') {
            setAccountBalance(value)
        }
        if (name === 'activeReferrals') {
            setActiveReferrals(value)
        }
        if (name === 'totalReferrals') {
            setTotalReferrals(value)
        }
        if (name === 'totalReferralCommission') {
            setTotalReferralCommission(value)
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

    const handleMember = (e, p) => {
        for (let i of userDeposits) {
            if (i.fundNO === p + 1) {
                if (e.target.name === '3') {
                    setIsTouchedProfit(true)
                    setProfit({
                        [p]: e.target.value,
                    })
                }
            }
        }
    }

    const updateMemberProfit = (id) => {
        for (let i = 0; i < props.memberId.length; i++) {
            if (id === i) {
                props.onInitUpdateProfit(
                    profit[i],
                    props.memberId[i]._id,
                    props.tokenId
                )
            }
        }
    }

    useEffect(() => {
        if (props.member) {
            const fetchedBitcoin = props.member.bitcoinAccount
            const fetchedEmail = props.member.email
            const fetchedEthereum = props.member.ethereumAccount
            const fetchedFullname = props.member.fullname
            const fetchedUsername = props.member.username
            const fetchedCity = props.member.city
            const fetchedCountry = props.member.country
            const fetchedPhone = props.member.phone
            const fetchedDailyEarning = props.member.dailyEarning
            const fetchedTotalEarnings = props.member.totalEarnings
            const fetchedAccountBalance = props.member.accountBalance
            const fetchedActiveReferrals = props.member.activeReferrals
            const fetchedTotalReferrals = props.member.totalReferrals
            const fetchedTotalReferralCommission =
                props.member.totalReferralCommission

            setFullname(fetchedFullname)

            setCity(fetchedCity)
            setCountry(fetchedCountry)
            setPhone(fetchedPhone)
            setUsername(fetchedUsername)

            setEmail(fetchedEmail)
            setOldEmail(fetchedEmail)
            setBitcoin(fetchedBitcoin)

            setEthereum(fetchedEthereum)

            setDailyEarning(fetchedDailyEarning)
            setTotalEarnings(fetchedTotalEarnings)
            setActiveReferrals(fetchedActiveReferrals)
            setTotalReferrals(fetchedTotalReferrals)
            setTotalReferralCommission(fetchedTotalReferralCommission)
            setAccountBalance(fetchedAccountBalance)
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
            accountBalance: Number(accountBalance),
            fullname,
            username,
            password,
            oldEmail,
            email,
            city,
            dailyEarning: Number(dailyEarning),
            totalEarnings: Number(totalEarnings),
            activeReferrals: Number(activeReferrals),
            totalReferrals: Number(totalReferrals),
            totalReferralCommission: Number(totalReferralCommission),
            country,
            phone,
            ethereum,
            bitcoin,
            confirmPassword,
        }

        props.onInitUpdateMember(formData, props.tokenId)
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
                                    <Transactions />
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
                    <span className='captionDark center'>User Details</span>

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
                                                        <td>Account Balance</td>
                                                        <td>
                                                            <input
                                                                type='number'
                                                                name='accountBalance'
                                                                onChange={
                                                                    handleChange
                                                                }
                                                                value={
                                                                    accountBalance
                                                                }
                                                            />
                                                        </td>
                                                    </tr>
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
                                                        <td>Daily Earning:</td>
                                                        <td>
                                                            <input
                                                                type='number'
                                                                name='dailyEarning'
                                                                value={
                                                                    dailyEarning
                                                                }
                                                                onChange={
                                                                    handleChange
                                                                }
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Total Earnings:</td>
                                                        <td>
                                                            <input
                                                                type='number'
                                                                name='totalEarnings'
                                                                value={
                                                                    totalEarnings
                                                                }
                                                                onChange={
                                                                    handleChange
                                                                }
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            Active Referrals:
                                                        </td>
                                                        <td>
                                                            <input
                                                                type='number'
                                                                name='activeReferrals'
                                                                value={
                                                                    activeReferrals
                                                                }
                                                                onChange={
                                                                    handleChange
                                                                }
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            Total Referrals:
                                                        </td>
                                                        <td>
                                                            <input
                                                                type='number'
                                                                name='totalReferrals'
                                                                value={
                                                                    totalReferrals
                                                                }
                                                                onChange={
                                                                    handleChange
                                                                }
                                                            />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            Total Referral
                                                            Commission:
                                                        </td>
                                                        <td>
                                                            <input
                                                                type='number'
                                                                name='totalReferralCommission'
                                                                value={
                                                                    totalReferralCommission
                                                                }
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
                                                        <td>BITCOIN Wallet:</td>
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
                                                            ETHEREUM Wallet:
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
                                                        <td>&nbsp;</td>
                                                        <td>
                                                            <button
                                                                type='submit'
                                                                name='post'
                                                                className='btnFillGradLg center'
                                                                style={{
                                                                    margin: '2rem 0',
                                                                }}
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

                            <br />
                        </div>
                    </div>
                    <div
                        className='cabItem depList'
                        style={{ background: '#d5e1e3' }}
                    >
                        <span className='captionDark center'>
                            User Deposits
                        </span>

                        <div className='wrap' style={{ padding: '1rem 3rem' }}>
                            <div className='row'>
                                <ClientCard
                                    plain
                                    ctTableFullWidth
                                    ctTableResponsive
                                    content={
                                        <table
                                            cellspacing='10'
                                            cellpadding='2'
                                            border='0'
                                            width='100%'
                                        >
                                            <thead>
                                                <tr className='clientCard__tr'>
                                                    {thDepositArray.map(
                                                        (prop, key) => {
                                                            return (
                                                                <th key={key}>
                                                                    {prop}
                                                                </th>
                                                            )
                                                        }
                                                    )}
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {userDeposits.map(
                                                    (prop, Key) => {
                                                        return (
                                                            <tr
                                                                key={Key}
                                                                className='member__withdrawal'
                                                            >
                                                                {Object.values(
                                                                    prop
                                                                ).map(
                                                                    (
                                                                        prop,
                                                                        key
                                                                    ) => {
                                                                        return (
                                                                            <td
                                                                                key={
                                                                                    key
                                                                                }
                                                                                align='center'
                                                                            >
                                                                                <input
                                                                                    type={
                                                                                        key ===
                                                                                        3
                                                                                            ? 'number'
                                                                                            : 'text'
                                                                                    }
                                                                                    disabled={
                                                                                        key !==
                                                                                        3
                                                                                            ? true
                                                                                            : false
                                                                                    }
                                                                                    value={
                                                                                        key ===
                                                                                        3
                                                                                            ? !isTouchedProfit
                                                                                                ? prop
                                                                                                : profit.Key
                                                                                            : prop
                                                                                    }
                                                                                    onChange={(
                                                                                        e
                                                                                    ) =>
                                                                                        handleMember(
                                                                                            e,
                                                                                            Key
                                                                                        )
                                                                                    }
                                                                                    name={
                                                                                        key
                                                                                    }
                                                                                    className='memberId'
                                                                                />
                                                                            </td>
                                                                        )
                                                                    }
                                                                )}
                                                                <button
                                                                    className='btn1'
                                                                    onClick={() =>
                                                                        updateMemberProfit(
                                                                            Key
                                                                        )
                                                                    }
                                                                >
                                                                    {props.loading
                                                                        ? 'Loading...'
                                                                        : 'Update Profit'}
                                                                </button>
                                                            </tr>
                                                        )
                                                    }
                                                )}
                                            </tbody>
                                        </table>
                                    }
                                />

                                <br />
                            </div>
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
        tokenId: state.auth.tokenId,
        userId: state.auth.userId,
        member: state.auth.member,
        memberDeposits: state.auth.memberDeposits,
        memberId: state.auth.memberId,
        memberWithdrawals: state.auth.memberWithdrawals,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onInitGetMember: (token, id) =>
            dispatch(orderAction.initGetMember(token, id)),
        onInitUpdateMember: (updateMemberData, token) =>
            dispatch(orderAction.initUpdateMember(updateMemberData, token)),
        onInitUpdateProfit: (updateProfitData, memberId, token) =>
            dispatch(
                orderAction.initUpdateProfit(updateProfitData, memberId, token)
            ),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserDetails)
