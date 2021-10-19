import React from 'react'
import NewsPageBg from '../images/news_page_bg.jpg'
import GreyBgBig from '../images/grey_bg_big.png'
import Testimonial1 from '../images/testimonial-1.jpg'
import Testimonial2 from '../images/testimonial-2.jpg'
import Testimonial3 from '../images/testimonial-3.jpg'

function Testimonies() {
    return (
        <>
            <div
                className='pageBanner'
                style={{ backgroundImage: `url(${NewsPageBg})` }}
            >
                <div className='container'>
                    <span className='heading'>Testimonies</span>
                </div>
            </div>

            <div
                className='pageNews'
                style={{ backgroundImage: `url(${GreyBgBig})` }}
            >
                <div className='container'>
                    <div className='wrap'>
                        <div className='grid'>
                            <div className='item col4'>
                                <div className='newsCard'>
                                    <div
                                        className='img'
                                        style={{
                                            backgroundImage: `url(${Testimonial2})`,
                                        }}
                                    ></div>
                                    <span className='title'>Wayne</span>
                                    <p>
                                        I've been investing with growveon cryptotrading
                                        apparently over 8 months now and i can
                                        tell you it's worth trying growveon cryptotrading
                                        is the best..
                                    </p>
                                </div>
                            </div>
                            <div className='item col4'>
                                <div className='newsCard'>
                                    <div
                                        className='img'
                                        style={{
                                            backgroundImage: `url(${Testimonial3})`,
                                        }}
                                    ></div>
                                    <span className='title'>Mr Anderson</span>
                                    <p>
                                        I've been investing with growveon cryptotrading
                                        apparently over 8 months now and i can
                                        tell you it's worth trying .
                                        growveon cryptotrading is the best...
                                    </p>
                                </div>
                            </div>
                            <div className='item col4'>
                                <div className='newsCard'>
                                    <div
                                        className='img'
                                        style={{
                                            backgroundImage: `url(${Testimonial1})`,
                                        }}
                                    ></div>
                                    <span className='title'>Elizabeth</span>
                                    <p>
                                        I am excited to be part of this great
                                        program. ...
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonies
