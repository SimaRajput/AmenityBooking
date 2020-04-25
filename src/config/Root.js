import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import {SafeAreaView } from 'react-navigation'
import { CustomeTextInputScreen,CustomeButtonScreen,GetNameScreen} from '../containers/index'

const Stack = createStackNavigator();

 App = () =>  {
    return (
      <SafeAreaView style={{flex:1,backgroundColor:'#fff'}}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="CustomeButtonScreen" component={ CustomeButtonScreen } options={{ title: 'Custome Button' }} />
          <Stack.Screen name="GetNameScreen" component={ GetNameScreen } options={{ title: 'Get Name' }} />
          <Stack.Screen name="CustomeTextInputScreen" component={ CustomeTextInputScreen } options={{ title: 'Custome TextInput' }} />
        </Stack.Navigator>
      </NavigationContainer>
      </SafeAreaView>
    );
  }

export default App;