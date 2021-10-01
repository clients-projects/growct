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
                    <span className='heading'>Packages</span>
                </div>
            </div>

            <div
                className='rules'
                style={{ backgroundImage: `url(${GreyBgBig})` }}
            >
                <section className='investmentofferwrap'>
                    <div
                        className='content'
                        style={{ display: 'grid', gap: '3rem', padding: '0 2rem' }}
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
                    <div className='contents'>
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
                                            Minimum: <span>$500</span>
                                        </li>
                                        <li>
                                            Miximum: <span>$4,999</span>
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
                                            Minimum: <span>$5,000</span>
                                        </li>
                                        <li>
                                            maximum: <span>$19,999</span>
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
                                            Minimum: <span>$20,000</span>
                                        </li>
                                        <li>
                                            maximum: <span>$50,000</span>
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
                    <div className='content' style={{ padding: '0 2rem' }}>
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
                                            Minimum: <span>$500 </span>
                                        </li>
                                        <li>
                                            Maximum: <span>$4,999</span>
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
                                            Minimum: <span>$5,000 </span>
                                        </li>
                                        <li>
                                            Maximum: <span>$19,999</span>
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
                                            Minimum: <span>$20,000 </span>
                                        </li>
                                        <li>
                                            Maximum: <span>$49,900 </span>
                                        </li>
                                        <li>
                                            Referral Bonus: <span>10%</span>
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
                                    <div className='planname'>DIAMOND</div>
                                    <div className='percentage'>
                                        25<sup>%</sup>
                                        <span></span>
                                    </div>
                                </div>
                                <div className='planinfos'>
                                    <ul>
                                        <li>
                                            duration: <span>1 Week</span>
                                        </li>
                                        <li>
                                            Minimum: <span>$50,000 </span>
                                        </li>
                                        <li>
                                            Maximum: <span>$500,000 </span>
                                        </li>
                                        <li>
                                            Referral Bonus: <span>15%</span>
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
                    <div className='content' style={{ padding: '0 2rem' }}>
                        <div className='planinsider2'>
                            <div className='planbox1 one'>
                                <div
                                    className='beginerwrap'
                                    style={{ color: 'white' }}
                                >
                                    <div className='planname'>ONE MONTH</div>
                                    <div className='percentage'>
                                        44<sup>%</sup>
                                        <span></span>
                                    </div>
                                </div>
                                <div className='planinfos'>
                                    <ul>
                                        <li>
                                            duration:{' '}
                                            <span>11% weekly for 4 Weeks</span>
                                        </li>
                                        <li>
                                            Minimum: <span>$500</span>
                                        </li>
                                        <li>
                                            Maximum: <span>$4,999</span>
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
                                    <div className='planname'>TWO MONTHS</div>
                                    <div className='percentage'>
                                        52<sup>%</sup>
                                        <span></span>
                                    </div>
                                </div>
                                <div className='planinfos'>
                                    <ul>
                                        <li>
                                            duration:{' '}
                                            <span>13 weekly for 8 Week</span>
                                        </li>
                                        <li>
                                            Minimum: <span>$5000</span>
                                        </li>
                                        <li>
                                            Maximum: <span>$19,999</span>
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
                                    <div className='planname'>THREE MONTHS</div>
                                    <div className='percentage'>
                                        64<sup>%</sup>
                                        <span></span>
                                    </div>
                                </div>
                                <div className='planinfos'>
                                    <ul>
                                        <li>
                                            duration:{' '}
                                            <span>16% weekly for 12 Weeks</span>
                                        </li>
                                        <li>
                                            Minimum: <span>$20,000</span>
                                        </li>
                                        <li>
                                            Maximum: <span>$49,999</span>
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
                                    <div className='planname'>SIX MONTHS</div>
                                    <div className='percentage'>
                                        76<sup>%</sup>
                                        <span></span>
                                    </div>
                                </div>
                                <div className='planinfos'>
                                    <ul>
                                        <li>
                                            duration:{' '}
                                            <span>19% weekly for 24 Week</span>
                                        </li>
                                        <li>
                                            Minimum: <span>$50,000</span>
                                        </li>
                                        <li>
                                            Maximum: <span>$500,000</span>
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
                        <div
                            className='calculatorinside bounceInUp wow'
                            style={{ color: 'white' }}
                        >
                            <h2 style={{ textAlign: 'center' }}>
                                *INVESTED CAPITAL IS DUE FOR WITHDRAWAL AFTER
                                (28 days)*
                            </h2>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Pricing
