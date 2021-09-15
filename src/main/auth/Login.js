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
            <section className='loginpage'>
                <div className='inside_inner'>
                    <div className='loginwrappers'>
                        <div className='login_left'>
                            <Auth login message={message}>
                                <div className='form-container login'>
                                    <h3>Member Login</h3>
                                    <form
                                        class='formLogin'
                                        onSubmit={handleLogin}
                                    >
                                        {' '}
                                        <table
                                            width='100%'
                                            border='0'
                                            cellPadding='4'
                                            cellSpacing='4'
                                        >
                                            <tr>
                                                <td colspan='2'>
                                                    <Input
                                                        id='email'
                                                        type='email'
                                                        label='Email'
                                                        control='input'
                                                        placeholder='Email'
                                                        onChange={
                                                            inputChangeHandler
                                                        }
                                                        onBlur={inputBlurHandler.bind(
                                                            'email'
                                                        )}
                                                        value={
                                                            state.loginForm[
                                                                'email'
                                                            ].value
                                                        }
                                                        valid={
                                                            state.loginForm[
                                                                'email'
                                                            ].valid
                                                        }
                                                        touched={
                                                            state.loginForm[
                                                                'email'
                                                            ].touched
                                                        }
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colspan='2'>
                                                    <Input
                                                        id='password'
                                                        type='password'
                                                        label='Password'
                                                        placeholder='Password'
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
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colspan='2'></td>
                                            </tr>
                                            <tr>
                                                <td height='40' valign='middle'>
                                                    <span class='bunicon'>
                                                        <input
                                                            type='submit'
                                                            name='post'
                                                            value={
                                                                props.loading
                                                                    ? 'Loading...'
                                                                    : 'Login'
                                                            }
                                                            class='sbmt'
                                                        />
                                                    </span>
                                           
                                                </td>
                                                <td
                                                    align='right'
                                                    valign='middle'
                                                >
                                                    <Link
                                                        to='/forgot-password'
                                                        class='passLink'
                                                    >
                                                        Forgot password?
                                                    </Link>
                                                </td>
                                            </tr>
                                        </table>
                                    </form>

                                    <div className='loginyellowbottom'>
                                        <a
                                            href='?a=signup'
                                            className='loginnewuser'
                                        >
                                            New User? <span>SignUp Here</span>
                                        </a>
                                    </div>
                                </div>
                            </Auth>
                        </div>
                    </div>
                </div>
            </section>
            <section className='footerContainer loginfooter'>
                <div className='footerInner'>
                    <p>
                        Copyright &copy; 2021. <a href='home'></a> All Rights
                        Reserved
                    </p>
                </div>
            </section>
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
