import React from 'react';

export default class LoginForm extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <form id="loginForm">
                    <div className="col-6 mx-auto">
                        <h3>Log In</h3>
                    </div>
                    <div className="row">
                        <div className="col-6 mx-auto">
                            <div className="form-floating mb-3 mt-3">
                                <input type="text" className="form-control" id="username" />
                                <label for="username">Username</label>
                            </div>
                            <div className="form-floating mb-3 mt-3">
                                <input type="password" className="form-control" id="password" />
                                <label for="password">Password</label>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6 mx-auto mb-3">
                            <button type="submit" className="btn btn-primary">Log In</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}