import React from 'react';
import NavLinks from './NavLinks';

export default class Navigation extends React.Component {
    render() {
        return(
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <NavLinks linkName="Home" />
                            <NavLinks linkName="Forum" />
                            <NavLinks linkName="Contact" />
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}