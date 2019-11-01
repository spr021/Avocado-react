import React from 'react';
//import './styles.css';
import Avatar from '../img/avatars/girl-1.png';


class Person extends React.Component {
    render(){
        return (
            <div className="person">
                <div className="ct-line"></div>
                <div className="img-profile">
                    <img src={Avatar} />
                </div>
                <div className="ct-info">
                    <div>
                        <div className="nick-name">maryam</div>
                        <div className="date-pm">just now</div>
                    </div>
                    <div>
                        <div className="last-pm">chekhabar ?</div>
                        <div className="new-pm"><span>2</span></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Person
