import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import React from 'react'
import ReactDOM from 'react-dom'
import Navbar from '../components/js/Navbar'
import FullPageIntro from '../components/js/FullPageIntro'
import Footer from '../components/js/Footer'

const Index = () => {
    return (
        <div>
            <header>
                <Navbar activePage='home' />
                <FullPageIntro />
            </header>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

ReactDOM.render(<Index />, document.getElementById('root'))