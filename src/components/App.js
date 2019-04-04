import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Login from './Login'
import Questions from './Questions'
import NewQuestion from './NewQuestion'
import LoadingBar from 'react-redux-loading'
import MyNav from './MyNav'


class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    const { loading, authedUser } = this.props

    return (
      <Router>
        <Fragment >
          <LoadingBar />
          <MyNav />

          <Route path='/login' exact component={Login} />
          <PrivateRoute path='/new' component={NewQuestion} authedUser={authedUser} />


        </Fragment>
      </Router>
    );
  }
}

// auth redirect
// https://reacttraining.com/react-router/web/example/auth-workflow
function PrivateRoute({ component: Component, ...rest }) {
  const { authedUser } = rest
  
  return (
    <Route
      {...rest}
      render={props =>
        authedUser !== null ? (
          <Component {...props} />
        )
          : (
            <Redirect
              to={{
                pathname: '/login'

              }}
            />
          )
      }
    />
  )
}

function mapStateToProps({ authedUser }) {
  return {

    authedUser
  }
}

export default connect(mapStateToProps)(App)
