import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import React from 'react'
import ReactDOM from 'react-dom'
import Navbar from '../components/js/Navbar'
import Footer from '../components/js/Footer'
import './forms.css'

const TIGER = () => {
    return (
        <div className='content'>
            <h2>TIGER (Team Improvement, Growth, and Education Records)</h2>
            <p><a href='https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAANAAaN9fpdUN0VEUEhZRzEyWFJVRlRRRzE2RVEwSkhEVS4u'>This </a>
            can be used to submit the text for a TIGER. It should include how you improved the team, helped grow robotics programs in Pearland ISD, or educate the community about FRC, FIRST, or Pearadox
            </p>
        </div>
    )
}

const Surveys = () => {
    return (
        <div className='content'>
            <h2>Parent and Student Registration Surveys</h2><br/>
            <a href='https://forms.gle/cB4gBMv99YTtWht88'>Student Registration Survey</a><br/><br/>
            <a href='https://forms.gle/5UsC6uWrNXRE5Ay26'>Parent Registration Survey</a>
        </div>
    )
}

const Competiton = () => {
    return (
        <div className='content'>
            <h2>Competiton Forms</h2> <br/>
            <p>If you have completed the online registration in STIMS (<a href='https://www.firstinspires.org/resource-library/youth-team-member-consent-and-release-form'>
                https://www.firstinspires.org/resource-library/youth-team-member-consent-and-release-form</a>),<br/>
            then you do not need to fill out the FIRST consent form</p>
            
            <ul>
                <li><a href='/uploads/Field-Trip-Form.pdf'>Field Trip Form</a></li>
                <li><a href='/uploads/Alternate-Travel-Form.pdf'>Alternate Transportation Form</a></li>
                <li><a href='/uploads/FIRST-Texas-Consent-Form.pdf'>FIT Consent Form</a></li>
                <li><a href='/uploads/FIRST-Consent-Form.pdf'>FIRST Consent Form</a></li>
            </ul>
        </div>
        
    )
}

const Mentoring = () => {
    return (
        <div className='content'>
            <h2>
                Mentoring
            </h2>
            <p>
                Pearadox students are expected to participate at least 5 hours in a Pearland ISD STEM related event in order to fully participate in a competition. The main ways to do this will be to mentor middle school and junior high robotics teams, or at things like a science night demonstrating the Pearadox robot. As I get more information about when teams are meeting, we will make that information available to students.
                <br/><br/>
                Please make sure to get a teacher signature on the attached <a href='/uploads/volunteerrobotics.docx'>volunteer robotics document </a>for your hours.
                <br/><br/>
                FLL Support:<br/>
                Alexander: Ms. Ashley<br/>
                Jamison: Mr. Jennings<br/>
                Rogers: Ms. Long<br/>
                Sablatura: Ms. Broussard, Ms. Mueller, Ms. Medley
                <br/><br/>
                FTC Support:<br/>
                Berry Miller: Mr. Thomas, Ms. Murphy-Talton<br/>
                PJH East: Mr. Rowe<br/>
                PJH South: Mr. Childs<br/>
                PJH West: Ms. Pratt, Ms. Bill<br/>
            </p>
        </div>
    )
}

const Forms = () => {
    return (
        <div>
            <header>
                <Navbar activePage='forms'/>
                <br/>
            </header>
            <Surveys className='content' />
            <br/>
            <br/>
            <TIGER className='content'/>
            <br/>
            <br/>
            <Competiton className='content' />
            <br/>
            <br/>
            <Mentoring />
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

ReactDOM.render(<Forms />, document.getElementById('root'))