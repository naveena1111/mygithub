import React from 'react';
import './App.css';
import { Route, Link, Router } from 'react-router-dom';
import ContactUsComponent from './components/contactUs/contactUs.jsx';
import Home from './components/home/home';
import { history } from './helpers/history';
// import './../img';

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
                {/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <img src={require('./img/logo1.png')} />
     
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" href="#">Disabled</a>
                </li>
            </ul>
        </div>
    </nav> */}
                    {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
                  <img src={require('./img/logo1.png')} />
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link to="/home" className="nav-link font-weight-bold ">About Us</Link>
                                </li>
                                <li className="nav-item ">
                                    <Link to="/home" className="nav-link font-weight-bold ">Case Studies</Link>
                                </li>
                                <li className="nav-item ">
                                    <Link to="/" className="nav-link font-weight-bold">Contact us</Link>
                                </li>
                            </ul>
                        </div>
                    </nav> */}

 <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <img src={require('./img/logo1.png')} />
        <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
       </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
               <li class="nav-item letterSpace-2 mr-4 ">
               <Link to="/home" className="nav-link font-weight-bold ">ABOUT US</Link>                   {/* <a class="nav-link" href="#">ABOUT US <span class="sr-only">(current)</span></a> */}
                 </li>
                <li class="nav-item letterSpace-2 mr-4">
                    <a class="nav-link  font-weight-bold" href="#">SERVICES</a>
                 </li>
                <li class="nav-item letterSpace-2 mr-4">
                    <a class="nav-link  font-weight-bold" href="#">CASE STUDIES</a>
                </li>
                <li class="nav-item letterSpace-2 mr-3 ">
                 <Link to="/" className="nav-link font-weight-bold active text-warning">CONTACT US</Link>
                 </li>
             </ul>
         </div>
     </nav>
                </div>

              
                <div >
                    <Route exact path="/" component={ContactUsComponent} />
                    <Route path="/home" component={Home} />
                </div>
            </Router>




        );
    }

}

export default App;
