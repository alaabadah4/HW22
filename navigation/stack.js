import {React,Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Page1 from '../components/Page1';
import Page2 from '../components/page2';
import Page3 from '../components/page3';

const Stack = createNativeStackNavigator();
class Stack1 extends Component {
  render(){
    return (
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen
          name="Welcome To The App"
          component={Page1}
        />
        <Stack.Screen
          name="Home"
          component={Page2}
        />
        <Stack.Screen
          name="Sign in"
          component={Page3}
          options={{title: 'Sign in'}}
        />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };
  
  }
    
  export default Stack1;