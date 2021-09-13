import logo from './logo.svg';
import './App.css';

//	COMPONENT IMPORT
import Home from './page/home/Home';
import About from './page/About/About';
import Contact from './page/Contact/Contact';
import Service from './page/service/Service';
import Notfound from './page/notfound';
import Navbar from './page/navaber';

//	PACKAGES IMPORT
import {Route, Switch} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
//import {Bootstrap} from 'bootstrap';


function App() {
  return (
	<>
		<Navbar/>
		<Switch>
			<Route exact path="/learnRectWithProject/" component={Home} />
			<Route  path="/learnRectWithProject/about" component={About} />
			<Route  path="/learnRectWithProject/contact" component={Contact} />
			<Route  path="/learnRectWithProject/service" component={Service} />
			<Route component={Notfound} />
		</Switch>
		
		
	</>
  );
}

export default App;
