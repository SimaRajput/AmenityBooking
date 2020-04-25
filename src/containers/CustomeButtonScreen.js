import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import CustomButton from '../components/CustomButton'

class CustomeButtonScreen extends Component {
    render() {
        const { navigation: { navigate } } = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.button}>
                    <Text style={styles.text}>{'This is Custom Button Screen'}</Text>
                    <CustomButton title={'Next'} navigate={() => navigate('GetNameScreen')}></CustomButton>
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
    button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        letterSpacing: 1,
        marginLeft: 10,
        fontSize: 18,
        padding: 10,
        fontWeight: '500',
    },
});
export default CustomeButtonScreen;