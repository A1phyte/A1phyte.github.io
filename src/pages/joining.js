import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbreact/dist/css/mdb.css'
import React from 'react'
import ReactDOM from 'react-dom'
import Navbar from '../components/js/Navbar'
import Footer from '../components/js/Footer'
import './joining.css'

const Title = () => {
    return (
        <h1 className='main'>Joining Pearadox</h1>
    )
}

const Info = () => {
    return (
        <div className='main'>
            <p>
                If you are interested in joining Pearadox, read below.
                <br/>
                <br/>
                Pearadox is a year-round robotics program. We are recruiting new members primarily during the summer, but
                you can join throughout the year. Here are <a href='https://www.scribd.com/document/411870801/2019informationalmeeting-v2#from_embed'>the slides </a> 
                from our informational meeting.
                <br/>
                Once you feel like you would like to attend meetings, please do the following:
                <ul>
                    <li>Take the <a href='https://forms.gle/cB4gBMv99YTtWht88'>Student Registration Survey</a></li>
                    <li>Take the <a href='https://forms.gle/5UsC6uWrNXRE5Ay26'>Parent Registration Survey</a></li>
                    <li>Read through the <a href='/uploads/Pearadox-Handbook-2019.pdf'>Student Handbook</a> and bring in a signed Code of Conduct</li>
                    <li>Buy Z.87 (or Z.87+) certified safety goggles</li>
                    <li>We will add the student as a full member in our slack workspace, and the parent as a limited member</li>
                    <li>Check out our calandar and you can start attending meetings</li>
                </ul>
            </p>
        </div>
    )
}

const Joining = () => {
    return (
        <div>
            <heading>
                <Navbar activePage='joining' />
                <br/>
                <Title />
                <br/>
            </heading>
            <Info />
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

ReactDOM.render(<Joining /> , document.getElementById('root'))