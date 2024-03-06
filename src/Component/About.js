import React from 'react';

function About() {
    return (
        <div className='container-fluid mt-5'>
            <h5>About Us</h5>
            <div className='row'>
                <div className='col-md-6'>
                    <img src='https://ebraintechnologies.com/assets/img/Ebrain-home/home-banner-image-2.png' alt='...' />
                </div>
                <div className='col-md-6 mt-4' style={{textAlign:"left"}}>
                    <h5>ABOUT EBRAIN TECHNOLOGIES</h5>
                    <p className='mt-5' style={{fontSize:"20px"}}>Ebrain was started in 2016 build solutions for Same. 
                    Over the last 6 years we have worked various clients and
                    delivered solutions across the domains. We have created 
                    the strong relationship with our client which helps us 
                    to grow YoY.</p>
                    <p style={{fontSize:"20px"}}>As a company we nurtured lot of raw talents. 
                    We democratised technology exposure to sub urban cities. 
                    We seriously pursue the agenda of “Build from local for the global”.</p>
                    <button type="button" class="btn btn-outline-primary mt-5">Learn More</button>
                </div>  
            </div>
        </div>
    );
}

export default About;
