import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Redirect } from 'react-router-dom';

const Auth = ({
  component: Component, path, loggedIn, exact,
}) => (
  <Route
    path={path}
    exact={exact}
    render={props => (
      !loggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect to="/profile" />
      )
    )}
  />
);

const Protected = ({ toPath, component: Component, loggedIn, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      loggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect to="/sign-in" />
      )
    )}
  />
);

// const mapStateToProps = state => ({ loggedIn: isLoggedIn(state) });
const mapStateToProps = () => ({ loggedIn: true });

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected));
