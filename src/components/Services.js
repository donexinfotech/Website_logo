import React from 'react'
import './Services.css'
import img from './images/service0.jpg'

const Services = () => {
    return (
        <>
        <h1 className='services-head'>Services</h1>
        <div className='services'>
        <div className="card">
        <img src={img} className="card-img-top" alt=""/>
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary sc-btn">Go somewhere</a>
        </div>
        </div>
        <div className="card">
        <img src={img} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary sc-btn">Go somewhere</a>
        </div>
        </div>
        <div className="card">
        <img src={img} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary sc-btn">Go somewhere</a>
        </div>
        </div>
        <div className="card">
        <img src={img} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary sc-btn">Go somewhere</a>
        </div>
        </div>
        <div className="card">
        <img src={img} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary sc-btn">Go somewhere</a>
        </div>
        </div>
        <div className="card">
        <img src={img} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary sc-btn">Go somewhere</a>
        </div>
        </div>
        </div>
        </>
    )
}

export default Services