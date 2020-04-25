import React from 'react';
import {
  StyleSheet, TouchableOpacity, Text, ViewPropTypes,
} from 'react-native';
import { func, string, } from 'prop-types';
import { ifIphoneX } from 'react-native-iphone-x-helper';
import Constants from '../constants';

const styles = StyleSheet.create({
  iconStyle: {
    height: 20,
    width: 20,
  },
  style: {
    alignItems: 'center',
    backgroundColor: Constants.Colors.PRIMARY_COLOR,
    borderRadius: 3,
    flexDirection: 'row',
    justifyContent: 'center',
    width: '90%',
    ...ifIphoneX(
      { height: (Constants.BaseStyle.DEVICE_HEIGHT * 6) / 100 },
      { height: (Constants.BaseStyle.DEVICE_HEIGHT * 7) / 100 }
    ),
  },
  text: {
    color: Constants.Colors.WHITE,
    letterSpacing: 1,
    marginLeft: 10,
    fontSize: 18,
    fontWeight: '500',
  },
});

const CustomButton = ({
  navigate, style, title, textStyle,
}) => (
    <TouchableOpacity
      hitSlop={Constants.BaseStyle.HIT_SLOP}
      activeOpacity={0.9}
      onPress={navigate}
      style={[styles.style, style]}
    >
      <Text style={[styles.text, textStyle]}>
        {title}
        {' '}
      </Text>
    </TouchableOpacity>
  );

CustomButton.defaultProps = {
  style: {},
  textStyle: {},
};

CustomButton.propTypes = {
  navigate: func.isRequired,
  style: ViewPropTypes.style,
  textStyle: Text.propTypes.style,
  title: string.isRequired,
};

export default CustomButton;
