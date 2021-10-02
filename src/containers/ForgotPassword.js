import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { RiLockPasswordFill } from 'react-icons/ri'

import * as orderAction from '../store/actions/burgerIndex'

import Input from '../main/Input'

import { required, email } from '../util/validators'
import Auth from '../main/auth/Auth'

import GradBgBig from '../images/grad_bg_big.png'
import LogRegBg from '../images/logreg_bg.jpg'
import Logo from '../sass/images/GrowveonctLogo.png'

const Login = (props) => {
    const [state, setState] = useState({
        loginForm: {
            email: {
                value: '',
                valid: false,
                touched: false,
                validators: [required, email],
            },
            formIsValid: false,
        },
    })

    const [message, setMessage] = useState(null)

    useEffect(() => {
        if (props.err) {
            setMessage({
                error:
                    props.err.page === 'login'
                        ? props.err.error[0].message
                        : null,
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

    const handleForgotPassword = (e) => {
        e.preventDefault()
        if (state.formIsValid) {
            setMessage({
                success: 'Your recovery link has been sent to your email',
            })
        } else {
            setMessage({ error: 'Wrong Input, please check your entries' })
        }
    }

    return (
        <>
           
            <div className='bodyWrap'>
                <div
                    className='logRegPage'
                    style={{
                        backgroundImage: `url(${GradBgBig}), url(${LogRegBg})`,
                    }}
                >
                    <div className='container'>
                        <div className='head'>
                            <div
                                className='logo invisLink'
                                style={{ opacity: 0 }}
                            >
                                <img src={Logo} alt='logo' height='70px;' />
                                GrowveonCT
                                <Link to='/'>main</Link>
                            </div>
                        </div>

                        <div className='content'>
                            <div className='captionLight center'>
                                Forgot Password
                            </div>
                            <p
                                style={{
                                    textAlign: 'center',
                                    fontWeight: 600,
                                    color: 'white',
                                    marginTop: '30px',
                                }}
                            >
                                A mail would be sent sent to your email address.
                                Kindly ensure that you input the email that you
                                use to register with us.
                            </p>

                            <div
                                className='wrap login'
                                style={{ paddingTop: '100px' }}
                            >
                                <Auth message={message}>
                                    <form
                                        className='formLogin'
                                        onSubmit={handleForgotPassword}
                                    >
                                        <div className='item'>
                                            <div className='formBlockLight'>
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
                                                <span className='icon-mail'>
                                                    <RiLockPasswordFill />
                                                </span>
                                            </div>

                                            <br></br>
                                            <button
                                                type='submit'
                                                className='btnFillDarkMd'
                                                loading={props.loading}
                                            >
                                                {props.loading
                                                    ? 'Loading...'
                                                    : 'Get Code'}
                                            </button>
                                         
                                        </div>
                                    </form>
                                </Auth>
                            </div>
                        </div>

                    
                    </div>
                    <div className='circleBg'>
                        <div className='circle'></div>
                    </div>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        loading: state.users.loading,
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
