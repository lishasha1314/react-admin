import React from 'react';
import Login from './views/login/index';
import {BrowserRouter,Route,Switch} from 'react-router-dom';

class  App extends React.Component{
  constructor(props){
    super(props);
    this.state={

    };
  }
  render(){
    return (
      <BrowserRouter>
        <Switch>
          <Route exact component={Login} path="/"></Route>
        </Switch>
      </BrowserRouter>
    )
  }
}


export default App;
