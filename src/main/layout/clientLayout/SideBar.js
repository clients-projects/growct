import React from 'react'
import {Link} from 'react-router-dom'
import { RiAccountBoxLine, RiLuggageDepositFill } from 'react-icons/ri'
import {FaCalendarCheck} from 'react-icons/fa'
import {BsPeopleFill} from 'react-icons/bs'
import {GiGears} from 'react-icons/gi'

function SideBar() {
    return (
        <>
            <div class='left'>
                <div class='cabNav'>
                    <ul>
                        <li>
                            <a href='dashboard'>
                                <span class='icon-profile'><RiAccountBoxLine/></span> account
                            </a>
                        </li>
                        <li>
                            <a href='investmentHistory'>
                                <span class='icon-deposit'><RiLuggageDepositFill/></span>
                                Investment History
                            </a>
                        </li>
                        <li>
                            <a href='WithdrawalHistory'>
                                <span class='icon-hist'><FaCalendarCheck/></span>
                                Withdrawal history
                            </a>
                        </li>
                        <li>
                            <a href='referrals'>
                                <span class='icon-partner'><BsPeopleFill/></span>
                                referrals
                            </a>
                        </li>
                        <li>
                            <a href='settings'>
                                <span class='icon-settings'><GiGears/></span>
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
