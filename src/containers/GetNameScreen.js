import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import GetName from '../components/GetName'
import CustomButton from '../components/CustomButton'
class GetNameScreen extends Component {

getName(name){
    return(
    <GetName name={name}></GetName>
    );
}
    
    render() {
        const { navigation: { navigate } } = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.getNameConatiner}>
                    {this.getName('Simar')}
                    {this.getName('Deepu')}
                    {this.getName('Sonu')}
                    {this.getName('Jassi')}
                </View>
                <View style={styles.button}>
                    <CustomButton title={'Next'} navigate={() => navigate('CustomeTextInputScreen')}></CustomButton>
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
    getNameConatiner: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    button:{
        alignItems: 'center', 
        position: 'absolute', 
        bottom: 100, 
        width: '100%' 
    }
});
export default GetNameScreen;