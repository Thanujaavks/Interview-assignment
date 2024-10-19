import React from 'react';
import RotatingIcon from '../../assets/rotate-icon.png'

function Home(props) {
    return (
        <div className={"container home-container p-5"} id={"home"}>
            <div>
                <p className={"text-center pt-5 home-header"}>INNOVATIVE SOLUTIONS FOR A DIGITAL WORLD</p>
            </div>
            <div>
                <h1 className={"text-center"}>
                    Transforming Ideas into <br/> Digital Reality
                </h1>
            </div>
            <div>
                <p className={"text-center home-content pt-4"}>
                    Bringing your vision to life with innovative digital solutions, combining creativity and <br/>
                    technology to achieve outstanding results for your business
                </p>
            </div>
            <div className={"d-flex justify-content-center pt-5"}>
                <button className="btn btn-see-more fw-bolder">Explore Now</button>
            </div>
            <div className={"rotate-container"}>
                <img src={RotatingIcon} className={"rotating-image"} width={100}/>
            </div>

        </div>
    );
}

export default Home;