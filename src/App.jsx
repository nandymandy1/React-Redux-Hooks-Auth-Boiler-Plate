import { Provider } from "react-redux";
import React, { useEffect } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

// Layouts
import Navbar from './Components/Layouts/Navbar';
import Footer from './Components/Layouts/Footer';

// Auth Routes
import Login from './Components/Accounts/Login';
import Register from './Components/Accounts/Register';

// Protected Routes
import PrivateRoute from './Components/Protected/PrivateRoutes';
import Dashboard from './Components/Protected/Dashboard/Dashboard';

// Auth Actions
import { loadUser } from './store/Auth/Action';
import store from './store';


const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return <>
    <Router>
      <Provider store={store}>
        <>
          <Navbar />
          <div className="container" style={{ minHeight: "80vh" }}>
            <Switch>
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <PrivateRoute exact path="/" component={Dashboard} />
            </Switch>
          </div>
          <Footer />
        </>
      </Provider>
    </Router>
  </>;
}

export default App;
