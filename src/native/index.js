import React, { Component } from 'react'
import { Provider } from 'react-redux'
import reducers from '../common/reducers'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import LoginAppConnector from './connectors/LogInAppConnector'
import * as Styles from './styles/'

export class LoginScreen extends Component {
  componentWillMount () {
    this.store = createStore(
      reducers,
      {},
      applyMiddleware(
        thunk.withExtraArgument({
          context: this.props.context,
          callback: this.props.onLogin
        })
      )
    )
  }
  componentWillReceiveProps (props) {
  }

  render () {
    return (
      <Provider store={this.store}>
        <LoginAppConnector
          context={this.props.context}
          onLogin={this.props.onLogin}
          styles={Styles}
        />
      </Provider>
    )
  }
}