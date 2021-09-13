import React from 'react'
import { Link } from 'react-router-dom'

import Payment_1 from '../../images/payment_1.png'
import Payment_2 from '../../images/payment_2.png'
import Payment_4 from '../../images/payment_4.png'
import Payment_5 from '../../images/payment_1.png'
import Payment_6 from '../../images/payment_6.png'
import Payment_8 from '../../images/payment_8.png'

function Footer() {
    return (
        <>
            <div className='payments'>
                <div className='container'>
                    <ul className='table full'>
                        <li className='tCell bottom left'>
                            <img src={`${Payment_1}`} alt='payment' />
                        </li>
                        <li className='tCell middle left'>
                            <img src={`${Payment_2}`} alt='payment' />
                        </li>
                        <li className='tCell middle right'>
                            <img src={`${Payment_4}`} alt='payment' />
                        </li>
                        <li className='tCell middle right'>
                            <img src={`${Payment_5}`} alt='payment' />
                        </li>
                        <li className='tCell middle right'>
                            <img src={`${Payment_6}`} alt='payment' />
                        </li>
                        <li className='tCell middle right'>
                            <img src={`${Payment_8}`} alt='payment' />
                        </li>
                    </ul>
                </div>
            </div>

            <footer>
                <div className='container'>
                    <div className='cfix'>
                        <div className='footCol'>
                            <p className='copyright'>2021 © robot44 Trade</p>
                        </div>
                        <ul className='footMenu'>
                            <li className='col'>
                                <ul>
                                    <li>
                                        <Link to='/'>HOME</Link>
                                    </li>
                                    <li>
                                        <Link to='/about-us'>ABOUT US</Link>
                                    </li>
                                    <li>
                                        <Link to='/top-reward'>TOP REWARD</Link>
                                    </li>
                                    <li>
                                        <Link to='/pricing'>PRICING</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className='col'>
                                <ul>
                                    <li>
                                        <Link to='testimonies'>
                                            TESTIMONIES
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/contact-us'>CONTACT US</Link>
                                    </li>
                                    <li>
                                        <Link to='/faq'>FAQ</Link>
                                    </li>
                                    <li>
                                        <Link href='/Auth/signup'>Sign up</Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <div className='footCol'>
                            <div className='cont'>
                                <span className='title'>Address:</span>
                                <p>
                                    71-75 Shelton Street, London, Greater
                                    London, United Kingdom, WC2H 9JQ
                                </p>
                            </div>
                            <div className='cont'>
                                <span className='title'>E-mail:</span>
                                <a
                                    className='link'
                                    href='mailto:admin@growveonct.com'
                                >
                                    admin@growveonct.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
