import React from 'react';
import logoImage from '../../src/assets/image 8.png'
import FeatherIcon from 'feather-icons-react';

function Footer(props) {
    return (
        <div className="container pt-5">
            <div>
                <div className={"row"}>
                    <div className={"col-md-4"}>
                        <img src={logoImage}/>
                        <p className="footer-description pt-3">
                            At Adada Digital, we are passionate about crafting innovative digital solutions that help
                            businesses thrive in a rapidly evolving digital landscape.
                        </p>
                        <div className="social-icons d-flex gap-3 pt-3">
                            <div className={"icons-contain"}>
                                <FeatherIcon icon={"facebook"} size={18} className={"icon-color"}/>
                            </div>
                            <div className={"icons-contain"}>
                                <FeatherIcon icon={"instagram"} size={18} className={"icon-color"}/>
                            </div>
                            <div className={"icons-contain"}>
                                <FeatherIcon icon={"linkedin"} size={18} className={"icon-color"}/>
                            </div>
                            <div className={"icons-contain"}>
                                <FeatherIcon icon={"twitter"} size={18} className={"icon-color"}/>
                            </div>
                            <div className={"icons-contain"}>
                                <FeatherIcon icon={"youtube"} size={18} className={"icon-color"}/>
                            </div>
                        </div>
                    </div>
                    <div className={"col-md-2"}>
                        <div>
                            <h5>Company</h5>
                            <ul className="footer-links pt-4">
                                <li className={"company-content"}>About Us</li>
                                <li className={"company-content"}>Careers</li>
                                <li className={"company-content"}>Blog</li>
                                <li className={"company-content"}>Press</li>
                            </ul>
                        </div>
                    </div>
                    <div className={"col-md-2"}>
                        <div>
                            <h5>Services</h5>
                            <ul className="footer-links pt-4">
                                <li className={"company-content"}>Branding</li>
                                <li className={"company-content"}>UI/UX</li>
                                <li className={"company-content"}>Web Development</li>
                                <li className={"company-content"}>SEO</li>
                                <li className={"company-content"}>Social Media Marketing</li>
                                <li className={"company-content"}>Web Hosting</li>
                            </ul>
                        </div>
                    </div>
                    <div className={"col-md-2"}>
                    <div>
                            <h5>Support</h5>
                            <ul className="footer-links pt-4">
                                <li className={"company-content"}>Help Center</li>
                                <li className={"company-content"}>FAQs</li>
                            </ul>
                        </div>
                    </div>
                    <div className={"col-md-2"}>
                        <div>
                            <h5>Contact</h5>
                            <ul className="footer-links pt-4">
                                <li className={"company-content"}>Email: info@adadadigital.com.au</li>
                                <li className={"company-content"}>Phone: <br/>+61 234 4783 432</li>
                                <li className={"company-content"}>Address: <br/>NSW, Sydney, AU</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="pt-5 mt-3 pb-3 copyright">
                    <p>© 2024 - ADADA DIGITAL. All rights reserved</p>
                </div>

            </div>
        </div>
    );
}

export default Footer;