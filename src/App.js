import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './components/Home'
import Accessories from './components/Accessories'
import About from './components/About'

import './App.sass'

class App extends React.Component {
    render() {

        return(
            <Router>
                <Switch>
                    <Route path="/" component={Home} exact/>
                    <Route path="/accessories" component={Accessories} />
                    <Route path="/about" component={About} />
                </Switch>
            </Router>
        )
    }
}

export default App