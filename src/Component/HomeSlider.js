import React from 'react';

function HomeSlider() {
    return (
        // <div className='container-fluid'>
            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                        <img src="https://img.freepik.com/free-vector/futuristic-ai-technology-template-vector-disruptive-technology-blog-banner_53876-112228.jpg?w=740&t=st=1707729317~exp=1707729917~hmac=198630babf4c2e152688937e38582dc4fa38f636cc6c423f9f56863ed9a74c3f" className="d-block w-100" alt="..." style={{height:"600px"}} />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src="https://media.fuzia.com/assets/uploads/images/co_brand_1/article/2022/technology-scouting-1669365274.png" className="d-block w-100" alt="..." style={{height:"600px"}} />
                    </div>
                    <div className="carousel-item">
                        <img src="https://miro.medium.com/v2/resize:fit:800/1*CSiR3o08SZYt5myc22d5Gw.png" className="d-block w-100" alt="..." style={{height:"600px"}} />
                    </div>
                    {/* <div className="carousel-item">
                        <img src="https://cdn.slidesharecdn.com/ss_thumbnails/braintech2015-150204235927-conversion-gate02-thumbnail.jpg?width=640&height=640&fit=bounds" className="d-block w-100" alt="..." style={{height:"600px"}} />
                    </div> */}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        // </div>
    );
}

export default HomeSlider;
