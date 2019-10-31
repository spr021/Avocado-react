import React from 'react';
import './styles.css';


class Contacts extends React.Component {
    render(){
        return (
            <div className="contacts">
                <div className="info">
                    <div className="name-page">chat</div>
                    <div className="sort">
                        <img className="sort-img" src="img/funnel.png" />
                        <span>unread</span>
                    </div>
                </div>
                <div className="search">
                    <img className="img-search" src="img/search.png" />
                    <input  name="search" className="search-box" title="search" type="search" placeholder="Search" />
                </div>
                <div className="sl-line"></div>
                <div className="list-of-contact">

                </div>
            </div>
        )
    }
}

export default Contacts
