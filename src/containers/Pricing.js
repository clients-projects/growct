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
