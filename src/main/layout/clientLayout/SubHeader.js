import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import publicIp from 'public-ip'
import {connect} from 'react-redux'

import { BsGear, BsBoxArrowInUp, BsBoxArrowInDown } from 'react-icons/bs'
import { VscServer } from 'react-icons/vsc'
import { BiDollarCircle } from 'react-icons/bi'

import avatar from '../../../assets/img/faces/face-1.jpg'


function SubHeader(props) {
    const [IpOfUser, setIpOfUser] = useState('')

    useEffect(() => {
    async function getUserIp () {
            const userIp = await publicIp.v4()
    
            setIpOfUser(userIp)
        }

        getUserIp()
    }, [])

    return (
        <>
            <div class='row'>
                <div class='left'>
                    <div class='userInfo'>
                        <div
                            class='userpic'
                            style={{
                                backgroundImage: `url(${avatar})`,
                            }}
                        ></div>

                        <span>Username:</span>
                        <a href='dashboard'>{props.userData.username}</a>
                        <a href='settings' class='editAcc'>
                            <span class='icon-edit icon-cur1'>
                                <BsGear />
                            </span>
                            Edit account
                        </a>
                    </div>
                </div>

                <div class='right'>
                    <div class='accInfo cfix'>
                        <ul>
                  
                            <li>
                                <div class='iconLeft'>
                                    <span class='icon-stat'>
                                        <VscServer />
                                    </span>
                                    <div class='data'>
                                        <span>Virtual IP adress:</span>
                                        <span>
                                            <b>{IpOfUser}</b>
                                        </span>
                                    </div>
                                </div>
                            </li>
                        </ul>

                        <div class='userBal'>
                            <div class='iconLeft'>
                                <div class='icon'>
                                    <span class='icon-sum2 gradTxt'>
                                        <BiDollarCircle
                                            style={{
                                                marginTop: '.9rem',
                                                color: '#16ccb5',
                                            }}
                                        />
                                    </span>
                                </div>
                                <div class='data'>
                                    <span class='title'>your balance:</span>
                                    <span class='num' id='balance'>
                                        ${props.userData.accountBalance}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div class='btnsCab'>
                            <a href='deposit' class='btnFillColor1MdIcon'>
                                <span class='iconLeft'>
                                    <span class='icon-pay_out'>
                                        <BsBoxArrowInUp />
                                    </span>
                                    <span class='data'>deposit</span>
                                </span>
                            </a>
                            <a href='withdraw' class='btnFillColor2MdIcon'>
                                <span class='iconLeft'>
                                    <span class='icon-pay_in'>
                                        <BsBoxArrowInDown />
                                    </span>
                                    <span class='data'>withdraw</span>
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