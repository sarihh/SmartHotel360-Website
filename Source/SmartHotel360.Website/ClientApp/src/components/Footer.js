import React, { Component } from 'react';

export class Footer extends Component {
    render() {
        return <footer className='sh-footer'>
            <section className='sh-footer-content'>
                <div>
                    <div className='sh-footer-section'>
                        <img className='sh-footer-logo' alt="logo" src='/assets/images/logo.svg' />
                    </div>
                </div>
                <div>
                    <div className='sh-footer-section'>
                        <ul className='sh-footer-list'>
                            <li>
                                <a className='sh-footer-link' href=''>Terms & Conditions</a>
                            </li>
                            <li>
                                <a className='sh-footer-link' href=''>Privacy Policy</a>
                            </li>
                            <li>
                                <a className='sh-footer-link' href=''>Help</a>
                            </li>
                            <li>
                                <a className='sh-footer-link' href=''>Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div className='sh-footer-section'>
                        <p>Share</p>
                        <ul className='sh-footer-social'>
                            <li>
                                <a href='https://www.instagram.com/smarthotel'>
                                    <img className='sh-footer-icon' alt="instagram" src='/assets/images/instagram.svg' />
                                </a>
                            </li>
                            <li>
                                <a href='https://www.facebook.com/smarthotelroma'>
                                    <img className='sh-footer-icon' alt="facebook" src='/assets/images/facebook.svg' />
                                </a>
                            </li>
                            <li>
                                <a href='https://twitter.com/smarthotel'>
                                    <img className='sh-footer-icon' alt="twitter" src='/assets/images/twitter.svg' />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className='sh-footer-disclaimer'>
                This site is built by Microsoft for demonstration purposes only
            </section>
        </footer>;
    }
}
