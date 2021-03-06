import React from 'react'
import { Link } from 'react-router-dom'

import AboutPageBg from '../images/about_page_bg.jpg'
import { MdLocationOn } from 'react-icons/md'
import AboutImg from '../images/about_img.jpg'
import GreyBg from '../images/grey_bg.png'
import Profile from '../images/profile.jpg'

import { AiFillPhone, AiOutlineFundProjectionScreen } from 'react-icons/ai'
import { IoIosPeople } from 'react-icons/io'
import { MdLowPriority } from 'react-icons/md'
import { RiUserUnfollowFill } from 'react-icons/ri'
//import { SiAutotask } from 'react-icons/si'

function AboutUs() {
    return (
        <>
            {/* .sbmt {background-color: #008CBA; 
width: 300px;
border: none;
color: white;
padding: 15px 32px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 16px;}

.sbmt:hover {background-color: #2fa076;
width: 300px;
border: none;
color: white;
padding: 15px 32px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 16px;} */}

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
                    className='pageBanner'
                    style={{ backgroundImage: `url(${AboutPageBg})` }}
                >
                    <div className='container'>
                        <span className='heading'>About us</span>
                    </div>
                </div>

                <div
                    className='pageAbout'
                    style={{ backgroundImage: `url(${GreyBg})` }}
                >
                    <div className='container'>
                        <div className='textBlock'>
                            <div className='info right'>
                                <div className='license'>
                                    <div
                                        className='img invisLink'
                                        style={{
                                            backgroundImage: `url(${Profile})`,
                                        }}
                                    >
                                        <a
                                            href='https://beta.companieshouse.gov.uk/company/12143668'
                                            target='#blank'
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
                                            1567th Avenue Street, Irvine,
                                            Alberta
                                        </span>
                                    </div>
                                </div>
                                <div
                                    className='btnsWrap'
                                    style={{ textAlign: 'center' }}
                                >
                                    <Link
                                        to='/Auth/signup'
                                        className='btnFillColor1Lg'
                                        style={{ marginRight: '20px' }}
                                    >
                                        Join
                                    </Link>
                                    {/* <a
                                        href='https://beta.companieshouse.gov.uk/company/12143668'
                                        target='#blank'
                                        className='btnFillColor2Lg'
                                        style={{ margin: '20px 0 0' }}
                                    >
                                        Check registration
                                    </a> */}
                                </div>
                            </div>
                            <p>
                                GrowveonCT is an investment enterprise steered
                                at decrypting the crypto puzzle and bringing
                                risk free profit at your acknowledged time to
                                secure your financial dreams
                            </p>
                            <p>
                                An A.I Robotic trading System is used to
                                automatically generate trading signals on the
                                crypto trader???s specifications. GrowveonCT is
                                aimed at neutralizing the stick like glue
                                interphase between the trader and his screen
                                while waiting for the trading peg to conform to
                                his square hole.
                            </p>
                            <p>
                                With AI trading, the signal artifice are
                                ingrained in a systems program, giving you a
                                monopoly to automatically conform with the
                                finest and perfect trading signals. With a
                                trading robot, one can hit the crests 24 hours a
                                day and Inflate maximally on output. As we know
                                the major limitation to trading success remains
                                emotions. However, a Crypto robot which operates
                                0s and 1s eliminates the human sensation from
                                the trading equation and gives you the best
                                trading signals to hitting the crypto casino
                            </p>
                            <div
                                className='img left'
                                style={{ backgroundImage: `url(${AboutImg})` }}
                            ></div>
                            <div className='cfix'></div>
                            <br />
                            <br />
                            <p>
                                Using a blockchain is cryptographically secure ???
                                the ledger is distributed across all nodes in
                                the system making hacking near impossible. All
                                of the solidity Ethereum smart contract code
                                used for the token sales and vault account was
                                fully audited by SmartDec, a firm specialized in
                                Smart Contract Security Audit. No single
                                authority has control. Against this backdrop we
                                Growveon, we are here to give the best,
                                proficient and Paramount lap of luxury to your
                                financial Dreams. We Growveon! We keep our word.
                            </p>
                        </div>
                        <div className='advTempl'>
                            <div className='container'>
                                <span className='captionDark center'>
                                    Why choose us?
                                </span>
                                <div className='advWrap'>
                                    <div className='grid'>
                                        <div className='item col4'>
                                            <div className='in'>
                                                <span className='icon-phone gradTxt'>
                                                    <AiFillPhone className='location__svg' />
                                                </span>
                                                <span className='title'>
                                                    AUTOMATED
                                                </span>
                                                <p>
                                                    No financial advisor? No
                                                    experience trading
                                                    cryptocurrency? No worries.
                                                    Our algorithm takes away the
                                                    guesswork and executes
                                                    transactions automatically
                                                    on your behalf.
                                                </p>
                                            </div>
                                        </div>
                                        <div className='item col4'>
                                            <div className='in'>
                                                <span className='icon-chart gradTxt'>
                                                    <AiOutlineFundProjectionScreen className='location__svg' />
                                                </span>
                                                <span className='title'>
                                                    SMART TRADING
                                                </span>
                                                <p>
                                                    Emotions and stress have a
                                                    negative impact on trading.
                                                    Our Automated platform
                                                    allows you to avoid that and
                                                    gets the best option by
                                                    analysing all data storage.
                                                </p>
                                            </div>
                                        </div>
                                        <div className='item col4'>
                                            <div className='in'>
                                                <span className='icon-team gradTxt'>
                                                    <IoIosPeople className='location__svg' />
                                                </span>
                                                <span className='title'>
                                                    PROTECTION FROM HACKING
                                                </span>
                                                <p>
                                                    On a decentralized platform,
                                                    all user accounts are
                                                    independent; if one account
                                                    is hacked, this won???t breach
                                                    the security.
                                                </p>
                                            </div>
                                        </div>
                                        <div className='item col4'>
                                            <div className='in'>
                                                <span className='icon-docs gradTxt'>
                                                    <MdLowPriority className='location__svg' />
                                                </span>
                                                <span className='title'>
                                                    LOW COST
                                                </span>
                                                <p>
                                                    Robot Trading only use money
                                                    as cost of operation from
                                                    profit, Thus RTD is ICO
                                                    lowest cost of operations.
                                                </p>
                                            </div>
                                        </div>
                                        <div className='item col4'>
                                            <div className='in'>
                                                <span className='icon-cash gradTxt'>
                                                    <RiUserUnfollowFill className='location__svg' />
                                                </span>
                                                <span className='title'>
                                                    NO MORE MIDDLE MEN
                                                </span>
                                                <p>
                                                    Immediate funding without
                                                    third-parties. Smart
                                                    contracts autonomously
                                                    perform funding ??? collect
                                                    and release payments.
                                                </p>
                                            </div>
                                        </div>
                                        <div className='item col4'>
                                            <div className='in'>
                                                <span className='icon-pass gradTxt'>
                                                    {/* <SiAutotask className='location__svg' /> */}
                                                </span>
                                                <span className='title'>
                                                    AUTO TRADING 24/7
                                                </span>
                                                <p>
                                                    Our platform is always
                                                    available to ensure that no
                                                    market opportunity is lost.
                                                    Let our platform work for
                                                    you!
                                                </p>
                                            </div>
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

export default AboutUs
