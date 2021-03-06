import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import queryString from 'query-string'
import { connect } from 'react-redux'

import * as orderAction from '../../store/actions/burgerIndex'
import Input from '../Input'
import { required, length, email } from '../../util/validators'
import Auth from './Auth'

const Signup = (props) => {
    const parsed = queryString.parse(window.location.search)
    console.log("update")

    const [state, setState] = useState({
        signupForm: {
            fullname: {
                value: '',
                valid: false,
                touched: false,
                validators: [required, length({ min: 6 })],
            },
            username: {
                value: '',
                valid: false,
                touched: false,
                validators: [required, length({ min: 3 })],
            },
            email: {
                value: '',
                valid: false,
                touched: false,
                validators: [required, email],
            },
            confirmEmail: {
                value: '',
                valid: false,
                touched: false,
                validators: [required, email],
            },
            password: {
                value: '',
                valid: false,
                touched: false,
                validators: [required, length({ min: 6 })],
            },
            confirmPassword: {
                value: '',
                valid: false,
                touched: false,
                validators: [required, length({ min: 6 })],
            },
            bitcoinAccount: {
                value: '',
                valid: false,
                touched: false,
                validators: [length({ min: 26 })],
            },
            ethereumAccount: {
                value: '',
                valid: false,
                touched: false,
                validators: [length({ min: 40 })],
            },
            referral: {
                value: parsed.ref ? parsed.ref : '',
                valid: false,
                touched: false,
                validators: [length({ min: 3 })],
            },
        },
        formValid: false,
    })

    const [message, setMessage] = useState(null)

    useEffect(() => {
        if (props.err) {
            setMessage({
                error: props.err.page === 'signup' ? props.err.error : null,
            })
        } else if (props.tokenId) {
            setMessage({
                success: 'Success',
            })
        }
    }, [props])

    const inputChangeHandler = (input, value) => {
        setState((prevState) => {
            let isValid = true
            for (const validator of prevState.signupForm[input].validators) {
                const emailValue = prevState.signupForm.email.value
                const passwordValue = prevState.signupForm.password.value

                if (input === 'confirmEmail') {
                    if (emailValue !== value) {
                        isValid = false
                    } else {
                        isValid = true
                    }
                }
                if (input === 'confirmPassword') {
                    if (passwordValue !== value) {
                        isValid = false
                    } else {
                        isValid = true
                    }
                }

                isValid = isValid && validator(value)
            }
            const updatedForm = {
                ...prevState.signupForm,
                [input]: {
                    ...prevState.signupForm[input],
                    valid: isValid,
                    value: value,
                    touched: true,
                },
            }
            let formIsValid = true
            for (const inputName in updatedForm) {
                if (
                    inputName !== 'formValid' &&
                    inputName !== '[object Object]' &&
                    inputName !== 'bitcoinAccount' &&
                    inputName !== 'ethereumAccount' &&
                    inputName !== 'referral'
                ) {
                    formIsValid = formIsValid && updatedForm[inputName].valid
                }

            }
            return {
                signupForm: updatedForm,
                formValid: formIsValid,
            }
        })
    }

    const inputBlurHandler = (input) => {}

    const handleSignup = (e) => {
        e.preventDefault()
        if (state.formValid) {
            props.onInitSignup(state)
        } else {
            setMessage({ error: 'Wrong Input, please check your entries' })
        }
    }

    if (props.redirectToLoginPage) {
        props.history.push(props.redirectToLoginPage)
    }

    return (
        <>
            <div className='loginpage signuppage'>
                <div className=''>
                    <div className='loginwrappers'>
                        <div className='login_left signup_left'>
                            <Auth message={message}>
                                <section className='login'>
                                    <h3>User Registration</h3>

                                    <form
                                        onSubmit={handleSignup}
                                        name='regform'
                                    >
                                        <div
                                            style={{
                                                width: '48%',
                                                float: 'left',
                                            }}
                                        >
                                            <table
                                                cellSpacing='0'
                                                cellPadding='2'
                                                border='0'
                                                width='100%'
                                            >
                                                <tr>
                                                    <td width='100%'>
                                                        {' '}
                                                        <Input
                                                            label='Fullname'
                                                            className='inpts'
                                                            size='30'
                                                            id='fullname'
                                                            type='text'
                                                            control='input'
                                                            minLength={6}
                                                            placeholder='Your Full Name'
                                                            onChange={
                                                                inputChangeHandler
                                                            }
                                                            onBlur={inputBlurHandler.bind(
                                                                'fullname'
                                                            )}
                                                            value={
                                                                state
                                                                    .signupForm[
                                                                    'fullname'
                                                                ].value
                                                            }
                                                            valid={
                                                                state
                                                                    .signupForm[
                                                                    'fullname'
                                                                ].valid
                                                            }
                                                            touched={
                                                                state
                                                                    .signupForm[
                                                                    'fullname'
                                                                ].touched
                                                            }
                                                        />
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td>
                                                        <Input
                                                            label='Password'
                                                            className='inpts'
                                                            size='30'
                                                            id='password'
                                                            type='password'
                                                            control='input'
                                                            minLength={6}
                                                            placeholder='Your password'
                                                            onChange={
                                                                inputChangeHandler
                                                            }
                                                            onBlur={inputBlurHandler.bind(
                                                                'password'
                                                            )}
                                                            value={
                                                                state
                                                                    .signupForm[
                                                                    'password'
                                                                ].value
                                                            }
                                                            valid={
                                                                state
                                                                    .signupForm[
                                                                    'password'
                                                                ].valid
                                                            }
                                                            touched={
                                                                state
                                                                    .signupForm[
                                                                    'password'
                                                                ].touched
                                                            }
                                                        />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <Input
                                                            label='Confirm Password'
                                                            id='confirmPassword'
                                                            type='password'
                                                            placeholder='confirm password'
                                                            className='inpts'
                                                            control='input'
                                                            size='30'
                                                            minLength={6}
                                                            onChange={
                                                                inputChangeHandler
                                                            }
                                                            onBlur={inputBlurHandler.bind(
                                                                'confirmPassword'
                                                            )}
                                                            value={
                                                                state
                                                                    .signupForm[
                                                                    'confirmPassword'
                                                                ].value
                                                            }
                                                            valid={
                                                                state
                                                                    .signupForm[
                                                                    'confirmPassword'
                                                                ].valid
                                                            }
                                                            touched={
                                                                state
                                                                    .signupForm[
                                                                    'confirmPassword'
                                                                ].touched
                                                            }
                                                        />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <Input
                                                            label='Email'
                                                            id='email'
                                                            placeholder='Email Address'
                                                            type='email'
                                                            className='inpts'
                                                            control='input'
                                                            size='30'
                                                            onChange={
                                                                inputChangeHandler
                                                            }
                                                            onBlur={inputBlurHandler.bind(
                                                                'email'
                                                            )}
                                                            value={
                                                                state
                                                                    .signupForm[
                                                                    'email'
                                                                ].value
                                                            }
                                                            valid={
                                                                state
                                                                    .signupForm[
                                                                    'email'
                                                                ].valid
                                                            }
                                                            touched={
                                                                state
                                                                    .signupForm[
                                                                    'email'
                                                                ].touched
                                                            }
                                                        />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <Input
                                                            label='Confirm Email'
                                                            id='confirmEmail'
                                                            placeholder='confirm Email'
                                                            type='email'
                                                            className='inpts'
                                                            control='input'
                                                            size='30'
                                                            onChange={
                                                                inputChangeHandler
                                                            }
                                                            onBlur={inputBlurHandler.bind(
                                                                'confirmEmail'
                                                            )}
                                                            value={
                                                                state
                                                                    .signupForm[
                                                                    'confirmEmail'
                                                                ].value
                                                            }
                                                            valid={
                                                                state
                                                                    .signupForm[
                                                                    'confirmEmail'
                                                                ].valid
                                                            }
                                                            touched={
                                                                state
                                                                    .signupForm[
                                                                    'confirmEmail'
                                                                ].touched
                                                            }
                                                        />
                                                    </td>
                                                </tr>
                                            </table>
                                        </div>
                                        <div
                                            style={{
                                                width: '48%',
                                                float: 'right',
                                            }}
                                        >
                                            <table
                                                width='100%'
                                                border='0'
                                                cellSpacing='0'
                                            >
                                                <tr>
                                                    <td>
                                                        <Input
                                                            label='Username'
                                                            className='inpts'
                                                            size='30'
                                                            id='username'
                                                            type='text'
                                                            control='input'
                                                            minLength={6}
                                                            placeholder='Your Username'
                                                            onChange={
                                                                inputChangeHandler
                                                            }
                                                            onBlur={inputBlurHandler.bind(
                                                                'username'
                                                            )}
                                                            value={
                                                                state
                                                                    .signupForm[
                                                                    'username'
                                                                ].value
                                                            }
                                                            valid={
                                                                state
                                                                    .signupForm[
                                                                    'username'
                                                                ].valid
                                                            }
                                                            touched={
                                                                state
                                                                    .signupForm[
                                                                    'username'
                                                                ].touched
                                                            }
                                                        />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <Input
                                                            label='Bitcoin Address'
                                                            id='bitcoinAccount'
                                                            className='inpts'
                                                            type='text'
                                                            control='input'
                                                            name='pay_account[48]'
                                                            data-validate='regexp'
                                                            data-validate-regexp='^[13][a-km-zA-HJ-NP-Z1-9]{25,34}$'
                                                            data-validate-notice='Bitcoin Address'
                                                            placeholder='optional'
                                                            minLength={40}
                                                            onChange={
                                                                inputChangeHandler
                                                            }
                                                            onBlur={inputBlurHandler.bind(
                                                                'bitcoinAccount'
                                                            )}
                                                            value={
                                                                state
                                                                    .signupForm[
                                                                    'bitcoinAccount'
                                                                ].value
                                                            }
                                                            valid={
                                                                state
                                                                    .signupForm[
                                                                    'bitcoinAccount'
                                                                ].valid
                                                            }
                                                            touched={
                                                                state
                                                                    .signupForm[
                                                                    'bitcoinAccount'
                                                                ].touched
                                                            }
                                                        />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <Input
                                                            label='Ethereum Address'
                                                            id='ethereumAccount'
                                                            size='30'
                                                            className='inpts'
                                                            type='text'
                                                            control='input'
                                                            name='pay_account[69]'
                                                            data-validate='regexp'
                                                            data-validate-regexp='^(0x)?[0-9a-fA-F]{40}$'
                                                            data-validate-notice='Ethereum Address'
                                                            placeholder='optional'
                                                            onChange={
                                                                inputChangeHandler
                                                            }
                                                            onBlur={inputBlurHandler.bind(
                                                                'ethereumAccount'
                                                            )}
                                                            value={
                                                                state
                                                                    .signupForm[
                                                                    'ethereumAccount'
                                                                ].value
                                                            }
                                                            valid={
                                                                state
                                                                    .signupForm[
                                                                    'ethereumAccount'
                                                                ].valid
                                                            }
                                                            touched={
                                                                state
                                                                    .signupForm[
                                                                    'ethereumAccount'
                                                                ].touched
                                                            }
                                                        />
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td>
                                                        <Input
                                                            id='referral'
                                                            label='Referral'
                                                            type='text'
                                                            size='30'
                                                            className='inpts'
                                                            control='input'
                                                            placeholder='optional'
                                                            minLength={3}
                                                            onChange={
                                                                inputChangeHandler
                                                            }
                                                            onBlur={inputBlurHandler.bind(
                                                                'referral'
                                                            )}
                                                            value={
                                                                state
                                                                    .signupForm[
                                                                    'referral'
                                                                ].value
                                                            }
                                                            valid={
                                                                state
                                                                    .signupForm[
                                                                    'referral'
                                                                ].valid
                                                            }
                                                            touched={
                                                                state
                                                                    .signupForm[
                                                                    'referral'
                                                                ].touched
                                                            }
                                                        />
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td
                                                        style={{
                                                            display: 'flex',
                                                        }}
                                                    >
                                                        <div
                                                            style={{
                                                                display: 'grid',
                                                                color: 'black',
                                                                gridTemplateColumns:
                                                                    '2rem 1fr',
                                                                marginBottom:
                                                                    '2rem',
                                                            }}
                                                        >
                                                            <input
                                                                required
                                                                value=''
                                                                type='checkbox'
                                                            />
                                                            <label for='regCheck'>
                                                                I agree with the{' '}
                                                                <Link
                                                                    to='/terms'
                                                                    style={{
                                                                        color: '#292929',
                                                                        textDecoration:
                                                                            'underline',
                                                                    }}
                                                                >
                                                                    Terms and
                                                                    conditions
                                                                </Link>
                                                            </label>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <span className='bunicon'>
                                                            <input
                                                                design='raised'
                                                                type='submit'
                                                                value={
                                                                    props.loading
                                                                        ? 'Loading...'
                                                                        : 'Signup'
                                                                }
                                                                name='post'
                                                                loading={
                                                                    props.loading
                                                                }
                                                                className='sbmt'
                                                            />
                                                        </span>
                                                    </td>
                                                </tr>
                                            </table>
                                        </div>
                                    </form>
                                </section>
                            </Auth>

                            <section className='loginyellowbottom'>
                                <a href='login' className='loginnewuser'>
                                    Do you have an account?{' '}
                                    <span>Login Here</span>
                                </a>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='bodyWrap'>
                <div className='logRegPage'>
                    <div className='container'>
                        <div className='head'>
                            <div className='logo invisLink' style={{ opacity: 0 }}>
                                <img src={Logo} alt='logo' height='70px;' />
                                Growveon Crypto Trading
                                <Link to='/'>main</Link>
                            </div>
                        </div>
                    </div>

                    <div className='content'>
                        <div className='captionLight center'>REGISTRATION</div>
                        <div
                            className='wrap'
                            style={{
                                backgroundImage: `url(${GradBgBig}), url(${LogRegBg})`,
                            }}
                        >
                            <Auth message={message}>
                                <form
                                    onSubmit={handleSignup}
                                    name='regform'
                                    style={{
                                        marginTop: '45px',
                                        padding: '5rem',
                                    }}
                                >
                                    <div className='row'>
                                        <div className='item col4'>
                                            <div className='formBlockLight'>
                                                <Input
                                                    id='fullname'
                                                    label='fullname'
                                                    type='text'
                                                    control='input'
                                                    minLength={6}
                                                    onChange={
                                                        inputChangeHandler
                                                    }
                                                    onBlur={inputBlurHandler.bind(
                                                        'fullname'
                                                    )}
                                                    value={
                                                        state.signupForm[
                                                            'fullname'
                                                        ].value
                                                    }
                                                    valid={
                                                        state.signupForm[
                                                            'fullname'
                                                        ].valid
                                                    }
                                                    touched={
                                                        state.signupForm[
                                                            'fullname'
                                                        ].touched
                                                    }
                                                />
                                                <span className='icon-login'>
                                                    <GoPerson />
                                                </span>
                                            </div>
                                            <div className='formBlockLight'>
                                                <Input
                                                    id='username'
                                                    label='Username'
                                                    type='text'
                                                    control='input'
                                                    minLength={3}
                                                    onChange={
                                                        inputChangeHandler
                                                    }
                                                    onBlur={inputBlurHandler.bind(
                                                        'username'
                                                    )}
                                                    value={
                                                        state.signupForm[
                                                            'username'
                                                        ].value
                                                    }
                                                    valid={
                                                        state.signupForm[
                                                            'username'
                                                        ].valid
                                                    }
                                                    touched={
                                                        state.signupForm[
                                                            'username'
                                                        ].touched
                                                    }
                                                />

                                                <span className='icon-login'>
                                                    <GoPerson />
                                                </span>
                                            </div>

                                            <div className='formBlockLight'>
                                                <Input
                                                    id='bitcoinAccount'
                                                    label='Bitcoin Account'
                                                    type='text'
                                                    control='input'
                                                    minLength={26}
                                                    placeholder='optional'
                                                    onChange={
                                                        inputChangeHandler
                                                    }
                                                    onBlur={inputBlurHandler.bind(
                                                        'bitcoinAccount'
                                                    )}
                                                    value={
                                                        state.signupForm[
                                                            'bitcoinAccount'
                                                        ].value
                                                    }
                                                    valid={
                                                        state.signupForm[
                                                            'bitcoinAccount'
                                                        ].valid
                                                    }
                                                    touched={
                                                        state.signupForm[
                                                            'bitcoinAccount'
                                                        ].touched
                                                    }
                                                />
                                                <span className='icon-wallet'>
                                                    <RiBitCoinFill />
                                                </span>
                                            </div>
                                        </div>

                                        <div className='item col4'>
                                            <div className='formBlockLight'>
                                                <Input
                                                    id='email'
                                                    label='E-Mail'
                                                    type='email'
                                                    control='input'
                                                    onChange={
                                                        inputChangeHandler
                                                    }
                                                    onBlur={inputBlurHandler.bind(
                                                        'email'
                                                    )}
                                                    value={
                                                        state.signupForm[
                                                            'email'
                                                        ].value
                                                    }
                                                    valid={
                                                        state.signupForm[
                                                            'email'
                                                        ].valid
                                                    }
                                                    touched={
                                                        state.signupForm[
                                                            'email'
                                                        ].touched
                                                    }
                                                />

                                                <span className='icon-phone'>
                                                    <MdEmail />
                                                </span>
                                            </div>

                                            <div className='formBlockLight'>
                                                <Input
                                                    id='confirmEmail'
                                                    label='Confirm E-Mail'
                                                    type='email'
                                                    control='input'
                                                    onChange={
                                                        inputChangeHandler
                                                    }
                                                    onBlur={inputBlurHandler.bind(
                                                        'confirmEmail'
                                                    )}
                                                    value={
                                                        state.signupForm[
                                                            'confirmEmail'
                                                        ].value
                                                    }
                                                    valid={
                                                        state.signupForm[
                                                            'confirmEmail'
                                                        ].valid
                                                    }
                                                    touched={
                                                        state.signupForm[
                                                            'confirmEmail'
                                                        ].touched
                                                    }
                                                />
                                                <span className='icon-location'>
                                                    <MdEmail />
                                                </span>
                                            </div>

                                            <div className='agree'>
                                                <input
                                                    required
                                                    value=''
                                                    type='checkbox'
                                                />
                                                <label for='regCheck'>
                                                    I agree{' '}
                                                    <Link href='#'>
                                                        Terms and conditions
                                                    </Link>
                                                </label>
                                            </div>

                                            <input
                                                design='raised'
                                                type='submit'
                                                value={
                                                    props.loading
                                                        ? 'Loading...'
                                                        : 'Signup'
                                                }
                                                name='post'
                                                loading={props.loading}
                                                className='btnFillDarkMd'
                                            />
                                        </div>

                                        <div className='item col4'>
                                            <div className='formBlockLight'>
                                                <Input
                                                    id='password'
                                                    label='Password'
                                                    type='password'
                                                    control='input'
                                                    minLength={6}
                                                    onChange={
                                                        inputChangeHandler
                                                    }
                                                    onBlur={inputBlurHandler.bind(
                                                        'password'
                                                    )}
                                                    value={
                                                        state.signupForm[
                                                            'password'
                                                        ].value
                                                    }
                                                    valid={
                                                        state.signupForm[
                                                            'password'
                                                        ].valid
                                                    }
                                                    touched={
                                                        state.signupForm[
                                                            'password'
                                                        ].touched
                                                    }
                                                />

                                                <span className='icon-pass'>
                                                    <RiLockPasswordFill />
                                                </span>
                                            </div>

                                            <div className='formBlockLight'>
                                                <Input
                                                    id='email'
                                                    label='confirm Password'
                                                    type='password'
                                                    control='input'
                                                    minLength={6}
                                                    onChange={
                                                        inputChangeHandler
                                                    }
                                                    onBlur={inputBlurHandler.bind(
                                                        'confirmPassword'
                                                    )}
                                                    value={
                                                        state.signupForm[
                                                            'confirmPassword'
                                                        ].value
                                                    }
                                                    valid={
                                                        state.signupForm[
                                                            'confirmPassword'
                                                        ].valid
                                                    }
                                                    touched={
                                                        state.signupForm[
                                                            'confirmPassword'
                                                        ].touched
                                                    }
                                                />
                                                <span className='icon-wallet'>
                                                    <RiLockPasswordFill />
                                                </span>
                                            </div>
                                            <div className='formBlockLight'>
                                                <Input
                                                    id='ethereumAccount'
                                                    label='Ethereum Account'
                                                    type='text'
                                                    control='input'
                                                    placeholder='optional'
                                                    minLength={40}
                                                    onChange={
                                                        inputChangeHandler
                                                    }
                                                    onBlur={inputBlurHandler.bind(
                                                        'ethereumAccount'
                                                    )}
                                                    value={
                                                        state.signupForm[
                                                            'ethereumAccount'
                                                        ].value
                                                    }
                                                    valid={
                                                        state.signupForm[
                                                            'ethereumAccount'
                                                        ].valid
                                                    }
                                                    touched={
                                                        state.signupForm[
                                                            'ethereumAccount'
                                                        ].touched
                                                    }
                                                />
                                                <span className='icon-wallet'>
                                                    <FaEthereum />
                                                </span>
                                            </div>
                                            <div className='formBlockLight'>
                                                <Input
                                                    id='referral'
                                                    label='Referral'
                                                    type='text'
                                                    control='input'
                                                    placeholder='optional'
                                                    minLength={3}
                                                    onChange={
                                                        inputChangeHandler
                                                    }
                                                    onBlur={inputBlurHandler.bind(
                                                        'referral'
                                                    )}
                                                    value={
                                                        state.signupForm[
                                                            'referral'
                                                        ].value
                                                    }
                                                    valid={
                                                        state.signupForm[
                                                            'referral'
                                                        ].valid
                                                    }
                                                    touched={
                                                        state.signupForm[
                                                            'referral'
                                                        ].touched
                                                    }
                                                />
                                                <span className='icon-wallet'>
                                                    <GoPerson />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </Auth>
                        </div>
                    </div>

                    <div
                        className='bottomLine table full'
                        style={{ display: 'none' }}
                    >
                        <p className='copy tCell middle left'>
                            ?? 2021 GrowveonCryptoTrading. All rights reserved.
                        </p>
                    </div>
                    <div className='circleBg'>
                        <div className='circle'></div>
                    </div>
                </div>
            </div> */}
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        err: state.auth.error,
        loading: state.auth.loading,
        redirectToLoginPage: state.auth.redirect,
        tokenId: state.auth.tokenId,
        userId: state.auth.userId,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onInitSignup: (state) => dispatch(orderAction.initSignup(state)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Signup)
