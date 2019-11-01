import React from 'react';
//import './styles.css';
import logo2 from '../img/logo2.png';
import contacts from '../img/contacts.png';
import chat from '../img/chat.png';
import group from '../img/group.png';
import channel from '../img/channel.png';
import file from '../img/file.png';
import settings from '../img/settings.png';

class Menu extends React.Component {
    render(){
        return (
            <div class="menu">
                <div class="logo"><img class="img-logo1" src={logo2} /></div>
                <div class="menu-item"><img class="img-logo" src={contacts} /></div>
                <div class="menu-item"><img class="img-logo" src={chat} /></div>
                <div class="menu-item"><img class="img-logo" src={group} /></div>
                <div class="menu-item"><img class="img-logo" src={channel} /></div>
                <div class="menu-item"><img class="img-logo" src={file} /></div>
                <div class="menu-item"><img class="img-logo" src={settings} /></div>
            </div>
        )
    }
}

export default Menu
