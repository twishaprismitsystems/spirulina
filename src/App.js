import {BrowserRouter as Router , Route , Switch } from 'react-router-dom'
import axios from 'axios'

import Header from './components/Header';
import Home from './containers/homeContainer'
import MainPage from './components/MainPage';
import SubPage from './components/SubPage';
import Footer from './components/Footer';
import ErrorPage from './components/ErrorPage';

if(window.location.hostname === "localhost"){
  axios.defaults.baseURL = window.location.protocol+"//"+window.location.hostname+"/spirulina/control/content/Data.php?file="+window.location.protocol+"//"+window.location.hostname+"/spirulina/control/";
}
else{
  axios.defaults.baseURL = window.location.protocol+"//"+window.location.hostname+"/control/content/Data.php?file="+window.location.protocol+"//"+window.location.hostname+"/control/";
}

function App(){
  return(
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/notfound" component={ErrorPage}></Route>
          <Route exact path="/:page" component={MainPage}></Route>
          <Route exact path="/:page/:subpage" component={SubPage}></Route>
          {/* <Route exact path="*" component={ErrorPage }></Route> */}
        </Switch>
        <Footer />
      </div>
    </Router>
  )
}
export default App;