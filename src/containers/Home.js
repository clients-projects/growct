import React, { useState } from 'react'
import { Link } from 'react-router-dom'


import BannerThumb from '../sass/images/bannerthumb.png'
import GeoTrust from '../sass/images/geotrust.png'
import TrustGuard from '../sass/images/trustguard.png'
import SiteLock from '../sass/images/sitelock.png'
import Mcafee from '../sass/images/mcafee.png'
import BannerBitcoin from '../sass/images/bannerbitcoin.png'
import BannerEthereum from '../sass/images/bannerethreum.png'
import Certificate from '../sass/images/certificatethumb.jpg'

import TechnicalAnalysis from '../tradeviewWidgets/AdvancedRealChart'

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
            <section className='mainwrap'>
                <section className='bannerwrap'>
                    {/* <section className='header slideInDown wow'>
                        <div className='content'>
                         <div className="logo"><a href="?a=home"><img src="styles/images/logo.png" alt=""></a></div> 
                            <div className='menu'>
                                <ul>
                                    <li>
                                        <a href='?a=home'>HOME</a>
                                    </li>
                                    <li>
                                        <a href='?a=cust&page=about'>
                                            ABOUT US
                                        </a>
                                    </li>
                                    <li>
                                        <a href='?a=cust&page=howto'>
                                            GET STARTED
                                        </a>
                                    </li>
                                    <li>
                                        <a href='?a=cust&page=affiliates'>
                                            PARTNERSHIP
                                        </a>
                                    </li>

                                    <li>
                                        <a href='?a=faq'>FAQ</a>
                                    </li>
                                    <li>
                                        <a href='?a=support'>SUPPORT</a>
                                    </li>

                                    <li className='login'>
                                        <a href='?a=login'>login</a>
                                    </li>
                                    <li className='signup'>
                                        <a href='?a=signup'>signup</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section> */}

                    <section className='banner'>
                        <div className='content'>
                            <div className='leftinfo'>
                                {/* <div className='servertimwrap slideInRight wow'>
                                    <div className='servertime'>
                                        server time: <span id='clockbox'></span>
                                    </div>
                                    <div className='emailaddress'>
                                        e-mail address:{' '}
                                        <span>
                                            <a href='mailto:support@growveonct.com'>
                                                support@growveonct.com
                                            </a>
                                        </span>
                                    </div>
                                </div> */}
                                <h1 className='slideInDown wow'>
                                    safe & Secure
                                </h1>
                                <h2 className='slideInDown wow'>
                                    cryptocurrency{' '}
                                </h2>
                                <h3 className='slideInDown wow'>
                                    investment platform
                                </h3>
                                <p
                                    className='slideInDown wow'
                                    style={{ fontWeight: 400 }}
                                >
                                    growveonct.com is a global cryptocurrency
                                    platform which aims to extract maximum from
                                    the opportunities of trading and investments
                                    while operating with the assets of customers
                                    to accomplish the most outstanding profit.
                                </p>
                                <a
                                    href='?a=signup'
                                    className='slideInDown wow action'
                                >
                                    Investor now
                                </a>
                                <div className='bannerstat'>
                                    <div className='statbox slideInRight wow'>
                                        <div className='icon'>
                                            <img src={BannerBitcoin} alt='' />
                                        </div>
                                        <p>
                                            BITCOIN
                                            <span className='bitCoin'></span>
                                        </p>
                                    </div>

                                    <div className='statbox slideInRight wow'>
                                        <div className='icon'>
                                            <img src={BannerEthereum} alt='' />
                                        </div>
                                        <p>
                                            ethereum
                                            <span className='ethCoin'></span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='rightthumb'>
                                <figure>
                                    <img src={BannerThumb} alt='' />
                                </figure>
                            </div>
                        </div>
                    </section>
                </section>

                <section className='investmentofferwrap'>
                    <div
                        className='content'
                        style={{ display: 'grid', gap: '3rem' }}
                    >
                        <div>
                            <div className='left slideInDown wow'>
                                <h2>
                                    investment <br />
                                    <span>Packages</span>
                                </h2>
                            </div>
                            <div className='right slideInDown wow'>
                                <p style={{ fontWeight: 400 }}>
                                    growveonct.com proposes you the most
                                    dependable and novel finance system to
                                    choose not only for settlements but also for
                                    the possibility to earn the most
                                    extraordinary profit.
                                </p>
                            </div>
                        </div>
                        <div className='plansHeader'>
                            <h2 style={{ textAlign: 'center' }}>
                                Daily investment Packages
                            </h2>
                        </div>
                    </div>
                </section>
                <section className='planwrap'>
                    <div className='content'>
                        <div className='planinsider bounceInDown wow'>
                            <div className='planbox one'>
                                <div className='beginerwrap'>
                                    <div className='planname'>HELM</div>
                                    <div className='percentage'>
                                        2<sup>%</sup>
                                        <span></span>
                                    </div>
                                </div>
                                <div className='roi'>Principal: Returned</div>
                                <div className='planinfos'>
                                    <ul>
                                        <li>
                                            duration: <span>24 Hours</span>
                                        </li>
                                        <li>
                                            Minimum: <span>500 USD</span>
                                        </li>
                                        <li>
                                            Miximum: <span>4,900 USD</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className='deposit'>
                                    <a href='?a=signup'>Deposit</a>
                                </div>
                            </div>
                            <div className='planbox two'>
                                <div className='beginerwrap'>
                                    <div className='planname'>Premium</div>
                                    <div className='percentage'>
                                        2.5<sup>%</sup>
                                        <span></span>
                                    </div>
                                </div>
                                <div className='roi'>Principal: Returned</div>
                                <div className='planinfos'>
                                    <ul>
                                        <li>
                                            duration: <span>24 Hours</span>
                                        </li>
                                        <li>
                                            Minimum: <span>5,000 USD</span>
                                        </li>
                                        <li>
                                            maximum: <span>19,900 USD</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className='deposit'>
                                    <a href='?a=signup'>Deposit</a>
                                </div>
                            </div>
                            <div className='planbox three'>
                                <div className='beginerwrap'>
                                    <div className='planname'>Business</div>
                                    <div className='percentage'>
                                        3.5<sup>%</sup>
                                        <span></span>
                                    </div>
                                </div>
                                <div className='roi'>Principal: Returned</div>
                                <div className='planinfos'>
                                    <ul>
                                        <li>
                                            duration: <span>24 Hours</span>
                                        </li>
                                        <li>
                                            Minimum: <span>20,000 USD</span>
                                        </li>
                                        <li>
                                            maximum: <span>50,000</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className='deposit'>
                                    <a href='?a=signup'>Deposit</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='plansHeader'>
                        <h2 style={{ textAlign: 'center' }}>
                            Weekly investment Packages
                        </h2>
                    </div>
                    <div className='content'>
                        <div className='planinsider1'>
                            <div className='planbox1 one'>
                                <div
                                    className='beginerwrap'
                                    style={{ color: 'white' }}
                                >
                                    <div className='planname'>BRONZE</div>
                                    <div className='percentage'>
                                        10<sup>%</sup>
                                        <span></span>
                                    </div>
                                </div>
                                <div className='planinfos'>
                                    <ul>
                                        <li>
                                            duration: <span>1 Week</span>
                                        </li>
                                        <li>
                                            Minimum: <span>500 USD</span>
                                        </li>
                                        <li>
                                            Maximum: <span>4,900 USD</span>
                                        </li>
                                        <li>
                                            Referral Bonus: <span>5%</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className='deposit'>
                                    <a href='?a=signup'>Deposit</a>
                                </div>
                            </div>
                            <div className='planbox1 two'>
                                <div
                                    className='beginerwrap'
                                    style={{ color: 'white' }}
                                >
                                    <div className='planname'>SILVER</div>
                                    <div className='percentage'>
                                        15<sup>%</sup>
                                        <span></span>
                                    </div>
                                </div>
                                <div className='planinfos'>
                                    <ul>
                                        <li>
                                            duration: <span>1 Week</span>
                                        </li>
                                        <li>
                                            Minimum: <span>5,000 USD</span>
                                        </li>
                                        <li>
                                            Maximum: <span>19,900 USD</span>
                                        </li>
                                        <li>
                                            Referral Bonus: <span>7%</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className='deposit'>
                                    <a href='?a=signup'>Deposit</a>
                                </div>
                            </div>
                            <div className='planbox1 three'>
                                <div
                                    className='beginerwrap'
                                    style={{ color: 'white' }}
                                >
                                    <div className='planname'>GOLD</div>
                                    <div className='percentage'>
                                        20<sup>%</sup>
                                        <span></span>
                                    </div>
                                </div>
                                <div className='planinfos'>
                                    <ul>
                                        <li>
                                            duration: <span>1 Week</span>
                                        </li>
                                        <li>
                                            Minimum: <span>20,000 USD</span>
                                        </li>
                                        <li>
                                            Maximum: <span>49,900 USD</span>
                                        </li>
                                        <li>
                                            Referral Bonus: <span>5%</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className='deposit'>
                                    <a href='?a=signup'>Deposit</a>
                                </div>
                            </div>
                            <div className='planbox1 four'>
                                <div
                                    className='beginerwrap'
                                    style={{ color: 'white' }}
                                >
                                    <div className='planname'>BRONZE</div>
                                    <div className='percentage'>
                                        10<sup>%</sup>
                                        <span></span>
                                    </div>
                                </div>
                                <div className='planinfos'>
                                    <ul>
                                        <li>
                                            duration: <span>1 Week</span>
                                        </li>
                                        <li>
                                            Minimum: <span>500 USD</span>
                                        </li>
                                        <li>
                                            Maximum: <span>4900 USD</span>
                                        </li>
                                        <li>
                                            Referral Bonus: <span>5%</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className='deposit'>
                                    <a href='?a=signup'>Deposit</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='plansHeader'>
                        <h2 style={{ textAlign: 'center' }}>
                            Compound investment Packages
                        </h2>
                    </div>
                    <div className='content'>
                        <div className='planinsider1'>
                            <div className='planbox1 one'>
                                <div
                                    className='beginerwrap'
                                    style={{ color: 'white' }}
                                >
                                    <div className='planname'>BRONZE</div>
                                    <div className='percentage'>
                                        10<sup>%</sup>
                                        <span></span>
                                    </div>
                                </div>
                                <div className='planinfos'>
                                    <ul>
                                        <li>
                                            duration: <span>1 Week</span>
                                        </li>
                                        <li>
                                            Minimum: <span>500 USD</span>
                                        </li>
                                        <li>
                                            Maximum: <span>4900 USD</span>
                                        </li>
                                        <li>
                                            Referral Bonus: <span>5%</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className='deposit'>
                                    <a href='?a=signup'>Deposit</a>
                                </div>
                            </div>
                            <div className='planbox1 two'>
                                <div
                                    className='beginerwrap'
                                    style={{ color: 'white' }}
                                >
                                    <div className='planname'>BRONZE</div>
                                    <div className='percentage'>
                                        10<sup>%</sup>
                                        <span></span>
                                    </div>
                                </div>
                                <div className='planinfos'>
                                    <ul>
                                        <li>
                                            duration: <span>1 Week</span>
                                        </li>
                                        <li>
                                            Minimum: <span>500 USD</span>
                                        </li>
                                        <li>
                                            Maximum: <span>4900 USD</span>
                                        </li>
                                        <li>
                                            Referral Bonus: <span>5%</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className='deposit'>
                                    <a href='?a=signup'>Deposit</a>
                                </div>
                            </div>
                            <div className='planbox1 three'>
                                <div
                                    className='beginerwrap'
                                    style={{ color: 'white' }}
                                >
                                    <div className='planname'>BRONZE</div>
                                    <div className='percentage'>
                                        10<sup>%</sup>
                                        <span></span>
                                    </div>
                                </div>
                                <div className='planinfos'>
                                    <ul>
                                        <li>
                                            duration: <span>1 Week</span>
                                        </li>
                                        <li>
                                            Minimum: <span>500 USD</span>
                                        </li>
                                        <li>
                                            Maximum: <span>4900 USD</span>
                                        </li>
                                        <li>
                                            Referral Bonus: <span>5%</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className='deposit'>
                                    <a href='?a=signup'>Deposit</a>
                                </div>
                            </div>
                            <div className='planbox1 four'>
                                <div
                                    className='beginerwrap'
                                    style={{ color: 'white' }}
                                >
                                    <div className='planname'>BRONZE</div>
                                    <div className='percentage'>
                                        10<sup>%</sup>
                                        <span></span>
                                    </div>
                                </div>
                                <div className='planinfos'>
                                    <ul>
                                        <li>
                                            duration: <span>1 Week</span>
                                        </li>
                                        <li>
                                            Minimum: <span>500 USD</span>
                                        </li>
                                        <li>
                                            Maximum: <span>4900 USD</span>
                                        </li>
                                        <li>
                                            Referral Bonus: <span>5%</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className='deposit'>
                                    <a href='?a=signup'>Deposit</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='calculatorwrap'>
                    <div className='content'>
                         <div className='calculatorinside bounceInUp wow' style={{color: 'white'}}>
                        <h2 style={{textAlign: 'center'}}>*INVESTED CAPITAL IS DUE FOR WITHDRAWAL AFTER 4 (28 days)*</h2>
                      
                            </div>
                    </div>
                </section>

                <section className='aboutwrap' style={{margin: '4rem 0'}}>
                    <div className='content'>
                        <div className='aboutinside slideInUp wow'>
                            <div className='left'>
                                <h1>ABOUT growveonct.com</h1>
                                <p style={{ lineHeight: 2, fontWeight: 400 }}>
                                    growveonct.com is a global crypto finance
                                    solution for all the crypto enthusiasts who
                                    are in search of the trusted, secure and
                                    reliable platform. growveonct.com is
                                    operating under the UK established company
                                    known as growveonct.com with the company
                                    number #19928031. growveonct.com provides
                                    our clients with an opportunity to grow
                                    their finance in the secured environment
                                    without any need to learn any complex
                                    trading skills. There are no super risky
                                    ventures that could leave you figuring your
                                    extinction, and we hold great satisfaction
                                    in managing secure, profitable conditions
                                    where our clients benefit with minimal fuss
                                    and optimal convenience. growveonct.com
                                    Expert team is empowered to delivering a
                                    simple, automated and easy-to-use regularity
                                    for financing and grow in the booming crypto
                                    marketplace.
                                </p>
                                <a href='?a=faq'>More Information</a>
                            </div>
                            <div className='right'>
                                <div className='certificatebo'>
                                    <a href='#'>
                                        <img src={Certificate} alt='' />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <section className='registerwrap'>
                    <div className='content'>
                        <div className='left'>
                            <div className='ukflagwrap slideInRight wow'>
                                 <div className="flag"><img src="styles/images/ukmapicon.jpg" alt=""></div> *
                                <div className='info'>
                                    <h3>growveonct.com</h3>
                                    <h4>
                                        UK Registered Company{' '}
                                        <span>#19928031</span>
                                    </h4>
                                </div>
                            </div>
                            <div className='addresswrap slideInRight wow'>
                                 <div className="address">61 Glentham Road,<br/>London, United Kingdom, SW13 9JJ</div> 
                                <div className='email'>
                                    <a href='mailto:admin@growveonct.com'>
                                        admin@growveonct.com
                                    </a>
                                </div>
                            </div>
                            <div className='action slideInRight wow'>
                                <a
                                    href='#'
                                    target='_blank'
                                    className='downloadcertificate'
                                ></a>
                                 <a href="#" className="companyprofile" target="_blank">Company<br/>Profile</a> 
                            </div>
                        </div>
                    </div>
                </section> */}

                <section className='referralwrap' style={{margin: '4rem 0'}}>
                    <div className='content'>
                        <div className='left'>
                            <div className='value one zoomIn wow'>
                                3% <span>Level1</span>
                            </div>
                            <div className='value two zoomIn wow'>
                                2% <span>Level2</span>
                            </div>
                            <div className='value three zoomIn wow'>
                                1% <span>Level3</span>
                            </div>
                        </div>
                        <div className='right slideInRight wow'>
                            <h3>
                                <span>3 levels</span> REFERRAL COMMISSION
                                PROGRAM
                            </h3>
                            <p>
                                Earn with the most premium multi level referral
                                commission program by referring to your friends,
                                relative, colleagues and your networking
                                circles.
                            </p>
                        </div>
                    </div>
                </section>
                <section>
                    <TechnicalAnalysis />
                </section>
                <section className='featureswrap'>
                    <div className='content'>
                        <h2>growveonct.com features</h2>
                        <div className='feturesboxinside'>
                            <div className='featuredbox flipinX wow'>
                                {/* <div className="icon"><img src="styles/images/uniformmaturity.png" alt=""></div> */}
                                <div className='infos'>
                                    <h4>PROFESSIONAL TEAM</h4>
                                    <p>
                                        Nodefrancias Ltd is run by a very
                                        professional and experienced admin team
                                        who are expert in handling the hyip
                                        yield investment programs.
                                    </p>
                                </div>
                            </div>
                            <div className='featuredbox flipinX wow'>
                                {/* <div className="icon"><img src="styles/images/fastpayment.png" alt=""></div> */}
                                <div className='infos'>
                                    <h4>INSTANT PAYOUTS</h4>
                                    <p>
                                        We at growveonct.com believe in full
                                        transparency and hence all our investors
                                        enjoy instant payouts of their profits
                                        and referral earnings.
                                    </p>
                                </div>
                            </div>
                            <div className='featuredbox flipinX wow'>
                                {/* <div className="icon"><img src="styles/images/profsupport.png" alt=""></div> */}
                                <div className='infos'>
                                    <h4>24/7 SUPPORT</h4>
                                    <p>
                                        Timely support is a key ingredient in
                                        the success of any high yield investment
                                        program. Our staff provides 24/7 support
                                        services.
                                    </p>
                                </div>
                            </div>
                            <div className='featuredbox flipinX wow'>
                                {/* <div className="icon"><img src="styles/images/strongsecurity.png" alt=""></div> */}
                                <div className='infos'>
                                    <h4>STRONG SECURITY</h4>
                                    <p>
                                        growveonct.com uses 256 bit ssl
                                        security. Also our site is hosted on a
                                        dedicated server and protected against
                                        all kinds of ddos attacks.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='banklevel slideInDown wow'>
                            <div className='left'>Bank Level Security</div>
                            <div className='right'>
                                <span>
                                    <img src={GeoTrust} alt='' />
                                </span>
                                <span>
                                    <img src={TrustGuard} alt='' />
                                </span>
                                <span>
                                    <img src={SiteLock} alt='' />
                                </span>
                                <span>
                                    <img src={Mcafee} alt='' />
                                </span>
                            </div>
                        </div>
                    </div>
                </section>
            </section>

            {/* <div className='lasttenwrap'>
                <div className='content'>
                    <div className='lasttenbox slideInLeft wow'>
                        <div className='head'>last 10 deposits</div>
                        <div className='listing'></div>
                    </div>
                    <div className='midstatbox slideInUp wow'>
                        <div className='statbox one'>
                            <div className='info'>
                                547
                                <span>Running Days</span>
                            </div>
                            <div className="icon"><img src="styles/images/runningdays.png" alt=""></div>
                        </div>
                        <div className='statbox two'>
                            <div className='info'>
                                $ 335169.13
                                <span>Total Deposited</span>
                            </div>
                            <div className="icon"><img src="styles/images/totaldeposited.png" alt=""></div>
                        </div>
                        <div className='statbox three'>
                            <div className='info'>
                                $ 782310.92
                                <span>Total Withdrawal</span>
                            </div>
                            <div className="icon"><img src="styles/images/totalwithdrawals.png" alt=""></div>
                        </div>
                        <div className='statbox four'>
                            <div className='info'>
                                13265
                                <span>Total Members</span>
                            </div>
                            <div className="icon"><img src="styles/images/totalmembers.png" alt=""></div>
                        </div>
                    </div>
                    <div className='lasttenbox slideInRight wow'>
                        <div className='head'>last 10 withdrawals</div>
                        <div className='listing'></div>
                    </div>
                </div>
            </div> */}

            <div className='paymentlogowrap'>
                <div className='content'>
                    {/* <div className="icons zoomIn wow"><img src="styles/images/perfectmoney.png" alt=""></div>
      <div className="icons zoomIn wow"><img src="styles/images/payeer.png" alt=""></div>
      <div className="icons zoomIn wow"><img src="styles/images/bitcoin.png" alt=""></div>
      <div className="icons zoomIn wow"><img src="styles/images/litecoin.png" alt=""></div>
      <div className="icons zoomIn wow"><img src="styles/images/ethreum.png" alt=""></div>
      <div className="icons zoomIn wow"><img src="styles/images/bicoincash.png" alt=""></div>
      <div className="icons zoomIn wow"><img src="styles/images/dogecoin.png" alt=""></div>
      <div className="icons zoomIn wow"><img src="styles/images/dashcoin.png" alt=""></div> */}
                </div>
            </div>
        </>
    )
}

export default Layout
