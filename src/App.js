import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {Link} from 'react-router-dom'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Navigationbar from './components/layout/Navigationbar'
import Login from './components/pages/Login'
import Register from './components/pages/Register'
import Landing from './components/pages/Landing'
import Dashboard from './components/dashboard_components/Dashboard';
import NewPickup from './components/dashboard_components/newPickup';

class App extends Component {

   componentDidMount(){
      // Redirect to requested URL 
     const queryString = window.location.search;
     const urlParams = new URLSearchParams(queryString);
     const page = urlParams.get('p')
     console.log(page);

     if(page!=null){
        this.props.history.push(page);
     }
  }

   render() {
      return (
          <Router basename={process.env.PUBLIC_URL}>
            <div className="App">
               <Navigationbar />
               <Route exact path="/" component={Landing} />
               <div className="container">
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/home" component={Dashboard} />
                  <Route path="/newPickup" component={NewPickup} />
               </div>
            </div>
         </Router>
      )
   }
}

export default App;
