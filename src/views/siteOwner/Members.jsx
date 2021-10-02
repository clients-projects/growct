import React, { useState, useEffect, useRef } from 'react'
import { connect } from 'react-redux'

import * as orderAction from '../../store/actions/burgerIndex'

import ClientCard from '../../components/Card/ClientCard'

import GradBgRev from '../../images/grad_bg_rev.png'
import WhiteBg from '../../images/white_bg.png'

import Header from '../../main/layout/siteOwnerLayout/Header'
import SideBar from '../../main/layout/siteOwnerLayout/SideBar'
import SubHeader from '../../main/layout/siteOwnerLayout/SubHeader'
import Transactions from '../../main/layout/siteOwnerLayout/Transactions'

const thWithdrawalArray = ['No', 'Username', 'Email', 'Status', 'Date']

const Members = (props) => {
    const [allUsers, setAllUsers] = useState([])

    const gottenAllUsers = useRef()
    useEffect(() => {
        if (!gottenAllUsers.current) {
            if (props.tokenId) {
                props.onInitGetUsers(props.tokenId)
            }
            gottenAllUsers.current = true
        } else {
            if (props.getUsers) {
                setAllUsers(props.getUsers)
            }
        }
    }, [props])

    const handleApproval = (id) => {
        for (let i = 0; i < props.getUsersId.length; i++) {
            if (id === i) {
                props.history.push(
                    '/admin/member?id=' + props.getUsersId[i]._id
                )
            }
        }
    }

    return (
        <div className='content'>
            {/* <Grid fluid>
                <Row>
                    <Col md={12}>
                        <Card
                            plain
                            title='Members'
                            category=''
                            ctTableFullWidth
                            ctTableResponsive
                            content={
                                <Table>
                                    <thead>
                                        <tr>
                                            {thWithdrawalArray.map(
                                                (prop, key) => {
                                                    return (
                                                        <th key={key}>
                                                            {prop}
                                                        </th>
                                                    )
                                                }
                                            )}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {allUsers.map((prop, key) => {
                                            return (
                                                <tr key={key}>
                                                    {Object.values(prop).map(
                                                        (prop, key) => {
                                                            return (
                                                                <td key={key}>
                                                                    {prop}
                                                                </td>
                                                            )
                                                        }
                                                    )}
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </Table>
                            }
                        />
                    </Col>
                </Row>
            </Grid> */}
            <div className='bodyWrap'>
                <Header />

                <div
                    className='cabContent'
                    style={{
                        backgroundImage: `url(${GradBgRev}), url(${WhiteBg})`,
                    }}
                >
                    <div className='container'>
                        <div className='cabHead'>
                            <SubHeader />

                            <div className='row'>
                                <SideBar />

                                <div className='right'>
                                    <Transactions />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id='content_place'></div>

                <div
                    className='cabItem depList'
                    style={{ background: '#d5e1e3' }}
                >
                    <span className='captionDark center'>Members</span>

                    <div className='wrap' style={{ padding: '1rem 3rem' }}>
                        <div className='row'>
                            <ClientCard
                                plain
                                ctTableFullWidth
                                ctTableResponsive
                                content={
                                    <table
                                        cellspacing='10'
                                        cellpadding='2'
                                        border='0'
                                        width='100%'
                                    >
                                        <thead>
                                            <tr className='clientCard__tr'>
                                                {thWithdrawalArray.map(
                                                    (prop, key) => {
                                                        return (
                                                            <th key={key}>
                                                                {prop}
                                                            </th>
                                                        )
                                                    }
                                                )}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {allUsers.map((prop, key) => {
                                                return (
                                                    <tr
                                                        key={key}
                                                        className='clientCard__tbody--tr'
                                                    >
                                                        {Object.values(
                                                            prop
                                                        ).map((prop, key) => {
                                                            return (
                                                                <td
                                                                    key={key}
                                                                    align='center'
                                                                >
                                                                    {prop}
                                                                </td>
                                                            )
                                                        })}
                                                        <button
                                                            className='btn1'
                                                            onClick={() =>
                                                                handleApproval(
                                                                    key
                                                                )
                                                            }
                                                        >
                                                            {props.loading
                                                                ? 'Loading...'
                                                                : 'View'}
                                                        </button>
                                                    </tr>
                                                )
                                            })}
                                        </tbody>
                                    </table>
                                }
                            />

                            <br />
                        </div>
                    </div>
                </div>
                <p className='copyright'>
                    © 2021 Growveon cryptotrading. All rights reserved.
                </p>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log('the members', state.users.getUsers)
    //Add  Id of users
    return {
        loading: state.users.loading,
        err: state.auth.error,
        tokenId: state.auth.tokenId,
        userId: state.auth.userId,
        getUsers: state.users.getUsers.getUser,
        getUsersId: state.users.getUsers.getUsersId,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onInitGetUsers: (token) => dispatch(orderAction.initGetUsers(token)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Members)
