import React, { Component } from "react"

export default class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" >Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
            
                            <a className="nav-link"  aria-current="page" href="/Login">Login</a>
                            <a className="nav-link" aria-current="page" href="/To-do">To do</a>
                            <a className="nav-link">Art</a>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
};