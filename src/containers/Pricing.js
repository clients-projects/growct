import React from 'react'
import {Link} from 'react-router-dom'

import RulesPageBg from '../images/rules_page_bg.jpg'
import GreyBgBig from '../images/grey_bg_big.png'
import CardBg1 from '../images/card_bg_1.png'
import CardBg2 from '../images/card_bg_2.png'
import A1 from '../images/A1.png'
import B from '../images/B.png'
import C from '../images/C.png'
import D from '../images/D.png'
import E from '../images/C.png'

function Pricing() {
    return (
        <>
            <div
                className='pageBanner'
                style={{ backgroundImage: `url(${RulesPageBg})` }}
            >
                <div className='container'>
                    <span className='heading'>Pricing</span>
                </div>
            </div>

            <div
                className='rules'
                style={{ backgroundImage: `url(${GreyBgBig})` }}
            >
                <div className='container'>
                    <div className='wrap'>
                        <div className='row' style={{ marginBottom: '30px' }}>
                            <div className='item col6'>
                                <div className='planCardFirst'>
                                    <div
                                        className='left'
                                        style={{
                                            backgroundImage: `url(${CardBg1})`,
                                        }}
                                    >
                                        <span className='cap'>#PACKAGE A</span>
                                        <div className='descr'>
                                            <span className='pct'>10%</span>
                                            <span>48 HOURS</span>
                                            <Link
                                                to='/Auth/signup'
                                                className='btnFillColor1Md'
                                            >
                                                Make deposit
                                            </Link>
                                        </div>
                                    </div>
                                    <ul className='info'>
                                        <li>
                                            Min Deposit <span>50 USD</span>
                                        </li>
                                        <li>
                                            Max Deposit <span>199 USD</span>
                                        </li>
                                    </ul>
                                    <img
                                        alt=''
                                        src={A1}
                                        style={{
                                            width: '80%',
                                            marginTop: '20px',
                                        }}
                                    />
                                </div>
                            </div>

                            <div className='item col6'>
                                <div className='planCardSecond'>
                                    <div
                                        className='left'
                                        style={{
                                            backgroundImage: `url(${CardBg2})`,
                                        }}
                                    >
                                        <span className='cap'>#PACKAGE B</span>
                                        <div className='descr'>
                                            <span className='pct'>20%</span>
                                            <span>4 Work Days</span>
                                            <Link
                                                to='/Auth/signup'
                                                className='btnFillColor2Md'
                                            >
                                                Make deposit
                                            </Link>
                                        </div>
                                    </div>
                                    <ul className='info'>
                                        <li>
                                            Min Deposit <span>200 USD</span>
                                        </li>
                                        <li>
                                            Max Deposit <span>499 USD</span>
                                        </li>
                                    </ul>
                                    <img
                                        alt=''
                                        src={B}
                                        style={{
                                            width: '80%',
                                            marginTop: '20px',
                                        }}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className='row' style={{ marginBottom: '30px' }}>
                            <div className='item col6'>
                                <div className='planCardFirst'>
                                    <div
                                        className='left'
                                        style={{
                                            backgroundImage: `url(${CardBg1})`,
                                        }}
                                    >
                                        <span className='cap'>#PACKAGE C</span>
                                        <div className='descr'>
                                            <span className='pct'>30%</span>
                                            <span>6 Work Days</span>
                                            <Link
                                                to='/Auth/signup'
                                                className='btnFillColor1Md'
                                            >
                                                Make deposit
                                            </Link>
                                        </div>
                                    </div>
                                    <ul className='info'>
                                        <li>
                                            Min Deposit <span>500 USD</span>
                                        </li>
                                        <li>
                                            Max Deposit <span>999 USD</span>
                                        </li>
                                    </ul>
                                    <img
                                        alt=''
                                        src={C}
                                        style={{
                                            width: '80%',
                                            marginTop: '20px',
                                        }}
                                    />
                                </div>
                            </div>

                            <div className='item col6'>
                                <div className='planCardSecond'>
                                    <div
                                        className='left'
                                        style={{
                                            backgroundImage: `url(${CardBg2})`,
                                        }}
                                    >
                                        <span className='cap'>#PACKAGE D</span>
                                        <div className='descr'>
                                            <span className='pct'>40%</span>
                                            <span>8 Work Days</span>
                                            <Link
                                                to='/Auth/signup'
                                                className='btnFillColor2Md'
                                            >
                                                Make deposit
                                            </Link>
                                        </div>
                                    </div>
                                    <ul className='info'>
                                        <li>
                                            Min Deposit <span>1,000 USD</span>
                                        </li>
                                        <li>
                                            Max Deposit <span>4,999 USD</span>
                                        </li>
                                    </ul>
                                    <img
                                        alt=''
                                        src={D}
                                        style={{
                                            width: '80%',
                                            marginTop: '20px',
                                        }}
                                    />
                                </div>
                            </div>

                            <div className='row'>
                                <div className='item col6'>
                                    <div className='planCardFirst'>
                                        <div
                                            className='left'
                                            style={{
                                                backgroundImage: `url(${CardBg1})`,
                                            }}
                                        >
                                            {' '}
                                            <span className='cap'>
                                                #PACKAGE E
                                            </span>
                                            <div className='descr'>
                                                <span className='pct'>60%</span>
                                                <span>10 Work Days</span>
                                                <Link
                                                    to='/Auth/signup'
                                                    className='btnFillColor1Md'
                                                >
                                                    Make deposit
                                                </Link>
                                            </div>
                                        </div>
                                        <ul className='info'>
                                            <li>
                                                Min Deposit{' '}
                                                <span>5,000 USD</span>
                                            </li>
                                            <li>
                                                Max Deposit{' '}
                                                <span>9,999 USD</span>
                                            </li>
                                        </ul>
                                        <img
                                            alt=''
                                            src={E}
                                            style={{
                                                width: '80%',
                                                marginTop: '20px',
                                            }}
                                        />
                                    </div>
                                </div>

                                <div className='item col6'>
                                    <div className='planCardSecond'>
                                        <div
                                            className='left'
                                            style={{
                                                backgroundImage: `url(${CardBg2})`,
                                            }}
                                        >
                                            <span className='cap'>
                                                #PACKAGE F
                                            </span>
                                            <div className='descr'>
                                                <span className='pct'>80%</span>
                                                <span>12 Work Days</span>
                                                <Link
                                                    to='/Auth/signup'
                                                    className='btnFillColor1Md'
                                                >
                                                    Make deposit
                                                </Link>
                                            </div>
                                        </div>
                                        <ul className='info'>
                                            <li>
                                                Min Deposit{' '}
                                                <span>10,000 USD</span>
                                            </li>
                                            <li>
                                                Max Deposit{' '}
                                                <span>UNLIMITED USD</span>
                                            </li>
                                        </ul>
                                        <img
                                            alt=''
                                            src={D}
                                            style={{
                                                width: '80%',
                                                marginTop: '20px',
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div
                                className='container'
                                style={{
                                    marginTop: '40px',
                                    marginBottom: '40px',
                                }}
                            >
                                <div className='textBlock'>
                                    <h3>WHY ROBOT TRADING</h3>
                                    <p>
                                        There are several other trading programs
                                        in the global market and each one
                                        competes with the other in advertising.
                                        With Robot Trading, we put our money
                                        where our mouths are and focus on
                                        ensuring success for the long-term
                                        investment relationship with our
                                        clients. We are dedicated to our clients
                                        ‘ financial goals and objectives and so
                                        we have hundreds of them over the span
                                        of only a few years. Our program is
                                        failure-free, user friendly, and easy to
                                        install and operate.
                                    </p>
                                    <p>
                                        As mentioned, our prime objective is to
                                        build profitable relationships and gain
                                        the trust of our valued clients through
                                        superior performance and top-notch
                                        customer support. We’ll do all we can at
                                        our disposal to see our clients grow
                                        with us and will prove to be one step
                                        ahead of their expectations at all
                                        times.
                                    </p>
                                    <p>
                                        - An innovative hybrid proof-of-work.
                                        <br />
                                        - Proof-of-stake (PoS) consensus trading
                                        system.
                                        <br />
                                        - Instant, on-demand cash-out.
                                        <br />
                                    </p>
                                </div>
                            </div>

                            <div className='item col6'>
                                <div className='planCardSecond'>
                                    <div
                                        className='left'
                                        style={{
                                            backgroundImage: `url(${CardBg2})`,
                                        }}
                                    >
                                        <span className='cap'>
                                            TRADING PLAN
                                        </span>
                                        <div className='descr'>
                                            <span className='pct'>EXTRA</span>
                                            <span>BONUS</span>
                                            <Link
                                                to='/Auth/signup'
                                                className='btnFillColor2Md'
                                            >
                                                Make deposit
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Pricing
