import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { BackgroundImage, Button, Input } from '../../components/common'
import LogoImage from '../common/LogoImage'
// import * as Constants from '../../../common/constants'
import * as Assets from '../../assets/'

export default class LandingScreenComponent extends Component {
  componentWillMount () {
    this.setState({
      username: '',
      password: '',
      loggingIn: false
    })
  }
  render () {
    const { LoginPasswordScreenStyle } = this.props.styles
    return (
      <View style={LoginPasswordScreenStyle.container}>
        <BackgroundImage
          src={Assets.LOGIN_BACKGROUND}
          style={LoginPasswordScreenStyle.backgroundImage}
        >
          {this.renderOverImage()}
        </BackgroundImage>
      </View>
    )
  }

  renderOverImage () {
    const { LoginPasswordScreenStyle } = this.props.styles
    if (this.props.loginSuccess) {
      return (
        <View style={LoginPasswordScreenStyle.featureBox}>
          <Text>LOGIN SUCCESS</Text>
        </View>
      )
    }
    return (
      <View style={LoginPasswordScreenStyle.featureBox}>
        <View style={LoginPasswordScreenStyle.featureBoxIconHeader}>
          <LogoImage style={LoginPasswordScreenStyle.logo} />
        </View>
        <View style={LoginPasswordScreenStyle.featureBoxBody}>
          <View style={LoginPasswordScreenStyle.inputsBox}>
            <Input
              style={LoginPasswordScreenStyle.input}
              onChangeText={this.updateUsername.bind(this)}
              value={this.state.username}
            />
          </View>
          <View style={LoginPasswordScreenStyle.inputsBox}>
            <Input
              style={LoginPasswordScreenStyle.input}
              onChangeText={this.updatePassword.bind(this)}
              value={this.state.password}
              secureTextEntry
            />
          </View>
          <View style={LoginPasswordScreenStyle.buttonsBox}>
            <Button
              onPress={this.onForgotPassword.bind(this)}
              label={'Forgot Password'}
              downStyle={LoginPasswordScreenStyle.forgotButton.downStyle}
              downTextStyle={
                LoginPasswordScreenStyle.forgotButton.downTextStyle
              }
              upStyle={LoginPasswordScreenStyle.forgotButton.upStyle}
              upTextStyle={LoginPasswordScreenStyle.forgotButton.upTextStyle}
            />
            <Button
              onPress={this.onStartLogin.bind(this)}
              label={'Login'}
              downStyle={LoginPasswordScreenStyle.loginButton.downStyle}
              downTextStyle={LoginPasswordScreenStyle.loginButton.downTextStyle}
              upStyle={LoginPasswordScreenStyle.loginButton.upStyle}
              upTextStyle={LoginPasswordScreenStyle.loginButton.upTextStyle}
              isThinking={this.state.logginIn}
              doesThink
            />
            <Button
              onPress={this.onCreateAccount.bind(this)}
              label={'Create an account'}
              downStyle={LoginPasswordScreenStyle.signupButton.downStyle}
              downTextStyle={
                LoginPasswordScreenStyle.signupButton.downTextStyle
              }
              upStyle={LoginPasswordScreenStyle.signupButton.upStyle}
              upTextStyle={LoginPasswordScreenStyle.signupButton.upTextStyle}
            />
          </View>
        </View>

      </View>
    )
  }

  updateUsername (data) {
    this.setState({
      username: data
    })
  }
  updatePassword (data) {
    this.setState({
      password: data
    })
  }
  onForgotPassword () {
    this.props.onForgotPassword()
  }
  onStartLogin () {
    this.setState({
      loggingIn: true
    })
    this.props.userLogin({
      username: this.state.username,
      password: this.state.password
    })
  }
  onCreateAccount () {
    this.props.gotoCreatePage()
  }
}
