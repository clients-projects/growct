import React, { useState } from 'react'

import ContactPageBg from '../images/contact_page_bg.jpg'
import ContactBg from '../images/contact_bg.jpg'
import GreyBg from '../images/grey_bg.png'

const ContactUs = (props) => {
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [name, setName] = useState('')

    const inputHandler = (input) => {
        const inputName = input.target.name
        const inputValue = input.target.value

        if (inputName === 'name') {
            setName(inputValue)
        }

        if (inputName === 'email') {
            setEmail(inputValue)
        }

        if (inputName === 'message') {
            setMessage(inputValue)
        }
    }

    return (
        <>
            <div
                className='pageBanner'
                style={{ backgroundImage: `url(${ContactPageBg})` }}
            >
                <div className='container'>
                    <span className='heading'>Contact us</span>
                </div>
            </div>

            <div
                className='contInfo'
                style={{ backgroundImage: `url(${GreyBg})` }}
            >
                {' '}
                <div className='container'>
                    <div className='row'>
                        <div className='left'>
                            <ul>
                                <li>
                                    <div className='table full'>
                                        <div className='img tCell middle'>
                                            <span className='icon-location'></span>
                                        </div>
                                        <div className='data tCell middle'>
                                            <span className='title'>
                                                our Address:
                                            </span>
                                            <p>
                                                71-75 Shelton Street, London,
                                                Greater London, United Kingdom,
                                                WC2H 9JQ
                                            </p>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className='table full'>
                                        <div className='img tCell middle'>
                                            <span className='icon-mail'></span>
                                        </div>
                                        <div className='data tCell middle'>
                                            <span className='title'>
                                                e-mail:
                                            </span>
                                            <a
                                                href='mailto:admin@growveonct.com'
                                                target='_blank'
                                                className='link'
                                                without
                                                rel='noopener noreferrer'
                                            >
                                                admin@growveonct.com
                                            </a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className='right'>
                            <div className='map' id='map'>
                                <iframe
                                    title='iframe2'
                                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2479.664190550833!2d-0.0020082838559824082!3d51.57438937964627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a761dc8a2877%3A0x445ae65e3d837263!2s23+Sandringham+Rd%2C+London!5e0!3m2!1suk!2suk!4v1533728208403'
                                    width='100%'
                                    height='100%'
                                    frameborder='0'
                                    style={{ border: 0 }}
                                    allowfullscreen
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className='blockForm'
                style={{ backgroundImage: `url(${ContactBg})` }}
            >
                <div className='containerSM'>
                    <span className='captionDark center'>contact form</span>
                    <div className='wrap'>
                        <form>
                            <div className='row bigPadd'>
                                <div className='item col6'>
                                    <div className='formBlockLight'>
                                        <label for='name'>Your name:</label>
                                        <input
                                            onChange={inputHandler}
                                            type='text'
                                            name='name'
                                            value={name}
                                        />
                                    </div>
                                </div>
                                <div className='item col6'>
                                    <div className='formBlockLight'>
                                        <label for='mail'>Your e-mail:</label>
                                        <input
                                            onChange={inputHandler}
                                            type='text'
                                            name='email'
                                            value={email}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='item'>
                                <div className='formBlockLight'>
                                    <label for=''>Message:</label>
                                    <textarea
                                        name='message'
                                        onChange={inputHandler}
                                        value={message}
                                    ></textarea>
                                </div>
                            </div>
                            <button
                                type='submit'
                                className='btnFillDarkMd center'
                            >
                                send
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactUs
