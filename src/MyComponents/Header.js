import React from 'react';
import {Link} from "react-router-dom"; /* change all "href" to  "to". Similarly, change "a" to Link*/
                                        /* While using react router , we need to do above changes */
function Header(props) { /* We want data from App.js, so use props. */
    return (
        
        /*  following code is from bootstrap app  */
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link> {/* To get title from App.js, we used props.title */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>

                    </ul>
                    { props.searchBar? <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
                        <Link className="nav-link" to="/search">Search</Link>
                    </form> : ""} {/* if searchBar is set to true, then show form(i.e. anything written before :),or if its false then the content to show is written after : */}
                </div>
            </div>
        </nav>

        
    )
}

export default Header;