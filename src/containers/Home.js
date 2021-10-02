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

import Uniformmaturity from '../sass/images/uniformmaturity.png'
import Fastpayment from '../sass/images/fastpayment.png'
import Strongsecurity from '../sass/images/strongsecurity.png'
import Runningdays from '../sass/images/runningdays.png'
import Totaldeposited from '../sass/images/totaldeposited.png'
import Totalmembers from '../sass/images/totalmembers.png'
import Totalwithdrawals  from '../sass/images/totalwithdrawals.png'
import Profsupport  from '../sass/images/profsupport.png'


function Layout(props) {




    const [calcNum, setCalcNum] = useState(20)
    const [selectedValue, setSelectedValue] = useState(0.1)
    const [calcProfit, setCalcProfit] = useState(22)

    const inputChangeHandler = (input, event) => {
        if (input.target.id === 'calc_amount') {
            setCalcNum(input.target.value)

            //setCalcProfit((Number(selectedValue) * Number(input.target.value)) + Number(input.target.value))
        }

        console.log({ input })
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
                

                    <section className='banner'>
                        <div className='contents'>
                            <div className='leftinfo'>
                      
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
                                    Invest now
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

              

                <section className='aboutwrap' style={{ margin: '4rem 0' }}>
                    <div className='contents'>
                        <div className='aboutinside slideInUp wow'>
                            <div className='left'>
                                <h1>ABOUT growveonct</h1>
                                <p
                                    style={{
                                        lineHeight: 2,
                                        fontWeight: 400,
                                        fontSize: '1.2rem',
                                    }}
                                >
                                    Growveonct.com is a global crypto finance
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

                <section className='referralwrap' style={{ margin: '4rem 0' }}>
                    <div className='contents'>
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

                <section className='featureswrap'>
                    <section style={{marginBottom: '4rem'}}>
                        <TechnicalAnalysis />
                    </section>
                    <div className='contents'>
                        <h2>growveonCT features</h2>
                        <div className='feturesboxinside'>
                            <div className='featuredbox flipinX wow'>
                                <div className="icon"><img src={Uniformmaturity} alt=""/></div>
                                <div className='infos'>
                                    <h4>PROFESSIONAL TEAM</h4>
                                    <p>
                                        GrowveonCT Ltd is run by a very
                                        professional and experienced admin team
                                        who are expert in handling the hyip
                                        yield investment programs.
                                    </p>
                                </div>
                            </div>
                            <div className='featuredbox flipinX wow'>
                                <div className="icon"><img src={Fastpayment} alt=""/></div>
                                <div className='infos'>
                                    <h4>INSTANT PAYOUTS</h4>
                                    <p>
                                        We at Growveonct believe in full
                                        transparency and hence all our investors
                                        enjoy instant payouts of their profits
                                        and referral earnings.
                                    </p>
                                </div>
                            </div>
                            <div className='featuredbox flipinX wow'>
                                <div className="icon"><img src={Profsupport} alt=""/></div>
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
                                <div className="icon"><img src={Strongsecurity} alt=""/></div>
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


            <div className='lasttenwrap'>
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
                            <div className="icon"><img src={Runningdays} alt=""/></div>
                        </div>
                        <div className='statbox two'>
                            <div className='info'>
                                $ 335169.13
                                <span>Total Deposited</span>
                            </div>
                            <div className="icon"><img src={Totaldeposited} alt=""/></div>
                        </div>
                        <div className='statbox three'>
                            <div className='info'>
                                $ 782310.92
                                <span>Total Withdrawal</span>
                            </div>
                            <div className="icon"><img src={Totalwithdrawals} alt=""/></div>
                        </div>
                        <div className='statbox four'>
                            <div className='info'>
                                13265
                                <span>Total Members</span>
                            </div>
                            <div className="icon"><img src={Totalmembers} alt=""/></div>
                        </div>
                    </div>
                    <div className='lasttenbox slideInRight wow'>
                        <div className='head'>last 10 withdrawals</div>
                        <div className='listing'></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Layout
