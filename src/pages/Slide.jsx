import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Slide() {
    return (
        <div>
            <Carousel autoPlay>
                <div>
                    <img src='https://my.alfred.edu/zoom/_images/fall-drone-shot.jpg' className='h-100 w-100' />

                </div>
                <div>
                    <img src='https://my.alfred.edu/zoom/_images/fall-drone-shot.jpg' className='h-100 w-100' />
                </div>
                <div>
                    <img src='https://my.alfred.edu/zoom/_images/fall-drone-shot.jpg' className='h-100 w-100' />

                </div>
            </Carousel>
            <div className='col-md-12 d-flex justify-content-between'>
                <div className='col-md-8'>
                    <h4>Title</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div className='col-md-4'>
                    <button className='btn btn-primary'>Learn more</button>
                </div>
            </div>
        </div>

    )
}

export default Slide