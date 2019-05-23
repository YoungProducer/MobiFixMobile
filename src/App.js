import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import Services from './components/Services';
import Accessories from './components/Accessories';
import About from './components/About';
import Feeds from './containers/Feeds';
import Contacts from './components/Contacts';

import './App.sass';

class App extends React.Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route path='/' component={Accessories} exact />
					<Route path='/services' component={Services} />
					<Route path='/accessories' component={Accessories} />
					<Route path='/about' component={About} />
					<Route path='/feeds' component={Feeds} />
					<Route path='/contacts' component={Contacts} />
				</Switch>
			</Router>
		);
	}
}

export default App;
