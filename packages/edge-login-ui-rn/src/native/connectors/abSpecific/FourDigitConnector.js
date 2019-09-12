// @flow

import { connect } from 'react-redux'
import { sprintf } from 'sprintf-js'

import * as actions from '../../../common/actions'
import { UPDATE_WAIT_TIMER } from '../../../common/constants/index'
import s from '../../../common/locales/strings.js'
import type { Dispatch, State } from '../../../types/ReduxTypes'
import { FourDigitComponent } from '../../components/abSpecific/'

export const mapStateToProps = (state: State) => {
  const wait = state.login.wait
  const error =
    wait && wait > 0
      ? state.login.errorMessage +
        ': ' +
        sprintf(s.strings.account_locked_for, wait)
      : state.login.errorMessage
  return {
    pin: state.login.pin,
    error,
    autoLogIn: true,
    isLogginginWithPin: state.login.isLoggingInWithPin,
    wait
  }
}

export default connect(
  mapStateToProps,
  {}
)(FourDigitComponent)
