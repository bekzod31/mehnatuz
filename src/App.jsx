import React from 'react';
import forTemplate from './Reducer/forTemplate';
import AuthMe from './Reducer/AuthMe';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';
import Autentification from './Pages/Autentification';
import Login from './Pages/Login';
import Registration from './Pages/Registration';

const rootReducer = combineReducers({
  forTemplate: forTemplate,
  AuthMe: AuthMe
});

const store = createStore(rootReducer, applyMiddleware(thunk));



class App extends React.Component {


  render() {

    let token = sessionStorage.getItem('token');
    
    return (
      <Provider store={store}>
        <BrowserRouter>
          {token == null ? <Route path="/login" exact component={Login} /> : <Redirect to="/" />}
          {token == null ? <Redirect to="/" /> : <Redirect to="/login" />}
          {token == null ? <Route path="/registration" exact component={Registration} /> : <Redirect to="/" />}
          {token != null ? <Route path="/" exact component={Autentification} /> : <Redirect to="/login" />}
        </BrowserRouter>
      </Provider>
    );
  }
}


export default App;