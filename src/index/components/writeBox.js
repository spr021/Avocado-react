import React from 'react';
//import './styles.css';

import Attachment from '../img/attachment.png';
import Happiness from '../img/happiness.png';
import PaperPlane from '../img/paper-plane.png';


class WriteBox extends React.Component {
    render(){
        return (
            <div className="write-box">
                <div className="attach">
                    <img src={Attachment} />
                </div>
                <div className="write-box-chat">
                    <input onkeydown="send(event)" id="my-talk" type="text" placeholder="write your massage ..." />
                </div>
                <div className="emoji">
                    <img src={Happiness} />
                </div>
                <div onclick="chat()" className="send-pm" id="send-pm">
                    <img src={PaperPlane} />
                </div>
            </div>
        )
    }
}

export default WriteBox


