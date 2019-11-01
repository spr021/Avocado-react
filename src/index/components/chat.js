import React from 'react';
//import './styles.scss';
import Account from './account';
import ChatBox from './chatBox';
import WriteBox from './writeBox';



class Chat extends React.Component {
    render(){
        return (
            <div className="chat">
                <Account />
                <div className="tc-line"></div>
                <ChatBox />
                <div className="tc-line"></div>
                <WriteBox />
            </div>
        )
    }
}

export default Chat
