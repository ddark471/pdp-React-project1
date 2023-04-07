import React from "react";
import { ReactDOM } from "react";
import './style.css'

const Navbar = () => {
    return (
        <div className="wrap__navbar">
            <div className="navbar__items">
                <a href="#" className="items__name">Олег Марков</a>
                <div className="items__links">
                    <a href="#" className="links__elems">Главная</a>
                    <a href="#" className="links__elems">Обо мне</a>
                    <a href="#" className="links__elems">Связаться</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar