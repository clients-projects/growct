import React from 'react'

function Plans() {
    return (
        <>
            <div className='plans__heading'>
                <h1 className='plans__heading--text heading-1'>
                    Our Investment Plans
                </h1>
            </div>
            <div className='plans'>
                <div className='plan'>
                    <div className='plan__icon'>
                        <h1 className='heading-1 plan__icon-percent'>20%</h1>
                        <h1 className='heading-1 plan__icon-text'>Plan 1</h1>
                    </div>

                    <ul className='plan__list'>
                        <li className='plan__list-item'>
                            After{' '}
                            <span className='plan__list-item--span'>24</span>{' '}
                            Hours
                        </li>
                        <li className='plan__list-item'>
                            <span className='plan__list-item--span'>20%</span>{' '}
                            Services Uptime
                        </li>
                        <li className='plan__list-item'>
                            <span className='plan__list-item--span'>24/7</span>{' '}
                            Support
                        </li>
                        <li className='plan__list-item'>
                            minimum -{' '}
                            <span className='plan__list-item--span'>$30</span>
                        </li>
                        <li className='plan__list-item'>
                            maximum -{' '}
                            <span className='plan__list-item--span'>$199</span>
                        </li>
                        <li className='plan__list-item'>
                            Trading -{' '}
                            <span className='plan__list-item--span'>
                                INSTANT
                            </span>
                        </li>
                        <li className='plan__list-item'>
                            Withdrawal Type -{' '}
                            <span className='plan__list-item--span'>
                                INSTANT
                            </span>
                        </li>
                    </ul>
                </div>
                <div className='plan'>
                    <div className='plan__icon'>
                        <h1 className='heading-1 plan__icon-percent'>50%</h1>
                        <h1 className='heading-1 plan__icon-text'>Plan 2</h1>
                    </div>

                    <ul className='plan__list'>
                        <li className='plan__list-item'>
                            After{' '}
                            <span className='plan__list-item--span'>24</span>{' '}
                            Hours
                        </li>
                        <li className='plan__list-item'>
                            <span className='plan__list-item--span'>50%</span>{' '}
                            Services Uptime
                        </li>
                        <li className='plan__list-item'>
                            <span className='plan__list-item--span'>24/7</span>{' '}
                            Support
                        </li>
                        <li className='plan__list-item'>
                            minimum -{' '}
                            <span className='plan__list-item--span'>$200</span>
                        </li>
                        <li className='plan__list-item'>
                            maximum -{' '}
                            <span className='plan__list-item--span'>$800</span>
                        </li>
                        <li className='plan__list-item'>
                            Trading -{' '}
                            <span className='plan__list-item--span'>
                                INSTANT
                            </span>
                        </li>
                        <li className='plan__list-item'>
                            Withdrawal Type -{' '}
                            <span className='plan__list-item--span'>
                                INSTANT
                            </span>
                        </li>
                    </ul>
                </div>

                <div className='plan'>
                    <div className='plan__icon'>
                        <h1 className='heading-1 plan__icon-percent'>75%</h1>
                        <h1 className='heading-1 plan__icon-text'>Plan 3</h1>
                    </div>

                    <ul className='plan__list'>
                        <li className='plan__list-item'>
                            After{' '}
                            <span className='plan__list-item--span'>48</span>{' '}
                            Hours
                        </li>
                        <li className='plan__list-item'>
                            <span className='plan__list-item--span'>75%</span>{' '}
                            Services Uptime
                        </li>
                        <li className='plan__list-item'>
                            <span className='plan__list-item--span'>24/7</span>{' '}
                            Support
                        </li>
                        <li className='plan__list-item'>
                            minimum -{' '}
                            <span className='plan__list-item--span'>$850</span>
                        </li>
                        <li className='plan__list-item'>
                            maximum -{' '}
                            <span className='plan__list-item--span'>$2000</span>
                        </li>
                        <li className='plan__list-item'>
                            Trading -{' '}
                            <span className='plan__list-item--span'>
                                INSTANT
                            </span>
                        </li>
                        <li className='plan__list-item'>
                            Withdrawal Type -{' '}
                            <span className='plan__list-item--span'>
                                INSTANT
                            </span>
                        </li>
                    </ul>
                </div>
                <div className='plan'>
                    <div className='plan__icon'>
                        <h1 className='heading-1 plan__icon-percent'>100%</h1>
                        <h1 className='heading-1 plan__icon-text'>Plan 4</h1>
                    </div>

                    <ul className='plan__list'>
                        <li className='plan__list-item'>
                            After{' '}
                            <span className='plan__list-item--span'>7</span>{' '}
                            Days
                        </li>
                        <li className='plan__list-item'>
                            <span className='plan__list-item--span'>100%</span>{' '}
                            Services Uptime
                        </li>
                        <li className='plan__list-item'>
                            <span className='plan__list-item--span'>24/7</span>{' '}
                            Support
                        </li>
                        <li className='plan__list-item'>
                            minimum -{' '}
                            <span className='plan__list-item--span'>$2500</span>
                        </li>
                        <li className='plan__list-item'>
                            maximum -{' '}
                            <span className='plan__list-item--span'>
                                $10000
                            </span>
                        </li>
                        <li className='plan__list-item'>
                            Trading -{' '}
                            <span className='plan__list-item--span'>
                                INSTANT
                            </span>
                        </li>
                        <li className='plan__list-item'>
                            Withdrawal Type -{' '}
                            <span className='plan__list-item--span'>
                                INSTANT
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Plans
