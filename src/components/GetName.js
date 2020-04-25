import React from 'react';
import {
  StyleSheet, Text, ViewPropTypes, View
} from 'react-native';
import { string, } from 'prop-types';
import Constants from '../constants';

const styles = StyleSheet.create({
  style: {
    backgroundColor: Constants.Colors.PRIMARY_COLOR,
    borderRadius: 3,
    flexDirection: 'row',
    justifyContent: 'center',
    width: '90%',

  },
  text: {
    letterSpacing: 1,
    marginLeft: 10,
    fontSize: 14,
    fontWeight: '500',
    marginTop:20
  },
});

const GetName = ({
  name, textStyle,
}) => (
    <View >
      <Text style={[styles.text, textStyle]}>
        {name}
        {' '}
      </Text>
    </View>

  );

GetName.defaultProps = {
  style: {},
  textStyle: {},
};

GetName.propTypes = {
  style: ViewPropTypes.style,
  textStyle: Text.propTypes.style,
  title: string.isRequired,
};

export default GetName;
