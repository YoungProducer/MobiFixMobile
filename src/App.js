import React from 'react'
import { BrowserRouter as Router, HashRouter, Route, Switch } from 'react-router-dom'

import Home from './components/Home'
import Services from './components/Services'
import Accessories from './components/Accessories'
import About from './components/About'
import Feeds from './components/Feeds'

import './App.sass'

class App extends React.Component {
    render() {

        return(
            <Router>
                <Switch>
                    <Route path="/" component={Home} exact/>
                    <Route path="/services" component={Services} />
                    <Route path="/accessories" component={Accessories} />
                    <Route path="/about" component={About} />
                    <Route path="/feeds" component={Feeds} />
                </Switch>
            </Router>
        )
    }
}

export default App