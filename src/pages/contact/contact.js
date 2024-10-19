import React from 'react';
import ContactImg from "../../assets/contact-img.png";

function Contact(props) {
    return (
        <div className="container contact-section" id={"contact-us"}>
            <div className="row">
                <div className="col-md-5 get-in-touch pe-lg-5 p-2">
                    <div>
                        <h5 className={""}>Get in Touch</h5>
                        <h3 className={"fw-bolder"}>Lets <span
                            className={"text-yellow"}>work together </span> on <br/> your
                            next project.</h3>
                        <p className={"contact-para"}>I consistently exceed our clients' expectations by
                            providing high quality digital solutions. Get in touch with me to get started!</p>
                    </div>
                    <img src={ContactImg} alt="Get in Touch Image"/>
                </div>

                <div className="col-md-7">
                    <div className="contact-form">
                        <h3 className={"text-center fw-bolder"}>Get in <span
                            className={"text-yellow"}>Touch with Us</span> for <br/>Any Questions or Inquiries</h3>
                        <form>
                            <div className="row mb-3 mt-5">
                                <div className="col">
                                    <label htmlFor="name" className="form-label">First Name</label>
                                    <input type="text" className="form-control" placeholder="First Name" required/>
                                </div>
                                <div className="col">
                                    <label htmlFor="name" className="form-label">Last Name</label>
                                    <input type="text" className="form-control" placeholder="Last Name" required/>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col">
                                    <label htmlFor="email" className="form-label">Email Address</label>
                                    <input type="email" className="form-control" placeholder="Email Address"
                                           required/>
                                </div>
                                <div className="col">
                                    <label htmlFor="mobile" className="form-label">Mobile Number</label>
                                    <input type="text" className="form-control" placeholder="Mobile Number"
                                           required/>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor={"company"} className={"form-label"}>Company Name</label>
                                <input type="text" className="form-control" placeholder="Company Name"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="subject" className="form-label">Subject</label>
                                <input type="text" className="form-control" placeholder="Subject" required/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message" className="form-label">Message</label>
                                <textarea className="form-control" rows="5" placeholder="Your Message"
                                          required></textarea>
                            </div>
                            <button type="submit" className="btn btn-submit w-100 fw-bolder">Submit Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;