import React from 'react';

function Subscribe(props) {
    return (
        <div className={"container subscribe-container mb-5"}>
            <div className={"row p-5"}>
                <div className={"col-md-6"}>
                    <h4>
                        Subscribe <br/>
                        Our Newsletter
                    </h4>
                    <p>
                        Subscribe to Adada Digital's newsletter for the latest updates, industry news, and exclusive
                        offers.
                        Stay informed and ahead in the payment world!
                    </p>
                </div>
                <div className={"col-md-6 pt-5"}>
                    <form className="newsletter-form">
                        <div className={"row"}>
                            <div className={"col-md-9"}>
                                <input
                                    type="email"
                                    className="form-control email-input"
                                    placeholder="Enter email address"
                                />
                            </div>
                            <div className={"col-md-3"}>
                                <button type="submit" className="btn btn-danger subscribe-button ps-3 pe-3">
                                    Subscribe
                                </button>
                            </div>
                        </div>


                    </form>
                </div>
            </div>
        </div>
    );
}

export default Subscribe;