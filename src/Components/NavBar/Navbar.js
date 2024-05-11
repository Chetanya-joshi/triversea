import React from 'react';
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.css';
export default function NavBar() {

    

    return (
        <div>
            <div className="title">
                <marquee behavior="alternate" >
                    <ul>

                        <li>Nutring Little Champs </li>
                        {/* <li>Shop for Rs.1499 and Get 25% Off.</li> */}

                    </ul>
                </marquee>
            </div>

            <div className="navbar">
                <div className="leftside d-flex">
                    <div className="logo">
                        <p>Welmont</p>

                    </div>
                    <div className="searchbar">
                        <div className="box">
                            {/* <FontAwesomeIcon icon={faSearch} width={14} style={{ color: '#944E63' }} /> */}
                            <input type="text" placeholder="What are you looking for?" />
                        </div>
                        <button className="btn btn-primary" style={{
                            background: '#944E63', borderTopLeftRadius: '0px', borderBottomLeftRadius: '0px' , outline:'none' , border:'none'
                        }}>Search</button>
                    </div>
                </div>

                <div className="rightside d-flex align-items-center">
                    <div className="d-flex align-items-center icon">
                        {/* <FontAwesomeIcon icon={faMailBulk} width={20} style={{ color: '#944E63' }} /> */}
                        <button className="btn btn-primary">Contact</button>
                    </div>

                    <div className="d-flex align-items-center icon">
                        {/* <FontAwesomeIcon icon={faSignIn} width={20} style={{ color: '#944E63' }} /> */}
                        <button className="btn btn-primary">Admission</button>
                        
                    </div>

                    <div className="d-flex align-items-center icon">
                        {/* <FontAwesomeIcon icon={faCartFlatbed} width={20} style={{ color: '#944E63' }} /> */}
                        <button className="btn btn-primary">Partner</button>

                    </div>

                </div>
            </div>


            <div className="navname">
                <ul>
                    <li>DISCOVER </li>
                    <span>|</span>
                    <li>PROGRAMS</li>
                    <span>|</span>

                    <li>FACILITIES</li>
                    <span>|</span>

                    <li>ABOUT </li>
                    <span>|</span>

                    <li>PARENTS </li>
                </ul>
            </div>
        </div>
    )
}
