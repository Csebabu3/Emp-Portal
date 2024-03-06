// import React, { useState, useEffect } from 'react';
// import './Animation.css'

// function Animation() {
//     const [showCards, setShowCards] = useState(false);

//     useEffect(() => {
//         const delay = 2000;
//         const timeoutId = setTimeout(() => {
//             setShowCards(true);
//         }, delay);
//         return () => clearTimeout(timeoutId);
//     }, []);

//     return (
//         <div className={`container ${showCards ? 'show' : ''}`}>
//             <div className='row'>
//                 <div className="card" style={{ width: "18rem" }}>
//                     <img src="https://www.wildnatureimages.com/images/640/070620-014-The-Tetons.jpg" className="card-img-top" alt="..." />
//                     <div className="card-body">
//                         <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                     </div>
//                 </div>
//             </div>

//             {showCards && (
//                 <div className='row'>
//                     <div className="card" style={{ width: "18rem" }}>
//                         <img src="https://www.wildnatureimages.com/images/640/070620-014-The-Tetons.jpg" className="card-img-top" alt="..." />
//                         <div className="card-body">
//                             <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default Animation;
import React, { useEffect, useState } from 'react'
import './Animation.css'

function Animation() {
    const [showCards, setShowCards] = useState(false);

    useEffect(() => {
        const delay = 2000;
        const timeoutId = setTimeout(() => {
            setShowCards(true);
        }, delay);
        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <div className={`container mt-5 ${showCards ? 'show' : ''}`}>
            <div className='row'>
                <div className='col-md-4'>
                    <div className="card" style={{ width: "18rem" }}>
                        <img src="https://www.wildnatureimages.com/images/640/070620-014-The-Tetons.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className="card" style={{ width: "18rem" }}>
                        <img src="https://www.wildnatureimages.com/images/640/070620-014-The-Tetons.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className="card" style={{ width: "18rem" }}>
                        <img src="https://www.wildnatureimages.com/images/640/070620-014-The-Tetons.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row mt-4'>
                <div className='col-md-4'>
                    <div className="card" style={{ width: "18rem" }}>
                        <img src="https://www.wildnatureimages.com/images/640/070620-014-The-Tetons.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className="card" style={{ width: "18rem" }}>
                        <img src="https://www.wildnatureimages.com/images/640/070620-014-The-Tetons.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                {showCards && (
                    <div className='col-md-4'>
                        <div className="card" style={{ width: "18rem" }}>
                            <img src="https://www.wildnatureimages.com/images/640/070620-014-The-Tetons.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Animation
