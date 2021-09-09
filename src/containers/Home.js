import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { SiEthereum, SiLitecoin } from 'react-icons/si'
import { RiBitCoinLine } from 'react-icons/ri'
import { GiVikingLonghouse } from 'react-icons/gi'
import { HiChartBar } from 'react-icons/hi'
import { AiOutlineFileProtect } from 'react-icons/ai'
import { MdLocationOn } from 'react-icons/md'

import A1 from '../images/A1.png'
import About_bg from '../images/about_bg.jpg'
import Adv_bg from '../images/adv_bg.jpg'
import B from '../images/B.png'
import Bg_11 from '../images/bg-11.jpg'
import C from '../images/C.png'
import Card_bg_1 from '../images/card_bg_1.png'
import Card_bg_2 from '../images/card_bg_2.png'
//import Case from '../images/case.png'
import Chart_bg from '../images/chart_bg.png'
import D from '../images/D.png'
import E from '../images/E.png'
import F from '../images/F.png'
import Grey_bg from '../images/grey_bg.png'
import profile from '../images/profile.jpg'
import B1000 from '../images/1000.png'

function Layout(props) {
    const [calcNum, setCalcNum] = useState(20)
    const [selectedValue, setSelectedValue] = useState(0.1)
    const [calcProfit, setCalcProfit] = useState(22)

    const inputChangeHandler = (input, event) => {
        if (input.target.id === 'calc_amount') {
            setCalcNum(input.target.value)

            //setCalcProfit((Number(selectedValue) * Number(input.target.value)) + Number(input.target.value))
        }

        if (input.target.id === 'calc_plan') {
            let calcPercent = 0
            if (input.target.value === '10') {
                calcPercent = calcNum * 0.1
                setSelectedValue(calcPercent)
            }
            if (input.target.value === '20') {
                calcPercent = calcNum * 0.2
                setSelectedValue(calcPercent)
            }
            if (input.target.value === '30') {
                calcPercent = calcNum * 0.3
                setSelectedValue(calcPercent)
            }
            if (input.target.value === '40') {
                calcPercent = calcNum * 0.4
                setSelectedValue(calcPercent)
            }
            if (input.target.value === '60') {
                calcPercent = calcNum * 0.6
                setSelectedValue(calcPercent)
            }
            if (input.target.value === '80') {
                calcPercent = calcNum * 0.8
                setSelectedValue(calcPercent)
            }

            setCalcProfit(Number(calcPercent) + Number(calcNum))
        }
    }

    const handleIncomeCalculation = (e) => {
        e.preventDefault()
    }

    return (
        <>
            <div
                style={{
                    position: 'fixed',
                    zIndex: 99999,
                    left: '20px',
                    bottom: '20px',
                }}
            ></div>

            <div className='bodyWrap'>
                <div
                    className='mainBanner gradImg'
                    style={{ backgroundImage: `url(${Bg_11})` }}
                >
                    <div className='container'>
                        <div>
                            <div className='circleBg'>
                                <div className='circle'></div>
                            </div>
                            <div className='chart'>
                                <iframe
                                    title='iframe1'
                                    height='398'
                                    width='618'
                                    src='https://ssltvc.forexprostools.com/?pair_ID=945629&amp;height=398&amp;width=618&amp;interval=300&amp;plotStyle=area&amp;domain_ID=7&amp;lang_ID=7&amp;timezone_ID=17'
                                ></iframe>
                            </div>
                        </div>
                        <div className='content'>
                            <span className='heading'>
                                Forex trading with ROBOT TRADING{' '}
                            </span>
                            <span>The Future of Crypto Trading</span>
                            <div className='textBlock'>
                                <p
                                    style={{
                                        fontWeight: 500,
                                        textShadow: '2px 2px 4px black',
                                    }}
                                >
                                    The Fastest Growing cryptocurrency that
                                    return dividend from investments to
                                    investors and the cryptocurrency that has
                                    value in itself.
                                </p>
                            </div>
                            <Link to='/Auth/signup' className='btnFillGradLg'>
                                Get started now
                            </Link>
                        </div>
                        <div className='cfix'>
                            <div className='curRate'>
                                <div className='item'>
                                    <div className='iconLeft'>
                                        <span className='icon-cur1'>
                                            {' '}
                                            <RiBitCoinLine />{' '}
                                        </span>
                                        <div className='data'>
                                            <span>Bitcoin (BTC):</span>
                                            <span>
                                                <b>
                                                    <span className='color2'>
                                                        (Accepted)
                                                    </span>
                                                </b>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className='item'>
                                    <div className='iconLeft'>
                                        <span className='icon-cur2'>
                                            <SiEthereum />
                                        </span>
                                        <div className='data'>
                                            <span>Ethereum (ETH):</span>
                                            <span>
                                                <b>
                                                    <span className='color2'>
                                                        (Accepted)
                                                    </span>
                                                </b>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className='item'>
                                    <div className='iconLeft'>
                                        <span className='icon-cur3'>
                                            <SiLitecoin />
                                        </span>
                                        <div className='data'>
                                            <span>Litecoin (LTC):</span>
                                            <span>
                                                <b>
                                                    <span className='color2'>
                                                        (Accepted)
                                                    </span>
                                                </b>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className='item'>
                                    <div className='iconLeft'>
                                        <span className='icon-cur1'>
                                            {' '}
                                            <RiBitCoinLine />
                                        </span>
                                        <div className='data'>
                                            <span>Bitcoin Cash (BCH):</span>
                                            <span>
                                                <b>
                                                    <span className='color2'>
                                                        (Accepted)
                                                    </span>
                                                </b>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='headAdv'>
                            <ul>
                                <li>
                                    <div className='iconLeft'>
                                        <span
                                            className='icon-adv1'
                                            style={{
                                                boxShadow: '2px 2px 3px black',
                                            }}
                                        >
                                            {' '}
                                            <GiVikingLonghouse />{' '}
                                        </span>
                                        <span
                                            className='data'
                                            style={{
                                                textShadow: '2px 2px 3px black',
                                            }}
                                        >
                                            Officially registered company
                                        </span>
                                    </div>
                                </li>
                                <li>
                                    <div className='iconLeft'>
                                        <span
                                            className='icon-adv3'
                                            style={{
                                                boxShadow: '2px 2px 3px black',
                                            }}
                                        >
                                            <HiChartBar />
                                        </span>
                                        <span
                                            className='data'
                                            style={{
                                                textShadow: '2px 2px 3px black',
                                            }}
                                        >
                                            Innovative <br></br>approach
                                        </span>
                                    </div>
                                </li>
                                <li>
                                    <div className='iconLeft'>
                                        <span
                                            className='icon-adv2'
                                            style={{
                                                boxShadow: '2px 2px 3px black',
                                            }}
                                        >
                                            {' '}
                                            <AiOutlineFileProtect />
                                        </span>
                                        <span
                                            className='data'
                                            style={{
                                                textShadow: '2px 2px 3px black',
                                            }}
                                        >
                                            Profitable working conditions
                                        </span>
                                    </div>
                                </li>
                            </ul>
                            <p>
                                We strongly believe in performance-based affairs
                                and understand that our very success is tied to
                                the success of our clients. Therefore, we’ve
                                ensured to lace our unique Auto Trading System
                                with all the advanced features that’ll help our
                                clients gain consistent results in the form of
                                higher profit and ROI.
                            </p>
                        </div>
                    </div>
                </div>

                <div
                    className='about'
                    style={{ backgroundImage: `url(${About_bg})` }}
                >
                    <div className='container'>
                        <div className='cfix'>
                            <div className='left'>
                                <span className='captionLight'>
                                    About company
                                </span>
                                <div className='license'>
                                    <div
                                        className='img invisLink'
                                        style={{
                                            backgroundImage: `url(${profile})`,
                                        }}
                                    >
                                        <a
                                            href={`${profile}`}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                        >
                                            license
                                        </a>
                                    </div>
                                </div>
                                <div className='address'>
                                    <div className='iconLeft'>
                                        <span className='icon-location gradTxt'>
                                            <MdLocationOn className='location__svg' />
                                        </span>
                                        <span className='data'>
                                            71-75 Shelton Street, London,
                                            Greater London, United Kingdom, WC2H
                                            9JQ
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className='right'>
                                <div className='textBlock'>
                                    <h3>
                                        <b style={{ color: 'white' }}>
                                            WELCOME ON BOARD JOIN THE TRADE
                                            PLATFORM
                                        </b>
                                    </h3>
                                    <br />
                                    <br />
                                    <p>
                                        Robot 44 Trade is the only company
                                        dedicated to work on EA, better known as
                                        Algo Trading, which atomizes the trading
                                        process and brings risk free profit,
                                        saves times, money and build better
                                        wealth over long period of time.
                                        <br />
                                        <br />
                                        A Robot trading System is used to
                                        automatically generate trading signals
                                        on the forex trader’s behalf. As such, a
                                        manual trader has to glue himself or
                                        herself in front of a computer screen
                                        and wait for the appropriate time when
                                        the criteria for making a decision fits
                                        with his or her rules—something which is
                                        tiring and complicated.
                                        <br />
                                        <br />
                                        With robot trading, the trading rules or
                                        strategies have been ingrained in a
                                        computer program, and your trade
                                        decisions will be made automatically
                                        without your intervention. With a
                                        trading robot, you can trade profitably
                                        24 hours a day and increase your
                                        profits. After you’ve coded your
                                        strategies on a robot, it will perform
                                        the buy and sell actions while you spend
                                        your time on the beach. One of the main
                                        reasons why traders fail is emotional
                                        trading. However, a forex robot lowers
                                        or eliminates emotions from the trading
                                        equation and give you a reliable way of
                                        earning money.
                                    </p>
                                </div>
                                <div className='btnsWrap'>
                                    <Link
                                        to='about-us'
                                        className='btnFillColor1Lg'
                                    >
                                        Learn more
                                    </Link>
                                    {/* <a
                                        href='https://beta.companieshouse.gov.uk/company/12143668'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='btnFillColor2Lg'
                                    >
                                        Check the registration
                                    </a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className='plan page'
                    style={{
                        backgroundImage: `url(${Chart_bg}), url(${Grey_bg})`,
                    }}
                >
                    <div className='container'>
                        <div className='textBlock'>
                            <p>
                                A robot cannot fear to make a trade neither can
                                it start making greed-driven decisions. With
                                implanted strategies, robots are capable of
                                making trade decisions in a way that humans
                                cannot. Some robots can thoroughly and
                                effectively scan the market looking for
                                opportunities with high levels of accuracy than
                                humans.
                            </p>
                        </div>
                        <span className='captionDark center'>
                            Trade Pricing
                        </span>

                        <div className='wrap'>
                            <div
                                className='row'
                                style={{ marginBottom: '30px' }}
                            >
                                <div className='item col6'>
                                    <div className='planCardFirst'>
                                        <div
                                            className='left'
                                            style={{
                                                backgroundImage: `url(${Card_bg_1})`,
                                            }}
                                        >
                                            <span className='cap'>
                                                #PACKAGE A
                                            </span>
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
                                            src={`${A1}`}
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
                                                backgroundImage: `url(${Card_bg_2})`,
                                            }}
                                        >
                                            <span className='cap'>
                                                #PACKAGE B
                                            </span>
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
                                            src={`${B}`}
                                            style={{
                                                width: '80%',
                                                marginTop: '20px',
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div
                                className='row'
                                style={{ marginBottom: '30px' }}
                            >
                                <div className='item col6'>
                                    <div className='planCardFirst'>
                                        <div
                                            className='left'
                                            style={{
                                                backgroundImage: `url(${Card_bg_1})`,
                                            }}
                                        >
                                            <span className='cap'>
                                                #PACKAGE C
                                            </span>
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
                                            src={`${C}`}
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
                                                backgroundImage: `url(${Card_bg_2})`,
                                            }}
                                        >
                                            <span className='cap'>
                                                #PACKAGE D
                                            </span>
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
                                                Min Deposit{' '}
                                                <span>1,000 USD</span>
                                            </li>
                                            <li>
                                                Max Deposit{' '}
                                                <span>4,999 USD</span>
                                            </li>
                                        </ul>
                                        <img
                                            alt=''
                                            src={`${D}`}
                                            style={{
                                                width: '80%',
                                                marginTop: '20px',
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className='row'>
                                <div className='item col6'>
                                    <div className='planCardFirst'>
                                        <div
                                            className='left'
                                            style={{
                                                backgroundImage: `url(${Card_bg_1})`,
                                            }}
                                        >
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
                                            src={`${E}`}
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
                                                backgroundImage: `url(${Card_bg_2})`,
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
                                                    className='btnFillColor2Md'
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
                                            src={`${F}`}
                                            style={{
                                                width: '80%',
                                                marginTop: '20px',
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            className='container'
                            style={{ marginTop: '40px', marginBottom: '40px' }}
                        >
                            <div className='textBlock'>
                                <h3>WHY ROBOT TRADING</h3>
                                <p>
                                    There are several other trading programs in
                                    the global market and each one competes with
                                    the other in advertising. With Robot
                                    Trading, we put our money where our mouths
                                    are and focus on ensuring success for the
                                    long-term investment relationship with our
                                    clients. We are dedicated to our clients ‘
                                    financial goals and objectives and so we
                                    have hundreds of them over the span of only
                                    a few years. Our program is failure-free,
                                    user friendly, and easy to install and
                                    operate.
                                </p>
                                <p>
                                    As mentioned, our prime objective is to
                                    build profitable relationships and gain the
                                    trust of our valued clients through superior
                                    performance and top-notch customer support.
                                    We’ll do all we can at our disposal to see
                                    our clients grow with us and will prove to
                                    be one step ahead of their expectations at
                                    all times.
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
                                        backgroundImage: `url(${Card_bg_2})`,
                                    }}
                                >
                                    <span className='cap'>TRADING PLAN</span>
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

            <div className='planProfit gradBack'>
                <div className='container'>
                    <div className='cfix'>
                        <form onSubmit={handleIncomeCalculation}>
                            <div className='formBlockLight'>
                                <label for='calc_amount'>Amount:</label>
                                <input
                                    name='inputNum'
                                    className='enterNum'
                                    type='number'
                                    min='20'
                                    max='99999'
                                    id='calc_amount'
                                    onChange={inputChangeHandler}
                                    value={calcNum}
                                />
                            </div>
                            <div className='formBlockLight'>
                                <label for='calc_plan'>Choosing of plan:</label>
                                <select
                                    name='choosePlan'
                                    id='calc_plan'
                                    className='calc_plan--select'
                                    onChange={inputChangeHandler}
                                >
                                    <option
                                        value='10'
                                        data-min='50'
                                        data-max='199'
                                        data-perc='110'
                                        data-per='1'
                                        checked
                                    >
                                        10% After 48 hours
                                    </option>
                                    <option
                                        value='20'
                                        data-min='200'
                                        data-max='499'
                                        data-perc='120'
                                        data-per='1'
                                    >
                                        20% after 4 work Days{' '}
                                    </option>
                                    <option
                                        value='30'
                                        data-min='500'
                                        data-max='999'
                                        data-perc='130'
                                        data-per='1'
                                    >
                                        30% after 6 work Days{' '}
                                    </option>
                                    <option
                                        value='40'
                                        data-min='1000'
                                        data-max='4999'
                                        data-perc='140'
                                        data-per='1'
                                    >
                                        40% after 8 work Days
                                    </option>
                                    <option
                                        value='60'
                                        data-min='5000'
                                        data-max='9999'
                                        data-perc='160'
                                        data-per='1'
                                    >
                                        60% after 10 work Days{' '}
                                    </option>
                                    <option
                                        value='80'
                                        data-min='10000'
                                        data-max='100000000'
                                        data-perc='180'
                                        data-per='1'
                                    >
                                        80% after 12 work Days{' '}
                                    </option>
                                </select>
                            </div>
                            <div className='sum'>
                                <span className='title'>Your profit:</span>
                                <span className='num'>
                                    <b id='profit'>
                                        {calcProfit.toLocaleString()}
                                    </b>{' '}
                                    USD
                                </span>
                            </div>
                            <input
                                type='submit'
                                id='calc_btn'
                                style={{ display: 'none' }}
                            />{' '}
                        </form>
                        <Link to='/Auth/signup' className='btnFillDarkMd'>
                            Get money
                        </Link>
                    </div>
                </div>
            </div>

            <div className='program gradBack'>
                <div className='container'>
                    <span className='captionDark center'>
                        Affiliate program
                    </span>
                    <div className='wrap'>
                        <div className='row'>
                            <div className='item col6'>
                                <div className='progrInfoFirst'>
                                    <div className='inner'>
                                        <span className='num'>6</span>
                                        <span>1ST LEVEL</span>
                                        <span className='pct'>%</span>
                                    </div>
                                </div>
                            </div>
                            <div className='item col6'>
                                <div className='progrInfoSecond'>
                                    <div className='inner'>
                                        <span className='num'>2</span>
                                        <span>2ND LEVEL</span>
                                        <span className='pct'>%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <span className='amp'>&</span>
                    </div>
                    <div className='textBlock'>
                        <p>
                            We appreciates the active partners that help us
                            develop and advance our company. As a thank you for
                            each newly invited participant in this project, we
                            charge referral commissions to their sponsors. In
                            addition, if your invitees will also develop our
                            company, you will also get even more bonuses for it!
                        </p>
                    </div>
                    <Link to='about-us' className='btnFillGradLg center'>
                        Learn More
                    </Link>

                    <div className='cfix'>
                        <div className='statistic' style={{ display: 'none' }}>
                            <div className='row'>
                                <div className='item'>
                                    <div className='img'>
                                        <span className='icon-date'></span>
                                    </div>
                                    <span className='title'>Online Days:</span>
                                    <span className='num'>4059</span>
                                </div>
                                <div className='item'>
                                    <div className='img'>
                                        <span className='icon-profile'></span>
                                    </div>
                                    <span className='title'>Online Users:</span>
                                    <span className='num'>916</span>
                                </div>
                                <div className='item'>
                                    <div className='img'>
                                        <span className='icon-pay_in'></span>
                                    </div>
                                    <span className='title'>
                                        total withdrawals:
                                    </span>
                                    <span
                                        className='num'
                                        sstyle={{ fontSize: '25px' }}
                                    >
                                        $ 9,428,235.00
                                    </span>
                                </div>
                                <div className='item'>
                                    <div className='img'>
                                        <span className='icon-pay_out'></span>
                                    </div>
                                    <span className='title'>
                                        total deposits:
                                    </span>
                                    <span
                                        className='num'
                                        style={{ fontSize: '25px' }}
                                    >
                                        $ 1,062,095.00
                                    </span>
                                </div>
                                <div className='item'>
                                    <div className='img'>
                                        <span className='icon-partner'></span>
                                    </div>
                                    <span className='title'>Active users:</span>
                                    <span className='num'>8935</span>
                                </div>
                            </div>
                        </div>
                        <div className='statTbl' style={{ display: 'none' }}>
                            <div className='row'>
                                <div className='item col6'>
                                    <div className='inner'>
                                        <div className='title'>
                                            <span>latest deposit</span>
                                        </div>
                                        <ul className='table full in'>
                                            <li className='tRow'>
                                                <span className='tCell middle name'>
                                                    Deposit{' '}
                                                </span>
                                                <span className='tCell middle date'>
                                                    {' '}
                                                </span>
                                                <span className='tCell middle sum'>
                                                    $
                                                </span>
                                                <span className='tCell bottom right pay'>
                                                    <img
                                                        src={`${B1000}`}
                                                        alt='pay'
                                                    />
                                                </span>
                                            </li>
                                            <li className='tRow'>
                                                <span className='tCell middle name'>
                                                    Torres
                                                </span>
                                                <span className='tCell middle date'>
                                                    {' '}
                                                </span>
                                                <span className='tCell middle sum'>
                                                    $53,000.00
                                                </span>
                                                <span className='tCell bottom right pay'>
                                                    <img
                                                        src={`${B1000}`}
                                                        alt='pay'
                                                    />
                                                </span>
                                            </li>
                                            <li className='tRow'>
                                                <span className='tCell middle name'>
                                                    Hensley
                                                </span>
                                                <span className='tCell middle date'>
                                                    {' '}
                                                </span>
                                                <span className='tCell middle sum'>
                                                    $201.00
                                                </span>
                                                <span className='tCell bottom right pay'>
                                                    <img
                                                        src={`${B1000}`}
                                                        alt='pay'
                                                    />
                                                </span>
                                            </li>
                                            <li className='tRow'>
                                                <span className='tCell middle name'>
                                                    Hensley
                                                </span>
                                                <span className='tCell middle date'>
                                                    {' '}
                                                </span>
                                                <span className='tCell middle sum'>
                                                    $34,000.00
                                                </span>
                                                <span className='tCell bottom right pay'>
                                                    <img
                                                        src={`${B1000}`}
                                                        alt='pay'
                                                    />
                                                </span>
                                            </li>
                                            <li className='tRow'>
                                                <span className='tCell middle name'>
                                                    Frank Jason
                                                </span>
                                                <span className='tCell middle date'>
                                                    {' '}
                                                </span>
                                                <span className='tCell middle sum'>
                                                    $
                                                </span>
                                                <span className='tCell bottom right pay'>
                                                    <img
                                                        src={`${B1000}`}
                                                        alt='pay'
                                                    />
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div
                                    className='item col6'
                                    style={{ display: 'none' }}
                                >
                                    <div className='inner'>
                                        <div className='title'>
                                            <span>last WITHDRAWALS</span>
                                        </div>
                                        <ul className='table full out'>
                                            <li className='tRow'>
                                                <span className='tCell middle name'>
                                                    Ms. Willie Hoppe III
                                                </span>
                                                <span className='tCell middle date'>
                                                    {' '}
                                                </span>
                                                <span className='tCell middle sum'>
                                                    $95,100.00
                                                </span>
                                                <span className='tCell bottom right pay'>
                                                    <img
                                                        src={`${B1000}`}
                                                        alt='pay'
                                                    />
                                                </span>
                                            </li>
                                            <li className='tRow'>
                                                <span className='tCell middle name'>
                                                    Ms. Willie Hoppe III
                                                </span>
                                                <span className='tCell middle date'>
                                                    {' '}
                                                </span>
                                                <span className='tCell middle sum'>
                                                    $134,000.00
                                                </span>
                                                <span className='tCell bottom right pay'>
                                                    <img
                                                        src={`${B1000}`}
                                                        alt='pay'
                                                    />
                                                </span>
                                            </li>
                                            <li className='tRow'>
                                                <span className='tCell middle name'>
                                                    Elissa Murazik
                                                </span>
                                                <span className='tCell middle date'>
                                                    {' '}
                                                </span>
                                                <span className='tCell middle sum'>
                                                    $87,000.00
                                                </span>
                                                <span className='tCell bottom right pay'>
                                                    <img
                                                        src={`${B1000}`}
                                                        alt='pay'
                                                    />
                                                </span>
                                            </li>
                                            <li className='tRow'>
                                                <span className='tCell middle name'>
                                                    Dr. Velma Larson PhD
                                                </span>
                                                <span className='tCell middle date'>
                                                    {' '}
                                                </span>
                                                <span className='tCell middle sum'>
                                                    $262,800.00
                                                </span>
                                                <span className='tCell bottom right pay'>
                                                    <img
                                                        src={`${B1000}`}
                                                        alt='pay'
                                                    />
                                                </span>
                                            </li>
                                            <li className='tRow'>
                                                <span className='tCell middle name'>
                                                    Takalani Letsoalo
                                                </span>
                                                <span className='tCell middle date'>
                                                    {' '}
                                                </span>
                                                <span className='tCell middle sum'>
                                                    $76,000.00
                                                </span>
                                                <span className='tCell bottom right pay'>
                                                    <img
                                                        src={`${B1000}`}
                                                        alt='pay'
                                                    />
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='circleBg'>
                    <div className='circle'></div>
                </div>
            </div>

            <div
                className='advTempl'
                style={{
                    backgroundImage: `url(${Adv_bg})`,
                }}
            >
                <div className='container'>
                    <span className='captionLight center'>Why choose us?</span>
                    <div className='advWrap'>
                        <div className='grid'>
                            <div className='item col4'>
                                <div className='in'>
                                    <span className='icon-phone gradTxt'></span>
                                    <span className='title'>AUTOMATED</span>
                                    <p>
                                        No financial advisor? No experience
                                        trading cryptocurrency? No worries. Our
                                        algorithm takes away the guesswork and
                                        executes transactions automatically on
                                        your behalf.
                                    </p>
                                </div>
                            </div>
                            <div className='item col4'>
                                <div className='in'>
                                    <span className='icon-chart gradTxt'></span>
                                    <span className='title'>SMART TRADING</span>
                                    <p>
                                        Emotions and stress have a negative
                                        impact on trading. Our Automated
                                        platform allows you to avoid that and
                                        gets the best option by analysing all
                                        data storage.
                                    </p>
                                </div>
                            </div>
                            <div className='item col4'>
                                <div className='in'>
                                    <span className='icon-team gradTxt'></span>
                                    <span className='title'>
                                        NO MORE MIDDLE MEN
                                    </span>
                                    <p>
                                        Immediate funding without third-parties.
                                        Smart contracts autonomously perform
                                        funding – collect and release payments.
                                    </p>
                                </div>
                            </div>
                            <div className='item col4'>
                                <div className='in'>
                                    <span className='icon-docs gradTxt'></span>
                                    <span className='title'>
                                        PROTECTION FROM HACKING
                                    </span>
                                    <p>
                                        On a decentralized platform, all user
                                        accounts are independent; if one account
                                        is hacked, this won’t breach the
                                        security.
                                    </p>
                                </div>
                            </div>
                            <div className='item col4'>
                                <div className='in'>
                                    <span className='icon-cash gradTxt'></span>
                                    <span className='title'>RELIABILITY</span>
                                    <p>
                                        Robot Trading under the direction of
                                        Next Generation Technology Co., LTD is
                                        located in United Kingdom and is
                                        governed by the laws of United Kingdom.
                                    </p>
                                </div>
                            </div>
                            <div className='item col4'>
                                <div className='in'>
                                    <span className='icon-pass gradTxt'></span>
                                    <span className='title'>
                                        AUTO TRADING 24/7
                                    </span>
                                    <p>
                                        Our platform is always available to
                                        ensure that no market opportunity is
                                        lost. Let our platform work for you!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Layout
