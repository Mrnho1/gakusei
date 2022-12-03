import React from "react";
import "../styles/Navbar.css"
import {Component} from 'react'
import logo from "../img/ApenasOLogo.png"

class Navbar extends Component{

    state={clicked: false};
    handClick = () =>{
        this.setState({clicked: !this.state.clicked})
    }

    render(){
        return(
            <header>
                <nav>
                    <a href="/gk/src/components/pages/Home.jsx"><img src={logo} alt="logo" height={80}/></a>
                    <div>
                        <ul id="navbar"
                        className={this.state.clicked ? "#navbar active": "#navbar"}>
                        <li><a href="/gk/src/components/pages/Home.jsx">Home</a></li>
                        <li><a href="/gk/src/components/pages/Company.jsx">Sobre nós</a></li>
                        <li><a href="/gk/src/components/pages/Contacts.jsx">Contatos</a></li>
                        <li><a href="/products">Produtos</a></li>
                        </ul>
                    </div>
                    <div id='mobile' onClick={this.handClick}>
                    <i id='bar' className={this.state.clicked ? 'fas fa-times' : ' fas fa-bars'}></i>
                </div>
                </nav>
            </header>
        )
    }

}

export default Navbar