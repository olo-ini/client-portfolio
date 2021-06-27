import React from 'react'
import "./App.css"
import banner_image from './assets/banner_image.png'


function Header() {
    return (
        <section id="welcome" className="grid">
            <div className="welcome-text">
                <h2>Influencer and <br/>Fashion Stylist</h2>
                <p className="leading"> I would love to style you or your next gig</p>
                <a href="index.js" className = "button"> View my work</a>
            </div>
            <div className="welcome-img">
                <img src={banner_image} alt="pic of planet"></img>
            </div>
        </section>
    )
}

export default Header
