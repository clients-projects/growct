import React from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'

import avatar from '../../../assets/img/faces/face-1.jpg'
import Logo from '../../../sass/images/GrowveonctLogo.svg'
import Lang1 from '../../../images/lang_1.jpg'
 import Lang2 from '../../../images/lang_2.jpg'

import * as orderAction from '../../../store/actions/burgerIndex'


function Header(props) {
    
    //Get the current date
    const newDate = new Date()

    const time = newDate.getHours() + ':' + newDate.getMinutes()

    const date = newDate.getDate()
    const month = newDate.toLocaleString('en-GB', { month: 'short' })

    const year = newDate.getFullYear()
    return (
        <>
            <header>
                <div className='topLine'>
                    <div className='container'>
                        <div className='table full'>
                            <div className='logoWrap tCell'>
                                <div className='logo invisLink'>
                                    <img
                                        src={Logo}
                                        alt='logo'
                                        style={{ height: '70px' }}
                                    />
                                    Growveon Cryptotrading
                                    <a href='/'>main</a>
                                </div>
                            </div>
                            <div className='lang tCell right'>
                                <Link
                                    to='#'
                                    style={{
                                        backgroundImage: `url(${Lang1})`,
                                    }}
                                ></Link>
                                <Link
                                    to='#'
                                    style={{
                                        backgroundImage: `url(${Lang2})`,
                                    }}
                                ></Link>
                            </div>

                            <div className='clock tCell right'>
                                <span className='time gradTxt' id='time'>
                                    {time}
                                </span>
                                <span className='date'>
                                    <span className='day' id='day'>
                                        {date}, {month}
                                    </span>
                                    <span className='year' id='year'>
                                        {year}
                                    </span>
                                </span>
                            </div>
                            <div className='userBlock tCell top right'>
                                <div className='iconLeft'>
                                    <div
                                        className='icon'
                                        style={{
                                            backgroundImage: `url(${avatar})`,
                                        }}
                                    ></div>
                                    <div className='data'>
                                        <span>Welcome,</span>
                                        <a href='/dashboard'>{props.userData.username}</a>
                                    </div>
                                </div>
                            </div>
                            <div className='exit tCell top right'>
                                <button
                                    className='btnFillColor1Sm'
                                    onClick={props.onLogOut}
                                >
                                    Logout
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='menu'>
                    <div className='container'>
                        <center>
                            <ul>
                                <li>
                                    <a href='/'>HOME</a>
                                </li>
                                <li>
                                    <a href='/about-us'>ABOUT US</a>
                                </li>
                             
                                <li>
                                    <a href='/pricing'>PRICING</a>
                                </li>
                              
                                <li>
                                    <a href='/contact-us'>CONTACT US</a>
                                </li>
                                <li>
                                    <a href='/faq'>FAQ</a>
                                </li>
                            </ul>
                        </center>
                    </div>
                </div>
            </header>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        userData: state.auth.userData,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogOut: () => dispatch(orderAction.logOut()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)