import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Loading from './Loading'
import Login from './Login'
import NewQuestion from './NewQuestion'
import MyNav from './MyNav'
import Home from './Home'
import Question from './Question'
import Leaderboard from './Leaderboard'


class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    const { loading, authedUser } = this.props

    return (
      <Router>
        <Fragment >

          <MyNav />
          {loading === true
            ? <Loading />
            :
            <Fragment >
            <Route path='/login' exact component={Login} />
            <PrivateRoute path='/add' component={NewQuestion} authedUser={authedUser} />
            <PrivateRoute path='/' exact component={Home} authedUser={authedUser} />
            <PrivateRoute path='/questions/:id' component={Question} authedUser={authedUser} />
            <PrivateRoute path='/leaderboard' component={Leaderboard} authedUser={authedUser} />
            </Fragment>
         }

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
                pathname: '/login',
                state: { from: props.location.pathname } // thanks a lot of the suggestion :)
              }}
            />
          )
      }
    />
  )
}

function mapStateToProps({ authedUser, loading }) {
  return {
    authedUser,
    loading
  }
}

export default connect(mapStateToProps)(App)
