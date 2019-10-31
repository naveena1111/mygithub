import React from 'react';
import './App.css';
import { Route, Link, Router } from 'react-router-dom';
import ContactUsComponent from './components/contactUs/contactUs.jsx';
import Home from './components/home/home';
import { history } from './helpers/history';

class App extends React.Component {



    contactus() {

        history.push('/contactus');
    }
    render() {
        return (
            <Router history={history}>
                <div>
                    <header></header>
                </div>


                <div>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li class="nav-item">
                                    <Link to="/" className="nav-link font-weight-bold ">About Us</Link>
                                </li>
                                <li className="nav-item ">
                                    <Link to="/" className="nav-link font-weight-bold ">Case Studies</Link>
                                </li>
                                <li className="nav-item ">
                                    <Link to="/contactus" className="nav-link font-weight-bold">Contact us</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>

              
                <div >
                    <Route exact path="/" component={Home} />
                    <Route path="/contactus" component={ContactUsComponent} />
                </div>
            </Router>




        );
    }

}

export default App;
