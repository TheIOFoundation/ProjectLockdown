import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
  import App from './App';


  class AppRoute extends React.Component{

    render(){
        return(
            <Router>
                <Switch>
                    <Route
                        path="/"
                        render={(props) => <App {...props} />}
                    />
                </Switch>
            </Router>
        )
    }
  }

  export default AppRoute;