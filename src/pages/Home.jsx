import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div>
            <div className='col-md-12 d-flex'>
                <div className='col-md-3'>
                    <button className="btn btn-success btn-circle btn-circle-sm"></button>
                </div>
                <div className='col-md-3'>
                    <button className="btn btn-primary btn-circle btn-circle-sm"></button>
                </div>
                <div className='col-md-3'>
                    <button className="btn btn-warning btn-circle btn-circle-sm"></button>
                </div>
                <div className='col-md-3'>
                    <button className="btn btn-danger btn-circle btn-circle-sm"></button>
                </div>
            </div>
            <div className='col-md-12 d-flex'>
                <div className='col-md-3'>
                    <button className="btn btn-success btn-circle btn-circle-sm"></button>
                </div>
                <div className='col-md-3'>
                    <button className="btn btn-primary btn-circle btn-circle-sm"></button>
                </div>
                <div className='col-md-3'>
                    <Link to="/blog"><button className="btn btn-warning btn-circle btn-circle-sm"></button></Link>
                </div>
                <div className='col-md-3'>
                    <button className="btn btn-danger btn-circle btn-circle-sm"></button>
                </div>
            </div>
            <div className='col-md-12 d-flex'>
                <div className='col-md-3'>
                    <button className="btn btn-success btn-circle btn-circle-sm"></button>
                </div>
                <div className='col-md-3'>
                    <button className="btn btn-primary btn-circle btn-circle-sm"></button>
                </div>
                <div className='col-md-3'>
                    <button className="btn btn-warning btn-circle btn-circle-sm"></button>
                </div>
                <div className='col-md-3'>
                    <button className="btn btn-danger btn-circle btn-circle-sm"></button>
                </div>
            </div>
            <div className='col-md-12 d-flex'>
                <div className='col-md-3'>
                    <button className="btn btn-success btn-circle btn-circle-sm"></button>
                </div>
                <div className='col-md-3'>
                    <button className="btn btn-warning btn-circle btn-circle-sm"></button>
                </div>
                <div className='col-md-3'>
                    <button className="btn btn-primary btn-circle btn-circle-sm"></button>
                </div>
                <div className='col-md-3'>
                    <button className="btn btn-danger btn-circle btn-circle-sm"></button>
                </div>
            </div>
        </div>
    )
}

export default Home