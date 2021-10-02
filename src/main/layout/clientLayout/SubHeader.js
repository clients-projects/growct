import React, { useState, useEffect } from 'react'
import publicIp from 'public-ip'
import { connect } from 'react-redux'

import { BsGear, BsBoxArrowInUp, BsBoxArrowInDown } from 'react-icons/bs'
import { VscServer } from 'react-icons/vsc'
import { BiDollarCircle } from 'react-icons/bi'

import avatar from '../../../assets/img/faces/face-1.jpg'

function SubHeader(props) {
    const [IpOfUser, setIpOfUser] = useState('')

    useEffect(() => {
        async function getUserIp() {
            const userIp = await publicIp.v4()

            setIpOfUser(userIp)
        }

        getUserIp()
    }, [])

    return (
        <>
            <div className='row'>
                <div className='left'>
                    <div className='userInfo'>
                        <div
                            className='userpic'
                            style={{
                                backgroundImage: `url(${avatar})`,
                            }}
                        ></div>

                        <span>Username:</span>
                        <a href='dashboard'>{props.userData.username}</a>
                        <a href='settings' className='editAcc'>
                            <span className='icon-edit icon-cur1'>
                                <BsGear />
                            </span>
                            Edit account
                        </a>
                    </div>
                </div>

                <div className='right'>
                    <div className='accInfo cfix'>
                        <ul>
                            <li>
                                <div className='iconLeft'>
                                    <span className='icon-stat'>
                                        <VscServer />
                                    </span>
                                    <div className='data'>
                                        <span>Virtual IP adress:</span>
                                        <span>
                                            <b>{IpOfUser}</b>
                                        </span>
                                    </div>
                                </div>
                            </li>
                        </ul>

                        <div className='userBal'>
                            <div className='iconLeft'>
                                <div className='icon'>
                                    <span className='icon-sum2 gradTxt'>
                                        <BiDollarCircle
                                            style={{
                                                marginTop: '.9rem',
                                                color: '#16ccb5',
                                            }}
                                        />
                                    </span>
                                </div>
                                <div className='data'>
                                    <span className='title'>your balance:</span>
                                    <span className='num' id='balance'>
                                        ${props.userData.accountBalance}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className='btnsCab'>
                            <a href='deposit' className='btnFillColor1MdIcon'>
                                <span className='iconLeft'>
                                    <span className='icon-pay_out'>
                                        <BsBoxArrowInUp />
                                    </span>
                                    <span className='data'>deposit</span>
                                </span>
                            </a>
                            <a href='withdraw' className='btnFillColor2MdIcon'>
                                <span className='iconLeft'>
                                    <span className='icon-pay_in'>
                                        <BsBoxArrowInDown />
                                    </span>
                                    <span className='data'>withdraw</span>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        userData: state.auth.userData,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // onInitInvestNow: (data, token) =>
        //     dispatch(orderAction.initInvestNow(data, token)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SubHeader)
