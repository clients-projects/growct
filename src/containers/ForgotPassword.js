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
import Logo from '../images/logos.png'

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
            {/* <Particles
                className='particles'
                params={{
                    particles: {
                        number: {
                            value: 20,
                        },
                    },
                }}
            />
            <Auth login message={message}>
                <h1 className='form__heading form__heading--forgottenPassword'>
                    Retrive Password
                </h1>
                <form onSubmit={handleForgotPassword}>
                    <Input
                        id='email'
                        label='E-Mail'
                        type='email'
                        control='input'
                        onChange={inputChangeHandler}
                        onBlur={inputBlurHandler.bind('email')}
                        value={state.loginForm['email'].value}
                        valid={state.loginForm['email'].valid}
                        touched={state.loginForm['email'].touched}
                    />
                    <div className='form-btn'>
                        <Button
                            design='raised'
                            type='submit'
                            loading={props.loading}
                        >
                            {props.loading ? 'Loading...' : 'Send'}
                        </Button>
                    </div>
                </form>
            </Auth> */}

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
                                GrowveonCT
                                <Link to='/'>main</Link>
                            </div>
                        </div>

                        <div class='content'>
                            <div class='captionLight center'>
                                Forget Password
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
                                class='wrap login'
                                style={{ paddingTop: '100px' }}
                            >
                                <Auth message={message}>
                                    <form
                                        class='formLogin'
                                        onSubmit={handleForgotPassword}
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
                                                <span class='icon-mail'>
                                                    <RiLockPasswordFill />
                                                </span>
                                            </div>

                                            <br></br>
                                            <button
                                                type='submit'
                                                class='btnFillDarkMd'
                                                loading={props.loading}
                                            >
                                                {props.loading
                                                    ? 'Loading...'
                                                    : 'Get Code'}
                                            </button>
                                            {/* <button
                                            type='submit'
                                            class='btnFillDarkMd'
                                            name='post'
                                        >
                                            Get Code
                                        </button> */}
                                        </div>
                                    </form>
                                </Auth>
                            </div>
                        </div>

                        <div class='bottomLine table full'>
                            <p class='copy tCell middle left'>
                                © 2021 Growveon Crypto Trade. All rights
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
