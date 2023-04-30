import React from 'react'
import { Link } from 'react-router-dom'

function Blog() {
  return (
    <div>
        <div className='col-md-12'>
            <img src='https://my.alfred.edu/zoom/_images/fall-drone-shot.jpg' className='h-100 w-100'/>

        </div>
        <div className='col-md-12 d-flex justify-content-between'>
            <div>
                <h3>Hello bd</h3>
            </div>
            <div>
                <Link to="/slide"><button className='btn btn-primary'>Learn more</button></Link>
            </div>
        </div>
    </div>
  )
}

export default Blog