import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbreact/dist/css/mdb.css'
import React from 'react'
import ReactDOM from 'react-dom'
import Navbar from '../components/js/Navbar'
import RobotCarousel from '../components/js/RobotCarousel'
import Footer from '../components/js/Footer'
import './robot.css'

const Robots = () => {
    return (
        <div>
            <header>
                <Navbar activePage='robots' />
            </header>
            <div className='title'>
                <h1 className='text-center'>Our Robots</h1>
            </div>
            <RobotCarousel />
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

ReactDOM.render(<Robots />, document.getElementById('root'))