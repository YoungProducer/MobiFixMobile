import React from 'react'
import { BrowserRouter as Router, HashRouter, Route, Switch } from 'react-router-dom'

import Home from './components/Home'
import Services from './components/Services'
import Accessories from './components/Accessories'
import About from './components/About'

import './App.sass'

class App extends React.Component {
    render() {

        return(
            <HashRouter>
                <Switch>
                    <Route path="/" component={Home} exact/>
                    <Route path="/services" component={Services} />
                    <Route path="/accessories" component={Accessories} />
                    <Route path="/about" component={About} />
                </Switch>
            </HashRouter>
        )
    }
}

export default App