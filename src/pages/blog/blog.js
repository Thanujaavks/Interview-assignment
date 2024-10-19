import React from 'react';
import Blog01 from "../../assets/blog01.jpg";
import Blog02 from "../../assets/blog02.jpeg";
import Blog03 from "../../assets/blog03.webp";

function Blog(props) {
    return (
        <div className="container blog-section text-center" id={"blog"}>
            <div className={"row"}>
                <div className={"col-md-6"}>
                    <p className={"text-start our-blogs"}>OUR BLOGS</p>
                    <h3 className={"text-start  insight"}>Insights and Trends <br/> from Our Experts</h3>
                </div>
                <div className={"col-md-6"}>
                    <p className={"text-start text-light-white"}>Discover expert insights and stay updated on the latest
                        digital trends. Our professionals
                        provide
                        actionable knowledge to help you navigate industry changes and achieve success in a rapidly
                        evolving
                        market.</p>
                    <div className={"text-start my-3"}>
                        <button className="btn btn-see-more fw-bolder">See More</button>
                    </div>
                </div>
            </div>


            <div className="row g-4 mt-4">
                <div className="col-md-4">
                    <div className="card blog-card">
                        <img className={"p-3"} src={Blog01} alt="Design Systems"/>
                        <div className="card-body">
                            <p className="category">Design Systems</p>
                            <h5>Most popular design systems to learn from in 2022</h5>
                            <div className="author">
                                <img src={Blog02} alt="Author 1"/>
                                <p className="mb-0">Author Name 1</p>
                                <span className="ms-auto text-light-white">Sep 8, 2024</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card blog-card">
                        <img className={"p-3"} src={Blog02} alt="Tech"/>
                        <div className="card-body">
                            <p className="category">Tech</p>
                            <h5>15 best tools that will help you build your website</h5>
                            <div className="author">
                                <img src={Blog01} alt="Author 2"/>
                                <p className="mb-0">Author Name 2</p>
                                <span className="ms-auto text-light-white">Sep 8, 2024</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card blog-card">
                        <img className={"p-3"} src={Blog03} alt="Accessibility"/>
                        <div className="card-body">
                            <p className="category">Accessibility</p>
                            <h5>Understanding accessibility makes you a better</h5>
                            <div className="author">
                                <img src={Blog01} alt="Author 3"/>
                                <p className="mb-0">Author Name 3</p>
                                <span className="ms-auto text-light-white">Sep 8, 2024</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blog;