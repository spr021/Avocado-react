import React from 'react';
//import './styles.css';
import MyMsg from './myChat';
import YourMsg from './yourChat';


class ChatBox extends React.Component {
    render(){
        return (
            <div className="chat-text" id="chat-text">
            <div id="chating">
                <MyMsg />
                <MyMsg />
                <YourMsg />
                <MyMsg />
                <MyMsg />
                <YourMsg />
                <YourMsg />
                <MyMsg />
                <MyMsg />
                <MyMsg />
            </div>
            </div>
        )
    }
}

export default ChatBox
