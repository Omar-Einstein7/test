
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Screens/Home';
import Details from './Screens/Details';






const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
     
<Stack.Navigator>
  <Stack.Screen  name= "Home" component={Home}/>
  <Stack.Screen  name= "Details" component={Details}/>
</Stack.Navigator>
    </NavigationContainer>
  
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
export default App;

