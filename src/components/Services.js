import React from 'react'
import './Services.css'
import img from './images/service0.jpg'

const Services = () => {
    return (
        <>
        <h1 className='services-head' id='services'>Services</h1>
        <div className='services'>
        <div className="card-services">
        <img src={img} className="card-img-top" alt=""/>
        <div className="card-body">
            <h5 className="card-title">Portfolio Websites</h5>
            <p className="card-text">Designed for artists, photographers, designers, and creative professionals to showcase their work.</p>
            <a href="/" className="btn btn-primary sc-btn">Know More</a>
        </div>
        </div>
        <div className="card-services">
        <img src={img} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">Business Websites</h5>
            <p className="card-text">Professional sites to showcase services and contact info, enhancing online presence.</p>
            <a href="/" className="btn btn-primary sc-btn">Know More</a>
        </div>
        </div>
        <div className="card-services">
        <img src={img} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">Business App</h5>
            <p className="card-text">Boost productivity with our app's task tracking, expense monitoring, CRM, and inventory management.</p>
            <a href="/" className="btn btn-primary sc-btn">Know More</a>
        </div>
        </div>
        <div className="card-services">
        <img src={img} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">Appointment Websites</h5>
            <p className="card-text">Easy-to-use systems for scheduling appointments and reservations.</p>
            <a href="/" className="btn btn-primary sc-btn">Know More</a>
        </div>
        </div>
        <div className="card-services">
        <img src={img} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">College Projects</h5>
            <p className="card-text">Discover fun and educational projects that help you learn new things and spark creative ideas.</p>
            <a href="/" className="btn btn-primary sc-btn">Know More</a>
        </div>
        </div>
        <div className="card-services">
        <img src={img} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="/" className="btn btn-primary sc-btn">Know More</a>
        </div>
        </div>
        </div>
        </>
    )
}

export default Services