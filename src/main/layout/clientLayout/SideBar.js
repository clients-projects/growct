import React from 'react'
import { RiAccountBoxLine, RiLuggageDepositFill } from 'react-icons/ri'
import { FaCalendarCheck } from 'react-icons/fa'
import { BsPeopleFill } from 'react-icons/bs'
import { GiGears } from 'react-icons/gi'

function SideBar() {
    return (
        <>
            <div className='left'>
                <div className='cabNav'>
                    <ul>
                        <li>
                            <a href='dashboard'>
                                <span className='icon-profile'>
                                    <RiAccountBoxLine />
                                </span>{' '}
                                account
                            </a>
                        </li>
                        <li>
                            <a href='investmentHistory'>
                                <span className='icon-deposit'>
                                    <RiLuggageDepositFill />
                                </span>
                                Investment History
                            </a>
                        </li>
                        <li>
                            <a href='WithdrawalHistory'>
                                <span className='icon-hist'>
                                    <FaCalendarCheck />
                                </span>
                                Withdrawal history
                            </a>
                        </li>
                        <li>
                            <a href='referrals'>
                                <span className='icon-partner'>
                                    <BsPeopleFill />
                                </span>
                                referrals
                            </a>
                        </li>
                        <li>
                            <a href='settings'>
                                <span className='icon-settings'>
                                    <GiGears />
                                </span>
                                security
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default SideBar
