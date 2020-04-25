import React from 'react';
import {
  View,
  ViewPropTypes,
  StyleSheet,
  TextInput as DefaultTextInput,
  Platform,
} from 'react-native';
import { bool, func, string, number } from 'prop-types';
import Constants from '../constants';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderColor: Constants.Colors.BORDER_COLOR,
    borderRadius: 3,
    borderWidth: 1,
    flexDirection: 'row',
    marginTop: (Constants.BaseStyle.DEVICE_HEIGHT / 100) * 2,
    width: (Constants.BaseStyle.DEVICE_WIDTH / 100) * 93,
    alignSelf: 'center'
  },
  textInputStyle: {
    flex: 1,
    paddingHorizontal: 10,
    ...Platform.select({
      android: { height: (Constants.BaseStyle.DEVICE_HEIGHT / 100) * 6.5 },
      ios: { height: (Constants.BaseStyle.DEVICE_HEIGHT / 100) * 5 },
    }),
  },
});

const CustomTextInput = ({
  autoCapitalize,
  autoCorrect,
  autoFocus,
  keyboardType,
  placeholder,
  placeholderTextColor,
  onChangeText,
  value,
  editable,
  secureTextEntry,
  returnKeyType,
  textInputStyle,
  onSubmitEditing,
  maxLength,
  onKeyPress,
  multiline,
  onContentSizeChange,
  onChange
}) => (
    <View style={styles.container}>
      <DefaultTextInput
        ref={(textInput) => {
          this.textInput = textInput;
        }}
        autoFocus={autoFocus}
        autoCorrect={autoCorrect}
        autoCapitalize={autoCapitalize}
        keyboardType={keyboardType}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        onChangeText={onChangeText}
        onChange={onChange}
        value={value}
        editable={editable}
        multiline={multiline}
        style={[styles.textInputStyle, textInputStyle]}
        returnKeyType={returnKeyType}
        onSubmitEditing={onSubmitEditing}
        secureTextEntry={secureTextEntry}
        maxLength={maxLength}
        selectionColor={Constants.Colors.DASHBOARD_BG_COLOR}
        underlineColorAndroid={Constants.Colors.TRANSPARENT}
        onKeyPress={onKeyPress}
        onContentSizeChange={onContentSizeChange}
      />
    </View>
  );

CustomTextInput.defaultProps = {
  autoCapitalize: 'none',
  autoCorrect: false,
  autoFocus: false,
  container: {},
  editable: true,
  keyboardType: 'default',
  maxLength: 250,
  multiline: false,
  onChange: () => { },
  onContentSizeChange: () => { },
  onKeyPress: () => { },
  onPress: () => true,
  onSubmitEditing: () => { },
  placeholderTextColor: Constants.Colors.BORDER_COLOR,
  returnKeyType: 'done',
  secureTextEntry: false,
  textInputStyle: {},
};

CustomTextInput.propTypes = {
  autoCapitalize: string,
  autoCorrect: bool,
  autoFocus: bool,
  container: ViewPropTypes.style,
  editable: bool,
  keyboardType: string,
  maxLength: number,
  multiline: bool,
  onBlur: func,
  onChange: func,
  onChangeText: func.isRequired,
  onContentSizeChange: func,
  onFocus: func,
  onKeyPress: func,
  onPress: func,
  onSubmitEditing: func,
  placeholder: string.isRequired,
  placeholderTextColor: string,
  returnKeyType: string,
  secureTextEntry: bool,
  textInputStyle: ViewPropTypes.style,
  value: string.isRequired,
};

export default CustomTextInput;

