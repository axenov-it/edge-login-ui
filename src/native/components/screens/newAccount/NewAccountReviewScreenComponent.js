import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Button, WarningBox } from '../../common'
import AccountInfoContainer
  from '../../../connectors/abSpecific/AccountInfoConnector'
import HeaderConnector
  from '../../../connectors/componentConnectors/HeaderConnector'
// import * as Constants from '../../../common/constants'

export default class NewAccountReviewScreenComponent extends Component {
  render () {
    const { NewAccountReviewScreenStyle } = this.props.styles
    return (
      <View style={NewAccountReviewScreenStyle.screen}>
        <HeaderConnector style={NewAccountReviewScreenStyle.header} />
        <View style={NewAccountReviewScreenStyle.pageContainer}>
          <View style={NewAccountReviewScreenStyle.instructionsContainer}>
            <Text style={NewAccountReviewScreenStyle.instructionsText}>
              Last step! Let’s finish with a quick review
            </Text>
          </View>
          <View style={NewAccountReviewScreenStyle.warningBoxContainer}>
            <WarningBox
              style={NewAccountReviewScreenStyle.warningBox}
              message={
                'If you lose your account information, you’ll lose access to your funds permanently. Write down and store it securely.'
              } // TODO localize
            />
          </View>
          <View style={NewAccountReviewScreenStyle.shim} />
          <View style={NewAccountReviewScreenStyle.detailsContainer}>
            <AccountInfoContainer
              style={NewAccountReviewScreenStyle.accountDetailsBox}
            />
          </View>
          <View style={NewAccountReviewScreenStyle.shim} />
          <Button
            onPress={this.onNextPress.bind(this)}
            downStyle={NewAccountReviewScreenStyle.nextButton.downStyle}
            downTextStyle={NewAccountReviewScreenStyle.nextButton.downTextStyle}
            upStyle={NewAccountReviewScreenStyle.nextButton.upStyle}
            upTextStyle={NewAccountReviewScreenStyle.nextButton.upTextStyle}
            label={'REVIEW'}
          />
        </View>
      </View>
    )
  }
  onNextPress () {
    this.props.nextScreen()
  }
}