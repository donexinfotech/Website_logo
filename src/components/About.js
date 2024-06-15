import React from 'react'
import './About.css'
import img from './images/678.png'

const About = () => {
    return (
        <div className='about'>
        <h1>About US</h1>
        <div className="container1">
            <div className="content">
                <h2>Welcome to Our Website</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptates 
                repellat ducimus quaerat itaque ea officia in animi commodi tempore? Lorem ipsum, dolor sit amet 
                consectetur adipisicing elit. Sunt vel labore aliquam debitis autem repellat minima ducimus architecto magnam 
                commodi cupiditate quae, saepe culpa maiores! Reprehenderit iste amet quaerat vel.</p>
                <button className="btn btn-primary button">Click Here</button>
            </div>
            <div className="pic">
                <img src={img} alt="" />
            </div>
        </div>
        </div>
    )
}

export default About