import React from 'react'
import { RiAccountBoxLine } from 'react-icons/ri'
import { BsDownload, BsUpload } from 'react-icons/bs'
import { GiGears } from 'react-icons/gi'
import { IoIosPeople } from 'react-icons/io'
import { GiAnticlockwiseRotation, GiClockwiseRotation } from 'react-icons/gi'

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
                                Dashboard
                            </a>
                        </li>
                        <li>
                            <a href='members'>
                                <span className='icon-profile'>
                                    <IoIosPeople />
                                </span>{' '}
                                Members
                            </a>
                        </li>
                        <li>
                            <a href='InvestmentRequest'>
                                <span className='icon-deposit'>
                                    <BsDownload />
                                </span>
                                Deposit Requests
                            </a>
                        </li>
                        <li>
                            <a href='depositHistory'>
                                <span className='icon-hist'>
                                    <GiAnticlockwiseRotation />
                                </span>
                                Deposit History
                            </a>
                        </li>
                        <li>
                            <a href='withdrawalRequest'>
                                <span className='icon-hist'>
                                    <BsUpload />
                                </span>
                                Withdrawal Request
                            </a>
                        </li>
                        <li>
                            <a href='withdrawalHistory'>
                                <span className='icon-hist'>
                                    <GiClockwiseRotation />
                                </span>
                                Withdrawal History
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
