import React from 'react';


class Login extends React.Component {
    render(){
        return (
            <div className='loginBox'>
                <div className='signInText'>
                    <p>Sign in</p>
                    <p>Please choose your country and enter your full phone number.</p>
                </div>
                <div className='username'>
                    <input />
                </div>
                <div className='password'>
                    <input />
                </div>
                <div className='signInButton'>Sign in</div>
            </div>
        )
    }
}

export default Login


