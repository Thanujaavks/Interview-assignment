import React from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import FeatherIcon from "feather-icons-react";
import ServiceIcon from "../../assets/service-icon.png";
import WebIcon from "../../assets/web-icon.png";
import SeoIcon from "../../assets/seo-icon.png";
import HostingIcon from "../../assets/hosting-icon.png";

function Services(props) {
    const services = [
        {
            icon: ServiceIcon,
            title: "UI/UX Design",
            description: "Enjoy fast, secure, and reliable payment processing tailored to your business needs for seamless transactions."
        },
        {
            icon: WebIcon,
            title: "Web Development",
            description: "Enjoy fast, secure, and reliable payment processing tailored to your business needs for seamless transactions."
        },
        {
            icon: SeoIcon,
            title: "SEO/Digital Marketing",
            description: "Enjoy fast, secure, and reliable payment processing tailored to your business needs for seamless transactions."
        },
        {
            icon: HostingIcon,
            title: "Web Hosting",
            description: "Enjoy fast, secure, and reliable payment processing tailored to your business needs for seamless transactions."
        },
    ]

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="container services-section text-center my-5" id={"services"}>
            <div className={"row"}>
                <div className={"col-md-6"}>
                    <p className={"text-start sub-heading"}>WHAT WE DO</p>
                    <h3 className={"text-start  main-title"}>Delivering Tailored <br/>Digital Solutions for You</h3>
                </div>
                <div className={"col-md-6"}>
                    <p className={"text-start text-light-white"}>We provide innovative solutions tailored to your needs,
                        combining expertise, creativity, and technology to drive success. Our team is dedicated to
                        delivering exceptional results that exceed expectations in every project.
                    </p>
                    <div className={"text-start my-3"}>
                        <button className="btn primary-button fw-bolder">See More</button>
                    </div>
                </div>
            </div>

            <div className="row g-4 mt-4">
                <Slider {...settings}>
                    {services.map((data, index) => <div key={index} className="col-md-3">
                        <div className="service-card">
                            <img src={data.icon} alt={data.title} className={"m-auto"} width={"25%"}/>
                            <h5 className={"fw-bolder"}>{data.title}</h5>
                            <p>{data.description}</p>
                            <i className="bi bi-arrow-right icon-arrow"></i>
                            <FeatherIcon icon={"arrow-up-right"} className={"icon-arrow"}/>
                        </div>
                    </div>)}
                </Slider>
            </div>
        </div>
    );
}

export default Services;