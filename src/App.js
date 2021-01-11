import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './composants/interface/Header'
import Liste from './composants/contact/Liste'
import {Provider} from './context'
import AddContact from './composants/contact/AddContact'
import {BrowserRouter as Router, Route} from 'react-router-dom'

class App extends Component {

  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header />
          <div className='container'>
            {/* <AddContact /> */}
            <Route exact path="/liste" component={Liste}/>
          </div>
          </div>
        </Router>
      </Provider>
    );
  }

}

export default App;
