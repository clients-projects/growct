import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import Logos from '../../sass/images/GrowveonctLogo.svg'
import LiveChart from '../../tradeviewWidgets/LiveTicker'

//Get the current date
const newDate = new Date()

const time = newDate.getHours() + ':' + newDate.getMinutes()

const date = newDate.getDate()
const month = newDate.toLocaleString('en-GB', { month: 'short' })

const year = newDate.getFullYear()

function SubHeader(props) {
    const auth = props.auth
    let isAuthNav = (
        <>
            <Link to='/Auth/login' className='btnFillColor1Sm'>
                login
            </Link>
            <Link to='/Auth/signup' className='btnFillColor2Sm'>
                sign up
            </Link>
        </>
    )

    if (auth) {
        isAuthNav = (
            <Link to='/admin/dashboard' className='btnFillColor1Sm'>
                Go to Dashboard
            </Link>
        )
    //     display: grid;
    // grid-template-columns: 3fr 2fr 1fr;
    // align-items: center;
    }

    return (
        <>
                <LiveChart />
            <div className='topLine' style={{ paddingTop: '0' }}>
                <div className='container'>
                    <div
                        className='table full'
                        style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 3fr 1fr',
                            alignItems: 'center',
                        }}
                    >
                        <div className='logoWrap tCell'>
                            <div className='logo invisLink'>
                                <img
                                    src={`${Logos}`}
                                    alt='logo'
                                    height='100px;'
                                />
                                Growveon cryptotrading
                                <a href='/'>main</a>
                            </div>
                        </div>
                        <div className='logReg tCell right'>{isAuthNav}</div>

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
                    </div>
                </div>
            </div>

            <script src='../widgets.coingecko.com/coingecko-coin-price-marquee-widget.js'></script>
            <coingecko-coin-price-marquee-widget
                coin-ids='bitcoin,ethereum,eos,ripple,litecoin'
                currency='usd'
                background-color='#ffffff'
                locale='en'
            ></coingecko-coin-price-marquee-widget>

            <div className='menu'>
                <div className='container'>
                    <center>
                        <ul>
                            <li>
                                <Link to='/'>HOME</Link>
                            </li>
                            <li>
                                <Link to='/about-us'>ABOUT US</Link>
                            </li>
                            
                            <li>
                                <Link to='/pricing'>PRICING</Link>
                            </li>
                        
                            <li>
                                <Link to='/contact-us'>CONTACT US</Link>
                            </li>
                            <li>
                                <Link to='/testimonies'>TESTIMONIES</Link>
                            </li>
                            <li>
                                <Link to='faq'>FAQ</Link>
                            </li>
                        </ul>
                    </center>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth.tokenId,
    }
}

export default connect(mapStateToProps)(SubHeader)
