import React from 'react'
import {Link} from 'react-router-dom'
import { RiAccountBoxLine } from 'react-icons/ri'
import { BsDownload, BsUpload} from 'react-icons/bs'
import {GiGears} from 'react-icons/gi'
import {IoIosPeople} from 'react-icons/io'
import {GiAnticlockwiseRotation, GiClockwiseRotation} from 'react-icons/gi'

function SideBar() {
    return (
        <>
            <div class='left'>
                <div class='cabNav'>
                    <ul>
                        <li>
                            <a href='dashboard'>
                                <span class='icon-profile'><RiAccountBoxLine/></span> Dashboard
                            </a>
                        </li>
                        <li>
                            <a href='members'>
                                <span class='icon-profile'><IoIosPeople/></span> Members
                            </a>
                        </li>
                        <li>
                            <a href='InvestmentRequest'>
                                <span class='icon-deposit'><BsDownload/></span>
                                Deposit Requests
                            </a>
                        </li>
                           <li>
                            <a href='depositHistory'>
                                <span class='icon-hist'><GiAnticlockwiseRotation/></span>
                                Deposit History
                            </a>
                        </li>
                        <li>
                            <a href='withdrawalRequest'>
                                <span class='icon-hist'><BsUpload/></span>
                                Withdrawal Request
                            </a>
                        </li>
                        <li>
                            <a href='withdrawalHistory'>
                                <span class='icon-hist'><GiClockwiseRotation/></span>
                                Withdrawal History
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
