import React from 'react'
import './TopNav.css';
import { AiFillCaretDown } from "react-icons/ai";

function TopNav() {
    return (
        // <div className='container-fluid'>
        <div className='relative'>
            <nav class="navbar  navbar-expand-lg navbar-light bg-white shadow p-5 mb-34 bg-white" style={{ height: "10px" }}>
                <div class="container-fluid">
                    <div className='absolute'>
                        <a className="navbar-brand" href="#">
                            <img src="https://ebraintechnologies.com/assets/img/Ebrain/logoHeader.png" alt="" className="d-inline-block align-text-top topnav" />
                        </a>
                    </div>
                </div>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav item">
                        <div className="nav-item dropdown">
                            <a className="nav-link active me-5 dropdown-toggle" href="#" id="navbarDropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                Home
                            </a>
                            <ul className="dropdown-menu shadow p-3 mb-5 bg-body rounded" aria-labelledby="navbarDropdown" style={{ width: "250px" }}>
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>

                        <a className="nav-link active me-5" aria-current="page" href="#">Services</a>
                        <a className="nav-link active me-5" aria-current="page" href="#">About</a>
                        <a className="nav-link active me-5" aria-current="page" href="#">Contact</a>
                        <a className="nav-link active me-5" aria-current="page" href="#">Review</a>
                    </div>
                    <div className="d-flex gap-4">
                        {/* <button class="transition delay-150 duration-300 ease-in-out ...">Button A</button> */}
                        <button type="button" class="btn btn-outline-success">SignUp</button>
                        <button type="button" class="btn btn-outline-success">Signin</button>
                    </div>
                </div>
            </nav>
        </div>
        // </div>
    )
}

export default TopNav
