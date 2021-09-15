import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { GoPerson } from 'react-icons/go'
import { Link } from 'react-router-dom'
import { RiLockPasswordFill } from 'react-icons/ri'

import * as orderAction from '../../store/actions/burgerIndex'

import Input from '../Input'

import { required, length, email } from '../../util/validators'
import Auth from './Auth'

import GradBgBig from '../../images/grad_bg_big.png'
import LogRegBg from '../../images/logreg_bg.jpg'
import Logo from '../../images/logos.png'

const Login = (props) => {
    const [state, setState] = useState({
        loginForm: {
            email: {
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
            formIsValid: false,
        },
    })

    const [message, setMessage] = useState(null)

    useEffect(() => {
        if (props.err) {
            setMessage({
                error: props.err.page === 'login' ? props.err.error : null,
            })
        } else if (props.tokenId) {
            props.history.push('/admin/dashboard')
            setMessage({
                success: 'Success',
            })
        }
    }, [props])

    const inputChangeHandler = (input, value) => {
        setState((prevState) => {
            let isValid = true
            for (const validator of prevState.loginForm[input].validators) {
                isValid = isValid && validator(value)
            }

            const updatedForm = {
                ...prevState.loginForm,
                [input]: {
                    ...prevState.loginForm[input],
                    valid: isValid,
                    value: value,
                    touched: true,
                },
            }
            let formIsValid = true
            for (const inputName in updatedForm) {
                if (
                    inputName !== 'formIsValid' &&
                    inputName !== '[object Object]'
                ) {
                    formIsValid = formIsValid && updatedForm[inputName].valid
                }
            }
            return {
                loginForm: updatedForm,
                formIsValid: formIsValid,
            }
        })
    }

    const inputBlurHandler = (input) => {}

    const handleLogin = (e) => {
        e.preventDefault()
        if (state.formIsValid) {
            props.onInitLogin(
                state.loginForm.email.value,
                state.loginForm.password.value
            )
        } else {
            setMessage({ error: 'Wrong Input, please check your entries' })
        }
    }

    return (
        <>
            <div class='bodyWrap'>
                <div
                    class='logRegPage'
                    style={{
                        backgroundImage: `url(${GradBgBig}), url(${LogRegBg})`,
                    }}
                >
                    <div class='container'>
                        <div class='head'>
                            <div class='logo invisLink' style={{ opacity: 0 }}>
                                <img src={Logo} alt='logo' height='70px;' />
                                
                                <Link to='/'>main</Link>
                            </div>
                        </div>

                        <div class='content'>
                            <div class='captionLight center'>Login</div>
                            <div class='wrap login'>
                                <Auth login message={message}>
                                    <form
                                        class='formLogin'
                                        onSubmit={handleLogin}
                                    >
                                        <div class='item'>
                                            <div class='formBlockLight'>
                                                <label>Email Address:</label>
                                                <Input
                                                    id='email'
                                                    type='email'
                                                    control='input'
                                                    onChange={
                                                        inputChangeHandler
                                                    }
                                                    onBlur={inputBlurHandler.bind(
                                                        'email'
                                                    )}
                                                    value={
                                                        state.loginForm['email']
                                                            .value
                                                    }
                                                    valid={
                                                        state.loginForm['email']
                                                            .valid
                                                    }
                                                    touched={
                                                        state.loginForm['email']
                                                            .touched
                                                    }
                                                />
                                                <span class='icon-login'>
                                                    <GoPerson />
                                                </span>
                                            </div>
                                            <div class='formBlockLight'>
                                                <label for='logPass'>
                                                    Password:
                                                </label>
                                                <Input
                                                    id='password'
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
                                                        state.loginForm[
                                                            'password'
                                                        ].value
                                                    }
                                                    valid={
                                                        state.loginForm[
                                                            'password'
                                                        ].valid
                                                    }
                                                    touched={
                                                        state.loginForm[
                                                            'password'
                                                        ].touched
                                                    }
                                                />
                                                <span class='icon-pass'>
                                                    <RiLockPasswordFill />
                                                </span>
                                            </div>
                                            <Link
                                                to='/forgot-password'
                                                class='passLink'
                                            >
                                                Forgot password?
                                            </Link>
                                            <button
                                                type='submit'
                                                class='btnFillDarkMd'
                                                name='post'
                                            >
                                                {props.loading
                                                    ? 'Loading...'
                                                    : 'Login'}
                                            </button>
                                        </div>
                                    </form>
                                </Auth>
                            </div>
                        </div>

                        <div
                            class='bottomLine table full'
                            style={{ opacity: 0 }}
                        >
                            <p class='copy tCell middle left'>
                                © 2021 Growveon cryptotrading. All rights
                                reserved.
                            </p>
                        </div>
                    </div>
                    <div class='circleBg'>
                        <div class='circle'></div>
                    </div>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        loading: state.auth.loading,
        // loading:false,
        err: state.auth.error,
        tokenId: state.auth.tokenId,
        userId: state.auth.userId,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onInitLogin: (email, password) =>
            dispatch(orderAction.initLogin(email, password)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)
