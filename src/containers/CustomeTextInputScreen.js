import React, { Component } from 'react';
import { View, StyleSheet,Keyboard, Alert } from 'react-native';
import CustomeTextInput from '../../src/components/CustomTextInput'
import _ from 'lodash';
import Regex from '../utilities/Regex';
import CustomButton from '../components/CustomButton'

class CustomeTextInputScreen extends Component {
    state = {
        email: '',
        password: '',
        age: '',
        name: ''
    }

    onSubmit = () => {
        Keyboard.dismiss();
        const {
          email, password,age,name,
        } = this.state;


        if (_.isEmpty(email.trim())) {
            Alert.alert('Please enter email')
      
            return;
          }
      
          if (!Regex.validateEmail(email.trim())) {
            Alert.alert('Please enter valid email')
      
            return;
          }
          if (_.isEmpty(password.trim())) {
            Alert.alert('Please enter password')
      
            return;
          }
      
    
        if (_.isEmpty(name.trim())) {
            Alert.alert('Please enter name')
    
          return;
        }
    
        if (_.isEmpty(age.trim())) {
            Alert.alert('Please enter age')
    
          return;
        }
        Alert.alert('Happy Coding!!')
    }
    render() {
        const { email, password, name, age } = this.state;
        return (
            <View style={styles.container}>
                <CustomeTextInput
                    value={email}
                    placeholder={'Email'}
                    label="Email"
                    returnKeyType="next"
                    textContentType="emailAddress"
                    onChangeText={(value) => this.setState({ email: value })}>
                </CustomeTextInput>
                <CustomeTextInput
                    value={password}
                    placeholder={'Password'}
                    label="Password"
                    returnKeyType="next"
                    secureTextEntry
                    onChangeText={(value) => this.setState({ password: value })}>
                </CustomeTextInput>
                <CustomeTextInput
                    value={name}
                    placeholder={'Name'}
                    label="Name"
                    returnKeyType="next"
                    onChangeText={(value) => this.setState({ name: value })}>
                </CustomeTextInput>
                <CustomeTextInput
                    value={age}
                    placeholder={'Age'}
                    label="Age"
                    returnKeyType="next"
                    textContentType="number"
                    onChangeText={(value) => this.setState({ age: value })}>
                </CustomeTextInput>
                <View style={styles.button}>
                <CustomButton title={'Submit'} navigate={this.onSubmit}></CustomButton>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    button:{
        alignSelf:'center',
        width:'100%',
        alignItems:'center',
        top:50
    }
});

export default CustomeTextInputScreen;