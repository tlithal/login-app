import React from 'react';

export default class NavLinks extends React.Component {
    render() {
        return(
            <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">{this.props.linkName}</a>
            </li>
        );
    }
}