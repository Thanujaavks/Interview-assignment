import React from 'react';
import Logo03 from "../../assets/logo03.png";
import Logo02 from "../../assets/logo02.png";
import Logo01 from "../../assets/logo01.png";
import Logo04 from "../../assets/logo04.png";
import Logo05 from "../../assets/logo05.png";
import FeatherIcon from "feather-icons-react";

function Clients(props) {
    return (
        <div className="container text-center py-5" id={"clients"}>
            <h6 className="text-uppercase sub-heading mb-4">Our Trusted Clients</h6>
            <h2 className={"empower"}>Empowering <span className={"text-yellow"}>Global Businesses </span><br/> with
                Reliable Payment Solutions</h2>

            <div
                className="row justify-content-center my-5 py-5 client-logos d-flex justify-content-center align-items-center">
                <div className="col-6 col-md-2">
                    <img src={Logo03} alt="Alterbone" className="img-fluid client-logo"/>
                </div>
                <div className="col-6 col-md-2">
                    <img src={Logo02} alt="LogoIpsum" className="img-fluid client-logo"/>
                </div>
                <div className="col-6 col-md-2">
                    <img src={Logo01} alt="Waverio" className="img-fluid client-logo"/>
                </div>
                <div className="col-6 col-md-2">
                    <img src={Logo04} alt="Sharks" className="img-fluid client-logo"/>
                </div>
                <div className="col-6 col-md-2">
                    <img src={Logo05} alt="Just Kit" className="img-fluid client-logo"/>
                </div>
            </div>


            <div className={"testimonial"}>
                <div className="row">
                    <div className="col-md-4">
                        <div className="testimonial-card">
                            <p>"Adada Digital transformed our online presence with innovative solutions and expert
                                guidance. Our brand visibility and customer engagement have significantly
                                improved."</p>
                            <div className="client-info">
                                <FeatherIcon icon={"codesandbox"} className={"icon"} size={30}/>
                                <div>LogoIpsum</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="testimonial-card">
                            <p>"Their creative approach and commitment to excellence helped us achieve our business
                                goals faster. We highly recommend Adada Digital for digital transformation."</p>
                            <div className="client-info">
                                <FeatherIcon icon={"codepen"} className={"icon"} size={30}/>
                                <div>Alterbone</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="testimonial-card">
                            <p>"The team at Adada Digital exceeded our expectations, delivering a seamless digital
                                strategy that drove measurable results. Exceptional service and expertise!"</p>
                            <div className="client-info">
                                <FeatherIcon icon={"slack"} className={"icon"} size={30}/>
                                <div>Tinygone</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Clients;