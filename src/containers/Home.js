import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import BannerThumb from '../sass/images/bannerthumb.png'
import GeoTrust from '../sass/images/geotrust.png'
import TrustGuard from '../sass/images/trustguard.png'
import SiteLock from '../sass/images/sitelock.png'
import Mcafee from '../sass/images/mcafee.png'
import BannerBitcoin from '../sass/images/bannerbitcoin.png'
import BannerEthereum from '../sass/images/bannerethreum.png'

import TechnicalAnalysis from '../tradeviewWidgets/AdvancedRealChart'

import Uniformmaturity from '../sass/images/uniformmaturity.png'
import Fastpayment from '../sass/images/fastpayment.png'
import Strongsecurity from '../sass/images/strongsecurity.png'
import Runningdays from '../sass/images/runningdays.png'
import Totaldeposited from '../sass/images/totaldeposited.png'
import Totalmembers from '../sass/images/totalmembers.png'
import Totalwithdrawals from '../sass/images/totalwithdrawals.png'
import Profsupport from '../sass/images/profsupport.png'

function Home(props) {
    const [latestDeposits, setLatestDeposits] = useState([])
    const [latestWithdrawals, setLatestWithdrawals] = useState([])
    const [onlineDays, setOnlineDays] = useState(4005)
    let [totalMembers, setTotalMembers] = useState(642, 424)
    const [totalPaidOut, setTotalPaidOut] = useState(202, 542, 420)
    const [totalInvestments, setTotalInvestments] = useState(342, 322, 523)

    useEffect(() => {
        if (props.latestDeposits) {
            setLatestDeposits(props.latestDeposits)
        }

        if (props.latestWithdrawals) {
            console.log('the latest withdrawals', props.latestWithdrawals)
            setLatestWithdrawals(props.latestWithdrawals)
        }

        if (props.activities) {
            const activity = props.activities

            setOnlineDays(activity.onlineDays)
            setTotalMembers(activity.totalMembers)
            setTotalPaidOut(activity.totalPaidOut)
            setTotalInvestments(activity.totalInvestments)
        }
    }, [props])

    totalMembers = 1334 + totalMembers

    const theLatestDeposits = latestDeposits.splice(0, 10).map((d, key) => {
        const splitDate = d.updatedAt.split(',')[0]
        return (
            <div className='transactions' key={key}>
                <h4 className='transactions__name'>{d.creator}</h4>

                <p className='transactions__date'>{splitDate}</p>
                <p className='transactions__amount'>${d.amount}</p>
            </div>
        )
    })
    const theLatestWithdrawals = latestWithdrawals
        .splice(0, 10)
        .map((d, key) => {
            const splitDate = d.updatedAt.split(',')[0]

            return (
                <div className='transactions' key={key}>
                    <h4 className='transactions__name'>{d.creator}</h4>

                    <p className='transactions__date'>{splitDate}</p>
                    <p className='transactions__amount'>${d.amount}</p>
                </div>
            )
        })

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
                                    GrowveonCT is a global crypto currency
                                    platform which aims at extracting maximally
                                    from trading investment opportunities while
                                    operating capital of customers to generate
                                    phenomenal profit
                                </p>
                                <a
                                    href='/Auth/signup'
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

                <section className='aboutwrap ' style={{ margin: '4rem 0' }}>
                    <div className='contents'>
                        <div className=' slideInUp wow'>
                            <div className='aboutImg'>
                                <h1 style={{ textAlign: 'center' }}>
                                    ABOUT GROWVEON CRYPTO TRADING
                                </h1>
                                <p
                                    style={{
                                        lineHeight: 2,
                                        fontWeight: 400,
                                        fontSize: '1.2rem',
                                        paddingTop: '1rem',
                                    }}
                                >
                                    GrowveonCT is a global crypto finance
                                    solution for all the crypto enthusiasts who
                                    are in search of the trusted, secure and
                                    reliable platform. growveonct.com is
                                    operating under the UK established company
                                    known as growveonct.com with the company
                                    number #15474365. growveonct.com provides
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
                                {/* <a href='?a=faq'>More Information</a> */}
                            </div>
                            {/* <div className='right'>
                                <div className='certificatebo'>
                                    <img src={Certificate} alt='' />
                                </div>
                            </div> */}
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
                                commission program by referring your friends,
                                and networking circles.
                            </p>
                        </div>
                    </div>
                </section>

                <section className='featureswrap'>
                    <section style={{ marginBottom: '4rem' }}>
                        <TechnicalAnalysis />
                    </section>
                    <div className='contents'>
                        <h2>growveonCT features</h2>
                        <div className='feturesboxinside'>
                            <div className='featuredbox flipinX wow'>
                                <div className='icon'>
                                    <img src={Uniformmaturity} alt='' />
                                </div>
                                <div className='infos'>
                                    <h4>PROFESSIONAL TEAM</h4>
                                    <p>
                                        GrowveonCT is saddled by a professional
                                        experienced admin team experienced in
                                        handling high yield investment programs
                                    </p>
                                </div>
                            </div>
                            <div className='featuredbox flipinX wow'>
                                <div className='icon'>
                                    <img src={Fastpayment} alt='' />
                                </div>
                                <div className='infos'>
                                    <h4>INSTANT PAYOUTS</h4>
                                    <p>
                                        We at GrowveonCT believe in full
                                        transparency and hence all our investors
                                        enjoy instant payouts of their profits
                                        and referral earnings.
                                    </p>
                                </div>
                            </div>
                            <div className='featuredbox flipinX wow'>
                                <div className='icon'>
                                    <img src={Profsupport} alt='' />
                                </div>
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
                                <div className='icon'>
                                    <img src={Strongsecurity} alt='' />
                                </div>
                                <div className='infos'>
                                    <h4>STRONG SECURITY</h4>
                                    <p>
                                        GrowveonCT runs a 256 bit ssl security
                                        hosted on a dedicated server and
                                        protected from all cyber attacks
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
                        <div className='listing'>{theLatestDeposits}</div>
                    </div>
                    <div className='midstatbox slideInUp wow'>
                        <div className='statbox one'>
                            <div className='info'>
                                {onlineDays}
                                <span>Running Days</span>
                            </div>
                            <div className='icon'>
                                <img src={Runningdays} alt='' />
                            </div>
                        </div>
                        <div className='statbox two'>
                            <div className='info'>
                                ${totalInvestments}
                                <span>Total Deposited</span>
                            </div>
                            <div className='icon'>
                                <img src={Totaldeposited} alt='' />
                            </div>
                        </div>
                        <div className='statbox three'>
                            <div className='info'>
                                ${totalPaidOut}
                                <span>Total Withdrawal</span>
                            </div>
                            <div className='icon'>
                                <img src={Totalwithdrawals} alt='' />
                            </div>
                        </div>
                        <div className='statbox four'>
                            <div className='info'>
                                {totalMembers}
                                <span>Total Members</span>
                            </div>
                            <div className='icon'>
                                <img src={Totalmembers} alt='' />
                            </div>
                        </div>
                    </div>
                    <div className='lasttenbox slideInRight wow'>
                        <div className='head'>last 10 withdrawals</div>
                        <div className='listing'>{theLatestWithdrawals}</div>
                    </div>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        latestWithdrawals: state.auth.latestWithdrawals,
        latestDeposits: state.auth.latestDeposits,
        activities: state.auth.activities,
    }
}

export default connect(mapStateToProps)(Home)
