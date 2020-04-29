import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Constants from 'expo-constants';
import Quiz_Android from './Quiz_Android';
import Quiz_iOS from './Quiz_iOS';
import { setLocalNotification, clearLocalNotification } from '../utils/helpers';

export class Quiz extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
  };
  static navigationOptions = ({ route }) => {
    const title = route.params.title;
    return {
      title: `${title} Quiz`,
    };
  };
  componentDidMount() {
    clearLocalNotification().then(setLocalNotification);
  }
  render() {
    const { route } = this.props;
    const title = route.params.title;

    if (Constants.platform.android) {
      return <Quiz_Android title={title} />;
    }
    return <Quiz_iOS title={title} />;
  }
}

export default Quiz;
