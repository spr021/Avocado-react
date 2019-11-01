import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './index/components/menu';
import Contacts from './index/components/contacts';
import Chat from './index/components/chat';
import './index/components/styles.scss';
import * as serviceWorker from './serviceWorker';

class Container extends React.Component{
    render() {
        return (
             <div className="container">
                <Menu />
                <Contacts />
                <Chat />
             </div>
        )
    }
}
  
ReactDOM.render(<Container />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
