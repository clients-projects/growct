import React from 'react'
import {Link} from 'react-router-dom'

import PartnersPageBg from '../images/partners_page_bg.jpg'
import B1000 from '../images/1000.png'

const TopReward = () => {
    return (
        <>
            <div
                class='pageBanner'
                style={{
                    backgroundImage: `url(${PartnersPageBg})`,
                }}
            >
                <div class='container'>
                    <span class='heading'>Top Reward</span>
                </div>
            </div>

            <div class='progrDescr'>
                <div class='container'>
                    <div class='textBlock'>
                        <p>
                            This is a list of all our top rewarders, We are very
                            client centric to our customers and All of the
                            solidity Ethereum smart contract code used for the
                            token sale and vault account was fully audited by
                            SmartDec, a firm specialized in Smart Contract
                            Security Audit. No single authority has control.
                        </p>
                    </div>
                </div>
            </div>

            <div class='program page gradBack '>
                <div class='container'>
                    <div class='wrap'>
                        <div class='row'>
                            <div class='inner'>
                                <div class='title'>
                                    <span
                                        style={{
                                            fontSize: '30px',
                                            fontWeight: 600,
                                        }}
                                    >
                                        TOP REWARD
                                    </span>
                                </div>
                                <ul class='table full in'>
                                    <li class='tRow'>
                                        <span class='tCell middle name'>
                                            Ms. Willie Hoppe III
                                        </span>
                                        <span class='tCell middle date'> </span>
                                        <span class='tCell middle sum'>
                                            $95,100.00
                                        </span>
                                        <span class='tCell bottom right pay'>
                                            <img
                                                src={B1000}
                                                alt='pay'
                                            />
                                        </span>
                                    </li>
                                    <li class='tRow'>
                                        <span class='tCell middle name'>
                                            Ms. Willie Hoppe III
                                        </span>
                                        <span class='tCell middle date'> </span>
                                        <span class='tCell middle sum'>
                                            $134,000.00
                                        </span>
                                        <span class='tCell bottom right pay'>
                                            <img
                                                src={B1000}
                                                alt='pay'
                                            />
                                        </span>
                                    </li>
                                    <li class='tRow'>
                                        <span class='tCell middle name'>
                                            Elissa Murazik
                                        </span>
                                        <span class='tCell middle date'> </span>
                                        <span class='tCell middle sum'>
                                            $87,000.00
                                        </span>
                                        <span class='tCell bottom right pay'>
                                            <img
                                                src={B1000}
                                                alt='pay'
                                            />
                                        </span>
                                    </li>
                                    <li class='tRow'>
                                        <span class='tCell middle name'>
                                            Dr. Velma Larson PhD
                                        </span>
                                        <span class='tCell middle date'> </span>
                                        <span class='tCell middle sum'>
                                            $262,800.00
                                        </span>
                                        <span class='tCell bottom right pay'>
                                            <img
                                                src={B1000}
                                                alt='pay'
                                            />
                                        </span>
                                    </li>
                                    <li class='tRow'>
                                        <span class='tCell middle name'>
                                            Takalani Letsoalo
                                        </span>
                                        <span class='tCell middle date'> </span>
                                        <span class='tCell middle sum'>
                                            $76,000.00
                                        </span>
                                        <span class='tCell bottom right pay'>
                                            <img
                                                src={B1000}
                                                alt='pay'
                                            />
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class='steps'>
                        <div class='row'></div>
                    </div>

                    <Link to='/Auth/signup' class='btnFillDarkLg center'>
                        Register
                    </Link>
                </div>

                {/* <div class='circleBg'>
                    <div class='circle'></div>
                </div> */}
            </div>
        </>
    )
}

export default TopReward
