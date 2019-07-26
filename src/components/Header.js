import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (

            <header>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 my-auto" >
                            <a href="/" className="logo">PhotoShowcase</a>
                        </div>

                        <div className="col-lg-4 my-auto text-center ">
                            <div className="mainmenu"> 
                                <ul>
                                    <li><a href="/">Home</a></li>
                                    <li><a href="/about">About</a></li>
                                    <li><a href="/disclaimer">Disclaimer</a></li>
                                    <li><a href="/credits">Credits</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-4 my-auto text-right">
                            <form action="">
                                <input type="text" placeholder="Search keyword" />
                                <input type="submit" value="Search" />
                            </form>
                        </div>

                    </div>
                </div>
            </header>
        )
    }
}
