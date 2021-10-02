import React, { useState } from 'react'
import Helmet from 'react-helmet'
import { CopyToClipboard } from 'react-copy-to-clipboard'

function PlanConfirmation(props) {
    import('../assets/css/excludeHomeStyles.css').then((Baz) => {})

    const [copyAddress, setCopyAddress] = useState(false)
    const { amountToDeposit, currency } = props.location.state
    let { name, percent, days } = props.location.state.planDetails

    console.log('props of location', props.location.state.planDetails)

    let duration = 'day'
    if (name !== 'Helm' || name !== 'Premium' || name !== 'Business') {
        duration = 'days'
    }

    let walletAddress
    if (currency === 'Bitcoin') {
        walletAddress = props.location.state.adminBitcoinAddress
    } else if (currency === 'Ethereum') {
        walletAddress = props.location.state.adminEthereumAddress
    }

    return (
        <>
            <Helmet>
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1'
                />
            </Helmet>

            <div className='deposit'>
                <h3 className='deposit__heading'>Deposit Confirmation</h3>
                <div className='deposit__info'>
                    <p className='deposit__info--left'>Plan</p>
                    <p
                        className='deposit__info--right'
                        style={{ textTransform: 'uppercase' }}
                    >
                        {name}
                    </p>
                    <p className='deposit__info--left'>Profit</p>
                    <p className='deposit__info--right'>{`${percent}% for ${days} ${duration}`}</p>
                    <p className='deposit__info--left'>Principal Return</p>
                    <p className='deposit__info--right'>Yes</p>
                    <p className='deposit__info--left'>Principal Withdraw</p>
                    <p className='deposit__info--right'>
                        Available with 0.00% fee
                    </p>
                    <p className='deposit__info--left'>Credit Amount</p>
                    <p className='deposit__info--right'>{`${amountToDeposit}.00`}</p>
                    <p className='deposit__info--left'>Deposit Fee</p>
                    <p className='deposit__info--right'>
                        0.00% + $0.00 (min. $0.00 max. $0.00)
                    </p>
                    <p className='deposit__info--left'>Order Status</p>
                    <p className='deposit__info--right'>Pending </p>
                </div>
                <h4 className='deposit__info--instruction'>
                    BITCOIN ADDRESS
                    {amountToDeposit ? (
                        <div style={{ marginTop: '.5rem' }}>
                            <address>
                                <span style={{ fontWeight: 'bold' }}>
                                    {`${walletAddress}`}{' '}
                                </span>
                            </address>
                        </div>
                    ) : (
                        <span style={{ color: '#ff6969' }}>
                            Invalid amount, Please enter an amount
                        </span>
                    )}
                </h4>

                {copyAddress && <p className='copied'>Copied!</p>}

                <CopyToClipboard
                    text={walletAddress}
                    onCopy={() => setCopyAddress(true)}
                >
                    <button
                        className='btnFillGradMd copyBtn'
                        data-clipboard-target='#linkRef'
                    >
                        Copy Address
                    </button>
                </CopyToClipboard>
            </div>
        </>
    )
}

export default PlanConfirmation
