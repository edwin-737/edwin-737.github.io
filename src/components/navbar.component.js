import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to='/' className="navbar-brand" >Exercise Tracker</Link>
                <div style={{ backgroundColor: 'black' }}>
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".collapse navbar-collapse">
                        <div class="icon-bar"></div>
                        <div class="icon-bar"></div>
                        <div class="icon-bar"></div>
                    </button>
                </div>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/surveys" className="nav-link">Surveys</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/schedule" className="nav-link">Schedule</Link>
                        </li>

                        <li className="navbar-item login">
                            <Link to="/login" className="nav-link">Login</Link>
                        </li>
                    </ul>
                </div>
            </nav >
        );
    }
}