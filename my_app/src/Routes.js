import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import React, {
    Component
} from 'react';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav';
import Logout from './components/Logout/Logout';
import Movies from './components/Movies/Movies';

class Routes extends Component {
    render() {
        return (
            <Router >
                < main >
                    < Nav />
                    < Route exact path="/" component={Home} />
                    < Route exact path="/login" component={Login} />
                    <Route exact path="/signup" component={Signup} />
                    <Route exact path='/logout' component={Logout} />
                    <Route exact path='/movies' component={Movies} />
                </main>
            </Router>
        )
    }
}

export default Routes;