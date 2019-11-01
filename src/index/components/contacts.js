import React from 'react';
//import './styles.css';
import Person from './person';

import funnel from '../img/funnel.png';
import search from '../img/search.png';


class Contacts extends React.Component {
    render(){
        return (
            <div className="contacts">
                <div className="info">
                    <div className="name-page">chat</div>
                    <div className="sort">
                        <img className="sort-img" src={funnel} />
                        <span>unread</span>
                    </div>
                </div>
                <div className="search">
                    <img className="img-search" src={search} />
                    <input  name="search" className="search-box" title="search" type="search" placeholder="Search" />
                </div>
                <div className="sl-line"></div>
                <div className="list-of-contact">
                    <Person />
                    <Person />
                    <Person />
                    <Person />
                    <Person />
                    <Person />
                    <Person />
                    <Person />
                    <Person />
                    <Person />
                    <Person />
                </div>
            </div>
        )
    }
}

export default Contacts
