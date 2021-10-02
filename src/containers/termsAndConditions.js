import React from 'react'
import AboutPageBg from '../images/about_page_bg.jpg'

import GreyBg from '../images/grey_bg.png'


function AboutUs() {
    return (
        <>
            <div
                style={{
                    position: 'fixed',
                    zIndex: 99999,
                    left: '20px',
                    bottom: '20px',
                }}
            ></div>

            <div className='bodyWrap'>
                <div
                    className='pageBanner'
                    style={{ backgroundImage: `url(${AboutPageBg})` }}
                >
                    <div className='container'>
                        <span className='heading'>Terms and Conditions</span>
                    </div>
                </div>

                <div
                    className='pageAbout'
                    style={{ backgroundImage: `url(${GreyBg})` }}
                >
                    <div class='inside_wrap rule'>
                        <div class='inside_inner'>
                            <ul class='rules'>
                                <h3 class='sectionhead'>
                                    Please read the following rules carefully
                                    before signing in.
                                </h3>
                                <li>
                                    All clients are expected to pay a 30% of their investment capital before receiving their first profit payment or after a few weeks of investing with the company
                                </li>
                                <li>
                                    You agree to be of legal age in your country
                                    to partake in this program, and in all the
                                    cases your minimal age must be 18 years.
                                </li>
                                <li>
                                    growveonCT.com is not available to the
                                    general public and is opened only to the
                                    qualified members of growveonCT.com, the use
                                    of this site is restricted to our members
                                    and to individuals personally invited by
                                    them. Every deposit is considered to be a
                                    private transaction between the
                                    growveonCT.com and its Member.
                                </li>
                                <li>
                                    As a private transaction, this program is
                                    exempt from the US Securities Act of 1933,
                                    the US Securities Exchange Act of 1934 and
                                    the US Investment Company Act of 1940 and
                                    all other rules, regulations and amendments
                                    thereof. We are not FDIC insured. We are not
                                    a licensed bank or a security firm.
                                </li>
                                <li>
                                    You agree that all information,
                                    communications, materials coming from
                                    growveonCT.com are unsolicited and must be
                                    kept private, confidential and protected
                                    from any disclosure. Moreover, the
                                    information, communications and materials
                                    contained herein are not to be regarded as
                                    an offer, nor a solicitation for investments
                                    in any jurisdiction which deems non-public
                                    offers or solicitations unlawful, nor to any
                                    person to whom it will be unlawful to make
                                    such offer or solicitation.
                                </li>
                                <li>
                                    All the data giving by a member to
                                    growveonCT.com will be only privately used
                                    and not disclosed to any third parties.
                                    growveonCT.com is not responsible or liable
                                    for any loss of data.
                                </li>
                                <li>
                                    You agree to hold all principals and members
                                    harmless of any liability. You are investing
                                    at your own risk and you agree that a past
                                    performance is not an explicit guarantee for
                                    the same future performance. You agree that
                                    all information, communications and
                                    materials you will find on this site are
                                    intended to be regarded as an informational
                                    and educational matter and not an investment
                                    advice.
                                </li>
                                <li>
                                    We reserve the right to change the rules,
                                    commissions and rates of the program at any
                                    time and at our sole discretion without
                                    notice, especially in order to respect the
                                    integrity and security of the members'
                                    interests. You agree that it is your sole
                                    responsibility to review the current terms.
                                </li>
                                <li>
                                    growveonCT.com is not responsible or liable
                                    for any damages, losses and costs resulting
                                    from any violation of the conditions and
                                    terms and/or use of our website by a member.
                                    You guarantee to growveonCT.com that you
                                    will not use this site in any illegal way
                                    and you agree to respect your local,
                                    national and international laws.
                                </li>
                                <li>
                                    Don&#8217;t post bad vote on Public Forums
                                    and at Gold Rating Site without contacting
                                    the administrator of our program FIRST.
                                    Maybe there was a technical problem with
                                    your transaction, so please always CLEAR the
                                    thing with the administrator.
                                </li>
                                <li>
                                    We will not tolerate SPAM or any type of UCE
                                    in this program. SPAM violators will be
                                    immediately and permanently removed from the
                                    program.
                                </li>
                                <li>
                                    growveonCT.com reserves the right to accept
                                    or decline any member for membership without
                                    explanation.
                                </li>
                                <li>
                                    If you do not agree with the above
                                    disclaimer, please do not go any further.{' '}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUs
